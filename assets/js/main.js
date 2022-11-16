import { initiateFilterBoxes } from "./components/filterBoxes.js"
import { initiateMainSearchBar } from './components/mainSearchBar.js'
import { mainSearch } from './searching/mainSearch.js'
import { buildArrayOfFormatedRecipes } from './liveData/defaultData.js'
import { runTest } from './benchmark.js';


initiateFilterBoxes();
initiateMainSearchBar();
// buildArrayOfFormatedRecipes();
mainSearch();
runTest();