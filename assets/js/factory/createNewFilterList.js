import { handleNewTag } from "../components/tagList.js";

//creates the drop down menus for the three types of tags

export const createNewFilterList = (list, color, filterType) => {

    const optionBox = document.createElement('ul');
    optionBox.classList.add('optionBox');

    for(let i = 0; i < list.length; i++) {
        const li = document.createElement('li');
        li.setAttribute('data-bgColor', color);
        li.setAttribute('data-type', filterType);
        li.setAttribute('name', list[i]);
        li.id = filterType + i;
        li.innerText = list[i];
        li.addEventListener('click', handleNewTag);
        optionBox.appendChild(li);
    }
    return optionBox
}
