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
    

  // contains

  // depthFirstLog


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var numbers = BinarySearchTree(5);