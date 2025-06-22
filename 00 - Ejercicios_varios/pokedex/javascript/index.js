import { getScreenDisplayed, updateDisplay, render, clearDOM } from "./screenRender.js"
import { controller, screenEventUpdate } from "./controller.js"

// https://pokeapi.co/api/v2/pokemon/
//https://www.spriters-resource.com/game_boy_gbc/pokemoncrystal/

document.addEventListener("keydown", (el) => el.preventDefault());

function updateScreen(){
    const screenDisplayedModule = getScreenDisplayed();
    render(screenDisplayedModule);
    buttons()
};

updateDisplay(1); //start screen N°1
updateScreen(); //first screen render


function buttons(){
    const screenDisplayedModule = getScreenDisplayed();
    const buttons = screenDisplayedModule.buttonFunction(updateScreen, updateDisplay);
    screenEventUpdate(buttons)
}

controller();
