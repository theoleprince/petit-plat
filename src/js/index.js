import {CardPlat} from './components/card-plat.js'
import { appareils, ingredients, retirerTag, selectTag, selectTagAppareil, selectTagUstensil, ustensils } from './components/ingredient.js';
import { rechercheGenerale } from './components/recherche-general.js';
import {toggleDropdown, toggleDropdownAppareil, toggleDropdownUstensil} from './components/toggle-dropdown.js'
CardPlat(recipes);
retirerTag(null);
toggleDropdown();
toggleDropdownAppareil();
toggleDropdownUstensil();
rechercheGenerale(recipes);
ingredients(recipes);
appareils(recipes);
ustensils(recipes);
selectTag();
selectTagAppareil();
selectTagUstensil();
