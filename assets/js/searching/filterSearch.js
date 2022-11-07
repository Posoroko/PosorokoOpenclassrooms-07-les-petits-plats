import { appendNewFilter } from "../components/filterBoxes.js";
import { selectedIngredients, selectedAppliances, selectedUstensils, updateSelectedFilters, tagList } from "../liveData/liveData.js";

// these functions create new arrays of filters every time the list of recipes is updated

//here, ingredients must be an array of strings, not an array of objects
export const extractIngFilters = (ingredients) => {

    let there = false
    for(let i = 0; i < ingredients.length; i++) {

        tagList.forEach( tag => {
            if( tag.value == ingredients[i]) {
                there = true;
                return;
            }
        })
        if(there) continue;

        if(selectedIngredients.includes(ingredients[i])) {
            continue;
        }
        
        addFilter(ingredients[i], 'ingredients', "listOfIngredients", "ingredient");

    }

}

export const extractAppFilters = (appliance) => {

    let there = false;
    tagList.forEach(tag => {

        if(tag.value == appliance) {
            there = true;
        }
    })
    if(there) return;
    
    if(selectedAppliances.includes(appliance)) {
        return;
    }

    addFilter(appliance, "appliances", "listOfAppliances", "appliance");   
}

export const extractUstFilters = (ustensils) => {

    for(let i = 0; i < ustensils.length; i++) {
        
        let there = false;
        tagList.forEach( tag => {
            if(tag.value == ustensils[i]) {
                there = true;
                return;
            }
        })
        if(there) continue;

        if(selectedUstensils.includes(ustensils[i])) {
            continue;
        }
        addFilter(ustensils[i], 'ustensils', "listOfUstensils", "ustensil");
    }
}

//filter: value, array: array of active filters, collection: node where to append the filter, type: type of filter
const addFilter = (filter, array, collection, type) => {
    updateSelectedFilters[array](filter.toLowerCase());
    appendNewFilter(filter.toLowerCase(), collection, type);
}

const filterIsInTagList = (filter) => {
    if(tagList.length == 0) return false;
    

    for(let i = 0; i < tagList.length; i++) {
        if(filter == tagList[i].value) {
            return true;
        }
    }
    return false;
}