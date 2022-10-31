import { algoToggler } from "../dom/domElements.js"
import { handleAlgoSelection } from "../config/config.js";

export const initializeAlgoToggler = () => {
    algoToggler.togglerBox.style.display = "none";
    document.addEventListener('keydown', showToggler);
    

    algoToggler.on.addEventListener('click', () => {
        algoToggler.on.style.display = 'none';
        algoToggler.off.style.display = 'inline';
        handleAlgoSelection();
    })
    algoToggler.off.addEventListener('click', () => {
        algoToggler.off.style.display = 'none';
        algoToggler.on.style.display = 'inline';
        handleAlgoSelection();
    })

    

}

const showToggler = (e) => {

    if(e.keyCode == 119) {

        switch(algoToggler.togglerBox.style.display) {

            case "none":

                algoToggler.togglerBox.style.display = "flex";
                break;

            case "flex":

                algoToggler.togglerBox.style.display = "none"

        }

    }

}