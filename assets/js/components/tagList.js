import { tagBox } from "../dom/domElements.js";
import { newTag } from "../factory/createNewTag.js";
import { tagList } from "../liveData/liveData.js";

export const renderTagList = () => {

    tagBox.innerHTML = '';

    tagList.forEach( (tag, index) => {
        let newTagElem = newTag(tag.value, tag.type, index);
        tagBox.appendChild(newTagElem);
    })
}