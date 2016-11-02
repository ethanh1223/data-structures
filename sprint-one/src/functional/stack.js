var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var i = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value; // Storage: {0: a} -- Storage: {}

    size++;
  };

  someInstance.pop = function() {

    if (size > 0) {
    size--;
    }

    return storage[i];

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
