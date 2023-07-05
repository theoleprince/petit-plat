Array.prototype.forEachTheo = function(callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  
//   var nums = [1, 2, 3, 4, 5];
// nums.forEachTheo(function(num, index) {
//   console.log(num, index);
// });
