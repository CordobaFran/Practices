import { getScreenDisplayed, updateDisplay, render, clearDOM } from "./screenRender.js"
import { controller } from "./controller.js"
import { buttonFunction } from "./screens/screen_main.js"

// https://pokeapi.co/api/v2/pokemon/
//https://www.spriters-resource.com/game_boy_gbc/pokemoncrystal/

document.addEventListener("keydown", (el) => el.preventDefault());

function updateScreen(){
    const screenDisplayedModule = getScreenDisplayed();
    render(screenDisplayedModule);
    return render(screenDisplayedModule)
};

updateDisplay(1); //start screen N°1
updateScreen(); //first screen render

const screenDisplayedModule = getScreenDisplayed();
const screen = screenDisplayedModule.renderScreen(updateScreen());
const buttons = screenDisplayedModule.buttonFunction(screen, updateScreen, updateDisplay, clearDOM);


controller(buttons);
