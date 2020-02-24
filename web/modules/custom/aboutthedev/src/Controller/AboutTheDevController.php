<?php

namespace Drupal\aboutthedev\Controller;

use Symfony\Component\HttpFoundation\Response;

class AboutTheDevController 
{
    public function aboutthedev() 
    {
        return array(
            '#theme' => 'aboutthedev', 
            '#title' => 'About the Dev',
            '#src' => 'http://arcylen.com',
        );
    }
}