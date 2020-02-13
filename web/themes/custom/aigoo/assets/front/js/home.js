var home = new home();

function home()
{
	init();
	function init()
	{
		document_ready();
	}
	function document_ready()
	{
		$(document).ready(function()
		{
			event_accordion_fix();
		});
	}
	function event_accordion_fix()
	{
		$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
		}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
		});
	}
}