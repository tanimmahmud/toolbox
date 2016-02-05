// The following code is a polyfill, which is intended to replace CSS transitions

$(document).ready(function(){
  
  $.each($('.door'), function(key, value) {

    // Called when the door has been put into an "closed" state

    $(this).on('close', function(){
      $(this).animate({left: 11}, 500, function(){
        // Broadcast an event for the application logic to respond to
        $(this).trigger('customTransitionEnd');
      });
    });

    // Called when the door has been put into an "open" state

    $(this).on('open', function(){
      $(this).animate({left: -200}, 500, function(){
        // Broadcast an event for the application logic to respond to
        $(this).trigger('customTransitionEnd');
      });
    });

  });

});