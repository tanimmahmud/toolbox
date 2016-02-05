// The Door "class"

(function(window){

  // Make this "class" available to the global scope
  window.Door = Door;

  function Door(jQueryDomObject, transitionEnd) {
    // Public variables
    this.obj = jQueryDomObject;
    this.transitionEnd = transitionEnd;
    this.timer = 0;
    this.close();
  }

  // Getter methods

  Door.prototype.id = function() {
    return this.obj.attr('id');
  }

  Door.prototype.isOpen = function() {
    return this.obj.hasClass('open');
  }

  // Puts the door into an "open" state

  Door.prototype.open = function() {
    var self = this;
    // Adding this class will trigger CSS animation (if browser supports it)
    this.obj.addClass('open');
    // Bind "transitionend" event to the "opened" handler
    this.obj.off(this.transitionEnd);
    this.obj.on(this.transitionEnd, function(){
      self.onOpened();
    });
    // Disable click handler
    this.obj.off('click');
    this.obj.on('click', function(event){
      event.preventDefault();
    });
    // Broadcasting this event will trigger JS animation (in the polyfill)
    this.obj.trigger('open');
  }

  // Puts the door into a "closed" state

  Door.prototype.close = function() {
    var self = this;
    // Removing this class will trigger CSS animation (if browser supports it)
    this.obj.removeClass('open');
    // Bind "transitionend" event to the "closed" handler
    this.obj.off(this.transitionEnd);
    this.obj.on(this.transitionEnd, function(){
      self.onClosed();
    });
    // Enable click handler
    this.obj.off('click');
    this.obj.on('click', function(event){
      event.preventDefault();
      self.onClicked();
    });
    // Broadcasting this event will trigger JS animation (in the polyfill)
    this.obj.trigger('close');
  }

  // Triggers the opening or closing of a door

  Door.prototype.onClicked = function() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  // Called after the "open" animation has finished

  Door.prototype.onOpened = function() {
    this.obj.blur();
    this.obj.trigger('opened');
    this.closeAfterTimeout();
  }

  // Called after the "close" animation has finished

  Door.prototype.onClosed = function() {
    this.obj.blur();
    this.obj.trigger('closed');
  }

  // Closes the door after a specified duration

  Door.prototype.closeAfterTimeout = function(delay) {
    if (delay == undefined) {
      delay = 2000;
    }
    var self = this;
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(function(){
      self.close();
    }, delay);
  }

}(window));