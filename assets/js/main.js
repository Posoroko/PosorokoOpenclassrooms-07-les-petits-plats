import { initializeAlgoToggler } from "./components/algoToggler.js";
import { initiateFilterBoxes } from "./components/filterBoxes.js"
import { initiateMainSearchBar } from './components/mainSearchBar.js'
import { mainSearch } from './searching/mainSearch.js'
import { buildArrayOfFormatedRecipes } from './liveData/defaultData.js'

initiateFilterBoxes();
initiateMainSearchBar();
initializeAlgoToggler();
buildArrayOfFormatedRecipes();
mainSearch();