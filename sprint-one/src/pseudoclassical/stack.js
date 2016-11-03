var Stack = function() {
  this.currentSize = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.currentSize;
};

Stack.prototype.push = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

Stack.prototype.pop = function() {
  if (this.currentSize > 0) {
    this.currentSize--;
    return this.storage[this.currentSize];
  }
};