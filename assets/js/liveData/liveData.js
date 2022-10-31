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

export const updateSearchQuery = (string) => {
    searchQuery = string;
}

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