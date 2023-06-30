import {CardPlat} from './components/card-plat.js'
import { appareils, ingredients, ustensils } from './components/ingredient.js';
import { rechercheGenerale } from './components/recherche-general.js';
import {toggleDropdown, toggleDropdownAppareil, toggleDropdownUstensil} from './components/toggle-dropdown.js'
CardPlat(recipes);
toggleDropdown();
toggleDropdownAppareil();
toggleDropdownUstensil();
rechercheGenerale();
ingredients(recipes)
appareils(recipes)
ustensils(recipes)