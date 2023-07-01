Array.prototype.spliceTheo = function(start, deleteCount, ...items) {
    // Vérifier si le tableau est valide
    if (!Array.isArray(this)) {
      throw new TypeError("splice() doit être appelée sur un objet de type tableau.");
    }
  
    // Convertir les indices négatifs en indices positifs
    if (start < 0) {
      start = this.length + start;
      if (start < 0) {
        start = 0;
      }
    }
  
    // Si deleteCount est omis, supprimer jusqu'à la fin du tableau
    if (deleteCount === undefined) {
      deleteCount = this.length - start;
    }
  
    // Vérifier si deleteCount est valide
    if (deleteCount < 0) {
      deleteCount = 0;
    }
  
    // Copier les éléments à supprimer dans un tableau temporaire
    const removedItems = [];
    for (let i = 0; i < deleteCount; i++) {
      const index = start + i;
      if (index < this.length) {
        removedItems.push(this[index]);
      }
    }
  
    // Décaler les éléments du tableau vers la gauche pour remplacer les éléments supprimés
    const itemCount = items.length;
    const itemCountDiff = itemCount - deleteCount;
    const newLength = this.length + itemCountDiff;
    if (itemCountDiff < 0) {
      for (let i = start; i < newLength; i++) {
        const fromIndex = i + deleteCount;
        const toIndex = i + itemCount;
        if (fromIndex < this.length) {
          this[toIndex] = this[fromIndex];
        } else {
          delete this[toIndex];
        }
      }
    } else if (itemCountDiff > 0) {
      for (let i = newLength - 1; i >= start + itemCount; i--) {
        const fromIndex = i - itemCountDiff;
        const toIndex = i;
        if (fromIndex < this.length) {
          this[toIndex] = this[fromIndex];
        } else {
          delete this[toIndex];
        }
      }
    }
  
    // Insérer les nouveaux éléments dans le tableau
    for (let i = 0; i < itemCount; i++) {
      this[start + i] = items[i];
    }
  
    // Mettre à jour la longueur du tableau
    this.length = newLength;
  
    // Retourner les éléments supprimés
    return removedItems;
  };

  // export default Array;