var global = new global();

function global()
{
  init();
  function init()
  {
    document_ready();
    window_load();
  }
  function document_ready()
  {
    $(document).ready(function()
    {
      event_match_height();
      event_account_tab();
      event_show_cart();
      event_show_bar();
      event_product_carousel();
      event_remove_product();
    });
  }
  function window_load()
  {
    $(window).load(function() 
    {
      event_loader();
    });
    window.onbeforeunload = function()
    {
      leave_page();
    };
  }
  function event_loader()
  {
    $(".loader-container").fadeOut();
    // $(".loader-container").hide();
  }
  function leave_page()
  {
    // $(".loader-container").fadeIn();
  }
  function event_match_height()
  {
    $('.match-height').matchHeight();
  }
  function event_account_tab()
  {
    $('body').on('click', '.account-modal .account-tab .holder', function(event) 
    {
      action_account_tab(event);
    });

    $('body').on('click', '.account-modal-button', function(event) 
    {
      action_account_tab(event)
      action_show_account_modal(event)
    });
  }
  function action_account_tab(event)
  {
    event.preventDefault();

    var type = $(event.currentTarget).attr("type");

    $('.account-modal .account-tab .holder').removeClass('active');
    $('.account-modal .account-tab .holder[type="'+type+'"]').addClass('active');
    $('.account-modal .account-content').addClass('hide');
    $('.account-modal .account-content[type="'+type+'"]').removeClass('hide');

    $(window).resize();
  }
  function action_show_account_modal()
  {
    $('#account_modal').modal();
  }
  function event_show_cart()
  {
    $('body').on('click', '.cart-holder', function(event) 
    {
      action_show_cart(event);
    });
  }
  function action_show_cart(event)
  {
    event.preventDefault();
    
    $("#cart_modal").modal();
  }
  function event_show_bar()
  {
    var element_position = $('.content-container').offset().top;
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;
    
    if(y_scroll_pos > scroll_pos_test) 
    {
        $('.top-bar').removeClass("hide");
    }
    else
    {
        $('.top-bar').addClass("hide");
    }
    
    $(window).on('scroll', function() 
    {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = element_position;
        
        if(y_scroll_pos > scroll_pos_test) 
        {
            $('.top-bar').removeClass("hide");
        }
        else
        {
            $('.top-bar').addClass("hide");
        }
    });
  }
  function event_product_carousel()
	{
		$('.product-carousel').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 6,
		  slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	}
	function event_remove_product()
	{
	  $('body').on('click', '.cart-sheet .remove', function(event) 
	  {
      event.preventDefault();
      var product_id = $(this).attr("product-id");
      
      $.ajax({
        url: '/product/remove',
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