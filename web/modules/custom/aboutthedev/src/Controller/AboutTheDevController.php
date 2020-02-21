<?php

namespace Drupal\aboutthedev\Controller;

use Symfony\Component\HttpFoundation\Response;

class AboutTheDevController 
{
    public function aboutthedev() 
    {
        return array(
            '#title' => 'About the Dev',
        );
    }
}