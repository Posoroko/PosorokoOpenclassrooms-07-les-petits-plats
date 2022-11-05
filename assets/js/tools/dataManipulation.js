let recipeString = true;

export const strignifyRecipe = (recipe) => {

    const name = recipe.name;
    const ingredients = recipe.ingredients;
    const description = recipe.description;

    let string = null

    string = name.concat(ingredients).concat(description);

    


    return string.toLowerCase();

}

export const strignifyIngredients = (arrayOfIngredientObj) => {

    let array = [];
    let ingredientString = "";

    arrayOfIngredientObj.forEach( obj => {
        array = [ ...array, obj.ingredient]
    });

    return ingredientString = array.join(" ");
}

export const arrayToLowerCase = (array) => {
    let newArray = [];

    array.forEach( elem => {
        newArray = [...newArray, elem.toLowerCase()];
    })

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