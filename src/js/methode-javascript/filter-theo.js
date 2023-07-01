Array.prototype.filterTheo = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Cannot read property filter of null or undefined');
    }
    
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    
    return result;
  };

  // export default Array;