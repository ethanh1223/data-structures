

// Instantiate a new graph
var Graph = function() {
  debugger;
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node; 
};

// Return a boolean value indicating if the value passed to 
// contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for ( var k in this.nodes ) {
    if ( k === '' + node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for ( var k in this.nodes ) {
    if ( k === '' + node) {
      delete this.nodes[k];
      return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var lookUp = '' + fromNode + ',' + toNode;
  for ( var k in this.edges ) {
    if ( k === lookUp) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges['' + fromNode + ',' + toNode] = {fromNode, toNode};
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var lookUp = '' + fromNode + ',' + toNode;
  debugger;
  for ( var k in this.edges ) {
    debugger;
    if ( k === lookUp) {
      debugger;
      delete this.edges[k];
      return;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


