var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node) {
  for ( var k in this.nodes ) {
    if ( k === node.toString() ) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for ( var k in this.nodes ) {
    if ( this.nodes[k][node] ) {
      delete this.nodes[k][node];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) { 
  if ( this.nodes[fromNode].hasOwnProperty(toNode) ) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
  debugger;
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb) {
  for ( var k in this.nodes ) {
    cb(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


