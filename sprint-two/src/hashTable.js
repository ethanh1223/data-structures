var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var bucketContents = [];
  
  if ( bucket !== undefined ) {
    bucketContents = bucket;
    for ( var i = 0; i < bucketContents.length; i++ ) {
      if ( bucketContents[i][0] === k ) {
        bucketContents.splice(i, 1);
      }
    }
    bucketContents.push([k, v]);
  } else {
    bucketContents.push([k, v]);
  }
  
  this._storage.set(index, bucketContents);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if ( bucket === undefined ) {
    return undefined;
  }
  for ( var i = 0; i < bucket.length; i++ ) {
  
    if ( bucket[i][0] === k ) {

      return bucket[i][1];
    
    }
  
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  this._storage.each(function(e, i, a) {
    debugger;
    if ( i === index ) {
      a[i] = undefined;
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert = linear
 * .retrieve = linar
 * .remove = linear
*/

