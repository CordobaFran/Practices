import { controller } from "./controller.js"
import { buttonFunction, MainScreenBase, renderScreen } from "./screens/screen_main.js"

// https://pokeapi.co/api/v2/pokemon/

document.addEventListener("keydown", (el) => el.preventDefault())

document.addEventListener("DOMContentLoaded", async ()=>{
    document.body.innerHTML = MainScreenBase
    const screen = renderScreen()
    await screen.init()
    
    const buttons = buttonFunction(screen)
    controller(buttons)
})


