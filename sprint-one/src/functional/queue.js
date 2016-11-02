var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    if( size > 0 ){
      size--;
      returnValue = storage[1];
      delete storage[1];
      for ( var k in storage ) {
        debugger;
        storage[k-1] = storage[k];
        delete storage[k];
      }
      return returnValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
