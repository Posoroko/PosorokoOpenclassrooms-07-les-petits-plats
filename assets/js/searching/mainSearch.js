import { recipes } from '../../data/db.js';
import { formatedRecipes } from '../liveData/defaultData.js';
import { resetSelectedFilters, searchQuery, tagList } from "../liveData/liveData.js";
import { extractIngFilters } from "./filterSearch.js";
import { extractAppFilters } from "./filterSearch.js";
import { extractUstFilters } from "./filterSearch.js";
import { strignifyRecipe } from "../tools/dataManipulation.js";
import { algoUsingNativeLoops } from "../config/config.js";
import { emptyCardCollection } from '../components/cardCollection.js';
import { injectRecipeToTheDom } from "../components/cardCollection.js";
import { emptyFilterList } from '../components/filterBoxes.js';
import { renderTagList } from '../components/tagList.js';

//HQ of searching
// loops through selectedRecipes to look for searchQuery.
// turn recipe[i] into string
// recipeString contains searchQuery ?
//  recipeString contains one of the tag?
    //=> recipe [i] is rendered in the dom
    // filters are extracted from recipe[i]
        //if filter is a tag, it's rendered invisible
    //lists of filters are updated
//recipe[i] !contains searchQuery => recipe[i] is deleted from selectedRecipes


export const mainSearch = () => {
    
    emptyFilterList("listOfIngredients");
    emptyFilterList("listOfAppliances");
    emptyFilterList("listOfUstensils");
    resetSelectedFilters();
    emptyCardCollection();

    renderTagList();
    

    if(algoUsingNativeLoops) {
        searchWithNativeLoops();
        return
    }
    searchWithArrayMethods();

}






const searchWithNativeLoops = () => {
    
    for(let i = 0; i < formatedRecipes.length; i++ ) {

        const recipe = formatedRecipes[i];
        
        if(recipeContainsAllTags(recipe) == false ) {
            continue;
        }

        let index = searchQueryIsFoundInRecipe(searchQuery, recipe);

        if( index > -1) {

            injectRecipeToTheDom(recipes[i]);
            extractIngFilters(recipe.ingredients);
            extractAppFilters(recipe.appliance);
            extractUstFilters(recipe.ustensils);
        } 
    }
}

const searchWithArrayMethods = () => {

    let valid = false;

    formatedRecipes.forEach( recipe => {

        if(recipeContainsAllTags(recipe) == true ) {
            valid = true;
        }
        if(valid) {
            let index = searchQueryIsFoundInRecipe(searchQuery, recipe);

            if( index > -1) {

                injectRecipeToTheDom(recipes[i]);
                extractIngFilters(recipe.ingredients);
                extractAppFilters(recipe.appliance);
                extractUstFilters(recipe.ustensils);
            } 
        }

    })

}

const searchQueryIsFoundInRecipe = (searchQuery, recipe) => {

    if(recipe.mainString.includes(searchQuery)) {
        return recipe.index
    }
    return -1;

}

const recipeContainsAllTags = (recipe) => {
    
    if(tagList.length == 0) {
        return true;
    }

    let allTagsFound = false
    
    for(let i = 0; i < tagList.length; i++) {
        let type = tagList[i].type;
        let tag = tagList[i].value;
        let keywords = [];

        let tagFound = false;

        switch(type) {

            case 'ingredient':

                keywords = recipe.ingredients;
                break;

            case 'appliance':
                keywords.push(recipe.appliance);
                break;

            case 'ustensil':
                keywords = recipe.ustensils
        }

        keywords.forEach( word => {
            
            if(word == tag) {
                tagFound = true;
            }
        })

        if(tagFound == false) {

            return false;
        }
    }

    return true;

    
    
}