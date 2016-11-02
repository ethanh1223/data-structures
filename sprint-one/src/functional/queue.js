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
      return storage[1];
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
