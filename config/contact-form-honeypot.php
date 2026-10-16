<?php

/**
 * Contact Form Honeypot config.
 *
 * The honeypot is a hidden field humans never fill but bots do. The form in
 * templates/contact.twig renders a hidden input named to match `honeypotParam`;
 * submissions with a non-empty value are silently rejected as spam.
 *
 * `website` rather than a phone-like name: the form has a real optional
 * phone field, so a phone-named honeypot invites false positives.
 */

return [
    'honeypotParam' => 'website',
];
