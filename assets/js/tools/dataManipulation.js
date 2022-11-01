import { algoUsingNativeLoops } from "../config/config.js";

let recipeString = true;

export const strignifyRecipe = (recipe) => {

    const name = recipe.name;
    const ingredients = recipe.ingredients;
    const description = recipe.description;

    let string = null

    if(algoUsingNativeLoops == true) {

        string = `${name} ${strignifyIngredients(ingredients)} ${description}`;

    }else {

        string = name.concat(ingredients).concat(description);

    }


    return string.toLowerCase();

}

export const strignifyIngredients = (arrayOfIngredientObj) => {

    let array = [];
    let ingredientString = "";

        //using native loops
        if(algoUsingNativeLoops) {
            for (let i = 0; i < arrayOfIngredientObj.length; i++) {

                //creating the arry
                array = [ ...array, arrayOfIngredientObj[i].ingredient]
                ingredientString = ingredientString + " " + arrayOfIngredientObj[i].ingredient.toLowerCase();
            }
        
 
        return ingredientString;
        
    }

    //using array methods

    for(let i = 0; i < arrayOfIngredientObj.length; i++) {
        array = [ ...array, arrayOfIngredientObj[i].ingredient]
    }

    
    

    return ingredientString = array.join(" ");
}

export const arrayToLowerCase = (array) => {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        newArray = [...newArray, array[i].toLowerCase()];
    }
    return newArray;
}

//takes an array of objects and creates an array of strings with ingredients name
export const extractIngredients = (arrayOfIngredients) => {
    let array = [];
    for(let i = 0; i < arrayOfIngredients.length; i++) {
        array = [ ...array, arrayOfIngredients[i].ingredient.toLowerCase()];
    }
    return array;
}   


export const indexOfObjWithParameter = (obj, arrayOfObj, property) => {
    for(let i = 0; i < arrayOfObj.length;i++) {

        if(arrayOfObj[i][property] == obj[property]) {
            return i;
        }

    }
}