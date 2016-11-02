var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.currentSize = 0;

  _.extend(newStack,stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.currentSize;
}

stackMethods.push = function(value) {
  this.currentSize++;
  this.storage[this.currentSize] = value;
}

stackMethods.pop = function() {
  if( this.currentSize > 0){
    var popValue = this.storage[this.currentSize];
    this.currentSize--;
    return popValue;
  }
}