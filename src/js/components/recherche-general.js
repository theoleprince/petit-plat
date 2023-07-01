import {CardPlat} from './card-plat.js'
import { appareils, ingredients, ustensils } from './ingredient.js';
export function rechercheGenerale(recipesData) {
    var data = document.getElementById('data');
    var searchGeneral = document.getElementById('search-general');
    searchGeneral.addEventListener("keyup", (event) => {
        if(event.target.value.length >= 3) {
            data.innerHTML = '';
            const result = recipesData.filter(item => 
                item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                item.description.toLowerCase().includes(event.target.value.toLowerCase()) ||
                item.ingredients.some(elt => elt.ingredient.toLowerCase().includes(event.target.value.toLowerCase()))
           );
           CardPlat(result);
           ingredients(result);
           appareils(result)
           ustensils(result)
        } else {
            data.innerHTML = '';
            CardPlat(recipesData);
            ingredients(recipesData);
            appareils(recipesData)
            ustensils(recipesData)
        }
      
        
    })
    
}