var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.startSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.startSize;
};

stackMethods.push = function(value) {
  this.startSize++;
  this.storage[this.startSize] = value;
};

stackMethods.pop = function() {
  if (this.startSize > 0) {
    this.startSize--;
    return this.storage[this.startSize + 1];
  }
};

stackMethods.peek = function() {
  return this.storage[this.startSize];
};