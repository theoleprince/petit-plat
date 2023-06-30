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
            chooseTag.innerHTML += item + ` <i class="fa fa-times-circle" onclick="retirerTag(item)"  aria-hidden="true"></i>`;
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
    selectTagIng.addEventListener("click", (event) => {
        chooseTag.innerHTML = '';
        const item = event.target.outerText;
        if (!data.some(elt => elt.toLowerCase().includes(item.toLowerCase()))) {
            data.push(item);
        }
        data.forEach(item => {
            chooseTag.innerHTML += item + ` <i class="fa fa-times-circle" onclick="retirerTag(item)"  aria-hidden="true"></i>`;
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
    selectTagIng.addEventListener("click", (event) => {
        chooseTag.innerHTML = '';
        const item = event.target.outerText;
        if (!data.some(elt => elt.toLowerCase().includes(item.toLowerCase()))) {
            data.push(item);
        }
        data.forEach(item => {
            chooseTag.innerHTML += item + ` <i class="fa fa-times-circle" onclick="retirerTag(item)"  aria-hidden="true"></i>`;
        })

        dataUstensils = data;
        ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
        // retirerTag(data)
    });
}

export function ActualiseGeneraleByTag(ingredientsData, appareilsData, ustensilsData) {
   let tagIngredients = Array.from(ingredientsData)
   let tagAppareils = Array.from(appareilsData)
   let tagUstensils = Array.from(ustensilsData)
    console.log(`Ingredient ${tagIngredients}, Appareils ${tagAppareils}, Ustensils ${tagUstensils}`)
    var data = document.getElementById('data');
    var dataRecipes = recipes;
    data.innerHTML = '';
    const resultIngre = dataRecipes.filter(item =>
        tagIngredients.length > 0 ?  tagIngredients.every(element => item.ingredients.some(elt => elt.ingredient.toLowerCase().includes(element.toLowerCase()))) : true
    );
    console.log('resultIngre', resultIngre)

    const resultApp = resultIngre.filter(item =>
        tagAppareils.length > 0 ? tagAppareils.every(element => item.appliance.toLowerCase().includes(element.toLowerCase())) : true
    );
    console.log('resultApp', resultApp)

    const resultUst = resultApp.filter(item =>
        tagUstensils.length > 0 ? tagUstensils.every(element => item.ustensils.some(elt => elt.toLowerCase().includes(element.toLowerCase()))) : true
    );
    console.log('resultUst', resultUst);

    CardPlat(resultUst);
    ingredients(resultUst);
    appareils(resultUst);
    ustensils(resultUst);
    rechercheGenerale(resultUst);
}

export function retirerTag(data) {
    console.log(data)
    // var documentIDClose = document.querySelector(idClose);
    // var documentIDChooseTag = document.querySelector(idChooseTag);
    // documentIDClose.addEventListener("click", (event) => {
    //     console.log(event)
    // })
}