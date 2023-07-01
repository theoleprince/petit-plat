import { CardPlat } from "./card-plat.js";
import { rechercheGenerale } from "./recherche-general.js";
var dataIngredients = [];
var dataAppareils = [];
var dataUstensils = [];
export function ingredients(recettes) {
    var data = [];
    recettes.forEachTheo(function (elt) {
        elt.ingredients.forEachTheo(function (item) {
            if (!data.someTheo(elt => elt.toLowerCase().includesTheo(item.ingredient.toLowerCase()))) {
                data.pushTheo(item.ingredient);
            }
        });
    })
    tagIngredients(data);
    searchTag(data);
    // selectTag()
}

export function appareils(recettes) {
    var data = [];
    recettes.forEachTheo(function (elt) {
        if (!data.includesTheo(elt.appliance)) {
            data.pushTheo(elt.appliance);
        }
    })
    tagAppareils(data);
    searchTagAppareil(data);
}

export function ustensils(recettes) {
    var data = [];
    recettes.forEachTheo(function (elt) {
        elt.ustensils.forEach(function (item) {
            if (!data.includesTheo(item)) {
                data.pushTheo(item);
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
    ingredients.forEachTheo(function (elt) {
        const li = `
                <li class="col-4">${elt}</li>
    `
        dataIngrdient.innerHTML += li;
    });

}

export function searchTag(dataTags) {
    var searchTag = document.querySelector('.search-tag');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filterTheo(item =>
            item.toLowerCase().includesTheo(event.target.value.toLowerCase())
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
        if (!data.someTheo(elt => elt.toLowerCase().includesTheo(item.toLowerCase()))) {
            data.pushTheo(item);
        }
        data.forEachTheo(item => {
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
    appareils.forEachTheo(function (elt) {
        const li = `
                <li class="col-4">${elt}</li>
    `
    dataAppareil.innerHTML += li;
    });

}
export function searchTagAppareil(dataTags) {
    const searchTag = document.querySelector('.search-tag-appareil');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filterTheo(item =>
            item.toLowerCase().includesTheo(event.target.value.toLowerCase())
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
        if (!data.someTheo(elt => elt.toLowerCase().includesTheo(item.toLowerCase()))) {
            data.pushTheo(item);
        }
        data.forEachTheo(item => {
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
    ustensils.forEachTheo(function (elt) {
        const li = `
                <li class="col-4">${elt}</li>
    `
        dataUstensil.innerHTML += li;
    });

}

export function searchTagUstensil(dataTags) {
    var searchTag = document.querySelector('.search-tag-ustensil');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filterTheo(item =>
            item.toLowerCase().includesTheo(event.target.value.toLowerCase())
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
        if (!data.someTheo(elt => elt.toLowerCase().includesTheo(item.toLowerCase()))) {
            data.pushTheo(item);
        }
        data.forEachTheo(item => {
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
    const resultIngre = dataRecipes.filterTheo(item =>
        tagIngredients.length > 0 ?  tagIngredients.everyTheo(element => item.ingredients.someTheo(elt => elt.ingredient.toLowerCase().includesTheo(element.toLowerCase()))) : true
    );
console.log(resultIngre)
    const resultApp = resultIngre.filterTheo(item =>
        tagAppareils.length > 0 ? tagAppareils.everyTheo(element => item.appliance.toLowerCase().includesTheo(element.toLowerCase())) : true
    );
    console.log(resultApp)
    const resultUst = resultApp.filterTheo(item =>
        tagUstensils.length > 0 ? tagUstensils.everyTheo(element => item.ustensils.someTheo(elt => elt.toLowerCase().includesTheo(element.toLowerCase()))) : true
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
    let IngreItems = document.querySelectorAll(".ingr");
    IngreItems.forEachTheo((item, i) => {
        item.addEventListener("click", (event) => {
            chooseTag.innerHTML = '';
            dataIngredients.spliceTheo(i, 1);
            dataIngredients.forEachTheo(item => {
                chooseTag.innerHTML += `<span class="bg-primary card-tag-choose"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            })
            console.log(dataIngredients)
            ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
            
        });
    });
}

export function retirerTagAppareil() {
    var chooseTag = document.querySelector('#choose-appareil');
    let AppItems = document.querySelectorAll(".app");
    AppItems.forEachTheo((item, i) => {
        item.addEventListener("click", (event) => {
            chooseTag.innerHTML = '';
            dataAppareils.spliceTheo(i, 1);
            dataAppareils.forEachTheo(item => {
                chooseTag.innerHTML += `<span class="bg-primary card-tag-choose"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            })
            console.log(dataAppareils)
            ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
            
        });
    });
}

export function retirerTagUstensil() {
    var chooseTag = document.querySelector('#choose-ustensil');
    let UstItems = document.querySelectorAll(".ust");
    UstItems.forEachTheo((item, i) => {
        item.addEventListener("click", (event) => {
            chooseTag.innerHTML = '';
            dataUstensils.spliceTheo(i, 1);
            dataUstensils.forEachTheo(item => {
                chooseTag.innerHTML += `<span class="bg-warning card-tag-choose"> ${item} <i class="fa fa-times-circle ingr" data-media-name="${item}";  aria-hidden="true"></i></span>`;
            })
            ActualiseGeneraleByTag(dataIngredients, dataAppareils, dataUstensils);
            
        });
    });
}