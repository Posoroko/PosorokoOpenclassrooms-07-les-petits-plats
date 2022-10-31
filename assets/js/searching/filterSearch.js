import { recipes } from "../../data/db.js";
import { appendNewFilter } from "../components/filterBoxes.js";
import { selectedIngredients, selectedAppliances, selectedUstensils, updateSelectedFilters } from "../liveData/liveData.js";


// these functions create new arrays of filters every time the list of recipes is updated

export const searchIngFilters = (recipe) => {
    if(selectedIngredients) {
        for(let i = 0; i < selectedIngredients.length; i++) {
    
            console.log(selectedIngredients[0])
    
            for(let j = 0; j < recipe.ingredients.length; j++ ) {
    
                if( selectedIngredients[i] != recipe.ingredients[j].ingredient) {
                    console.log(recipe.ingredients[j].ingredient)
                    updateSelectedFilters.ingredients(recipe.ingredients[j].ingredient);
                    appendNewFilter(recipe.ingredients[j].ingredient, "listOfIngredients");
                    
                }
                break;
            }
    FFFUUUCCCKKK TTTHHHAATTTT
        }
    }else {
        console.log(recipe.ingredients[j].ingredient)
        updateSelectedFilters.ingredients(recipe.ingredients[j].ingredient);
        appendNewFilter(recipe.ingredients[j].ingredient, "listOfIngredients");
    }
// je sais pas si la boucle est dans le bon sens.. la recette ou la grande liste en premier? 
    
}

export const searchAppFilters = (recipe) => {

    for(let j = 0; j < selectedAppliances.length; j++ ) {
            console.log('eric')
        if(recipe.appliance == selectedAppliances[j] ) {
            break;
        }
        updateSelectedFilters.appliances(recipe.appliance);
        appendNewFilter(recipe.appliance, "listOfAppliances");
    }
    
}

export const searchUstFilters = (recipe) => {
    
    let ustensils = recipe.ustensils;

    for(let i = 0; i < ustensils.length; i++) {
        
        for(let j = 0; j < selectedUstensils.length; j++ ) {
            
            if(ustensils[i] == selectedUstensils[j] ) {
                
                break;
            }
            updateSelectedFilters.ustensils(ustensils[i]);
            appendNewFilter(recipe.ustensils[i], "listOfUstensils");
        }
        
        
        
    }
    
    
}