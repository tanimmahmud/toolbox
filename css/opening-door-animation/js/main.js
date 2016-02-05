// ------------------------------------------------------------------------//
// Global variables
// ------------------------------------------------------------------------//

var transitionEnd = whichTransitionEvent();
var door;

// ------------------------------------------------------------------------//
// Determine which "transitionend" event to listen for
// ------------------------------------------------------------------------//

// When doing CSS animation, you need to listen for the "transitionend" or
// "animationend" event in order to determine when an animation has finished.
// Some browsers have added vendor prefixes to these events, so we can't
// guarantee which one the app will receive. The following function performs
// a test to determine which "transitionend" event the browser recognizes. We
// can then store this value in a variable and pass it to our event listeners.
//
// If the browser does not support the "transitionend" event at all, then the
// app will listen for a custom event instead. Since these browsers won't
// support CSS transitions, this event will have to originate from a block of
// Javascript code (our polyfill) instead of CSS.

function whichTransitionEvent() {
  var t;
  var el = document.createElement('fakeelement');
  var transitions = {
    'transition':'transitionend',
    'OTransition':'oTransitionEnd',
    'MozTransition':'transitionend',
    'WebkitTransition':'webkitTransitionEnd'
  };
  var match = '';
  for (t in transitions) {
    if (el.style[t] !== undefined) {
      match = transitions[t];
    }
  }
  if (!match) {
    match = 'customTransitionEnd'; // Dispatched from Javascript polyfill code
  }
  return match;
}

// IE 10 and 11 do not support "transform-style: preserve-3d" and Modernizr
// does not provide a feature test for this, so someone has written this plugin:
// https://gist.github.com/Matori/4123325

Modernizr.addTest('csstransformspreserve3d', function() {
  var prop, val, cssText, ret;
  prop = 'transform-style';
  if ('webkitTransformStyle' in document.documentElement.style) {
    prop = '-webkit-' + prop;
  }
  val = 'preserve-3d';
  cssText = '#modernizr { ' + prop + ': ' + val + '; }';
  Modernizr.testStyles(cssText, function (el, rule) {
    ret = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
  });
  return (ret === val);
});

// Force all incompatible browsers to use the custom "transitionend" event

if (!Modernizr.csstransitions || !Modernizr.csstransforms || !Modernizr.csstransforms3d || !Modernizr.csstransformspreserve3d) {
  transitionEnd = 'customTransitionEnd';
}

$('#output-1').html('Listening for: <em>'+transitionEnd+'</em>');

// ------------------------------------------------------------------------//
// Document ready
// ------------------------------------------------------------------------//

$(document).ready(function(){

  // Modernizr "yepnope" conditional script loading.
  // If CSS transitions are not supported, then a Javascript polyfill will
  // be loaded to replace them.

  Modernizr.load({
    test: Modernizr.csstransitions && Modernizr.csstransforms && Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d,
    nope: ['css/transition-polyfill.css', 'js/transition-polyfill.js'],
    complete: function() {
      init();
    }
  });

  // Initialization

  function init() {
    // Create a new Door instance
    door = new Door($('.door'), transitionEnd);
    
    // Add event listeners/handlers
    door.obj.on('open', function(event){
      $('#output-2').text('Opening');
    });
    door.obj.on('opened', function(event){
      $('#output-2').text('Opened');
    });
    door.obj.on('close', function(event){
      $('#output-2').text('Closing');
    });
    door.obj.on('closed', function(event){
      $('#output-2').text('Closed');
    });
  }

});
