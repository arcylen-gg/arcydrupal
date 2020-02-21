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

/* modules/share_everywhere-8.x-1.21/share_everywhere/templates/se-linkedin.html.twig */
class __TwigTemplate_e47849d1268ad218fb93455bf1432a7e5857f7d99f39b4860e2077d0f720a31c extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 12, "url_encode" => 12];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 'url_encode'],
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
        // line 12
        echo "<a href=\"https://www.linkedin.com/shareArticle?mini=true&url=";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_urlencode_filter($this->sandbox->ensureToStringAllowed(($context["url"] ?? null))), "html", null, true);
        echo "\" target=\"_blank\" >";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "</a>
";
    }

    public function getTemplateName()
    {
        return "modules/share_everywhere-8.x-1.21/share_everywhere/templates/se-linkedin.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 12,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "modules/share_everywhere-8.x-1.21/share_everywhere/templates/se-linkedin.html.twig", "/var/www/arcydrupal/web/modules/share_everywhere-8.x-1.21/share_everywhere/templates/se-linkedin.html.twig");
    }
}
