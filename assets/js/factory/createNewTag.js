import { removeFromTagList } from "../liveData/liveData.js";

//creates a new tag element. it knows the index of its place in the tagList and uses it to remove it from there.
export const newTag = (value, type, index) => {
    const tag = document.createElement('div');
    tag.classList.add('tag', type);
        const text = document.createElement('span');
            text.classList.add('name');
            text.innerText = value;
        const close = document.createElement('span');
            close.classList.add("tagClose", "icon");
            close.setAttribute('data-index', index);
            close.innerText = "close";
            close.addEventListener('click', removeFromTagList);
    tag.appendChild(text);
    tag.appendChild(close);
    

    return tag;
}
// <=
