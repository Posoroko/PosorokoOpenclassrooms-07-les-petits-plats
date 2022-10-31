import { createRecipeCard } from '../factory/createRecipeCard.js'


//replaces the displayed card collection with a new empty one
export const emptyCardCollection = () => {
    const oldCollection = document.querySelector('.cardCollection');

    const section = document.createElement('section');
    section.classList.add('cardCollection');

    oldCollection.replaceWith(section);
}
// <=

export const injectRecipeToTheDom = (recipe) => {
    const collection = document.querySelector('.cardCollection');

    collection.appendChild(createRecipeCard(recipe));
}
