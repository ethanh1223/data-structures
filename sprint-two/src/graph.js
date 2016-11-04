

// Instantiate a new graph
var Graph = function() {
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
      delete this.edges[k];
      
      return;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var lookUp = '' + fromNode + ',' + toNode;
  fromNodeString = '' + fromNode;
  toNodeString = '' + toNode;
  for ( var k in this.edges ) {  
    if ( k === fromNodeString && this.edges[fromNodeString].indexOf(toNodeString) !== -1) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // this.edges['' + fromNode + ',' + toNode] = {fromNode, toNode};
  if ( Array.isArray(this.edges['' + fromNode]) ) {
    this.edges['' + fromNode].push('' + toNode);
  } else {
    this.edges['' + fromNode] = ['' + toNode];
  }

  if ( Array.isArray(this.edges['' + toNode]) ) {
    this.edges['' + toNode].push('' + fromNode);
  } else {
    this.edges['' + toNode] = ['' + fromNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  fromNodeString = '' + fromNode;
  toNodeString = '' + toNode;
  for ( var k in this.edges ) {    
    if ( k === fromNodeString && this.edges[fromNodeString].indexOf(toNodeString) !== -1) {
      toNodeIndex = this.edges[fromNodeString].indexOf(toNodeString);
      fromNodeIndex = this.edges[toNodeString].indexOf(fromNodeString);
      
      this.edges[fromNodeString].splice(toNodeIndex, 1);
      this.edges[toNodeString].splice(fromNodeIndex, 1);
      
    }
  }
  return;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


