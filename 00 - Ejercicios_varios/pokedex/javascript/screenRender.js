import { buttonFunction, MainScreenBase, renderScreen, idDetail } from "./screens/screen_main.js"
import { MainScreenBase01 } from "./screens/screen_description.js"

// https://pokeapi.co/api/v2/pokemon/

let display = 1
let screenDisplayedModule = {}

const backgroundScreen = `
<main>
    <section id="section_pokedex">
        <div id="div_background">
            <div id="div_screen">
            </div>
            <div id="buttons">
                <div id="pokedex_controller">
                    <button id="up">↑</button>
                    <button id="down">↑</button>
                    <button id="left">↑</button>
                    <button id="right">↑</button>
                </div>
                <div id="pokedex_buttonsAB">
                    <button id="b">B</button>
                    <button id="a">A</button>
                </div>
                <input type="text" placeholder="ingresar Nº" id="input_num-pokedex" hidden="true">
            </div>
        </div>
    </section>
</main>
`
document.body.innerHTML = backgroundScreen

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
        const screenId = document.getElementById("div_screen")
        screenId.innerHTML = MainScreenBase
        
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
