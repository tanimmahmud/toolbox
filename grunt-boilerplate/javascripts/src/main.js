jQuery(document).ready(function($){

  // ------------------------------------
  // Javascript media queries
  // ------------------------------------

  $(window).resize(function(){
    checkWidth();
  });
  
  checkWidth();

  function checkWidth(){
    // Use this method if you require IE9 support
    // (Note: When calculating the viewport width, some browsers include the width
    // of the scrollbar and others don't, so this method is not 100% reliable)

    if ($(window).width() <= 600) {
      // console.log('600px or less');
    } else {
      // console.log('More than 600px');
    }

    // Use this method if you don't need IE9 support (IE10 and up)
    // (This method is more reliable than the one above)
    
    if (typeof window.matchMedia !== 'undefined') {
      if (window.matchMedia("(max-width: 600px)").matches) {
        // console.log('600px or less');
      } else {
        // console.log('More than 600px');
      }
    }
  }

  // ------------------------------------
  // Focus the first date select element when it's corresponding
  // legend is clicked (since select labels are hidden via CSS)
  // ------------------------------------
  
  $('.field-group-date legend').click(function(){
    $(this).next('.field-month').find('select').focus();
  });

  // ------------------------------------
  // Hide and reveal form errors
  // (For demo purposes only. The following code can be deleted after you clone the Stasis Boilerplate)
  // ------------------------------------

  $('button, input[type="button"], input[type="submit"]').on('click', function(event){
    event.preventDefault();
    if ($('.global-error').length > 0) {
      $('.global-error').remove();
      $('.field').removeClass('field_with_errors');
      $('form > fieldset > .field, .field-group').find('.error').remove();
    } else {
      $('form > fieldset > legend').after('<div class="global-error"><p>Global error message</p></div>');
      $('.field').addClass('field_with_errors');
      $('form > fieldset > .field, .field-group').append('<p class="error">Inline error message</p>');
    }
  });

});
