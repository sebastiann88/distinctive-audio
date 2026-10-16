<?php

declare(strict_types=1);

namespace modules\distinctiveaudio\console\controllers;

use Craft;
use craft\console\Controller;
use craft\elements\Entry;
use craft\helpers\Console;
use yii\console\ExitCode;

/**
 * Repairs the Product Categories structure hierarchy.
 *
 *   ddev craft distinctiveaudio/structure/nest-categories
 *
 * Nests the 22 Tier-2 category entries under their 6 Tier-1 parents so that
 * `entry.children` grids populate and URIs follow the nested shape
 * (products/amplification/integrated-amplifiers). Idempotent: entries already
 * under the right parent are skipped; it never deletes or creates entries.
 */
class StructureController extends Controller
{
    /** Tier-1 slug => Tier-2 child slugs, in display order. */
    private const TREE = [
        'amplification' => [
            'integrated-amplifiers',
            'solid-state-integrated-amplifiers',
            'tube-integrated-amplifiers',
            'power-amplifiers',
            'preamplifiers',
            'phono-preamplifiers',
        ],
        'loudspeakers' => [
            'bookshelf-speakers',
            'floorstanding-speakers',
            'electrostatic-panel-speakers',
            'subwoofers',
            'speaker-stands',
        ],
        'analogue' => [
            'turntables',
            'phono-cartridges',
        ],
        'digital-sources' => [
            'digital-to-analogue-converters',
            'cd-players-transports',
            'universal-disc-players',
            'music-streamers',
        ],
        'cables-power' => [
            'interconnects-speaker-cables',
            'ac-power-cords',
            'power-line-conditioners',
        ],
        'racks-accessories' => [
            'racks',
            'cones-isolation',
        ],
    ];

    public function actionNestCategories(): int
    {
        $structures = Craft::$app->getStructures();
        $moved = 0;
        $skipped = 0;

        foreach (self::TREE as $parentSlug => $childSlugs) {
            $parent = Entry::find()->section('productCategories')->slug($parentSlug)->status(null)->one();
            if (!$parent) {
                $this->stderr("Missing Tier-1 entry: {$parentSlug}\n", Console::FG_RED);
                return ExitCode::UNSPECIFIED_ERROR;
            }

            foreach ($childSlugs as $childSlug) {
                $child = Entry::find()->section('productCategories')->slug($childSlug)->status(null)->one();
                if (!$child) {
                    $this->stderr("Missing Tier-2 entry: {$childSlug}\n", Console::FG_RED);
                    return ExitCode::UNSPECIFIED_ERROR;
                }

                if ((int)$child->level === 2 && (int)$child->getParent()?->id === (int)$parent->id) {
                    $skipped++;
                    continue;
                }

                // append() places the child as the parent's last child, so the
                // TREE order above becomes the structure (and grid) order.
                $structures->append($parent->structureId, $child, $parent);
                $this->stdout("Nested {$childSlug} under {$parentSlug}\n", Console::FG_GREEN);
                $moved++;
            }
        }

        $this->stdout("Done: {$moved} moved, {$skipped} already in place.\n", Console::FG_CYAN);
        $this->stdout("Run: ddev craft resave/entries --section=productCategories (regenerates nested URIs)\n");

        return ExitCode::OK;
    }
}
