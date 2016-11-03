var Queue = function() {
  var someInstance = {};

  var storage = {};
  var size = 0;

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {

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