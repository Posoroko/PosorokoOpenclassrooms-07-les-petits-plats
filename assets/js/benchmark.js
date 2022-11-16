let recipes = [{
	"id": 1,
	"name" : "Limonade de Coco",
	"servings" : 1,
	"ingredients": [
		{
			"ingredient" : "Lait de coco",
			"quantity" : 400,
			"unit" : "ml"
		},
		{
			"ingredient" : "Jus de citron",
			"quantity" : 2
		},
		{
			"ingredient" : "Crème de coco",
			"quantity" : 2,
			"unit" : "cuillères à soupe"
		},
		{
			"ingredient" : "Sucre",
			"quantity" : 30,
			"unit" : "grammes"
		},
		{
			"ingredient": "Glaçons"
		}
	],
	"time": 10,
	"description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
	"appliance": "Blender",
	"ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
}];

const methods = document.getElementById('methods');
const loops = document.getElementById('loops');

let listOfRecipes = recipes;


const createRecipeList = () => {
	for(let i = 0; i < 16; i++) {
		listOfRecipes = [...listOfRecipes, ... listOfRecipes];
	}
	console.log('number of recipes: ', listOfRecipes.length);

}
createRecipeList();

const getData = async () => {
	await fetch("https://projet07.netlify.app/assets/data/db.json")
		.then( res => res.json())
		.then( data =>  {
			recipes = data;
			console.Log(recipes)
		} )
		.catch( err => console.log(err.message))
}

export const runTest = async () => {

	getData();

}

const formatWithMethods = (recipe) => {
    
    //array of sipmplified ingredients
    let ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
    let appliance = recipe.appliance.toLowerCase();
    let ustensils = recipe.ustensils.map(ust => ust = ust.toLowerCase());

    let customRecipe = {
        mainString: `${recipe.name.toLowerCase()} ${recipe.description.toLowerCase()} ${ingredients}`,
        ingredients: ingredients,
        appliance: appliance,
        ustensils: ustensils,
    }
 
    return customRecipe;

}

const formatWithLoops = (recipe) => {
	let ingredients = [];
	let appliance = recipe.appliance.toLowerCase();
	let ustensils = [];

	for(let i = 0; i < recipe.ingredients.length; i++) {
		ingredients.push(recipe.ingredients[i].ingredient);
	}
	for(let i = 0; i < recipe.ustensils.length; i++) {
		ustensils.push(recipe.ustensils[i]);
	}

	let customRecipe = {
        mainString: `${recipe.name.toLowerCase()} ${ingredients} ${ingredients}`,
        ingredients: ingredients,
        appliance: appliance,
        ustensils: ustensils,
    }
	return customRecipe;
}

const queryIsInRecipe = (mainString, query) => {
	if(mainString.includes(query)) {
		return true;
	}
	return false;
}

const searchWithMethods = (query) => {
	console.time("test with aray methods: ");
	listOfRecipes.forEach(element => {
		let recipe = formatWithMethods(element);
		if( queryIsInRecipe(recipe.mainString, query)) {
		}

	});
	console.timeEnd("test with aray methods: ");
} 
const searchWithLoops = (query) => {
	console.time("test with native loops: ");
	for(let i = 0; i < listOfRecipes.length; i++) {

		let recipe = formatWithLoops(listOfRecipes[i]);
		if( queryIsInRecipe(recipe.mainString, query)) {
		}

	}
	console.timeEnd("test with native loops: ");
}

methods.addEventListener('click', () => {
	searchWithMethods('limonade');
});
loops.addEventListener('click', () => {
	searchWithLoops('limonade');
})

// 85 978 475

// 957 642 006