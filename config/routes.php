<?php
/**
 * Site URL Rules
 *
 * You can define custom site URL rules here, which Craft will check in addition
 * to routes defined in Settings → Routes.
 *
 * Read about Craft’s routing behavior (and this file’s structure), here:
 * @link https://craftcms.com/docs/5.x/system/routing.html
 */

return [
    // SEO continuity: 301 every legacy flat ".html" URL to its new Craft route
    // (/integrated-amplifiers.html → /integrated-amplifiers, index.html → /).
    // Activates once the static .html files leave the docroot (task #16).
    '<slug:[\w\-]+>.html' => ['template' => '_redirects/legacy'],
];

