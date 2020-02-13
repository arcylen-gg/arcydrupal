var view_product = new view_product();

function view_product()
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
           event_product_zoom();
           event_thumb_carousel();
           event_change_product_picture();
        });
    }
    function event_product_zoom()
    {
        $(".elevatezoom").elevateZoom(); 
    }
    function event_thumb_carousel()
    {
        $('.product-thumb').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
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
    function event_change_product_picture()
    {
        $(".product-thumb .holder").unbind("click");
        $(".product-thumb .holder").bind("click", function(e)
        {
           action_change_product_picture(e.currentTarget); 
        });
        
        // window.setInterval(function()
        // {
        //     var $next = $('.product-thumb .holder.active').parent().next('.slick-slide').children('.holder');
        //     if ($next.length) 
        //     {
        //         $next.trigger('click'); 
        //     }
        //     else
        //     {
        //         $(".slick-slide:first .holder").trigger('click');
        //     }
        // }, 8000);
    }
    function action_change_product_picture(current)
    {
        var product = $(current).attr("product");
        $(".product-thumb .holder").removeClass("active");
        $(current).addClass("active");
        $(".product-pic").addClass("hide");
        $('.product-pic[product="'+product+'"]').removeClass("hide");
    }
}