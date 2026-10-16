<?php

declare(strict_types=1);

namespace modules\distinctiveaudio\helpers;

use DOMDocument;
use DOMElement;
use DOMNode;
use DOMXPath;

/**
 * Parses a legacy category/sub-category page (e.g. integrated-amplifiers.html)
 * into the pieces the Category Page entry needs: hero, a lead intro, the
 * quick-spec comparison table, the buying-guide prose, and the FAQ items.
 * Pure parsing — no Craft deps.
 *
 * The static pages diverge in structure (Tier-1 long-form articles vs Tier-2
 * lead + quick-spec + grid + guidance), so the editorial body is extracted by
 * *classifying* each <main> <section>: hero / lead+spec / product grid / FAQ /
 * buying-guide prose. Tables and prose are emitted as cleaned HTML strings so
 * the importer can drop them into CKEditor (richText) blocks verbatim — the
 * rigid 3-column Table field can't represent the real 3–5-column, varied-header
 * tables faithfully.
 */
final class CategoryParser
{
    /** Tags kept when sanitising editorial HTML for a CKEditor field. */
    private const ALLOWED = [
        'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'br',
        'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption',
    ];

    /** Elements dropped wholesale (content too — images pending, chrome). Any other
     *  disallowed element is UNWRAPPED (its text kept) so inline spans/links survive. */
    private const DROP_ENTIRELY = [
        'img', 'figure', 'figcaption', 'picture', 'source', 'svg', 'script',
        'style', 'button', 'input', 'select', 'textarea', 'nav', 'form',
        'iframe', 'video', 'audio',
    ];

    /** Headings that mark non-article chrome (handled by the template elsewhere). */
    private const HEADING_STOPLIST = [
        'our selection', 'frequently asked questions', 'faq', 'explore further',
        'conclusion',
    ];

    /** Minimum prose length for a <section> to count as buying-guide content
     *  (drops short feature/marquee/CTA grids while keeping real articles). */
    private const MIN_PROSE_CHARS = 220;

    /**
     * @return array{
     *   heroHeading:?string, heroEmphasisWord:?string, heroTagline:?string,
     *   leadEyebrow:?string, leadHeading:?string, leadText:?string, summary:?string,
     *   specTableHtml:?string, specFootnote:?string, guideHtml:?string,
     *   faqs:array<int,array{question:string,answer:string}>
     * }
     */
    public static function parse(string $file): array
    {
        $xpath = self::loadXpath($file);

        // ---- Hero ----
        $heroHeadingNode = $xpath->query("//section[contains(@class,'bg-primary-container')]//h1")->item(0)
            ?: $xpath->query("//section[contains(@class,'bg-primary-container')]//h2")->item(0);
        $heroHeading = self::text($heroHeadingNode);
        $heroEmphasis = self::firstText($xpath, "//section[contains(@class,'bg-primary-container')]//*[self::h1 or self::h2]//span[contains(@class,'accent-gold')]");
        $heroTagline = self::firstText($xpath, "//section[contains(@class,'bg-primary-container')]//p[contains(@class,'body-lg')]");

        // ---- Lead intro (eyebrow + first non-hero heading + its lead paragraph) ----
        $leadEyebrow = self::firstText(
            $xpath,
            "(//main//section[not(contains(@class,'bg-primary-container'))]//p[contains(@class,'uppercase') and contains(@class,'tracking-widest')])[1]"
        );
        $leadHeadingNode = $xpath->query("//main//section[not(contains(@class,'bg-primary-container'))]//h2")->item(0);
        $leadHeading = self::text($leadHeadingNode);
        $leadText = self::firstText($xpath, "//main//section//p[contains(@class,'text-on-surface-variant') and contains(@class,'body-lg')]")
            ?: self::firstText($xpath, "//main//section//p[contains(@class,'text-on-surface-variant')]");

        // A clean lead intro only exists on the "Buying Guide" article pattern;
        // elsewhere the lead heading is really chrome (Our Selection, Explore
        // Further, a marquee) and the article carries its own opening.
        $cleanLead = $leadEyebrow
            && !str_starts_with(self::norm($leadEyebrow), 'explore')
            && self::norm($leadEyebrow) !== 'our selection'
            && $leadHeading && !in_array(self::norm($leadHeading), self::HEADING_STOPLIST, true);
        if (!$cleanLead) {
            $leadEyebrow = null;
            $leadHeading = null;
            $leadText = null;
        }

        // ---- Quick-spec comparison table (first table inside <main>) ----
        $specTableHtml = null;
        $specFootnote = null;
        $tableNode = $xpath->query('(//main//table)[1]')->item(0);
        if ($tableNode instanceof DOMElement) {
            $specTableHtml = self::cleanTable($tableNode);
            // Footnote: a small <p> (text-outline) shortly after the table.
            $foot = $xpath->query("following::p[contains(@class,'text-outline')]", $tableNode)->item(0);
            if ($foot) {
                $specFootnote = self::text($foot);
            }
        }

        // ---- Buying-guide prose: collect article sections ----
        // The article often *contains* the table and (on Tier-1) the FAQ, so we
        // don't skip whole sections for those — cleanProse drops tables, <details>
        // and chrome headings at the node level, then a length floor removes
        // feature/CTA grids.
        $guideParts = [];
        foreach ($xpath->query('//main/section') as $section) {
            /** @var DOMElement $section */
            if (self::sectionIsHero($section)
                || self::sectionIsGrid($xpath, $section)
                || self::sectionIsCardGrid($xpath, $section)) {
                continue;
            }
            $html = self::cleanProse($xpath, $section, (string) $leadHeading, (string) $leadText);
            if ($html !== '' && mb_strlen(strip_tags($html)) >= self::MIN_PROSE_CHARS) {
                $guideParts[] = $html;
            }
        }
        $guideHtml = $guideParts ? self::tidy(implode("\n", $guideParts)) : null;

        // ---- FAQ (native <details>) ----
        $faqs = [];
        foreach ($xpath->query('//details') as $d) {
            /** @var DOMElement $d */
            $q = self::text($xpath->query('.//summary//span', $d)->item(0));
            $a = self::text($xpath->query('.//div//p', $d)->item(0) ?: $xpath->query('.//p', $d)->item(0));
            if ($q !== '' && $a !== '') {
                $faqs[] = ['question' => $q, 'answer' => $a];
            }
        }

        $summary = $leadText ? self::truncate($leadText, 180) : $heroTagline;

        return [
            'heroHeading' => $heroHeading ?: null,
            'heroEmphasisWord' => $heroEmphasis ?: null,
            'heroTagline' => $heroTagline ?: null,
            'leadEyebrow' => $leadEyebrow ?: null,
            'leadHeading' => $leadHeading ?: null,
            'leadText' => $leadText ?: null,
            'summary' => $summary ?: null,
            'specTableHtml' => $specTableHtml,
            'specFootnote' => $specFootnote ?: null,
            'guideHtml' => $guideHtml,
            'faqs' => $faqs,
        ];
    }

