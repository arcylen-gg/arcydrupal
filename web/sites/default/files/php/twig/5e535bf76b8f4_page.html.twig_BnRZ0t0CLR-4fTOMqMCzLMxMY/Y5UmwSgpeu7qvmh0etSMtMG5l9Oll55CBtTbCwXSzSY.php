<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/aigoo/page.html.twig */
class __TwigTemplate_692735f0252cd80fc5280ae3909dea4d92014e3050879c3cbec1ebe0dc044031 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["if" => 97];
        $filters = ["escape" => 58];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 48
        echo "
<div id=\"page-wrapper\">
  <div id=\"page\">
    <div class=\"layout-container\">
      <div class=\"top-bar\">
        <div class=\"clearfix container\">
          <div class=\"pull-left\">
            <div class=\"text cart-holder\">
              <span style=\"cursor: pointer; text-decoration: none\">
                <header role=\"banner\" style=\"position:relative:color:#fff !important\">
                  ";
        // line 58
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
        echo "
                </header>
              </span>
            </div>
            <div class=\"text\">
              ";
        // line 63
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "primary_menu", [])), "html", null, true);
        echo "
            </div>
          </div>
          <div class=\"pull-right\">
            <div class=\"text cart-holder\" style=\"cursor: pointer;\">
              <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>
              <span>TOTAL: PHP 0.00 </span>
            </div>
          </div>
        </div>
      </div>
      <div class=\"container\">
      </div>
      <div class=\"content-container\">
        <div class=\"feature\">
          <div class=\"container\">
            <div class=\"row clearfix\">
              <div class=\"col-md-12\">
                <div class=\"holder\">
                  <div class=\"text\"> &nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;</div>
                  <div class=\"text\"> &nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;</div>
                  ";
        // line 84
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "secondary_menu", [])), "html", null, true);
        echo "
                  ";
        // line 85
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "breadcrumb", [])), "html", null, true);
        echo " 

                  ";
        // line 87
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
        echo "

                 
            
                  <main role=\"main\">
                    <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 93
        echo "                    <div class=\"layout-content\" style=\"width:1200px;height:400px;object-fit:contain\">
                      ";
        // line 94
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
                    </div>";
        // line 96
        echo "
                    ";
        // line 97
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])) {
            // line 98
            echo "                      <aside class=\"layout-sidebar-first\" role=\"complementary\">
                        ";
            // line 99
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_first", [])), "html", null, true);
            echo "
                      </aside>
                    ";
        }
        // line 102
        echo "
                    ";
        // line 103
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])) {
            // line 104
            echo "                      <aside class=\"layout-sidebar-second\" role=\"complementary\">
                        ";
            // line 105
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "sidebar_second", [])), "html", null, true);
            echo "
                      </aside>
                    ";
        }
        // line 108
        echo "
                  </main>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer  role=\"contentinfo\">
        <div class=\"container\">
          <div class=\"row clearfix\">
            <div class=\"col-md-4\">
              ";
        // line 120
        if ($this->getAttribute(($context["page"] ?? null), "footer", [])) {
            // line 121
            echo "                  ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer", [])), "html", null, true);
            echo "
              ";
        }
        // line 123
        echo "            </div>
            <div class=\"col-md-4\">
             ";
        // line 125
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "help", [])), "html", null, true);
        echo "
            </div>
          </div>
        </div>
      </footer>

    </div>";
        // line 132
        echo "  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/aigoo/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  186 => 132,  177 => 125,  173 => 123,  167 => 121,  165 => 120,  151 => 108,  145 => 105,  142 => 104,  140 => 103,  137 => 102,  131 => 99,  128 => 98,  126 => 97,  123 => 96,  119 => 94,  116 => 93,  108 => 87,  103 => 85,  99 => 84,  75 => 63,  67 => 58,  55 => 48,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/aigoo/page.html.twig", "/var/www/arcydrupal/web/themes/custom/aigoo/page.html.twig");
    }
}
