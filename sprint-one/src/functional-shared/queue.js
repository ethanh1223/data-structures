var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {}
  newQueue.storage = {}
  newQueue.currentSize = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;

};

var queueMethods = {};

queueMethods.size = function() {
  return this.currentSize;
}

queueMethods.enqueue = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
}

queueMethods.dequeue = function(value) {
  this.currentSize--;
}
