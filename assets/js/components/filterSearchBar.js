import { filters } from '../dom/domElements.js'

// contails the DOM element 
export let activeBar = null;
// <=

let filterType = null;
let displayName = null;

export const activateFilterSearchBar = (clickedArrow) => {

    activeBar = clickedArrow.parentNode.querySelector('.input');
    filterType = activeBar.getAttribute('data-type');
    displayName = activeBar.getAttribute('data-displayName');

    activeBar.setAttribute('contentEditable', 'true');
    activeBar.innerText = '';
    activeBar.focus();
    activeBar.addEventListener('keyup', (e) => {
        filterSearch(e.target, clickedArrow);
    } )
    activeBar.addEventListener('focusout', resetBarText );

    activeBar.addEventListener('click', () => {
        if(activeBar.innerText == activeBar.getAttribute('data-displayName')) {
            activeBar.innerText = '';
        }
    })

}

export const deactivateFilterSearchBar = () => {
    activeBar.setAttribute('contenteditable', "false"),
    activeBar.innerText = displayName;
    activeBar = null;
    filterType = null;
}


export const filterSearch = (bar, clickedArrow) => {

    let string = bar.innerText.toLowerCase();
    let listRef = clickedArrow.getAttribute('data-ref');
    let filterNodes = filters[listRef].children;
    
    for(let i = 0; i < filterNodes.length; i++) {
        let option = filterNodes[i];

        if(!option.id.includes(string)) {
            option.style.display = "none";
        }else {
            option.style.display = "inline-block";
        }
    }

}

const resetBarText = () => {
    // if(boxClosed == true) {

    // }
    
    if(activeBar.innerText == "") {
        activeBar.innerText = displayName;
        return;
    }
    if(activeBar.innerText == displayName) {
        return;
    }
    if(activeBar.innerText.charCodeAt(0) == 10) {
        activeBar.innerText = displayName;
        return
    }
}