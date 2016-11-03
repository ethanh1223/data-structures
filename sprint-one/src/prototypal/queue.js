var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.currentSize = 0;
  newQueue.front = 0;
  newQueue.back = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.currentSize;
};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.currentSize++;
  this.back++;
};

queueMethods.dequeue = function() {
  
  if (this.currentSize) { 
    var dequeuedValue = this.storage[this.front];

    this.currentSize--;
    this.front++;

    return dequeuedValue;
  } 

};