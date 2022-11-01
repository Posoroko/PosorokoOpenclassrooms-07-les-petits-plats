import { filters } from '../dom/domElements.js'


export const activateFilterSearchBar = (clickedArrow) => {

    let activeBar = clickedArrow.parentNode.querySelector('.input');

    activeBar.setAttribute('contentEditable', 'true');
    activeBar.innerText = '';
    activeBar.focus();
    activeBar.addEventListener('keyup', (e) => {
        filterSearch(e.target, clickedArrow);
    } )

}


const filterSearch = (bar, clickedArrow) => {

    let string = bar.innerText;
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