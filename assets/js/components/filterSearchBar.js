import { filters } from '../dom/domElements.js'

// contails the DOM element 
export let activeBar = null;
// <=

let filterType = null;
let displayName = null;

export const activateFilterSearchBar = (openFilterBox) => {
    activeBar = openFilterBox.querySelector('.filterSearchBar');
    filterType = activeBar.getAttribute('data-type');
    activeBar.focus();
    
    activeBar.addEventListener('keyup', (e) => {
        filterSearch(e.target, openFilterBox.querySelector('.filterListBox'));
    } )

    activeBar.addEventListener('click', () => {
        if(activeBar.innerText == activeBar.getAttribute('data-displayName')) {
            activeBar.innerText = '';
        }
    })

}

export const deactivateFilterSearchBar = () => {
    activeBar = null;
    filterType = null;
}

export const emptySearchBar = (ref) => {

    const bar = document.getElementById(ref).querySelector('.filterSearchBar');
    bar.value = '';
    const listBox = document.getElementById(ref).querySelector('.filterListBox');
    filterSearch(bar, listBox);
}

export const filterSearch = (bar, listBox) => {
    
    let string = bar.value.toLowerCase();

    let filterNodes = listBox.children;

    for(let i = 0; i < filterNodes.length; i++) {
        let option = filterNodes[i];
        if(!option.id.includes(string)) {
            option.style.display = "none";
        }else {
            option.style.display = "inline-block";
        }
    }

}

export const resetFiltersWhenBoxIsClosed = (boxToBeClosed) => {
    
    const bar = boxToBeClosed.querySelector('.filterSearchBar');
    const listBox = boxToBeClosed.querySelector('.filterListBox')
    bar.value = '';
    //resets all filters by search for an empty string
    filterSearch(bar, listBox);
    // <=
}