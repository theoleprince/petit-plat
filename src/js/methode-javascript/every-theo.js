/* 
  La méthode everyTheo() permet de tester si tous les éléments d'un tableau
 vérifient une condition donnée par une fonction en argument. 
 Cette méthode renvoie un booléen pour le résultat du test.
*/
Array.prototype.everyTheo = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  // export default Array;