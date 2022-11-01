import { filters } from '../dom/domElements.js';
import { addToTagList } from '../liveData/liveData.js';
import { newFilterOption } from '../factory/createFilterOption.js';
import { activateFilterSearchBar } from './filterSearchBar.js';

//these functions handle the display of the filter boxes: open, close, swap arraows

const openFilterBox = (clickedArrow, ref, swapFor) => {

    closeOpenBoxes();
    clickedArrow.classList.replace('closedFilterBox', 'openFilterBox');
    swapArrows(clickedArrow, swapFor);
    document.getElementById(ref).style.display = "flex";
    activateFilterSearchBar(clickedArrow);
}

const closeFilterBox = (clickedArrow, ref, swapFor) => {
    clickedArrow.classList.replace('openFilterBox', 'closedFilterBox');

    swapArrows(clickedArrow, swapFor);
    document.getElementById(ref).style.display = "none";
}

const swapArrows = (clickedArrow, swapFor) => {
    clickedArrow.style.display = "none";
    document.getElementById(swapFor).style.display = "inline";
}


const closeOpenBoxes = () => {
    const expandLessArrows = document.querySelectorAll('.expandLess');
    expandLessArrows.forEach( arrow => {
        if(arrow.style.display == "inline") {
            arrow.click()
        }
    })
}

export const initiateFilterBoxes = () => {
    filters.expandMore.forEach( arrow => {
        arrow.addEventListener('click', (e) => {
            const clickedArrow = e.currentTarget;
            const ref = clickedArrow.getAttribute('data-ref');
            const swapFor = clickedArrow.getAttribute('data-swapFor');
            openFilterBox(clickedArrow, ref, swapFor);
        });
    });

    filters.expandLess.forEach( arrow => {
        arrow.addEventListener('click', (e) => {
            const clickedArrow = e.currentTarget;
            const ref = clickedArrow.getAttribute('data-ref');
            const swapFor = clickedArrow.getAttribute('data-swapFor');
            closeFilterBox(clickedArrow, ref, swapFor);
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