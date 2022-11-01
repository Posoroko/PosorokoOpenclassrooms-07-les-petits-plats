import { mainSearch } from "../searching/mainSearch.js";

// keeps track of the currently selected ingredients
export let selectedIngredients = [];
// <=

// keeps track of the currently selected appliances
export let selectedAppliances = [];
// <=

// keeps track of the currently selected ustensils
export let selectedUstensils = [];
// <=

//searchQuery from the main search bar
export let searchQuery = "";
// <=

//list of tags currently active
export let tagList = [];
// <=

export const updateSearchQuery = (string) => {
    searchQuery = string;
}
export const resetSearchQuery = () => {
    searchQuery = '';
    // console.log(searchQuery.charCodeAt(0))
}

//these trigger a new mainSearch that generates new selectedFilters arrays and selectedRecipe Array
export const addToTagList = (value, type) => {
    tagList.push({
        value: value,
        type: type
    });
    mainSearch();
}
export const removeFromTagList = (e) => {
    let index = e.currentTarget.getAttribute('data-index');
    tagList.splice(index, 1);
    console.log(tagList)
    mainSearch();
}
// <=

export const updateSelectedFilters = {
    ingredients: (ingredient) => {
        selectedIngredients.push(ingredient);
    },
    
    appliances: (appliance) => {
        selectedAppliances.push(appliance);
    },
    
    ustensils: (ustensil) => {
        selectedUstensils.push(ustensil);
    },
}

export const resetSelectedFilters = () => {
    selectedIngredients = [];
    selectedAppliances = [];
    selectedUstensils = [];
}