import { renderNewCardCollection } from "../facftory/renderNewCardCollection.js"
import { replaceCardCollection } from "../components/cardCollection.js";
import { getRecipes } from "../db/getFilters.js";
import { mainSearch } from "./mainSearch.js"
import { applyTagFilters } from "./applyTagFilters.js"
import { indexOfObjWithParameter } from "../tools/dataManipulation.js";

// all recipes from DB
const allRecipes = getRecipes();

// list of currently displayed recipes
export let selectedRecipes = [];

let tagList = [];
let mainSearchQuery = "";

//becomes true when user has typed more than 3 characters
let isMainSearchActive = false;

//keeps track of the number of active tags
let numberOfTags = 0;

export const manageTagList = (tag, operation) => {
    
    switch(operation) {

        case "addTag":

            tagList.push(tag);
            numberOfTags++;
        break;

        case "deleteTag":
            tagList.splice(indexOfObjWithParameter(tag, tagList, "value"), 1);
            numberOfTags--;

        break;
    }
    createListOfRecipes()
}



export const manageMainSearchQuery = (inputString) => {

    if(inputString.length < 3) {

        //will trigger when the user deletes characters 
        if(isMainSearchActive) {
            replaceCardCollection(renderNewCardCollection(allRecipes));
            selectedRecipes = allRecipes;
            isMainSearchActive = false;
        }
        
        return
    }

    mainSearchQuery = inputString;
    isMainSearchActive = true;
    createListOfRecipes();
}


const createListOfRecipes = () => {

    let newList = allRecipes;
    if(isMainSearchActive) {
    
        newList = mainSearch(mainSearchQuery, newList);
    
    }

    if(numberOfTags > 0) {

        newList = applyTagFilters(tagList, newList);

    }
    
    
    selectedRecipes = newList;

    replaceCardCollection(renderNewCardCollection(selectedRecipes));
}



export const initiateRecipeList = () => {
    selectedRecipes = getRecipes();
}