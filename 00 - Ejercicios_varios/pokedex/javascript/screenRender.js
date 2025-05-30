import { controller } from "./controller.js"
import { buttonFunction, MainScreenBase, renderScreen } from "./screens/screen_main.js"
import { MainScreenBase01 } from "./screens/screen_description.js"

let display = 1
let screenDisplayed = {}

// https://pokeapi.co/api/v2/pokemon/

switch (display) {
    case 1:
        screenDisplayed = { buttonFunction, MainScreenBase, renderScreen }
        break;
    case 2:
        screenDisplayed = { buttonFunction, MainScreenBase: MainScreenBase01, renderScreen }
        break;

    default:
        break;
}

function render(screenDisplayed) {
    document.addEventListener("DOMContentLoaded", async () => {
        document.body.innerHTML = screenDisplayed.MainScreenBase
        const screen = screenDisplayed.renderScreen()
        await screen.init()

        const buttons = screenDisplayed.buttonFunction(screen)
        controller(buttons)
    })
}

function clearDOM() {
    const main = document.getElementById("div_screen")
    const consoleGB = document.getElementById("div_background")
    consoleGB.removeChild("main")
    console.log(main);
}


export { render, screenDisplayed }
