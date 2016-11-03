var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create a new tree (obj)
  var childTree = Tree(value);
  // Push tree to children (array)
  this.children.push(childTree);
  // returned this obj gt
  return childTree;
};

treeMethods.contains = function(target) {
};

// var familyTree = Tree('dad');

// var son = familyTree.addChild('son');

// son.addChild



/*
 * Complexity: What is the time complexity of the above functions?
 */
