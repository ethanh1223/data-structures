var Queue = function() {
  this.storage = {};
  this.currentSize = 0;
  this.front = 0;
  this.back = 0;
};

Queue.prototype.size = function () {
  return this.currentSize;
};

Queue.prototype.enqueue = function(value) {
  this.currentSize++;
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.currentSize > 0) {
    var dequeuedValue = this.storage[this.front];
    this.currentSize--;
    this.front++;
    return dequeuedValue;
  }
};

