var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.currentSize = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.currentSize;
};

stackMethods.push = function(value) {
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

stackMethods.pop = function() {
  if (this.currentSize > 0) {
    this.currentSize--;
    return this.storage[this.currentSize];
  }
};