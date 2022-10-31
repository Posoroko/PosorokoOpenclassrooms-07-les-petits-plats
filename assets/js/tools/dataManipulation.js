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


    return string.toLocaleLowerCase();

}

export const strignifyIngredients = (arrayOfIngredientObj) => {

    let array = [];
    let ingredientString = "";

    if(algoUsingNativeLoops == true) {
        //using native loops
        for (let i = 0; i < arrayOfIngredientObj.length; i++) {

            //creating the arry
            array = [ ...array, arrayOfIngredientObj[i].ingredient]
            
            return ingredientString += arrayOfIngredientObj[i].ingredient.toLocaleLowerCase();
        }
    }

    //using array methods
    arrayOfIngredientObj.forEach(element => array.push(element.ingredient));

    return ingredientString = array.join(" ");
}




export const indexOfObjWithParameter = (obj, arrayOfObj, property) => {
    for(let i = 0; i < arrayOfObj.length;i++) {

        if(arrayOfObj[i][property] == obj[property]) {
            return i;
        }

    }
}