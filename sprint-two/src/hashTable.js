var HashTable = function() {
  this._limit = 8;
  this._currentSize = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if ( bucket !== undefined ) {
    for ( var i = 0; i < bucket.length; i++ ) {
      if ( bucket[i][0] === k ) {
        bucket.splice(i, 1);
      }
    }
    bucket.push([k, v]);
  } else {
    bucket = [[k, v]];
  }
  
  this._storage.set(index, bucket);
  this._currentSize++;
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
    if ( i === index ) {
      a[i] = undefined;
      this._currentSize--;
    }
  });
};

HashTable.prototype.isEfficient = function() {
  if ( this._currentSize < .75 * this._limit && this._currentSize > .25 * this._limit ) {
    return true;
  } else {
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert = linear
 * .retrieve = linar
 * .remove = linear
*/

