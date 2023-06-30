import { CardPlat } from "./card-plat.js";

export function ingredients(recettes) {
    var data = [];
    recettes.forEach(function (elt) {
        elt.ingredients.forEach(function (item) {
            if (!data.includes(item.ingredient)) {
                data.push(item.ingredient);
            }
        });
    })
    tagIngredients(data);
    searchTag(data);
    selectTag()
}

export function appareils(recettes) {
    var data = [];
    recettes.forEach(function (elt) {
        console.log(elt);
        if (!data.includes(elt.appliance)) {
            data.push(elt.appliance);
            console.log(data);
        }
    })
    console.log(data);
    tagAppareils(data);
    searchTag(data);
    selectTag()
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
    searchTag(data);
    selectTag()
}

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

export function searchTag(dataTags) {
    var searchTag = document.querySelector('.search-tag');
    searchTag.addEventListener("keyup", (event) => {
        const result = dataTags.filter(item =>
            item.toLowerCase().includes(event.target.value.toLowerCase())
        );
        console.log(result);
        tagIngredients(result);
    })
}

export function selectTag() {
    var selectTag = document.querySelector('#option-ingredient');
    var chooseTag = document.querySelector('#choose-ingredient');
    selectTag.addEventListener("click", (event) => {
        console.log(event.target.outerText)
        chooseTag.innerHTML = event.target.outerText + '  ' + '<i class="fa fa-times-circle" aria-hidden="true"></i>';
        rechercheGeneraleByTag(event.target.outerText)
    })
}

export function rechercheGeneraleByTag(tag) {
    var data = document.getElementById('data');
    // var searchGeneral = document.getElementById('search-general');
    // searchGeneral.addEventListener("keyup", (event) => {
    //     console.log(event.target.value);
    //     if(event.target.value.length >= 3) {
    data.innerHTML = '';
    const result = recipes.filter(item =>
        item.ingredients.some(elt => elt.ingredient.toLowerCase().includes(tag.toLowerCase()))
    );
    CardPlat(result);
    ingredients(result);
    // } else {
    //     data.innerHTML = '';
    //     CardPlat(recipes);
    //     ingredients(recipes);
    // }


    // })

}