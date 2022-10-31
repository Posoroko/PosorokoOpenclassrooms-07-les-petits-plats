export const createRecipeCard = (recipe) => {
    const article = document.createElement("article");
    article.classList.add('recipeCard');

        const imgBox = document.createElement('div');
        imgBox.classList.add('imgBox');

    article.appendChild(imgBox);

        const figcaption = document.createElement('figcaption');
            const h3 = document.createElement('h3');

                const title = document.createElement('span');
                title.classList.add('title');
                title.innerText = recipe.name;

                const prepTime = document.createElement('span');
                prepTime.classList.add('prepTime');
                    
                    const icon = document.createElement('span');
                    icon.classList.add('icon');
                    icon.innerText = "schedule";

                    const minuts = document.createElement('span');
                    minuts.classList.add('minuts');
                    minuts.innerText = recipe.time + "min"
                
                prepTime.appendChild(icon);
                prepTime.appendChild(minuts);

            h3.appendChild(title);
            h3.appendChild(prepTime);
            
        figcaption.appendChild(h3);

            const ul = document.createElement('ul');
            ul.classList.add('ingredientList');

                for(let i = 0; i < recipe.ingredients.length; i++) {
                    const li = document.createElement('li');
                    let string = ''
                    if(recipe.ingredients[i].quantity) {
                        string = `${recipe.ingredients[i].ingredient}: ${recipe.ingredients[i].quantity}`
                        
                    }else if(recipe.ingredients[i].quantite){
                        string = `${recipe.ingredients[i].ingredient}: ${recipe.ingredients[i].quantite}`
                    }

                    

            // check if quantity needs units or not
                    if(recipe.ingredients[i].unit) {
                        string = `${string} ${recipe.ingredients[i].unit}`;
                    }

                    li.innerText = string
                    ul.appendChild(li);
                } 

            const p = document.createElement('p');
            p.classList.add('recipe');
            p.innerText = recipe.description;
        
        figcaption.appendChild(ul);
        figcaption.appendChild(p);

    article.appendChild(figcaption);

    return article
}
