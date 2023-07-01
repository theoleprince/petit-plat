Array.prototype.someTheo = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    // Récupération de l'objet array
    const array = Object(this);
  
    // Conversion de la valeur de thisArg
    const context = thisArg || window;
  
    // Parcours de chaque élément de l'array
    for (let i = 0; i < array.length; i++) {
      // Appel de la fonction de rappel avec la valeur actuelle, l'indice et l'array
      if (callback.call(context, array[i], i, array)) {
        return true;
      }
    }
  
    // Aucun élément ne satisfait la condition dans le callback, retourne false
    return false;
  };
  // export default Array;