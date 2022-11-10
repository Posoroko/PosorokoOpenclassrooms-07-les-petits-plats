import { addToTagList } from "../liveData/liveData.js";
import { emptySearchBar } from "../components/filterSearchBar.js";

export const newFilterOption = (filter, collection, type) => {
    const newFilter = document.createElement('p');
    newFilter.classList.add('filterOption', "pointer");
    newFilter.setAttribute('data-type', type);
    newFilter.setAttribute('data-ref', type + "s");
    newFilter.innerText = filter;
    newFilter.id = filter;

    newFilter.addEventListener('click', (e) => {
        let elem = e.currentTarget
        addToTagList(elem.innerText, elem.getAttribute('data-type'));
        emptySearchBar(e.currentTarget);
    } );

    return newFilter;
}