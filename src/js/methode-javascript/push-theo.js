Array.prototype.pushTheo = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }
    return this.length;
  };
  
  // export default Array;