export const main = document.getElementById('main');

export const mainSearchBar = document.getElementById('mainSearchBar');

export const tagBox = document.getElementById('tagBox');



export const filters = {
    filters: document.querySelectorAll('.filter'),
    ingredients: document.getElementById('ingredients'),
    appareils: document.getElementById('appareils'),
    ustensiles: document.getElementById('ustensiles'),
    title: document.querySelectorAll('filterTitle'),
    expandMore: document.querySelectorAll('.expandMore'),
    expandLess: document.querySelectorAll('.expandLess'),
    optionBox: document.getElementById('optionBox'),
    listOfIngredients: document.getElementById('listOfIngredients'),
    listOfAppliances: document.getElementById('listOfAppliances'),
    listOfUstensils: document.getElementById('listOfUstensils'),
}


const cardCollection = document.querySelector('.cardCollection');


export const algoToggler = {
    togglerBox: document.querySelector('.togglerBox'),
    on: document.querySelector('.algoTogglerOn'),
    off: document.querySelector('.algoTogglerOff')
}