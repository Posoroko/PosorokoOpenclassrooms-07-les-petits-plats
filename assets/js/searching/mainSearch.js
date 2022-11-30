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

    let valid = false;
    //tis counter passes the index of the recipe being treated
    let counter = 0;
    // <=
    
    recipes.forEach( recipe => {
        let formatedRecipe = formatRecipe(recipe, counter);

        if(recipeContainsAllTags(formatedRecipe) == true ) {
            valid= true;
        }

        if(valid) {
            let index = searchQueryIsFoundInRecipe(searchQuery, formatedRecipe);
            if( index > -1) {

                injectRecipeToTheDom(recipes[index]);
                extractIngFilters(formatedRecipe.ingredients);
                extractAppFilters(formatedRecipe.appliance);
                extractUstFilters(formatedRecipe.ustensils);
            } 
        }
        counter++;
    });
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
    
    let recipeKeywords = recipe.ingredients.concat(recipe.appliance, recipe.ustensils);
    let allTagsAreFound = tagList.every(tag => recipeKeywords.includes(tag.value));

    return allTagsAreFound;

}