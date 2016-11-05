var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create a new tree (obj)
  var childTree = Tree(value);
  
  // make current tree the parent of child tree
  childTree.parent = this;

  // Push tree to children (array)
  this.children.push(childTree);

  // returned this obj gt 
  return childTree;
};

treeMethods.contains = function(target, node) {
  // check if this.value is equal to target
  node = node || this;
  
  if ( node.value === target ) {
    // if yes return true
    return true;
  } 

  // for loop through this.children
  for ( var j = 0; j < node.children.length; j++ ) {
    // recursively call this.contains
    var isHere = node.contains(target, node.children[j]);
    if ( isHere === true ) {
      return true;
    }

  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1) (approching linear depending on number of methods)
 * contains - O(n)
 */