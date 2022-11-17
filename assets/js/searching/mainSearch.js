import { recipes } from '../../data/db.js';
import { resetSelectedFilters, searchQuery, tagList } from "../liveData/liveData.js";
import { extractIngFilters } from "./filterSearch.js";
import { extractAppFilters } from "./filterSearch.js";
import { extractUstFilters } from "./filterSearch.js";
import { emptyCardCollection } from '../components/cardCollection.js';
import { injectRecipeToTheDom } from "../components/cardCollection.js";
import { emptyFilterList } from '../components/filterBoxes.js';
import { renderTagList } from '../components/tagList.js';
import { formatRecipe } from '../liveData/defaultData.js';

export const mainSearch = () => {
    
    emptyFilterList("listOfIngredients");
    emptyFilterList("listOfAppliances");
    emptyFilterList("listOfUstensils");
    resetSelectedFilters();
    emptyCardCollection();

    renderTagList();

    searchWithArrayMethods();

}

const searchWithArrayMethods = () => {

    for(let i = 0; i < recipes.length; i++ ) {

        let formatedRecipe = formatRecipe(recipes[i], i);

        if(recipeContainsAllTags(formatedRecipe) == false ) {
            continue;
        }
        let index = searchQueryIsFoundInRecipe(searchQuery, formatedRecipe);
        if( index > -1) {

            injectRecipeToTheDom(recipes[index]);
            extractIngFilters(formatedRecipe.ingredients);
            extractAppFilters(formatedRecipe.appliance);
            extractUstFilters(formatedRecipe.ustensils);
        } 

    }

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