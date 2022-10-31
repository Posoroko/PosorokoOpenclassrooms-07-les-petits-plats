import { recipes } from '../../data/db.js';
import { resetSelectedFilters, searchQuery } from "../liveData/liveData.js";
import { searchIngFilters } from "./filterSearch.js";
import { searchAppFilters } from "./filterSearch.js";
import { searchUstFilters } from "./filterSearch.js";
import { strignifyRecipe } from "../tools/dataManipulation.js";
import { algoUsingNativeLoops } from "../config/config.js";
import { emptyCardCollection } from '../components/cardCollection.js';
import { injectRecipeToTheDom } from "../components/cardCollection.js";
import { emptyFilterList } from '../components/filterBoxes.js';

//HQ of searching
// loops through selectedRecipes to look for searchQuery.
// recipe[i] into string
// recipe[i] contains searchQuery => recipe [i] is rendered in the dom
    // filters are extracted from recipe[i]
    //lists of filters are updated
//recipe[i] !contains searchQuery => recipe[i] is deleted from selectedRecipes


export const mainSearch = () => {
    emptyFilterList("listOfIngredients");
    emptyFilterList("listOfAppliances");
    emptyFilterList("listOfUstensils");
    resetSelectedFilters();
    emptyCardCollection();
    

    if(algoUsingNativeLoops) {
        searchWithNativeLoops();
        return
    }
    searchWithArrayMethods();

}

const searchWithNativeLoops = () => {
    
    for(let i = 0; i < recipes.length; i++ ) {

        const recipeString = strignifyRecipe(recipes[i]);

        if(searchQueryIsFoundInRecipe(searchQuery, recipeString)) {
            injectRecipeToTheDom(recipes[i]);
            searchIngFilters(recipes[i]);
            searchAppFilters(recipes[i]);
            searchUstFilters(recipes[i]);
        } 
    }
}

const searchWithArrayMethods = () => {

}

const searchQueryIsFoundInRecipe = (searchQuery, recipeString) => {

    if(recipeString.includes(searchQuery)) {
        return true
    }

}
