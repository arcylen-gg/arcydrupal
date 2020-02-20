<?php

namespace Drupal\logo\Controller;

class LogoChangeController {
    public function page() {
        return array(
            '#theme' => 'logo_change',
            '#items' => '',
            '#title' => 'Change Logo'
        );
    }
}