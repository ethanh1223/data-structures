var BinarySearchTree = function(value) {
  var node = {};

  node.value = value;

  node.left = {};
  node.right = {};

  // insert(value)
  node.insert = function(value) {

    // if value less than node.value
    if (value < node.value) {
      // if there is already a node.left
      if (Object.keys(node.left).length > 0) {
        // node.left.insert new BST of value
        node.left.insert(value);
      } else {
        // node.left is a new BST of value
        node.left = BinarySearchTree(value);
      }

    } else {
      // if there is already a node.right
      if (Object.keys(node.right).length > 0) {
        //   add new BST of value to node.right
        node.right.insert(value);
      } else {
      //   node.right is a new BST of value
        node.right = BinarySearchTree(value);  
      }
    }
  };

  node.contains = function(value) {
  // recursively check value property for given value

    // check if current node.value === value
    if (node.value === value) {
      // if true, return true
      return true;
    } else {
      // check if value is less than node. value
      if (value < node.value) {
        // if true, check if node.left exists
        if (Object.keys(node.left).length > 0) {
          // if true, recursively call on node.left
          return node.left.contains(value);  
        }
      } else {
        // if false, check if node.right exists
        if (Object.keys(node.right).length > 0) {
          // if true, recursively call on node.right
          return node.right.contains(value);
        }
      }
    }
    //return false
    return false;
  };

  // depthFirstLog
  node.depthFirstLog = function(cb) {
    // run cb on this node
    cb(node.value);
    // check if node.left exists
    if (Object.keys(node.left).length > 0) {
      // if yes, recursively node.left.depthFirstLog with cb
      node.left.depthFirstLog(cb);
    }
    // check if node.right exists
    if (Object.keys(node.right).length > 0) {
      // if yes, recursively node.right.depthFirstLog with cb
      node.right.depthFirstLog(cb);
    }
      
  };


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - logarithmic
 * contains - logarithmic
 * depthFirstLog - linear
 */