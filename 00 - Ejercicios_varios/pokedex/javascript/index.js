import { controller } from "./controller.js"

let pkmNumber = 1
let pkmList = getPkmNames()
let data

// https://pokeapi.co/api/v2/pokemon/

document.addEventListener("keydown", (el) => el.preventDefault())

document.body.innerHTML = `
    <main>
        <section id="section_pokedex">
            <div id="div_background">
                <div id="div_screen">
                    <div id="first_screen">
                        <div id="sprite">
                            <img src="" alt="" id="img_sprite">
                        </div>
                        <div id="pokedex_seen-own">
                            <div>
                                <p>SEEN</p>
                                <p>251</p>
                            </div>
                            <div>
                                <p>OWN</p>
                                <p>251</p>
                            </div>
                        </div>
                        <div id="arrows">
                            <img src="./assets/dir_arrow.png" id="arrowUp">
                            <img src="./assets/dir_arrow.png" id="arrowDn">
                        </div>
                        <ul id="pokedex_names">
                        </ul>
                        <div id="pokedex_scroll">
                        </div>
                    </div>
                </div>
                <div id="buttons">
                    <div id="pokedex_controller">
                        <button id="up">↑</button>
                        <button id="down">↑</button>
                        <button id="left">↑</button>
                        <button id="right">↑</button>
                    </div>
                    <input type="text" placeholder="ingresar Nº" id="input_num-pokedex" hidden="true">
                </div>
            </div>
        </section>
    </main>
`
let imgTag = document.getElementById("img_sprite")
let pkdxNames = document.getElementById("pokedex_names")

renderImg(1)
// imgTag.src = renderImg(1)

function renderImg(id = 1) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.sprites.other.showdown.front_default);
            cursor(id)
            return imgTag.src = data.sprites.versions["generation-ii"].crystal.front_default

        })
        .catch(err => {
            console.log(err);
            return imgTag.src = "./assets/pkdx_notseen.png"
        })
}

function getPkmNames() {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=251`)
        .then(res => res.json())
        .then(data => {
            let names = []
            data.results.forEach((el, index) => {
                const li = document.createElement("li")
                const liNames = document.createElement("span")
                // const liNum = document.createElement("span")
                const liCaptured = document.createElement("img")

                // liNum.textContent = (index + 1).toString().padStart(3, "0")
                // li.appendChild(liNum)
                liCaptured.src = "./assets/capturedBall.png"
                liCaptured.id = "capturedImg"
                liNames.textContent = el.name.toUpperCase()
                liNames.id = "listName"
                li.append(liCaptured)
                li.append(liNames)
                li.value = index + 1

                pkdxNames.appendChild(li)
                names.push({ name: el.name, url: el.url })
            });
        })
        .catch(err => console.log("error", err))
}

function cursor(id = 1) {

    let nodeNames = pkdxNames.querySelectorAll("li")
    let cursorImg = document.createElement("img")
    cursorImg.src = "./assets/cursor.png"
    cursorImg.classList.add("cursor")
    // cursorImg.id = "selected"

    nodeNames.forEach((el) => {

        el.id = ""

        const noCursor = el.querySelector(".cursor")
        if (noCursor) el.removeChild(noCursor)

        if (el.value === id) {
            el.id = "selected"
            el.appendChild(cursorImg)
        }

        if (id > 7) {
            el.style = `top: ${(id - 7) * -21.28}px`
        } else {
            el.style = ""
        }

    })
}

function buttonFunction() {

    const up = () => {
        if (pkmNumber != 1) {
            pkmNumber > 1 ? pkmNumber-- : null
            renderImg(pkmNumber)
        }
    };

    const down = () => {
        if (pkmNumber != 251) {
            pkmNumber < 251 ? pkmNumber++ : null
            renderImg(pkmNumber)
        }
    };

    const left = () => {
        if (pkmNumber != 1) {
            pkmNumber > 6 ? pkmNumber -= 6 : pkmNumber = 1
            renderImg(pkmNumber)
        }
    };

    const right = () => {
        if (pkmNumber != 251) {
            pkmNumber < 245 ? pkmNumber += 6 : pkmNumber = 251
            renderImg(pkmNumber)
        }
    };

    return { up, down, left, right }
}

controller(buttonFunction())
