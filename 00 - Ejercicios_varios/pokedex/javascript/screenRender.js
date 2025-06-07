import { buttonFunction, MainScreenBase, renderScreen, idDetail } from "./screens/screen_main.js"
import { MainScreenBase01 } from "./screens/screen_description.js"

let display = 1
let screenDisplayedModule = {}

// https://pokeapi.co/api/v2/pokemon/

function updateDisplay(newScreen = 2) {

    display = newScreen

    switch (display) {
        case 1:
            screenDisplayedModule = { buttonFunction, MainScreenBase, renderScreen }
            // console.log("case 1", display);
            break;
        case 2:
            screenDisplayedModule = { buttonFunction, MainScreenBase: MainScreenBase01, renderScreen }
            // console.log("case 2", display);
            break;
        default:
            break;
    }
}

function getScreenDisplayed() {
    return screenDisplayedModule
}


function render(screenDisplayedModule) {
    // document.addEventListener("DOMContentLoaded",  async  () => {
        document.body.innerHTML = screenDisplayedModule.MainScreenBase
        const screen = screenDisplayedModule.renderScreen()
        /* await */ screen.init()
        console.log("render", display);
    // })
}

function clearDOM() {
    const main = document.getElementById("div_screen")
    const consoleGB = document.getElementById("div_background")
    consoleGB.removeChild("main")
    console.log(main);
}


export { render, getScreenDisplayed, updateDisplay }