    // ---- Section classifiers ----

    private static function sectionIsHero(DOMElement $s): bool
    {
        return str_contains((string) $s->getAttribute('class'), 'bg-primary-container');
    }

    /** A product-grid section: holds Enquire CTAs / product cards (handled by the template's "Our Selection"). */
    private static function sectionIsGrid(DOMXPath $xpath, DOMElement $s): bool
    {
        if ($s->getAttribute('id') === 'products') {
            return true;
        }
        return $xpath->query(".//a[contains(., 'Enquire')]", $s)->length > 0;
    }

    /**
     * A card/navigation grid: links that wrap their own heading (sub-category
     * cards, "explore more" tiles). The Tier-1 intro + child-category grid is
     * rendered natively by the template, so capturing it here duplicates the
     * "<Category> in Ottawa" heading + lead on the top landers. Prose never wraps
     * a heading in a link, so this only catches real card grids.
     */
    private static function sectionIsCardGrid(DOMXPath $xpath, DOMElement $s): bool
    {
        return $xpath->query('.//a[.//h2 or .//h3 or .//h4]', $s)->length >= 2;
    }

    // ---- HTML sanitisers ----

    /** Rebuild a clean, attribute-free <table> from a legacy table node. */
    private static function cleanTable(DOMElement $table): string
    {
        $out = new DOMDocument();
        $clean = self::copyClean($table, $out);
        $out->appendChild($clean);
        return trim($out->saveHTML());
    }

