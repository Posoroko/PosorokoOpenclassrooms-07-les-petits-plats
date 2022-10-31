export const createNewTag = (elem, removeTag, type) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.setAttribute('name', elem.innerText);
    tag.style.backgroundColor = elem.getAttribute('data-bgColor');
    tag.setAttribute('data-type', type)
        const name = document.createElement('span');
        name.classList.add('name');
        name.innerText = elem.innerText;

        const close = document.createElement('span');
        close.classList.add("tagClose", "icon");
        close.setAttribute('name', elem.id);
        close.innerText = "close";
        close.addEventListener('click', removeTag);

    tag.appendChild(name);
    tag.appendChild(close);

    return tag;
}