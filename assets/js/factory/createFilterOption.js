import { addToTagList } from "../liveData/liveData.js";
import { emptySearchBar } from "../components/filterSearchBar.js";

export const newFilterOption = (filter, category, type) => {

    const newFilter = document.createElement('p');
    newFilter.classList.add('filterOption', "pointer");
    newFilter.setAttribute('data-type', type);
    newFilter.setAttribute('data-ref', category);
    newFilter.innerText = filter;
    newFilter.id = filter;

    newFilter.addEventListener('click', (e) => {
        let elem = e.currentTarget
        let ref = elem.getAttribute('data-ref');
        addToTagList(elem.innerText, elem.getAttribute('data-type'));
        emptySearchBar(ref);
    } );

    return newFilter;
}