    /**
     * Collect heading/paragraph/list prose from a section, dropping figures,
     * images and the lead heading/intro (already emitted as the leadIntro block).
     */
    private static function cleanProse(DOMXPath $xpath, DOMElement $section, string $leadHeading, string $leadText): string
    {
        $out = new DOMDocument();
        $parts = [];
        foreach ($xpath->query('.//h2 | .//h3 | .//h4 | .//p | .//ul | .//ol', $section) as $node) {
            /** @var DOMElement $node */
            // Drop FAQ Q&A (parsed separately), list-nested/caption paragraphs.
            if (self::hasAncestor($node, ['details', 'summary', 'li', 'figcaption'])) {
                continue;
            }
            // Drop eyebrow/label paragraphs (uppercase tracking labels), not prose.
            if ($node->nodeName === 'p' && str_contains((string) $node->getAttribute('class'), 'uppercase')) {
                continue;
            }
            $text = self::text($node);
            if ($text === '') {
                continue;
            }
            // Skip the lead heading/intro (emitted as the leadIntro block) and
            // chrome headings handled elsewhere in the template.
            if (($leadHeading !== '' && $text === $leadHeading) || ($leadText !== '' && $text === $leadText)) {
                continue;
            }
            if (in_array($node->nodeName, ['h2', 'h3', 'h4'], true)
                && (in_array(self::norm($text), self::HEADING_STOPLIST, true) || str_starts_with(self::norm($text), 'ready to'))) {
                continue;
            }
            $clean = self::copyClean($node, $out);
            if ($clean && $clean->hasChildNodes()) {
                $parts[] = $out->saveHTML($clean);
            }
        }
        return trim(implode("\n", $parts));
    }

    /**
     * Deep-copy a node into $out. ALLOWED tags are kept (with href on <a>);
     * DROP_ENTIRELY tags are removed with their content; any other element is
     * UNWRAPPED — its text/children are preserved (so inline <span>/<mark>/etc.
     * don't silently delete words, which was leaving " ." artifacts + lost links).
     */
    private static function copyClean(DOMNode $node, DOMDocument $out): ?DOMNode
    {
        if ($node->nodeType === XML_TEXT_NODE) {
            return $out->createTextNode($node->nodeValue);
        }
        if ($node->nodeType !== XML_ELEMENT_NODE) {
            return null;
        }
        $name = strtolower($node->nodeName);
        if (in_array($name, self::DROP_ENTIRELY, true)) {
            return null;
        }
        // Unwrap unknown inline/block wrappers: keep their children, drop the tag.
        if (!in_array($name, self::ALLOWED, true)) {
            $frag = $out->createDocumentFragment();
            foreach (iterator_to_array($node->childNodes) as $child) {
                $copy = self::copyClean($child, $out);
                if ($copy) {
                    $frag->appendChild($copy);
                }
            }
            return $frag->hasChildNodes() ? $frag : null;
        }
        $el = $out->createElement($name);
        if ($name === 'a' && $node instanceof DOMElement && $node->hasAttribute('href')) {
            $href = $node->getAttribute('href');
            // Rewrite legacy *.html links to root-relative slugs; drop in-page anchors.
            if (!str_starts_with($href, '#')) {
                $href = preg_replace('/\.html($|#|\?)/', '$1', $href);
                $el->setAttribute('href', $href);
            }
        }
        foreach (iterator_to_array($node->childNodes) as $child) {
            $copy = self::copyClean($child, $out);
            if ($copy) {
                $el->appendChild($copy);
            }
        }
        return $el;
    }

    /** Final whitespace cleanup on assembled prose HTML (defensive). */
    private static function tidy(string $html): string
    {
        // Collapse runs of spaces and remove space before sentence punctuation.
        $html = preg_replace('/ {2,}/', ' ', $html);
        $html = preg_replace('/\s+([,.;:!?])/', '$1', $html);
        return trim($html);
    }

    private static function hasAncestor(DOMNode $node, array $tags): bool
    {
        for ($p = $node->parentNode; $p !== null; $p = $p->parentNode) {
            if ($p->nodeType === XML_ELEMENT_NODE && in_array(strtolower($p->nodeName), $tags, true)) {
                return true;
            }
        }
        return false;
    }

    /** Normalise text for case-insensitive comparison. */
    private static function norm(string $s): string
    {
        return strtolower(trim(preg_replace('/\s+/', ' ', $s)));
    }

    private static function firstText(DOMXPath $xpath, string $query): ?string
    {
        $node = $xpath->query($query)->item(0);
        return $node ? self::text($node) : null;
    }

    private static function loadXpath(string $file): DOMXPath
    {
        if (!is_file($file)) {
            throw new \RuntimeException("Source file not found: {$file}");
        }
        $doc = new DOMDocument();
        $prev = libxml_use_internal_errors(true);
        $doc->loadHTML('<?xml encoding="UTF-8">' . file_get_contents($file), LIBXML_NOERROR | LIBXML_NOWARNING);
        libxml_clear_errors();
        libxml_use_internal_errors($prev);
        return new DOMXPath($doc);
    }

    private static function text(?DOMNode $node): string
    {
        return $node ? trim(preg_replace('/\s+/', ' ', $node->textContent)) : '';
    }

    private static function truncate(string $s, int $len): string
    {
        if (mb_strlen($s) <= $len) {
            return $s;
        }
        return rtrim(mb_substr($s, 0, $len), " ,.;") . '…';
    }
}
