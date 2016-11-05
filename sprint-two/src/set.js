var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item !== 'string') {
    return 'this function only accepts strings as arguments';
  }
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .add = linear
 * .contains = linear
 *. remove = linear
 */


// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = {};
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
//   this._storage[item] = item;
// };

// setPrototype.contains = function(item) {
//   if (this._storage[item] !== undefined) {
//     return true;
//   }
//   return false;
// };

// setPrototype.remove = function(item) {
//   delete this._storage[item];
// };