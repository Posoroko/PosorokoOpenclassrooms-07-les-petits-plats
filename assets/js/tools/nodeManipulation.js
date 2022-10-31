export const backgroundColorOf = (node) => {
    return window.getComputedStyle(node).backgroundColor;
}

export const noTextin = (element) => {
    const text = element.innerText;
    if(text == "" || text.charCodeAt(0) == 10) {
        return true;
    }
    return false;
}


export const innerTextOf = (element) => {
    return element.innerText
}

export const stringifyRecipe = (recipe) => {

    const strignify = (array) => {
        let string = ""

        for (let i = 0; i < array.length; i++) {
            if(array[0].ingredient) {
                string = string + " " + array[i].ingredient;
                
            } else {
                string = string + " " + array[i];
            }
        }
        return string;
        
    };
    
    
    let string = recipe.name + strignify(recipe.ingredients) + strignify(recipe.ustensils) + " " + recipe.description + " " + " " + recipe.appliance;

    return string;
    // console.log(strignify(recipe.ingredients));
}

export const tagObjFromCloseElement = (element) => {
    let tag = {
        value: "",
        type: ""
    };

    tag.value = element.parentElement.firstChild.innerText.toLowerCase();
    tag.type = element.parentElement.getAttribute('data-type');

    return tag;
}