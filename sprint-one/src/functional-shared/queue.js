var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.startSize = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.startSize;
};

queueMethods.enqueue = function( value ) {
  this.startSize++;
  this.storage[this.startSize] = value;
};

queueMethods.dequeue = function() {
  if ( this.startSize > 0 ) {
    var dequeuedValue = this.storage[1];
    delete this.storage[1];
    this.startSize--;
    for ( var k in this.storage ) {
      this.storage[k - 1] = this.storage[k];
    }
    return dequeuedValue;
  }
};

queueMethods.peek = function() {
  return this.storage[1];
};