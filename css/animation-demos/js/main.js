// ------------------------------------------------------------------------//
// Event handlers which fire when CSS animation has finished
// ------------------------------------------------------------------------//

var transitionEnd = whichTransitionEvent();
var animationEnd = whichAnimationEvent();

jQuery(document).ready(function($){
  
  $('#transition').on(transitionEnd, function(event){
    console.log("Transition complete");
  });

  $('#animation').on(animationEnd, function(event){
    console.log("Animation '" + event.originalEvent.animationName + "' complete");
  });

});

// An example of how you can chain multiple CSS animations together:
// http://jsfiddle.net/uFbUj/26/

// ------------------------------------------------------------------------//
// Helpers
// ------------------------------------------------------------------------//

// When doing CSS animation, you need to listen for the "transitionend" or
// "animationend" event in order to determine when an animation has finished.
// Some browsers have added vendor prefixes to these events, so we can't
// guarantee which one the app will receive. The following functions perform
// tests to determine which "transitionend" and "animationend" events the
// browser recognizes. We can then save this value in a variable and pass it
// to our event listeners.

function whichTransitionEvent() {
  var t;
  var el = document.createElement('fakeelement');
  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  }
  var match = '';
  for (t in transitions) {
    if (el.style[t] !== undefined) {
      match = transitions[t];
    }
  }
  return match;
}

function whichAnimationEvent() {
  var a;
  var el = document.createElement('fakeelement');
  var animations = {
    'animation': 'animationend',
    'OAnimation': 'oAnimationEnd',
    'MozAnimation': 'animationend',
    'WebkitAnimation': 'webkitAnimationEnd'
  }
  var match = '';
  for (a in animations) {
    if (el.style[a] !== undefined) {
      match = animations[a];
    }
  }
  return match;
}