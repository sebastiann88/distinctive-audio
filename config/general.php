<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 * @link https://craftcms.com/docs/5.x/reference/config/general.html
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    // Set the default week start day for date pickers (0 = Sunday, 1 = Monday, etc.)
    ->defaultWeekStartDay(1)
    // Prevent generated URLs from including "index.php"
    ->omitScriptNameInUrls()
    // Preload Single entries as Twig variables
    ->preloadSingles()
    // Prevent user enumeration attacks
    ->preventUserEnumeration()
    // Prevent the front-end Login page
    ->loginPath(false)
    // Enable the Twig sandbox for system messages, etc.
    ->enableTwigSandbox()
    // Set the @webroot alias so the clear-caches command knows where to find CP resources
    ->aliases([
        '@webroot' => dirname(__DIR__) . '/web',
    ])
    // Control Panel trigger word
    ->cpTrigger('distinctive')
    // Allow GLB Files
    ->extraAllowedFileExtensions(['glb'])
    // Raise the max asset upload size to 64MB (default is 16MB; DDEV PHP allows
    // 100M and nginx is unlimited, so Craft's cap is the effective limit here).
    ->maxUploadFileSize('64M')
;
