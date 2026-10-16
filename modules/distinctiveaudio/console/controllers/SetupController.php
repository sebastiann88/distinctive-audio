<?php

declare(strict_types=1);

namespace modules\distinctiveaudio\console\controllers;

use Craft;
use craft\ckeditor\Field as CkeditorField;
use craft\console\Controller;
use craft\elements\Category;
use craft\elements\Entry;
use craft\elements\GlobalSet;
use craft\enums\PropagationMethod;
use craft\fieldlayoutelements\assets\AltField;
use craft\fieldlayoutelements\CustomField;
use craft\fieldlayoutelements\entries\EntryTitleField;
use craft\fs\Local as LocalFs;
use craft\fields\Assets as AssetsField;
use craft\fields\Categories as CategoriesField;
use craft\fields\Dropdown;
use craft\fields\Entries as EntriesField;
use craft\fields\Lightswitch;
use craft\fields\Matrix;
use craft\fields\Money;
use craft\fields\PlainText;
use craft\fields\Table;
use craft\helpers\Console;
use craft\models\CategoryGroup;
use craft\models\CategoryGroup_SiteSettings;
use craft\models\EntryType;
use craft\models\FieldLayout;
use craft\models\FieldLayoutTab;
use craft\models\Section;
use craft\models\Section_SiteSettings;
use craft\models\Volume;
use yii\console\ExitCode;

/**
 * Programmatic content-model builder (Craft Services API).
 *
 *   ddev craft distinctiveaudio/setup/inventory
 *
 * Builds the catalog backbone — Brands + Product Types category groups and the
 * Inventory channel with its fields — so the import (#9) and Products browsing
 * (#10) can run. Idempotent: re-running reconciles existing components.
 *
 * Driving Craft's own services (not hand-edited YAML) auto-writes valid,
 * version-controlled Project Config to config/project/, reproducible across envs.
 */
