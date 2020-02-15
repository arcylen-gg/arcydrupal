<?php

namespace Drupal\product\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Database;
use Drupal\Core\Url;

/**
 * Class Display Table Controller 
 * @package Drupal\product\Controller
 * */

 class DisplayTableController extends ControllerBase
 {
    public function get_content()
    {
        $build = [ description => ['#theme' => 'product_description',
                                   '#description' => 'foo'],
                                   '#attributes' => []];
        return $build;
    }
    /**
    * Display.
    *
    * @return string
    * Return Hello string.
    */
    public function display() 
    {
        /**return [
        '#type' => 'markup',
        '#markup' => $this->t('Implement method: display with parameter(s): $name'),
        ];*/
        //create table header
        $header_table = array(
        'id'=> $this->t('id'),
        'name' => $this->t('name'),
        'description' => $this->t('description'),
        'price' => $this->t('price'),
        'is_archived' => $this->t('is_archived'),
        );
    }
 }