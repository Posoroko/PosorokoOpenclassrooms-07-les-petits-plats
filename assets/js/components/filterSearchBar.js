import { filters } from '../dom/domElements.js'

// contails the DOM element 
export let activeBar = null;
// <=

let filterType = null;

export const activateFilterSearchBar = (clickedArrow) => {

    activeBar = clickedArrow.parentNode.querySelector('.input');
    filterType = activeBar.getAttribute('data-type');
    activeBar.setAttribute('contentEditable', 'true');
    activeBar.innerText = '';
    activeBar.focus();
    activeBar.addEventListener('keyup', (e) => {
        filterSearch(e.target, clickedArrow);
    } )
    activeBar.addEventListener('focusout', resetBarText );

}

export const deactivateFilterSearchBar = () => {
    console.log(filterType);
    activeBar.setAttribute('contenteditable', "false"),
    activeBar.innerText = filterType;
    activeBar = null;
    filterType = null;
}


const filterSearch = (bar, clickedArrow) => {

    let string = bar.innerText.toLowerCase();
    let listRef = clickedArrow.getAttribute('data-ref');
    console.log(string.charCodeAt(0), listRef);
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
    
    if(activeBar.innerText == "") {
        activeBar.innerText = filterType;
        return;
    }
    if(activeBar.innerText == filterType) {
        return;
    }
    if(activeBar.innerText.charCodeAt(0) == 10) {
        activeBar.innerText = filterType;
        return
    }
}