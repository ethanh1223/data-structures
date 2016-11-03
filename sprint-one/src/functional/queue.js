var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  // {1:b,2:c}

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    // dequeue needs to copy storage so that it can replace the values on a different
    // avoiding the possibility of overwriting key/values
    var dequeuedValue = storage[1];

    delete storage[0];
    
    if ( size > 0 ) {
      size--;
    }
    
    for ( var k in storage) {
      storage[k - 1] = storage[k];
    }
    
    return dequeuedValue;

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};