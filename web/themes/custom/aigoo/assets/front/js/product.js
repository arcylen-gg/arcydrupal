var product = new product();

function product()
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
			event_add_to_cart();
			event_show_cart();
			event_remove_product();
			event_click_step();
		});
	}
	function event_click_step()
	{
		$("#step-1").unbind("click");
		$("#step-1").bind("click", function()
			{
				$(".step-2-class").removeClass("active");
				$(".step-1-class").addClass("active");

			});
		$("#step-2").unbind("click");
		$("#step-2").bind("click", function()
			{
				$(".step-1-class").removeClass("active");
				$(".step-2-class").addClass("active");
			});
	}
	function event_add_to_cart()
	{
		$('body').on("click", ".add-to-cart", function(e)
		{
			e.preventDefault();
			action_add_to_cart(this);
		});
	}
	function action_add_to_cart(haha)
	{
		var product_id = $(haha).attr("product-id");
		$(".product-id-input").val(product_id);
		//check if product have price
		$.ajax({
			url: "/product/check_product_price",
			type: "get",
			data:{product_id:product_id},
			success: function(data)
			{
				if(data == 1)
				{
					$("#add_to_cart").modal();
				}
				else
				{
					$("#checkout_product").submit();
				}
			}
		});

	}
	function event_show_cart()
	{
		$(".show-cart-button").unbind("click");
		$(".show-cart-button").bind("click", function()
		{
			var pass = 
			{
				
			};

			$("#cart-modal .modal-body").load('/distributor/cart',jQuery.param(pass),
			function()
			{
				$("#cart-modal").modal();
			});
		});

		// $('#cart-modal').on('hidden.bs.modal', function() 
		// {
		//     // do something…
		// })
	}
	function event_remove_product()
	{
	  
	$(".remove").unbind("click");
	$(".remove").bind("click", function()
	{
      var product_id = $(this).attr("product-id");
      
      $.ajax({
        url: '/distributor/remove_from_cart',
        type: 'GET',
        dataType: 'json',
        data: {product_id: product_id},
      })
      .done(function() {
        var rowCount = $('.cart-sheet tbody tr').length;
        
        if (rowCount < 2) 
        {
          $('.cart-sheet tbody').append('<tr class="no-product-kek">'+'<td colspan="6">No Product in Cart</td>'+'</tr>');
        }
        else
        {
          $('.no-product-kek').remove();
        }
        location.reload();
        $(event.currentTarget).closest('tr').remove();
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
    });
	}
}