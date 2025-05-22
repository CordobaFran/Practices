let pkmNumber = 1
let pkmList = getPkmNames()
let data
let pressed = null

// https://pokeapi.co/api/v2/pokemon/

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
// 2190	 ← 	Leftwards Arrow
// 2192	 → 	Rightwards Arrow
// 2196	 ↖ 	North West Arrow
// 2197	 ↗ 	North East Arrow
// 2198	 ↘ 	South East Arrow
// 2199	 ↙ 	South West Arrow

let imgTag = document.getElementById("img_sprite")
let btnUp = document.getElementById("up")
let btnDown = document.getElementById("down")
let btnLeft = document.getElementById("left")
let btnRight = document.getElementById("right")
let inputNumPokedex = document.getElementById("input_num-pokedex")
let pkdxNames = document.getElementById("pokedex_names")

imgTag.src = renderImg(1)


btnUp.addEventListener("mousedown", () => arrowKeys("up"))
btnUp.addEventListener("mouseup", () => arrowKeys("stop"))


btnDown.addEventListener("mousedown", () => arrowKeys("down"))
btnDown.addEventListener("mouseup", () => arrowKeys("stop"))

btnLeft.addEventListener("mousedown", () => arrowKeys("left"))
btnLeft.addEventListener("mouseup", () => arrowKeys("stop"))

btnRight.addEventListener("mousedown", () => arrowKeys("right"))
btnRight.addEventListener("mouseup", () => arrowKeys("stop"))


inputNumPokedex.addEventListener("change", (el) => {
    pkmNumber = el.target.value
    renderImg(el.target.value)
})


function arrowKeys(key, event) {

    const leftKey = () => {
        const doOnce = () => {
            pkmNumber > 6 ? pkmNumber -= 6 : pkmNumber = 1
            renderImg(pkmNumber)
        };
        doOnce()

        pressed = setInterval(() => {
            doOnce()
        }, 300)
    }

    const rightKey = () => {
        const doOnce = () => {
            pkmNumber < 245 ? pkmNumber += 6 : pkmNumber = 251
            renderImg(pkmNumber)
        };
        doOnce()

        pressed = setInterval(() => {
            doOnce()
        }, 300)
    }

    const upKey = () => {
        const doOnce = ()=>{
            pkmNumber > 1 ? pkmNumber-- : null
            renderImg(pkmNumber)
        }
        doOnce()

        pressed = setInterval(()=>{
            doOnce()
        }, 300)

    }

    const downKey = () => {
        const doOnce = () => {
            pkmNumber < 251 ? pkmNumber++ : null
            renderImg(pkmNumber)
        }
        doOnce()

        pressed = setInterval(() => {
            doOnce()
        }, 300)
    }

    const stopFire = () => {
        clearInterval(pressed)
    }

    switch (key) {
        case "left":
            leftKey()
            break;
        case "right":
            rightKey()
            break;
        case "up":
            upKey()
            break;
        case "down":
            downKey()
            break;
        case "stop":
            stopFire()
            break;
        default:
            stopFire()
            break;
    }
}

function renderImg(id = 1) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.sprites.other.showdown.front_default);
            cursor(id)
            return imgTag.src = data.sprites.versions["generation-ii"].crystal.front_default

        })
        .catch(err => {
            return imgTag.src = "../assets/pkdx_notseen.png"
        })
}

async function getPkmNames() {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=251`)
        .then(res => res.json())
        .then(data => {
            let names = []
            data.results.forEach((el, index) => {
                const liNames = document.createElement("li")
                liNames.textContent = el.name.toUpperCase()
                liNames.value = index + 1
                pkdxNames.appendChild(liNames)

                names.push({ name: el.name, url: el.url })
            });


            // console.log(names);
        })
        .catch(err => console.log("error", err))
}

function cursor(id = 1) {

    nodeNames = pkdxNames.querySelectorAll("li")

    nodeNames.forEach((el) => {
        el.value === id ? el.id = "selected" : el.id = ""

        if (id > 7) {
            el.style = `top: ${(id - 7) * -22}px`
        } else {
            el.style = ""
        }
    })
}

