var checkout = new checkout();

function checkout()
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
            action_shipping_method();
            event_shipping_method(); 
            event_order_placed();
            event_choose_mop();
        });
    }
    function event_choose_mop()
    {
        $(".paypal-mop").unbind("click");
        $(".paypal-mop").bind("click",function()
        {
            $(".paypal-proceed").slideDown();
            $(".bank-deposit-proceed").slideUp(); 
        });
        $(".bank-deposit-mop").unbind("click");
        $(".bank-deposit-mop").bind("click",function()
        {
            $(".bank-deposit-proceed").slideDown();
            $(".paypal-proceed").slideUp(); 
        });
    }
    function event_shipping_method()
    {
        $(".shipping_method").change(function()
        {
            action_shipping_method();
        });
    }
    function action_shipping_method()
    {
        var id = $(".shipping_method").val();
        
        $.ajax(
        {
            url     :   "/product/checkout/shipping",
            type    :   "get",
            data    :   {id:id},
            success :   function(data)
            {
                var subtotal = $(".sub_total").val();
                // console.log(parseFloat(data.price));
                var cart_total = parseFloat(subtotal) + parseFloat(data.price);
                $(".shipping_cost").html(data.currency+" "+parseFloat(data.price).toFixed(2)+"");
                $(".total_cost").html(data.currency+" "+cart_total.toFixed(2)+"");
            }
        });
    }
    function event_order_placed()
    {
        // $(".fruseed").click(function()
        // {
            // action_order_placed();
        // });
    }
    function action_order_placed()
    {
        var form = $('.checkout-form').serialize();
        
        var account_username = $('#account_username').val();
        var account_password = $('#account_password').val();
        var account_name = $('#account_name').val();
        var account_contact_number = $('#account_contact_number').val();
        var telephone = $('#telephone').val();
        var account_country_id = $('#account_country_id').val();
        var birthday = $('#birthday').val();

        var shipping_method = $('#shipping_method').val();
        var shipping_address = $('#shipping_address').val();
        var first_name = $('#first_name').val();
        var middle_name = $('#middle_name').val();
        var last_name = $('#last_name').val();
        var token = $("#_token").val();
        // alert(token);
        var ajax = new XMLHttpRequest();
        var formdata = new FormData();
        formdata.append('account_username', account_username);
        formdata.append('account_password',account_password);
        formdata.append('account_name',account_name);
        formdata.append('account_contact_number',account_contact_number);
        formdata.append('account_password_confirmation',account_password_confirmation);
        formdata.append('telephone',telephone);
        formdata.append('account_country_id',account_country_id);
        formdata.append('birthday',birthday);
        formdata.append('shipping_method',shipping_method);
        formdata.append('shipping_address',shipping_address);
        formdata.append('first_name',first_name);
        formdata.append('middle_name',middle_name);
        formdata.append('last_name',last_name);
        formdata.append('proof_of_payment',$("#proof_of_payment").files[0]);

        console.log(formdata);
        ajax.upload.addEventListener('upload', uploadData, false);
        ajax.addEventListener('load', LoadData, false);        
        ajax.addEventListener("error", errorHandler, false);
        ajax.addEventListener("abort", abortHandler, false);
        ajax.open('post','/product/checkout/submit');
        ajax.send(formdata);


        // $.ajax(
        // {
        //    url     :   "/product/checkout/submit",
        //    type    :   "POST",
        //    data    :   formdata,
        //    processData: false,  // tell jQuery not to process the data
        //    contentType: false,  // tell jQuery not to set contentType
        //     success :   function(data)
        //     {
        //         console.log(data);
        //         var parsed_json = $.parseJSON(data);
        //         if(parsed_json.message == "success")
        //         {
        //             $("#order_placed").modal();
        //         }
        //         else if(parsed_json.message == "fail")
        //         {
        //              $(".error-danger").removeClass("hidden");
        //              $(".error-danger").html(parsed_json.error);
        //         }
        //     }
        // });
    }
}
function proceed_payment()
{
    $(".fruseed-btn").attr("disabled",true);
    $(".fruseed-btn").html("PROCEEDING...");

    var proceed = false;
    var sponsor_mode = $('input[name="sponsor"]:checked').attr("id");
    console.log(sponsor);
    if(sponsor_mode == 'manual')
    {
        var status = $('.sponsor-loader').attr('status');
        if(status != 'success')
        {
            toastr.error('Invalid sponsor. Please input a valid sponsor');
        }
        else
        {
            console.log('manual');
            proceed = true;
        }
    }
    else
    {
        console.log('auto sponsor');
        proceed = true;
    }
    if(proceed)
    {
        var token = $('#_tokens').val();
        
        var account_password_confirmation = $('#account_password_confirmation').val();
        // alert(account_password_confirmation);
        // alert(token);
        var account_username = $('#account_username').val();
        var account_password = $('#account_password').val();
        var account_name = $('#account_name').val();
        var account_contact_number = $('#account_contact_number').val();
        var telephone = $('#telephone').val();
        var account_country_id = $('#account_country_id').val();
        var birthday = $('#birthday').val();
        var account_email = $("#account_email").val();
        var shipping_method = $('#shipping_method').val();
        var shipping_address = $('#shipping_address').val();
        var first_name = $('#first_name').val();
        var middle_name = $('#middle_name').val();
        var last_name = $('#last_name').val();
        var mode_of_payment = $("input[name='mode_of_payment']:checked").val();
        //patrick
        var sponsor = $('#sponsor_input').val();

       
        var ajax = new XMLHttpRequest();
        var formdata = new FormData();
        formdata.append("_token", token);
        formdata.append('account_username', account_username);
        formdata.append('account_password',account_password);
        formdata.append('account_name',account_name);
        formdata.append('account_contact_number',account_contact_number);
        formdata.append('telephone',telephone);
        formdata.append('mode_of_payment',mode_of_payment);
        formdata.append('account_country_id',account_country_id);
        formdata.append('birthday',birthday);
        formdata.append('shipping_method',shipping_method);
        formdata.append('account_email',account_email);
        formdata.append('shipping_address',shipping_address);
        formdata.append('first_name',first_name);
        formdata.append('middle_name',middle_name);
        formdata.append('last_name',last_name);
        formdata.append('proof_of_payment',$("#proof_of_payment")[0].files[0]);
        formdata.append('account_password_confirmation',account_password_confirmation);
        //patrick
        formdata.append('sponsor',sponsor);

        ajax.upload.addEventListener('upload', uploadData, false);
        ajax.addEventListener('load', LoadData, false);        
        ajax.addEventListener("error", errorHandler, false);
        ajax.addEventListener("abort", abortHandler, false);
        ajax.open('post','/product/checkout/submit');
        ajax.send(formdata);
        console.log('proceed');
    }
}

