import { mainSearchBar } from "../dom/domElements.js"
import { innerTextOf } from "../tools/nodeManipulation.js";
import { mainSearch } from "../searching/mainSearch.js";
import { updateSearchQuery } from "../liveData/liveData.js";

/*
Search is triggered when user enters 3 chars minimum.

*/


const initiateMainSearchBar = () => {
    mainSearchBar.value = null;
    mainSearchBar.addEventListener('click', handleClick );
    mainSearchBar.addEventListener('focusout', handleFocusout );

//it has to use keyup, when using keydown the third char is not detected until the fourth keydwn event
    mainSearchBar.addEventListener('keyup', handleKeyup);
// <=
}

//will trigger everytime the user types a character in the main search bar
const handleKeyup = (e) => {
    let input = e.target.innerText;
    if(input.length == 1 && input.charCodeAt(0) == 10) {

        e.target.innerText = '';
    }
    if(e.target.innerText.length < 3 && e.key != "Backspace") {
        return;
    }
    updateSearchQuery(e.target.innerText);
    mainSearch();
}
// <=

const handleClick = (e) => {
    const bar = e.target;
    if (innerTextOf(bar) == "Rechercher une recette") {
        bar.innerText = "";

    }
    bar.contentEditable = true;
    bar.focus();
}

const handleFocusout = (e) => {

    if (!(e.target.innerText.charCodeAt(0) > 65)) {
        e.target.innerText = "Rechercher une recette";

    }   
}


export { initiateMainSearchBar };