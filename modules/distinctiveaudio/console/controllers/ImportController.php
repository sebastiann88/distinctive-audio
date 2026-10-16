<?php

declare(strict_types=1);

namespace modules\distinctiveaudio\console\controllers;

use Craft;
use craft\console\Controller;
use craft\elements\Category;
use craft\elements\Entry;
use craft\helpers\Console;
use modules\distinctiveaudio\helpers\CatalogParser;
use modules\distinctiveaudio\helpers\CategoryParser;
use yii\console\ExitCode;

/**
 * One-off migration importer: legacy static catalog -> Craft.
 *
 *   ddev craft distinctiveaudio/import/all          # brands + inventory
 *   ddev craft distinctiveaudio/import/inventory    # 94 products.html rows
 *   ddev craft distinctiveaudio/import/brands       # brand category group
 *   ... --dry-run                                   # parse + report, no writes
 *
 * Idempotent: entries/categories are matched by title and updated in place, so
 * re-running reconciles rather than duplicating. Establishes Inventory as the
 * single source of truth, fixing the hand-edited cross-page price drift.
 */
class ImportController extends Controller
{
    /** Parse and report only — never write to the database. */
    public bool $dryRun = false;

    /** Optional explicit source paths (default: docroot, then _migration). */
    public ?string $productsFile = null;
    public ?string $brandsFile = null;

    public function options($actionID): array
    {
        return array_merge(parent::options($actionID), ['dryRun', 'productsFile', 'brandsFile']);
    }

    public function optionAliases(): array
    {
        return array_merge(parent::optionAliases(), ['d' => 'dryRun']);
    }

    public function actionAll(): int
    {
        $brands = $this->actionBrands();
        if ($brands !== ExitCode::OK) {
            return $brands;
        }
        return $this->actionInventory();
    }

    /**
     * Hard-delete imported inventory entries + Product Types/Brands categories,
     * for a clean re-import during migration. Dev convenience only.
     */
    public function actionPurge(): int
    {
        $elements = Craft::$app->getElements();
        $deleted = 0;

        foreach (Entry::find()->section('inventory')->status(null)->all() as $e) {
            $elements->deleteElement($e, true);
            $deleted++;
        }
        foreach (['productTypes', 'brands'] as $groupHandle) {
            $group = Craft::$app->getCategories()->getGroupByHandle($groupHandle);
            if (!$group) {
                continue;
            }
            foreach (Category::find()->groupId($group->id)->status(null)->all() as $c) {
                $elements->deleteElement($c, true);
                $deleted++;
            }
        }
        $this->stdout("Purged {$deleted} elements (inventory entries + product-type/brand categories).\n", Console::FG_YELLOW);
        return ExitCode::OK;
    }

    /** One-off inventory title corrections (old => new). products.html is also
     *  fixed at source, but the dedup key is the title, so a plain re-import would
     *  create a duplicate rather than rename — this updates the live entry in place. */
    private const TITLE_FIXES = [
        'MIcromega M-One 100 Remote Controlled Integrated Amplifier'
            => 'Micromega M-One 100 Remote Controlled Integrated Amplifier',
    ];

    public function actionFixTypos(): int
    {
        $fixed = 0;
        foreach (Entry::find()->section('inventory')->status(null)->all() as $e) {
            if (isset(self::TITLE_FIXES[$e->title])) {
                $e->title = self::TITLE_FIXES[$e->title];
                if (Craft::$app->getElements()->saveElement($e)) {
                    $this->stdout("  ✓ {$e->title}\n", Console::FG_GREEN);
                    $fixed++;
                }
            }
        }
        $this->stdout("Fixed {$fixed} inventory title(s).\n", $fixed ? Console::FG_GREEN : Console::FG_YELLOW);
        return ExitCode::OK;
    }

