var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.currentSize = 0;

  _.extend(newStack,stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.currentSize;
}

stackMethods.push = function(value) {
  this[this.currentSize] = value;
  this.currentSize++;
}

stackMethods.pop = function(value) {
  if( this.currentSize > 0){
    this.currentSize--;
  }
}