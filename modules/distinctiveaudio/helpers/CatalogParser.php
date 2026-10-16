<?php

declare(strict_types=1);

namespace modules\distinctiveaudio\helpers;

use DOMDocument;
use DOMElement;
use DOMXPath;

/**
 * Parses the legacy static catalog pages into structured arrays for import.
 *
 * Pure parsing — no Craft dependencies — so it can be exercised with --dry-run
 * before the content model exists. DOM/XPath is used rather than regex because
 * the source markup is verbose and attribute order varies.
 */
final class CatalogParser
{
    /**
     * Parse the master inventory table (products.html).
     *
     * @return array<int, array{name:string, description:string, productType:string, condition:string, section:string, msrp:?float, salePrice:?float, priceUnit:string}>
     */
    public static function parseInventory(string $file): array
    {
        $xpath = self::loadXpath($file);
        $rows = [];
        $section = '';

        foreach ($xpath->query("//table[@id='inventory-table']//tbody/tr") as $tr) {
            /** @var DOMElement $tr */
            // Section group header row.
            $colgroup = $xpath->query(".//th[@scope='colgroup']", $tr);
            if ($colgroup->length > 0) {
                $section = self::mapSection(self::text($colgroup->item(0)));
                continue;
            }

            // Product row: a th[scope=row] (name + description) followed by 4 tds.
            $rowHeader = $xpath->query(".//th[@scope='row']", $tr);
            if ($rowHeader->length === 0) {
                continue;
            }
            $spans = $xpath->query('.//span', $rowHeader->item(0));
            $name = $spans->length > 0 ? self::text($spans->item(0)) : '';
            $description = $spans->length > 1 ? self::text($spans->item(1)) : '';

            $cells = $xpath->query('.//td', $tr);
            if ($cells->length < 4 || $name === '') {
                continue;
            }

            $msrp = self::parsePrice(self::text($cells->item(2)));
            $salePrice = self::parsePrice(self::text($cells->item(3)));
            $priceText = self::text($cells->item(2)) . ' ' . self::text($cells->item(3));

            $rows[] = [
                'name' => $name,
                'description' => $description,
                'productType' => self::text($cells->item(0)),
                'condition' => self::text($cells->item(1)),
                'section' => $section,
                'msrp' => $msrp,
                'salePrice' => $salePrice,
                'priceUnit' => ($section === 'Loudspeakers' || str_contains(strtolower($priceText), 'pr'))
                    ? 'Pair'
                    : 'Each',
            ];
        }

        return $rows;
    }

    /**
     * Parse the brand logo cards (lines-we-carry.html).
     *
     * @return array<int, array{name:string, logo:string}>
     */
    public static function parseBrands(string $file): array
    {
        $xpath = self::loadXpath($file);
        $brands = [];
        $seen = [];

        foreach ($xpath->query("//img[contains(@src, 'brand-logos/')]") as $img) {
            /** @var DOMElement $img */
            $name = trim($img->getAttribute('alt'));
            if ($name === '' || isset($seen[strtolower($name)])) {
                continue;
            }
            $seen[strtolower($name)] = true;
            $brands[] = [
                'name' => $name,
                'logo' => basename($img->getAttribute('src')),
            ];
        }

        return $brands;
    }

    private static function loadXpath(string $file): DOMXPath
    {
        if (!is_file($file)) {
            throw new \RuntimeException("Source file not found: {$file}");
        }
        $doc = new DOMDocument();
        $previous = libxml_use_internal_errors(true);
        $doc->loadHTML(
            '<?xml encoding="UTF-8">' . file_get_contents($file),
            LIBXML_NOERROR | LIBXML_NOWARNING
        );
        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        return new DOMXPath($doc);
    }

    private static function text(?\DOMNode $node): string
    {
        if ($node === null) {
            return '';
        }
        // Collapse whitespace/newlines from the pretty-printed source.
        return trim(preg_replace('/\s+/', ' ', $node->textContent));
    }

    /** Strip currency formatting; return null when there is no numeric value. */
    private static function parsePrice(string $raw): ?float
    {
        $clean = preg_replace('/[^0-9.]/', '', $raw);
        if ($clean === '' || !is_numeric($clean)) {
            return null;
        }
        return (float) $clean;
    }

    /** Normalise a catalog colgroup heading to one of the four section keys. */
    private static function mapSection(string $heading): string
    {
        $h = strtolower($heading);
        // Order matters: the Cables heading reads "...speaker cables...", so the
        // cable/accessory test must run before any "speaker" match. Match the
        // Loudspeakers section on the specific word "loudspeaker".
        return match (true) {
            str_contains($h, 'electronic') => 'Electronics',
            str_contains($h, 'analog') => 'Analogue',
            str_contains($h, 'cable'), str_contains($h, 'accessor') => 'Cables & Accessories',
            str_contains($h, 'loudspeaker') => 'Loudspeakers',
            default => $heading,
        };
    }
}
