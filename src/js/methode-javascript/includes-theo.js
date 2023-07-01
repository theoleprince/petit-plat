Array.prototype.includesTheo = function(searchElement, fromIndex) {
    // 1. Laisser O être ? 
    //    ToObject(this value).
    if (this == null) {
      throw new TypeError('"this" est nul ou non défini');
    }
  
    var o = Object(this);
  
    // 2. Laisser len être ? 
    //    ToLength(? Get(O, "length")).
    var len = o.length >>> 0;
  
    // 3. S'il n'y a pas d'arguments supplémentaires,
    //    laissez searchElement être undefined.
    if (len === 0) {
      return false;
    }
  
    // 4. Laissez n être ? ToInteger(fromIndex).
    //    (Si fromIndex est undefined, cette étape produit
    //    le même résultat que si elle était NaN).
    var n = fromIndex | 0;
  
    // 5. Si n ≥ 0, alors
    //  a. Laisser k être n.
    // 6. Sinon, n<0,
    //  a. Laisser k être len + n.
    //  b. Si k < 0, laissez k être 0.
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
    function sameValueZero(x, y) {
      return (
        x === y ||
        (typeof x === "number" &&
          typeof y === "number" &&
          isNaN(x) &&
          isNaN(y))
      );
    }
  
    // 7. Répétez, tant que k < len
    while (k < len) {
      // a. Laissez elementK être le résultat de ? 
      //    Get(O, ToString(k)).
      // b. Si SameValueZero(searchElement, elementK) est vrai, 
      //    retourne true.
      if (sameValueZero(o[k], searchElement)) {
        return true;
      }
      // c. Augmentez la valeur de k de 1.
      k++;
    }
  
    // 8. Retourner false.
    return false;
  };

  // export default Array;