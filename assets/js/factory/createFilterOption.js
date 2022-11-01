import { addToTagList } from "../liveData/liveData.js";

export const newFilterOption = (filter, collection, type) => {
    const newFilter = document.createElement('p');
    newFilter.classList.add('filterOption', "pointer");
    newFilter.setAttribute('data-type', type);
    newFilter.innerText = filter;
    newFilter.id = filter;

    newFilter.addEventListener('click', (e) => {
        let elem = e.currentTarget
        addToTagList(elem.innerText, elem.getAttribute('data-type'));
    } );

    return newFilter;
}