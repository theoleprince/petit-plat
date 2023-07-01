
export function CardPlat(recipes) {
    var data = document.getElementById('data');
    var card = ''
    if(recipes && recipes.length>0) {
      recipes.forEach(function(elt) {
        card = `<div class="col-md-4">
        <div class="card mb-3">
            <div class="card-header bg-secondary" style="height: 12rem;"></div>
            <div class="card-body">
               <div class="row">
                <div class="col">
                    <h5 class="card-title">${elt.name}</h5>
                    <p class="card-text">
                        <ul class="list-group list-group-flush">
                        ${listIngredients(elt.ingredients)}
                        </ul>
                    </p>
                </div>
      
                <div class="col">
                    <h5 class="card-title text-end"><i class="fa fa-clock-o"></i> ${elt.time} min</h5>
                    <p class="card-text">${truncate(elt.description, 140)}</p>
                </div>
               </div>
            </div>
        </div>
      </div>`;
        data.innerHTML += card;
      });
    } else {
      card =  "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
      data.innerHTML = card;
    }
   
}

export function listIngredients(ingredients) {
    var ingredientsHtml = ""; // variable qui va contenir les balises li générées
    ingredients.forEach(function(elt) {
      ingredientsHtml += `<li>${elt.ingredient}</li>`;
    });
    return ingredientsHtml; // on retourne la variable qui contient les balises li générées
  }

  export function truncate(str, limit) {
    if (str.length > limit) {
      return str.substring(0, limit) + "...";
    } else {
      return str;
    }
  }