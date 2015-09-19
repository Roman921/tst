$(function() {
    $('.checkkk').on('click', function() {
//console.log('v');    

        if ($(this).find('input').not(':checked')) {
            $(this).parent().find('.kvadrat').css('display', 'none');
           $(this).find('.kvadrat').css('display', 'block');
        } else {

            $(this).parent().find('.kvadrat').css('display', 'block');
             $(this).find('.kvadrat').css('display', 'none');
        }

    });
  
     $(".form input[type='text']").on('focus', function() {
    
    $(this).css('background','none'  );
     $(this).css('padding-left','4px'  );
     
     });
        
    
    $(".form input[type='text']").on('mouseout', function() {
            $(this).css('background','url("http://webbook.com.ua/temp/email_03.png") no-repeat 7px 9px '  );
     $(this).css('padding-left','30px'  ); 
         });
     
     
     
     $( '.form input').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('.form input').mouseout(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});
}); 