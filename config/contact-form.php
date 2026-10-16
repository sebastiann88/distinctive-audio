<?php

/**
 * Contact Form plugin config.
 *
 * Enquiries from templates/contact.twig are emailed here. Canonical owner
 * address per the content model. The from-name/from-email come from the form.
 */

return [
    'toEmail' => 'rheal@distinctiveaudio.ca',
    // Must be strings, not booleans — the Settings model validates these as
    // string and a boolean makes every send throw InvalidConfigException.
    'prependSender' => '',
    'prependSubject' => '',
    'successFlashMessage' => 'Your message has been sent.',
];
