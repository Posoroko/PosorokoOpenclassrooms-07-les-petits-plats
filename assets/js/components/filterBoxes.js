import { filters } from '../dom/domElements.js';
import { newFilterOption } from '../factory/createFilterOption.js';
import { arrayToLowerCase } from '../tools/dataManipulation.js';
import { activateFilterSearchBar, resetFiltersWhenBoxIsClosed } from './filterSearchBar.js';

//these functions handle the display of the filter boxes: open, close, swap arraows

let thereIsAnOpenBox = false;

const openFilterBox = (boxToBeOpen) => {
    
    if(thereIsAnOpenBox) {
        closeTheOpenBox();
    }
    thereIsAnOpenBox = true;

    boxToBeOpen.classList.replace('closedBox', 'openBox');
    activateFilterSearchBar(boxToBeOpen);
    
}

const closeTheOpenBox = () => {
    const boxToBeClosed = document.querySelector('.openBox');
    boxToBeClosed.classList.replace('openBox', 'closedBox');
    thereIsAnOpenBox = false;
    resetFiltersWhenBoxIsClosed(boxToBeClosed);
}





export const initiateFilterBoxes = () => {
    filters.expandMore.forEach( arrow => {
        arrow.addEventListener('click', (e) => {
            const boxToBeOpen = document.getElementById(e.currentTarget.getAttribute('data-ref'));
            openFilterBox(boxToBeOpen);
        });
    });

    filters.expandLess.forEach( arrow => {
        arrow.addEventListener('click', (e) => {
            closeTheOpenBox();
        });
    });

}

//this appends a new span containing the selected filter. "collection" is identified by its id
export const appendNewFilter = (filter, collection, type) => {

    filters[collection].appendChild(newFilterOption(filter, collection, type));
    
}



//empties the specified filter list
export const emptyFilterList = (id) => {
    document.getElementById(id).innerHTML = "";
}
// <=