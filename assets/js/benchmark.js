let recipes = null

const getData = async () => {
	await fetch("https://projet07.netlify.app/assets/data/db.js")
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