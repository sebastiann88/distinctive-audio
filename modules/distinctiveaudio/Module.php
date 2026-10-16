<?php

declare(strict_types=1);

namespace modules\distinctiveaudio;

use Craft;
use yii\base\Module as BaseModule;

/**
 * Distinctive Audio custom module.
 *
 * Houses one-off migration tooling (the catalog/brands import command). Kept a
 * module rather than a plugin per project convention — no settings UI needed.
 */
class Module extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@modules/distinctiveaudio', __DIR__);

        // Console vs web controller namespaces.
        if (Craft::$app->getRequest()->getIsConsoleRequest()) {
            $this->controllerNamespace = 'modules\\distinctiveaudio\\console\\controllers';
        } else {
            $this->controllerNamespace = 'modules\\distinctiveaudio\\controllers';
        }

        parent::init();
    }
}
