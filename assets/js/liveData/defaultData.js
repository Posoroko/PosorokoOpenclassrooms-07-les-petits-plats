import { recipes } from "../../data/db.js"

//this formated recipe list is used for searching. when a recipe is selected, the original one is obtained with its index
export let formatedRecipes = [];
// <=

export const buildArrayOfFormatedRecipes = () => {

    for(let i = 0; i < recipes.length; i++) {
        formatedRecipes = [ ...formatedRecipes , formatRecipe(recipes[i], i)]
    }
    
}

export const formatRecipe = (recipe, index) => {
    
    //array of sipmplified ingredients
    let ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
    let appliance = recipe.appliance.toLowerCase();
    let ustensils = recipe.ustensils.map(ust => ust = ust.toLowerCase());

    let customRecipe = {
        mainString: `${recipe.name.toLowerCase()} ${recipe.description.toLowerCase()} ${ingredients}`,
        ingredients: ingredients,
        appliance: appliance,
        ustensils: ustensils,
        index: index
    }
 
    return customRecipe;

}