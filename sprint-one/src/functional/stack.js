var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;

    storage[size] = value; // Storage: {1: a} -- Storage: {}

  };
  // {1:a}, size = 1
  someInstance.pop = function() {

    if (size > 0) {
      size--;
    }

    return storage[size + 1];

  };

  someInstance.size = function() {
    return size;
  };

  someInstance.peek = function() {
    return storage[size];
  };

  return someInstance;
};
