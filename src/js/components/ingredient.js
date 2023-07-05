import { CardPlat } from "./card-plat.js";
import { rechercheGenerale } from "./recherche-general.js";
var dataIngredients = [];
var dataAppareils = [];
var dataUstensils = [];
export function ingredients(recettes) {
    var data = [];
    recettes.forEach(function (elt) {
        elt.ingredients.forEach(function (item) {
            if (!data.some(elt => elt.toLowerCase().includes(item.ingredient.toLowerCase()))) {
                data.push(item.ingredient);
            }
        });
    })
    tagIngredients(data);
    searchTag(data);
    // selectTag()
}

export function appareils(recettes) {
    var data = [];
    recettes.forEach(function (elt) {
        if (!data.includes(elt.appliance)) {
            data.push(elt.appliance);
        }
    })
    tagAppareils(data);
    searchTagAppareil(data);
}

export function ustensils(recettes) {
    var data = [];
    recettes.forEach(function (elt) {
        elt.ustensils.forEach(function (item) {
            if (!data.includes(item)) {
                data.push(item);
            }
        })
    })
    tagUstensils(data);
    searchTagUstensil(data);
}
// Ingredients
export function tagIngredients(ingredients) {
    var dataIngrdient = document.getElementById('option-ingredient');
    dataIngrdient.innerHTML = '';
    ingredients.forEach(function (elt) {
        const li = `
                <li class="col-4">${elt}</li>
    `
        dataIngrdient.innerHTML += li;
    });

}

export function searchTag(dataTags) {
    var searchTag = document.querySelector('.search-tag');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filter(item =>
            item.toLowerCase().includes(event.target.value.toLowerCase())
        );
        tagIngredients(result);
    })
}

export function selectTag() {
    var selectTag = document.querySelector('#option-ingredient');
    var chooseTag = document.querySelector('#choose-ingredient');
    var data = [];
    selectTag.addEventListener("click", (event) => {
        chooseTag.innerHTML = '';
        const item = event.target.outerText;
        if (!data.some(elt => elt.toLowerCase().includes(item.toLowerCase()))) {
            data.push(item);
        }
        data.forEach(item => {
            chooseTag.innerHTML += `<span class="bg-primary card-tag-choose mr-2"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
        })
        dataIngredients = data;
        ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
    });
}


// Appareils
export function tagAppareils(appareils) {
    var dataAppareil = document.getElementById('option-appareil');
    dataAppareil.innerHTML = '';
    appareils.forEach(function (elt) {
        const li = `
                <li class="col-4">${elt}</li>
    `
    dataAppareil.innerHTML += li;
    });

}
export function searchTagAppareil(dataTags) {
    const searchTag = document.querySelector('.search-tag-appareil');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filter(item =>
            item.toLowerCase().includes(event.target.value.toLowerCase())
        );
        tagAppareils(result);
    })
}

export function selectTagAppareil() {
    var selectTagIng = document.querySelector('#option-appareil');
    var chooseTag = document.querySelector('#choose-appareil');
    var data = [];
    var cpt = 0;
    selectTagIng.addEventListener("click", (event) => {
        chooseTag.innerHTML = '';
        const item = event.target.outerText;
        if (!data.some(elt => elt.toLowerCase().includes(item.toLowerCase()))) {
            data.push(item);
        }
        data.forEach(item => {
            chooseTag.innerHTML += `<span class="bg-success card-tag-choose mr-2"> ${item} <i class="fa fa-times-circle app" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            cpt +=1
        })
        dataAppareils = data;
        ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
    });
}


// Ustensils
export function tagUstensils(ustensils) {
    var dataUstensil = document.getElementById('option-ustensil');
    dataUstensil.innerHTML = '';
    ustensils.forEach(function (elt) {
        const li = `
                <li class="col-4">${elt}</li>
    `
        dataUstensil.innerHTML += li;
    });

}

export function searchTagUstensil(dataTags) {
    var searchTag = document.querySelector('.search-tag-ustensil');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filter(item =>
            item.toLowerCase().includes(event.target.value.toLowerCase())
        );
        tagUstensils(result);
    })
}

export function selectTagUstensil() {
    var selectTagIng = document.querySelector('#option-ustensil');
    var chooseTag = document.querySelector('#choose-ustensil');
    var data = [];
    var cpt = 0;
    selectTagIng.addEventListener("click", (event) => {
        chooseTag.innerHTML = '';
        const item = event.target.outerText;
        if (!data.some(elt => elt.toLowerCase().includes(item.toLowerCase()))) {
            data.push(item);
        }
        data.forEach(item => {
            chooseTag.innerHTML += `<span class="bg-warning card-tag-choose mr-2"> ${item} <i class="fa fa-times-circle ust" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            cpt +=1;
        });

        dataUstensils = data;
        ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
        // retirerTag(data)
    });
}

export function ActualiseGeneraleByTag(ingredientsData, appareilsData, ustensilsData) {
   let tagIngredients = Array.from(ingredientsData)
   let tagAppareils = Array.from(appareilsData)
   let tagUstensils = Array.from(ustensilsData)
    var data = document.getElementById('data');
    var dataRecipes = recipes;
    data.innerHTML = '';
    const resultIngre = dataRecipes.filter(item =>
        tagIngredients.length > 0 ?  tagIngredients.every(element => item.ingredients.some(elt => elt.ingredient.toLowerCase().includes(element.toLowerCase()))) : true
    );
console.log(resultIngre)
    const resultApp = resultIngre.filter(item =>
        tagAppareils.length > 0 ? tagAppareils.every(element => item.appliance.toLowerCase().includes(element.toLowerCase())) : true
    );
    console.log(resultApp)
    const resultUst = resultApp.filter(item =>
        tagUstensils.length > 0 ? tagUstensils.every(element => item.ustensils.some(elt => elt.toLowerCase().includes(element.toLowerCase()))) : true
    );
    console.log(resultUst)
    CardPlat(resultUst);
    ingredients(resultUst);
    appareils(resultUst);
    ustensils(resultUst);
    rechercheGenerale(resultUst);
    retirerTagIngredient();
    retirerTagAppareil();
    retirerTagUstensil();
}

export function retirerTagIngredient() {
    var chooseTag = document.querySelector('#choose-ingredient');
    let IngreItems = Array.from(document.querySelectorAll(".ingr"));
    IngreItems.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            chooseTag.innerHTML = '';
            dataIngredients.splice(i, 1);
            dataIngredients.forEach(item => {
                chooseTag.innerHTML += `<span class="bg-primary card-tag-choose"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            })
            console.log(dataIngredients)
            ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
            
        });
    });
}

export function retirerTagAppareil() {
    var chooseTag = document.querySelector('#choose-appareil');
    let AppItems = Array.from(document.querySelectorAll(".app"));
    AppItems.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            chooseTag.innerHTML = '';
            dataAppareils.splice(i, 1);
            dataAppareils.forEach(item => {
                chooseTag.innerHTML += `<span class="bg-primary card-tag-choose"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            })
            console.log(dataAppareils)
            ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
            
        });
    });
}

export function retirerTagUstensil() {
    var chooseTag = document.querySelector('#choose-ustensil');
    let UstItems = Array.from(document.querySelectorAll(".ust"));
    UstItems.forEach((item, i) => {
        item.addEventListener("click", (event) => {
            chooseTag.innerHTML = '';
            dataUstensils.splice(i, 1);
            dataUstensils.forEach(item => {
                chooseTag.innerHTML += `<span class="bg-warning card-tag-choose"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            })
            ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
            
        });
    });
}