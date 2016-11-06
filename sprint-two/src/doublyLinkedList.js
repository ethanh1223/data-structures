var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node
    var newNode = Node(value);

    if (list.tail === null) {
      // assign value to list.head if tail is null
      list.head = newNode;
    } else {
      // assign current tails pointer to newNode
      newNode.prev = list.tail;
      list.tail.next = newNode;
    }
    // assign new node to list.tail
    list.tail = newNode;
    
  };

  list.removeHead = function() {
    // check if head exists
    if (list.head === null) {
      return null;
    }

    // remove node at head
    var removedHead = list.head;

    // if no more nodes, set head ot null
    if (removedHead.next === null) {
      list.head = null;
      list.tail = null;
      return removedHead.value;
    }
    // make head next element from removed heads pointer
    list.head = removedHead.next;
    return removedHead.value;
    
  };

  list.contains = function(target, node) {
    node = node || list.head;
    // check if head elem is equal to target
    if (node.value === target) {
      return true;
    } else if (node.next === null) { // if target.next===null, return false
      return false;
    }
    // if not, list.containts(target, node.next)
    return list.contains(target, node.next);
  };

  list.addToHead = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      // assign value to list.head if tail is null
      list.head = newNode;
    } else {
      // assign current tails pointer to newNode
      newNode.next = list.head;
      list.head.prev = newNode;
    }
    // assign new node to list.tail
    list.head = newNode;

  };

  list.removeTail = function() {
    // check if head exists
    if (list.tail === null) {
      return null;
    }

    // remove node at head
    var removedTail = list.tail;

    // if no more nodes, set head ot null
    if (removedTail.prev === null) {
      list.head = null;
      list.tail = null;
      return removedTail.value;
    }
    // make head next element from removed heads pointer
    list.tail = removedTail.prev;
    return removedTail.value;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail() = O(1)
 * addToTail() = O(1)
 * addToTail() = O(n)
 */