    public function actionBrands(): int
    {
        $file = $this->resolveFile($this->brandsFile, 'lines-we-carry.html');
        $brands = CatalogParser::parseBrands($file);
        $this->stdout("Parsed " . count($brands) . " brands from " . basename($file) . "\n", Console::FG_GREEN);

        if ($this->dryRun) {
            foreach ($brands as $b) {
                $this->stdout("  - {$b['name']}  ({$b['logo']})\n");
            }
            return ExitCode::OK;
        }

        $group = Craft::$app->getCategories()->getGroupByHandle('brands');
        if (!$group) {
            $this->stderr("Category group 'brands' does not exist — build the content model first.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        $created = 0;
        $updated = 0;
        foreach ($brands as $b) {
            [$cat, $isNew] = $this->resolveCategory($b['name'], $group->id);
            if (Craft::$app->getElements()->saveElement($cat)) {
                $isNew ? $created++ : $updated++;
            } else {
                $this->stderr("  ! failed: {$b['name']} — " . implode(', ', $cat->getFirstErrors()) . "\n", Console::FG_RED);
            }
        }
        $this->stdout("Brands: {$created} created, {$updated} updated.\n", Console::FG_GREEN);
        return ExitCode::OK;
    }

    public function actionInventory(): int
    {
        $file = $this->resolveFile($this->productsFile, 'products.html');
        $rows = CatalogParser::parseInventory($file);
        $this->stdout("Parsed " . count($rows) . " inventory rows from " . basename($file) . "\n", Console::FG_GREEN);

        if ($this->dryRun) {
            $this->reportInventory($rows);
            return ExitCode::OK;
        }

        $section = Craft::$app->getEntries()->getSectionByHandle('inventory');
        $typeGroup = Craft::$app->getCategories()->getGroupByHandle('productTypes');
        if (!$section || !$typeGroup) {
            $this->stderr("Section 'inventory' and/or group 'productTypes' missing — build the content model first.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $entryType = $section->getEntryTypes()[0];

        $created = 0;
        $updated = 0;
        foreach ($rows as $r) {
            // Match on a composite key (title + condition + MSRP): the shop can
            // stock two units of the same model at different prices/conditions,
            // so title alone would wrongly merge them. Keeps re-runs idempotent.
            $wantMsrp = $r['msrp'] !== null ? (string) (int) round($r['msrp'] * 100) : null;
            $existing = null;
            foreach (Entry::find()->section('inventory')->title($r['name'])->status(null)->all() as $cand) {
                if ((string) $cand->condition === $r['condition']
                    && (string) ($cand->msrp?->getAmount()) === (string) $wantMsrp) {
                    $existing = $cand;
                    break;
                }
            }
            $entry = $existing ?? new Entry();
            if (!$existing) {
                $entry->sectionId = $section->id;
                $entry->typeId = $entryType->id;
            }
            $entry->title = $r['name'];

            // Product Type: 2-level category (section parent -> type child).
            [$parent] = $this->resolveCategory($r['section'], $typeGroup->id);
            Craft::$app->getElements()->saveElement($parent);
            [$type] = $this->resolveCategory($r['productType'], $typeGroup->id, $parent->id);
            Craft::$app->getElements()->saveElement($type);

            // Conservative topology heuristic: only fire on explicit signals in
            // the name/description; otherwise leave blank for Rhéal to complete.
            // A wrong auto-tag is worse than blank for an audiophile audience.
            $haystack = strtolower($r['name'] . ' ' . $r['description']);
            $topology = null;
            if (preg_match('/\b(tube|valve|vacuum)\b/', $haystack)) {
                $topology = 'Tube';
            } elseif (preg_match('/(solid[\s-]?state|class[\s-]?d)/', $haystack)) {
                $topology = 'Solid-State';
            }

            // Editorial curation: relate to the Tier-2 category page so it shows
            // real product cards (else the page falls back to the empty-state).
            // Ambiguous/no-page types (Speakers, Analogue Accessories, combos…)
            // stay unmapped for Rhéal to curate.
            $tier2Slug = $this->tier2Slug($r['productType'], $topology);
            $subId = null;
            if ($tier2Slug) {
                $sub = Entry::find()->section('productCategories')->slug($tier2Slug)->status(null)->one();
                $subId = $sub?->id;
            }

            $entry->setFieldValues([
                'shortDescription' => $r['description'],
                'topology' => $topology,
                'condition' => $r['condition'],
                'availability' => 'available',
                'priceUnit' => $r['priceUnit'],
                // Money fields store integer MINOR units (cents); pass them
                // directly to avoid locale-dependent decimal-string parsing.
                'msrp' => $r['msrp'] !== null ? (int) round($r['msrp'] * 100) : null,
                'salePrice' => $r['salePrice'] !== null ? (int) round($r['salePrice'] * 100) : null,
                'productType' => [$type->id],
                'subcategory' => $subId ? [$subId] : [],
            ]);

            if (Craft::$app->getElements()->saveElement($entry)) {
                $existing ? $updated++ : $created++;
            } else {
                $this->stderr("  ! failed: {$r['name']} — " . implode(', ', $entry->getFirstErrors()) . "\n", Console::FG_RED);
            }
        }
        $this->stdout("Inventory: {$created} created, {$updated} updated.\n", Console::FG_GREEN);
        return ExitCode::OK;
    }

    /**
     * Create the 28 productCategories entries (6 Tier-1 + 22 Tier-2) from the
     * legacy category pages: hierarchy, hero tagline, summary, lead intro + FAQ.
     * Full editorial (spec tables, curated relations, buying-guide prose) = #19.
     */
    public function actionCategories(): int
    {
        $section = Craft::$app->getEntries()->getSectionByHandle('productCategories');
        if (!$section) {
            $this->stderr("Run setup/categories first.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $typeId = $section->getEntryTypes()[0]->id;
        $webroot = Craft::getAlias('@webroot');

        // slug => [title, parentSlug|null, file, cardIcon]
        $map = [
            'amplification' => ['Amplification', null, 'amplification.html', 'graphic_eq'],
            'loudspeakers' => ['Loudspeakers', null, 'loudspeakers.html', 'speaker'],
            'analogue' => ['Analogue', null, 'analogue.html', 'album'],
            'digital-sources' => ['Digital Sources', null, 'digital-sources.html', 'memory'],
            'cables-power' => ['Cables & Power', null, 'cables-power.html', 'cable'],
            'racks-accessories' => ['Racks & Accessories', null, 'racks-accessories.html', 'shelves'],
            'integrated-amplifiers' => ['Integrated Amplifiers', 'amplification', 'integrated-amplifiers.html', 'tune'],
            'solid-state-integrated-amplifiers' => ['Solid-State Integrated Amplifiers', 'amplification', 'solid-state-integrated-amplifiers.html', 'memory'],
            'tube-integrated-amplifiers' => ['Tube Integrated Amplifiers', 'amplification', 'tube-integrated-amplifiers.html', 'light_mode'],
            'power-amplifiers' => ['Power Amplifiers', 'amplification', 'power-amplifiers.html', 'bolt'],
            'preamplifiers' => ['Preamplifiers', 'amplification', 'preamplifiers.html', 'graphic_eq'],
            'phono-preamplifiers' => ['Phono Preamplifiers', 'amplification', 'phono-preamplifiers.html', 'album'],
            'bookshelf-speakers' => ['Bookshelf Speakers', 'loudspeakers', 'bookshelf-speakers.html', 'speaker'],
            'floorstanding-speakers' => ['Floorstanding Speakers', 'loudspeakers', 'floorstanding-speakers.html', 'speaker'],
            'electrostatic-panel-speakers' => ['Electrostatic Panel Speakers', 'loudspeakers', 'electrostatic-panel-speakers.html', 'dashboard'],
            'subwoofers' => ['Subwoofers', 'loudspeakers', 'subwoofers.html', 'speaker'],
            'speaker-stands' => ['Speaker Stands', 'loudspeakers', 'speaker-stands.html', 'table_bar'],
            'turntables' => ['Turntables', 'analogue', 'turntables.html', 'album'],
            'phono-cartridges' => ['Phono Cartridges', 'analogue', 'phono-cartridges.html', 'radio_button_checked'],
            'digital-to-analogue-converters' => ['Digital-to-Analogue Converters', 'digital-sources', 'digital-to-analogue-converters.html', 'memory'],
            'cd-players-transports' => ['CD Players & Transports', 'digital-sources', 'cd-players-transports.html', 'album'],
            'universal-disc-players' => ['Universal Disc Players', 'digital-sources', 'universal-disc-players.html', 'disc_full'],
            'music-streamers' => ['Music Streamers', 'digital-sources', 'music-streamers.html', 'cast'],
            'interconnects-speaker-cables' => ['Interconnects & Speaker Cables', 'cables-power', 'interconnects-speaker-cables.html', 'cable'],
            'ac-power-cords' => ['AC Power Cords', 'cables-power', 'ac-power-cords.html', 'power'],
            'power-line-conditioners' => ['Power Line Conditioners', 'cables-power', 'power-line-conditioners.html', 'electrical_services'],
            'racks' => ['Racks', 'racks-accessories', 'racks.html', 'shelves'],
            'cones-isolation' => ['Cones & Isolation', 'racks-accessories', 'cones-isolation.html', 'change_history'],
        ];

        $idBySlug = [];
        $created = 0;
        $updated = 0;
        foreach ($map as $slug => [$title, $parentSlug, $file, $icon]) {
            $existing = Entry::find()->section('productCategories')->slug($slug)->status(null)->one();
            $entry = $existing ?? new Entry();
            if (!$existing) {
                $entry->sectionId = $section->id;
                $entry->typeId = $typeId;
            }
            $entry->title = $title;
            $entry->slug = $slug;
            if ($parentSlug && isset($idBySlug[$parentSlug])) {
                $entry->setParentId($idBySlug[$parentSlug]);
            }

            $path = "{$webroot}/{$file}";
            $fields = ['cardIcon' => $icon];
            $blocks = [];
            if (is_file($path)) {
                $p = CategoryParser::parse($path);
                $fields['heroHeading'] = $p['heroHeading'];
                $fields['heroEmphasisWord'] = $p['heroEmphasisWord'];
                $fields['heroTagline'] = $p['heroTagline'];
                $fields['summary'] = $p['summary'];

                // Dedup: never repeat the hero H1 as the lead heading (Designer note A).
                $leadHeading = $p['leadHeading'];
                if ($leadHeading && $p['heroHeading'] && self::norm($leadHeading) === self::norm($p['heroHeading'])) {
                    $leadHeading = null;
                }

                $n = 0;
                if ($p['leadText']) {
                    $blocks['new' . (++$n)] = ['type' => 'leadIntro', 'fields' => [
                        'eyebrow' => $p['leadEyebrow'] ?: 'Overview',
                        'heading' => $leadHeading,
                        'text' => $p['leadText'],
                    ]];
                }
                // Quick-spec comparison table (varied columns/headers preserved as
                // CKEditor HTML — the rigid 3-col Table field can't hold these).
                if ($p['specTableHtml']) {
                    $tableHtml = $p['specTableHtml'];
                    if ($p['specFootnote']) {
                        $tableHtml .= "\n<p><em>" . htmlspecialchars($p['specFootnote'], ENT_QUOTES) . '</em></p>';
                    }
                    $blocks['new' . (++$n)] = ['type' => 'richText', 'fields' => ['content' => $tableHtml]];
                }
                // Buying-guide prose (figures/images stripped — pending real art).
                if ($p['guideHtml']) {
                    $blocks['new' . (++$n)] = ['type' => 'richText', 'fields' => ['content' => $p['guideHtml']]];
                }
                foreach ($p['faqs'] as $f) {
                    $blocks['new' . (++$n)] = ['type' => 'faqItem', 'fields' => [
                        'question' => $f['question'],
                        'answer' => $f['answer'],
                    ]];
                }
            }

            if ($this->dryRun) {
                $this->reportCategory($slug, $blocks, isset($p) ? $p : []);
                unset($p);
                continue;
            }

            $entry->setFieldValues($fields);
            if ($blocks) {
                $entry->setFieldValue('body', $blocks);
            }

            if (Craft::$app->getElements()->saveElement($entry)) {
                $idBySlug[$slug] = $entry->id;
                $existing ? $updated++ : $created++;
            } else {
                $this->stderr("  ! {$slug}: " . implode(', ', $entry->getFirstErrors()) . "\n", Console::FG_RED);
            }
            unset($p);
        }
        if ($this->dryRun) {
            $this->stdout("\n(dry run — no entries written)\n", Console::FG_YELLOW);
            return ExitCode::OK;
        }
        $this->stdout("Categories: {$created} created, {$updated} updated.\n", Console::FG_GREEN);
        return ExitCode::OK;
    }

    /** Normalise heading text for dedup comparison. */
    private static function norm(string $s): string
    {
        return strtolower(trim(preg_replace('/\s+/', ' ', $s)));
    }

    /** Per-page dry-run summary: block manifest + a prose/table preview. */
    private function reportCategory(string $slug, array $blocks, array $p): void
    {
        $types = [];
        foreach ($blocks as $b) {
            $types[] = $b['type'];
        }
        $this->stdout(sprintf("\n%-38s [%s]\n", $slug, implode(', ', $types)), Console::FG_CYAN);
        if (!empty($p['leadEyebrow']) || !empty($p['leadHeading'])) {
            $this->stdout(sprintf("  lead: %s — %s\n", $p['leadEyebrow'] ?? '∅', $p['leadHeading'] ?? '∅'));
        }
        if (!empty($p['specTableHtml'])) {
            $rows = substr_count($p['specTableHtml'], '<tr');
            $this->stdout(sprintf("  table: %d rows%s\n", max(0, $rows - 1), !empty($p['specFootnote']) ? ' (+footnote)' : ''));
        }
        if (!empty($p['guideHtml'])) {
            $h = substr_count($p['guideHtml'], '<h2') + substr_count($p['guideHtml'], '<h3');
            $para = substr_count($p['guideHtml'], '<p');
            $chars = mb_strlen(strip_tags($p['guideHtml']));
            $this->stdout(sprintf("  guide: %d headings, %d paragraphs, %d chars\n", $h, $para, $chars));
            $firstP = '';
            if (preg_match('/<p>(.*?)<\/p>/s', $p['guideHtml'], $m)) {
                $firstP = self::norm(strip_tags($m[1]));
            }
            if ($firstP) {
                $this->stdout('  guide¶1: ' . mb_substr($firstP, 0, 140) . "…\n", Console::FG_GREY);
            }
        }
        $this->stdout(sprintf("  faqs: %d\n", count($p['faqs'] ?? [])));
    }

    /** Print a parse summary for --dry-run review. */
    private function reportInventory(array $rows): void
    {
        $bySection = [];
        $byCondition = [];
        $types = [];
        $noMsrp = 0;
        foreach ($rows as $r) {
            $bySection[$r['section']] = ($bySection[$r['section']] ?? 0) + 1;
            $byCondition[$r['condition']] = ($byCondition[$r['condition']] ?? 0) + 1;
            $types[$r['productType']] = true;
            if ($r['msrp'] === null) {
                $noMsrp++;
            }
        }
        $this->stdout("\nBy section:\n");
        foreach ($bySection as $k => $v) {
            $this->stdout(sprintf("  %-14s %d\n", $k, $v));
        }
        $this->stdout("\nBy condition:\n");
        foreach ($byCondition as $k => $v) {
            $this->stdout(sprintf("  %-14s %d\n", $k, $v));
        }
        $this->stdout("\nDistinct product types: " . count($types) . "\n");
        $this->stdout("Rows with no MSRP: {$noMsrp}\n\n");
        $this->stdout("Sample (first 5):\n");
        foreach (array_slice($rows, 0, 5) as $r) {
            $msrp = $r['msrp'] !== null ? '$' . number_format($r['msrp'], 2) : '—';
            $sale = $r['salePrice'] !== null ? '$' . number_format($r['salePrice'], 2) : '—';
            $this->stdout("  • {$r['name']} | {$r['productType']} | {$r['condition']} | MSRP {$msrp} / Sale {$sale} | {$r['priceUnit']}\n");
        }
    }

    /**
     * Map a catalog product type → the Tier-2 Category Page slug it should be
     * curated onto. Integrated Amplifiers split by topology. Ambiguous types
     * (Speakers → 3 pages) and types with no editorial page return null.
     */
    private function tier2Slug(string $productType, ?string $topology): ?string
    {
        if ($productType === 'Integrated Amplifier') {
            return match ($topology) {
                'Tube' => 'tube-integrated-amplifiers',
                'Solid-State' => 'solid-state-integrated-amplifiers',
                default => 'integrated-amplifiers',
            };
        }
        return [
            'Pre-Amplifier' => 'preamplifiers',
            'Power Amplifier' => 'power-amplifiers',
            'Turntable' => 'turntables',
            'Cartridges' => 'phono-cartridges',
            'Phono Pre-Amplifier' => 'phono-preamplifiers',
            'CD Player' => 'cd-players-transports',
            'CD Transport' => 'cd-players-transports',
            'Digital to Analogue Converter' => 'digital-to-analogue-converters',
            'Streamer' => 'music-streamers',
            'Speaker Stands' => 'speaker-stands',
            'Universal Players' => 'universal-disc-players',
            'Power Line Conditioner' => 'power-line-conditioners',
            'Cables' => 'interconnects-speaker-cables',
            'Cones' => 'cones-isolation',
            'Audio Rack' => 'racks',
        ][$productType] ?? null;
    }

    /**
     * Find a category by title within a group (optionally under a parent), or
     * build a new one. Returns [Category, isNew].
     *
     * @return array{0: Category, 1: bool}
     */
    private function resolveCategory(string $title, int $groupId, ?int $parentId = null): array
    {
        $query = Category::find()->groupId($groupId)->title($title)->status(null);
        if ($parentId !== null) {
            $query->descendantOf($parentId)->descendantDist(1);
        }
        $existing = $query->one();
        if ($existing) {
            return [$existing, false];
        }
        $cat = new Category();
        $cat->groupId = $groupId;
        $cat->title = $title;
        if ($parentId !== null) {
            $cat->setParentId($parentId);
        }
        return [$cat, true];
    }

    private function resolveFile(?string $override, string $name): string
    {
        if ($override !== null) {
            return $override;
        }
        $webroot = Craft::getAlias('@webroot');
        foreach (["{$webroot}/{$name}", "{$webroot}/_migration/{$name}"] as $candidate) {
            if (is_file($candidate)) {
                return $candidate;
            }
        }
        // Fall back to the docroot path; the parser raises a clear error if absent.
        return "{$webroot}/{$name}";
    }
}
