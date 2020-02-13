var sponsor = new sponsor();
var x = null;

function sponsor()
{
	init();
	function init()
	{
		$(document).ready(function()
		{
			document_ready();
		});
	}
	function document_ready()
	{
		event_choose_sponsor();
		event_input_sponsor();
	}
	function event_choose_sponsor()
	{
		$('.sponsor').unbind('click');
		$('.sponsor').bind('click',function(e)
		{
			$('.sponsor').prop('checked',false);
			$(e.currentTarget).prop('checked',true);
			var sponsor_type = $(e.currentTarget).attr('id');
			if(sponsor_type == "manual")
			{
				$('.sponsor-input').slideDown();
			}
			else
			{
				$("#sponsor_input").val("");
				$('.sponsor-input').slideUp();
			}
		});
	}
	function event_input_sponsor()
	{
		$('.sponsor-input').keydown(function()
		{
			action_load_sponsor();
			clearTimeout(x);
			x = setTimeout(function()
			{
				action_input_sponsor();
			},1000);
		});
	}
	function action_input_sponsor()
	{
		var input = $('#sponsor_input').val();
		$.ajax(
		{
			url: '/product/checkout/get_sponsor',
			type: 'get',
			data: 'input='+input,
			success: function(data)
			{
				if(data.status == 'success')
				{
					$('.sponsor-loader').html('<i style="color: green;font-size: 23px" class="check-icon fa fa-check-circle-o"></i>');
					$('.sponsor-loader').attr('status','success');
					console.log('success');
				}
				else
				{
					$('.sponsor-loader').html('<i style="color: red;font-size: 23px" class="times-icon fa fa-times-circle-o"></i>');
					$('.sponsor-loader').attr('status','error');
					$(".error-msg-sponsor").slideDown();
					$(".error-msg-sponsor").html("The sponsor code doesn't exist on the manual sponsor.");
					console.log('error');
				}
			}
		});
		
	}
	function action_load_sponsor()
	{
		$('.sponsor-loader').html('<i style="color: green;font-size: 23px" class="loading-icon fa fa-spinner fa-spin"></i>');
		$('.sponsor-loader').attr('status','error');
		console.log('loading');
	}
}