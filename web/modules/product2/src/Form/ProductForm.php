<?php

namespace Drupal\product\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

 /**
  * Product Form Class
  */
class ProductForm extends FormBase
{
    /**
     * {@inheritdoc}
     */
    public function getFormId()
    {
        return 'product_form';
    }
    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $form['product_name'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Product Name'),
        ];

        $form['product_image'] = [
            '#type' => 'file',
            '#title' => $this->t('Product Image'),
        ];

        $form['product_price'] = [
            '#type' => 'textfield',
            '#title' => $this->t('Product Price'),
        ];

        $form['submit'] = [
            '#type' => 'submit',
            '#title' => $this->t('Add Product'),
        ];

        return $form;
    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        // drupal_set_message($form_state->getValue('product_name'))
    }
}