class SetupController extends Controller
{
    public function actionInventory(): int
    {
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->stderr("allowAdminChanges is off — run this on local/dev only.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        // --- Category groups -------------------------------------------------
        $brands = $this->categoryGroup('brands', 'Brands', 1);
        // Editable manufacturer website per brand (Lines We Carry links to it when set).
        $website = $this->field(PlainText::class, 'website', 'Website', [
            'placeholder' => 'https://example.com',
        ]);
        $brandLayout = $brands->getFieldLayout();
        $brandLayout->type = Category::class;
        $brandTab = new FieldLayoutTab(['name' => 'Brand']);
        $brandTab->setLayout($brandLayout);
        $brandTab->setElements([new CustomField($website)]);
        $brandLayout->setTabs([$brandTab]);
        $brands->setFieldLayout($brandLayout);
        if (!Craft::$app->getCategories()->saveGroup($brands)) {
            $this->stderr('Brands group layout: ' . implode(', ', $brands->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $this->stdout("✓ Category group: brands (+ website field)\n", Console::FG_GREEN);

        $productTypes = $this->categoryGroup('productTypes', 'Product Types', 2);
        $this->stdout("✓ Category group: productTypes (2-level)\n", Console::FG_GREEN);

        // --- Asset volume (interim AI photos; alt text REQUIRED) -------------
        $fsSvc = Craft::$app->getFs();
        $fs = $fsSvc->getFilesystemByHandle('images') ?? new LocalFs();
        $fs->handle = 'images';
        $fs->name = 'Images';
        $fs->path = '@webroot/images';
        $fs->hasUrls = true;
        $fs->url = '@web/images';
        if (!$fsSvc->saveFilesystem($fs)) {
            $this->stderr('Fs images: ' . implode(', ', $fs->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $volumes = Craft::$app->getVolumes();
        $volume = $volumes->getVolumeByHandle('images') ?? new Volume();
        $volume->handle = 'images';
        $volume->name = 'Images';
        $volume->setFs($fs);
        $vLayout = $volume->getFieldLayout();
        $vTab = new FieldLayoutTab(['name' => 'Content']);
        $vTab->setLayout($vLayout);
        $alt = new AltField();
        $alt->required = true;
        $vTab->setElements([$alt]);
        $vLayout->setTabs([$vTab]);
        $volume->setFieldLayout($vLayout);
        if (!$volumes->saveVolume($volume)) {
            $this->stderr('Volume images: ' . implode(', ', $volume->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $this->stdout("✓ Asset volume: images (alt required)\n", Console::FG_GREEN);

        // --- Fields ----------------------------------------------------------
        $fields = [
            $this->field(PlainText::class, 'shortDescription', 'Short Description', ['multiline' => true, 'initialRows' => 2]),
            $this->field(Dropdown::class, 'condition', 'Condition', [
                'options' => $this->opts(['Brand New', 'Almost New', 'Display', 'Floor Demo', 'Trade In', 'Consignment', 'Used']),
            ]),
            $this->field(Dropdown::class, 'availability', 'Availability', [
                'options' => [
                    ['label' => 'Available', 'value' => 'available', 'default' => true],
                    ['label' => 'Reserved', 'value' => 'reserved', 'default' => false],
                    ['label' => 'Sold', 'value' => 'sold', 'default' => false],
                ],
            ]),
            $this->field(Dropdown::class, 'priceUnit', 'Price Unit', [
                'options' => [
                    ['label' => 'Each', 'value' => 'Each', 'default' => true],
                    ['label' => 'Pair', 'value' => 'Pair', 'default' => false],
                ],
            ]),
            $this->field(Dropdown::class, 'topology', 'Topology', [
                'options' => $this->opts(['', 'Tube', 'Solid-State', 'Hybrid']),
            ]),
            $this->field(Money::class, 'msrp', 'MSRP', ['currency' => 'CAD']),
            $this->field(Money::class, 'salePrice', 'Sale Price', ['currency' => 'CAD']),
            $this->field(PlainText::class, 'priceNote', 'Price Note'),
            $this->field(AssetsField::class, 'images', 'Images', [
                'sources' => ['volume:' . $volume->uid],
                'restrictFiles' => true,
                'allowedKinds' => ['image'],
                'viewMode' => 'large',
            ]),
            $this->field(Lightswitch::class, 'isNewArrival', 'New Arrival'),
            $this->field(CategoriesField::class, 'productType', 'Product Type', [
                'source' => "group:{$productTypes->uid}",
                'maxRelations' => 1,
                'branchLimit' => 1,
            ]),
            $this->field(CategoriesField::class, 'brand', 'Brand', [
                'source' => "group:{$brands->uid}",
                'maxRelations' => 1,
            ]),
            // Editorial curation: which Tier-2 Category Page features this item.
            // sources '*' avoids an ordering dependency on productCategories
            // (which is created later, in setup/categories).
            $this->field(EntriesField::class, 'subcategory', 'Subcategory (editorial)', [
                'sources' => '*',
                'maxRelations' => 1,
            ]),
        ];
        $this->stdout('✓ Fields: ' . count($fields) . " saved\n", Console::FG_GREEN);

        // --- Inventory channel (null URI — no per-product detail pages) ------
        $entries = Craft::$app->getEntries();
        $section = $entries->getSectionByHandle('inventory') ?? new Section();
        $section->name = 'Inventory';
        $section->handle = 'inventory';
        $section->type = Section::TYPE_CHANNEL;
        $siteSettings = [];
        foreach (Craft::$app->getSites()->getAllSites() as $site) {
            $s = new Section_SiteSettings();
            $s->siteId = $site->id;
            $s->hasUrls = false;
            $s->uriFormat = null;
            $s->template = null;
            $siteSettings[$site->id] = $s;
        }
        $section->setSiteSettings($siteSettings);

        // Entry type + field layout.
        $entryType = $entries->getEntryTypeByHandle('inventory') ?? new EntryType();
        $entryType->name = 'Inventory';
        $entryType->handle = 'inventory';
        // Manual product names — without this the Title column stays NULL and
        // the import's title-based dedup silently creates duplicates.
        $entryType->hasTitleField = true;
        $layout = $entryType->getFieldLayout();
        $layout->type = Entry::class;
        $tab = new FieldLayoutTab(['name' => 'Content']);
        $tab->setLayout($layout);
        // The native Title element must be present for the entry to accept a
        // manual title (hasTitleField is derived from the layout, not the bool).
        $elements = [new EntryTitleField()];
        foreach ($fields as $f) {
            $elements[] = new CustomField($f);
        }
        $tab->setElements($elements);
        $layout->setTabs([$tab]);
        $entryType->setFieldLayout($layout);
        if (!$entries->saveEntryType($entryType)) {
            $this->stderr('Entry type failed: ' . implode(', ', $entryType->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        $section->setEntryTypes([$entryType]);
        if (!$entries->saveSection($section)) {
            $this->stderr('Section failed: ' . implode(', ', $section->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $this->stdout("✓ Channel: inventory (null URI) + entry type\n", Console::FG_GREEN);
        $this->stdout("\nDone. Run: ddev craft distinctiveaudio/import/all\n", Console::FG_GREEN);

        return ExitCode::OK;
    }

    /**
     * Create the Single sections that have templates today (home, products).
     * Other singles are added as their templates are built.
     */
    public function actionSingles(): int
    {
        $this->single('home', 'Home', '__home__', 'index');
        $this->single('productsPage', 'Products', 'products', 'products/index');
        $this->single('about', 'About', 'about', 'about');
        $this->single('contact', 'Contact', 'contact', 'contact');
        $this->single('linesWeCarry', 'Lines We Carry', 'lines-we-carry', 'lines-we-carry');
        $this->single('allInOneSystems', 'All-in-One Systems', 'all-in-one-systems', 'all-in-one-systems');
        $this->stdout("✓ Singles: home, products, about, contact, lines-we-carry, all-in-one-systems\n", Console::FG_GREEN);
        return ExitCode::OK;
    }

    private function single(string $handle, string $name, string $uri, string $template): void
    {
        $entries = Craft::$app->getEntries();
        $et = $entries->getEntryTypeByHandle($handle) ?? new EntryType();
        $et->name = $name;
        $et->handle = $handle;
        $layout = $et->getFieldLayout();
        $layout->type = Entry::class;
        $tab = new FieldLayoutTab(['name' => 'Content']);
        $tab->setLayout($layout);
        $tab->setElements([new EntryTitleField()]);
        $layout->setTabs([$tab]);
        $et->setFieldLayout($layout);
        if (!$entries->saveEntryType($et)) {
            throw new \RuntimeException("Entry type {$handle}: " . implode(', ', $et->getFirstErrors()));
        }

        $section = $entries->getSectionByHandle($handle) ?? new Section();
        $section->name = $name;
        $section->handle = $handle;
        $section->type = Section::TYPE_SINGLE;
        $siteSettings = [];
        foreach (Craft::$app->getSites()->getAllSites() as $site) {
            $s = new Section_SiteSettings();
            $s->siteId = $site->id;
            $s->hasUrls = true;
            $s->uriFormat = $uri;
            $s->template = $template;
            $siteSettings[$site->id] = $s;
        }
        $section->setSiteSettings($siteSettings);
        $section->setEntryTypes([$et]);
        if (!$entries->saveSection($section)) {
            throw new \RuntimeException("Section {$handle}: " . implode(', ', $section->getFirstErrors()));
        }
    }

    /** Contact/NAP + Footer global sets. */
    public function actionGlobals(): int
    {
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->stderr("allowAdminChanges is off — run on local/dev only.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        $this->globalSet('contactInfo', 'Contact Info', [
            $this->field(PlainText::class, 'businessName', 'Business Name'),
            $this->field(PlainText::class, 'streetAddress', 'Street Address'),
            $this->field(PlainText::class, 'addressLocality', 'City'),
            $this->field(PlainText::class, 'addressRegion', 'Province'),
            $this->field(PlainText::class, 'postalCode', 'Postal Code'),
            $this->field(PlainText::class, 'contactPhone', 'Phone'),
            $this->field(PlainText::class, 'contactEmail', 'Email'),
            $this->field(PlainText::class, 'openingHours', 'Opening Hours', ['multiline' => true, 'initialRows' => 3]),
            $this->field(PlainText::class, 'establishedYear', 'Established Year'),
        ]);

        $this->globalSet('footer', 'Footer', [
            $this->field(PlainText::class, 'footerBlurb', 'Footer Blurb', ['multiline' => true, 'initialRows' => 3]),
            $this->field(Table::class, 'socialLinks', 'Social Links', [
                'addRowLabel' => 'Add a link',
                'columns' => [
                    'col1' => ['heading' => 'Platform', 'handle' => 'platform', 'type' => 'singleline'],
                    'col2' => ['heading' => 'URL', 'handle' => 'url', 'type' => 'singleline'],
                ],
            ]),
        ]);

        $this->stdout("✓ Globals: contactInfo, footer\n", Console::FG_GREEN);
        return ExitCode::OK;
    }

    private function globalSet(string $handle, string $name, array $fields): void
    {
        $svc = Craft::$app->getGlobals();
        $set = $svc->getSetByHandle($handle) ?? new GlobalSet();
        $set->name = $name;
        $set->handle = $handle;
        $layout = $set->getFieldLayout();
        $layout->type = GlobalSet::class;
        $tab = new FieldLayoutTab(['name' => 'Content']);
        $tab->setLayout($layout);
        $tab->setElements(array_map(fn($f) => new CustomField($f), $fields));
        $layout->setTabs([$tab]);
        $set->setFieldLayout($layout);
        if (!$svc->saveSet($set)) {
            throw new \RuntimeException("Global set {$handle}: " . implode(', ', $set->getFirstErrors()));
        }
    }

    /** @param string[] $labels @return array<int,array{label:string,value:string}> */
    private function opts(array $labels): array
    {
        return array_map(fn($l) => ['label' => $l ?: '—', 'value' => $l], $labels);
    }

    private function categoryGroup(string $handle, string $name, int $maxLevels): CategoryGroup
    {
        $svc = Craft::$app->getCategories();
        $group = $svc->getGroupByHandle($handle) ?? new CategoryGroup();
        $group->name = $name;
        $group->handle = $handle;
        $group->maxLevels = $maxLevels;
        $siteSettings = [];
        foreach (Craft::$app->getSites()->getAllSites() as $site) {
            $s = new CategoryGroup_SiteSettings();
            $s->siteId = $site->id;
            $s->hasUrls = false;
            $siteSettings[$site->id] = $s;
        }
        $group->setSiteSettings($siteSettings);
        if (!$svc->saveGroup($group)) {
            throw new \RuntimeException("Category group {$handle}: " . implode(', ', $group->getFirstErrors()));
        }
        return $group;
    }

    private function field(string $class, string $handle, string $name, array $settings = [])
    {
        $svc = Craft::$app->getFields();
        $field = $svc->getFieldByHandle($handle) ?? new $class();
        $field->handle = $handle;
        $field->name = $name;
        foreach ($settings as $k => $v) {
            $field->$k = $v;
        }
        if (!$svc->saveField($field)) {
            throw new \RuntimeException("Field {$handle}: " . implode(', ', $field->getFirstErrors()));
        }
        return $field;
    }

    /**
     * Build the editorial side: Category Page fields + Matrix blocks, the
     * productCategories Structure section, and its entry type.
     */
    public function actionCategories(): int
    {
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->stderr("allowAdminChanges is off — run on local/dev only.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $entries = Craft::$app->getEntries();
        $inventory = $entries->getSectionByHandle('inventory');
        if (!$inventory) {
            $this->stderr("Run setup/inventory first.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        // Category Page fields.
        $heroHeading = $this->field(PlainText::class, 'heroHeading', 'Hero Heading');
        $heroEmphasis = $this->field(PlainText::class, 'heroEmphasisWord', 'Hero Emphasis Word');
        $heroTagline = $this->field(PlainText::class, 'heroTagline', 'Hero Tagline');
        $heroImage = $this->field(AssetsField::class, 'heroImage', 'Hero Image', ['maxRelations' => 1, 'sources' => '*']);
        $icon = $this->field(PlainText::class, 'cardIcon', 'Icon (Material Symbol)');
        $summary = $this->field(PlainText::class, 'summary', 'Summary', ['multiline' => true, 'initialRows' => 2]);

        // Block fields (handles match productCategories/_entry.twig).
        $eyebrow = $this->field(PlainText::class, 'eyebrow', 'Eyebrow');
        $heading = $this->field(PlainText::class, 'heading', 'Heading');
        $text = $this->field(CkeditorField::class, 'text', 'Text');
        $footnote = $this->field(PlainText::class, 'footnote', 'Footnote');
        $content = $this->field(CkeditorField::class, 'content', 'Content');
        $question = $this->field(PlainText::class, 'question', 'Question');
        $answer = $this->field(CkeditorField::class, 'answer', 'Answer');
        $specs = $this->field(Table::class, 'specs', 'Spec Table', [
            'addRowLabel' => 'Add a row',
            'columns' => [
                'col1' => ['heading' => 'Model', 'handle' => 'model', 'type' => 'singleline'],
                'col2' => ['heading' => 'Detail', 'handle' => 'detail', 'type' => 'singleline'],
                'col3' => ['heading' => 'Price', 'handle' => 'price', 'type' => 'singleline'],
            ],
        ]);
        $productsRel = $this->field(EntriesField::class, 'products', 'Products', [
            'sources' => ['section:' . $inventory->uid],
            'maxRelations' => 8,
        ]);

        // Matrix block entry types (flat — no nested Matrix).
        $leadIntro = $this->blockType('leadIntro', 'Lead Intro', [$eyebrow, $heading, $text]);
        $specComparison = $this->blockType('specComparison', 'Spec Comparison', [$heading, $specs, $footnote]);
        $curatedProducts = $this->blockType('curatedProducts', 'Curated Products', [$heading, $productsRel]);
        $richText = $this->blockType('richText', 'Rich Text', [$content]);
        $faqItem = $this->blockType('faqItem', 'FAQ Item', [$question, $answer]);

        // body Matrix.
        $body = Craft::$app->getFields()->getFieldByHandle('body') ?? new Matrix();
        $body->handle = 'body';
        $body->name = 'Body';
        $body->propagationMethod = PropagationMethod::All;
        $body->setEntryTypes([$leadIntro, $specComparison, $curatedProducts, $richText, $faqItem]);
        if (!Craft::$app->getFields()->saveField($body)) {
            $this->stderr('Matrix body: ' . implode(', ', $body->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $this->stdout("✓ Fields + 5 Matrix block types + body Matrix\n", Console::FG_GREEN);

        // Category Page entry type.
        $catType = $entries->getEntryTypeByHandle('categoryPage') ?? new EntryType();
        $catType->name = 'Category Page';
        $catType->handle = 'categoryPage';
        $catType->hasTitleField = true;
        $layout = $catType->getFieldLayout();
        $layout->type = Entry::class;
        $tab = new FieldLayoutTab(['name' => 'Content']);
        $tab->setLayout($layout);
        $tab->setElements([
            new EntryTitleField(),
            new CustomField($heroHeading),
            new CustomField($heroEmphasis),
            new CustomField($heroTagline),
            new CustomField($heroImage),
            new CustomField($icon),
            new CustomField($summary),
            new CustomField($body),
        ]);
        $layout->setTabs([$tab]);
        $catType->setFieldLayout($layout);
        if (!$entries->saveEntryType($catType)) {
            $this->stderr('Category Page type: ' . implode(', ', $catType->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        // productCategories Structure section (flat slugs; breadcrumbs from structure).
        $section = $entries->getSectionByHandle('productCategories') ?? new Section();
        $section->name = 'Product Categories';
        $section->handle = 'productCategories';
        $section->type = Section::TYPE_STRUCTURE;
        $section->maxLevels = 2;
        $siteSettings = [];
        foreach (Craft::$app->getSites()->getAllSites() as $site) {
            $s = new Section_SiteSettings();
            $s->siteId = $site->id;
            $s->hasUrls = true;
            // Nested under /products, mirroring the breadcrumb (owner directive):
            // Tier-1 → products/amplification, Tier-2 → products/amplification/integrated-amplifiers.
            $s->uriFormat = '{% if level == 1 %}products/{slug}{% else %}{parent.uri}/{slug}{% endif %}';
            $s->template = 'productCategories/_entry';
            $siteSettings[$site->id] = $s;
        }
        $section->setSiteSettings($siteSettings);
        $section->setEntryTypes([$catType]);
        if (!$entries->saveSection($section)) {
            $this->stderr('productCategories section: ' . implode(', ', $section->getFirstErrors()) . "\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }
        $this->stdout("✓ Structure: productCategories + Category Page entry type\n", Console::FG_GREEN);

        return ExitCode::OK;
    }

    /**
     * Restore the distinct "X in Ottawa" intro paragraphs on the six Tier-1
     * category pages. During migration their `summary` field was loaded with a
     * copy of the hero tagline, so the shared template's "don't echo the hero"
     * guard hid the paragraph and left a bare heading. This re-points `summary`
     * at the original static intro copy (web/<slug>.html, the design source of
     * truth), which differs from the tagline and renders correctly.
     *
     *   ddev craft distinctiveaudio/setup/category-intros
     *
     * Non-destructive: touches only the `summary` field on these six entries.
     */
    public function actionCategoryIntros(): int
    {
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->stderr("allowAdminChanges is off — run this on local/dev only.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        // Verbatim from the static pages' "<slug> in Ottawa" section.
        $intros = [
            'analogue' => 'There is nothing quite like the ritual and the sound of vinyl. From the deck and tonearm to the cartridge and phono stage, every link in the analogue chain matters — and every one is auditioned, assembled, and dialled in with care.',
            'amplification' => 'From a single elegant integrated amplifier to fully separate pre/power combinations, our amplification lines are auditioned for grip, transparency, and that elusive sense of ease. Whether you favour the bloom of vacuum tubes or the authority of solid-state, there is a path here to match your speakers and your room.',
            'loudspeakers' => 'Choosing speakers is as much about your space and taste as it is about specifications. We help you to choose the right speaker for your room, taking into account your budget, room size, and presentation — then make sure they are partnered with amplification that lets them perform at their best.',
            'digital-sources' => 'Modern digital can rival — and often surpass — top-tier analogue, when the source is done right. From network streamers and standalone converters to reference disc transports, our digital lines turn data into music with clarity, timing, and zero fatigue.',
            'cables-power' => 'Every component is only as good as what feeds and connects it. Clean power and properly engineered cabling lower the noise floor, tighten timing, and let your electronics deliver everything they are capable of. We treat cables and power as components in their own right.',
            'racks-accessories' => 'Resonance is the enemy of resolution. Purpose-built racks and isolation products give your electronics and turntables a stable, vibration-free home — a small change that pays surprising dividends in focus, clarity, and bass definition.',
        ];

        $elements = Craft::$app->getElements();
        $updated = 0;
        foreach ($intros as $slug => $text) {
            $entry = Entry::find()->section('productCategories')->level(1)->slug($slug)->one();
            if ($entry === null) {
                $this->stderr("  ! Tier-1 entry not found: {$slug}\n", Console::FG_YELLOW);
                continue;
            }
            $entry->setFieldValue('summary', $text);
            if ($elements->saveElement($entry)) {
                $this->stdout("  ✓ {$slug}\n", Console::FG_GREEN);
                $updated++;
            } else {
                $this->stderr("  ✗ {$slug}: " . implode(', ', $entry->getFirstErrors()) . "\n", Console::FG_RED);
            }
        }
        $this->stdout("✓ Restored {$updated} category intro paragraph(s)\n", Console::FG_GREEN);

        return ExitCode::OK;
    }

    /**
     * Strip the stray "<p><em>Explore Further</em></p>" paragraph left in the
     * CKEditor buying-guide body blocks of the category pages (a migration
     * artifact that trailed each spec table). The matching nav-label heading in
     * the templates was removed separately; this clears the in-content copies.
     *
     *   ddev craft distinctiveaudio/setup/strip-explore-further
     *
     * Non-destructive: edits only `richText` body blocks whose content contains
     * the artifact, leaving the rest of the rich text untouched.
     */
    public function actionStripExploreFurther(): int
    {
        if (!Craft::$app->getConfig()->getGeneral()->allowAdminChanges) {
            $this->stderr("allowAdminChanges is off — run this on local/dev only.\n", Console::FG_RED);
            return ExitCode::UNSPECIFIED_ERROR;
        }

        // Matches <p><em>Explore Further</em></p> and the plain <p>Explore Further</p>
        // variant, tolerant of whitespace, with any preceding newline/space swallowed.
        $pattern = '~\s*<p>\s*(?:<em>\s*)?Explore Further(?:\s*</em>)?\s*</p>~i';

        $elements = Craft::$app->getElements();
        $entries = Entry::find()->section('productCategories')->level(null)->status(null)->all();
        $blocksFixed = 0;
        $entriesFixed = 0;

        foreach ($entries as $entry) {
            $changed = false;
            foreach ($entry->getFieldValue('body')->all() as $block) {
                if ($block->type->handle !== 'richText') {
                    continue;
                }
                $html = (string)$block->getFieldValue('content');
                $new = preg_replace($pattern, '', $html);
                if ($new === $html) {
                    continue;
                }
                // Save the nested block directly — it keeps its owner context, so
                // re-assigning the whole Matrix field (which mis-serializes Entry
                // objects) is avoided.
                $block->setFieldValue('content', $new);
                if ($elements->saveElement($block)) {
                    $blocksFixed++;
                    $changed = true;
                } else {
                    $this->stderr("  ✗ block {$block->id} on {$entry->title}: " . implode(', ', $block->getFirstErrors()) . "\n", Console::FG_RED);
                }
            }
            if ($changed) {
                $this->stdout("  ✓ {$entry->title}\n", Console::FG_GREEN);
                $entriesFixed++;
            }
        }
        $this->stdout("✓ Removed 'Explore Further' from {$blocksFixed} block(s) across {$entriesFixed} entry(ies)\n", Console::FG_GREEN);

        return ExitCode::OK;
    }

    /** Create a titleless Matrix block entry type with the given fields. */
    private function blockType(string $handle, string $name, array $fields): EntryType
    {
        $entries = Craft::$app->getEntries();
        $et = $entries->getEntryTypeByHandle($handle) ?? new EntryType();
        $et->name = $name;
        $et->handle = $handle;
        $et->hasTitleField = false;
        $et->titleFormat = null;
        $layout = $et->getFieldLayout();
        $layout->type = Entry::class;
        $tab = new FieldLayoutTab(['name' => 'Content']);
        $tab->setLayout($layout);
        $tab->setElements(array_map(fn($f) => new CustomField($f), $fields));
        $layout->setTabs([$tab]);
        $et->setFieldLayout($layout);
        if (!$entries->saveEntryType($et)) {
            throw new \RuntimeException("Block {$handle}: " . implode(', ', $et->getFirstErrors()));
        }
        return $et;
    }
}