function proceed()
{

        var token = $('#_token').val();
        
        var account_password_confirmation = $('#account_password_confirmation').val();
        // alert(account_password_confirmation);
        // alert(token);
        var account_username = $('#account_username').val();
        var account_password = $('#account_password').val();
        var account_name = $('#account_name').val();
        var account_contact_number = $('#account_contact_number').val();
        var telephone = $('#telephone').val();
        var account_country_id = $('#account_country_id').val();
        var birthday = $('#birthday').val();
        var account_email = $("#account_email").val();
        var shipping_method = $('#shipping_method').val();
        var shipping_address = $('#shipping_address').val();
        var first_name = $('#first_name').val();
        var middle_name = $('#middle_name').val();
        var last_name = $('#last_name').val();
        var mode_of_payment = $("input[name='mode_of_payment']:checked").val();
        //patrick
        var sponsor = $('.sponsor_input').val();

       
        var ajax = new XMLHttpRequest();
        var formdata = new FormData();
        formdata.append("_token", token);
        formdata.append('account_username', account_username);
        formdata.append('account_password',account_password);
        formdata.append('account_name',account_name);
        formdata.append('account_contact_number',account_contact_number);
        formdata.append('telephone',telephone);
        formdata.append('mode_of_payment',mode_of_payment);
        formdata.append('account_country_id',account_country_id);
        formdata.append('birthday',birthday);
        formdata.append('shipping_method',shipping_method);
        formdata.append('account_email',account_email);
        formdata.append('shipping_address',shipping_address);
        formdata.append('first_name',first_name);
        formdata.append('middle_name',middle_name);
        formdata.append('last_name',last_name);
        formdata.append('proof_of_payment',$("#proof_of_payment")[0].files[0]);
        formdata.append('account_password_confirmation',account_password_confirmation);
        //patrick
        formdata.append('sponsor',sponsor);

        ajax.upload.addEventListener('upload', uploadData, false);
        ajax.addEventListener('load', LoadData, false);        
        ajax.addEventListener("error", errorHandler, false);
        ajax.addEventListener("abort", abortHandler, false);
        ajax.open('post','/product/checkout/submit');
        ajax.send(formdata);
}
function uploadData(event)
{

}
function LoadData(event)
{
    var parsed_json = $.parseJSON(event.target.responseText);
    console.log(parsed_json.message);
    if(parsed_json.message == "success")
    {
        console.log('success');
        $("#order_placed").modal();
        setInterval(function () 
        {
          location.href = "/";
        },3000);
    }
    else if(parsed_json.message == "fail")
    {
        console.log('fail');
         $(".error-danger").removeClass("hidden");
         $(".fruseed-btn").attr("disabled",false);
         $(".error-danger").html(parsed_json.error);
    }
}
function errorHandler(event)
{

}
function abortHandler(event)
{
 
}
function proceedPaypal()
{
    var form = $('.checkout-form').serialize();
    
    $(".checkout-form").attr("action","/product/checkout/paypal");
    $(".checkout-form").submit(); 
}
