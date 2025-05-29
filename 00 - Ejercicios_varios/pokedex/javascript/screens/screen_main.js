let pkmNumber = 1
let MainScreenBase = `
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
function renderScreen() {
    const cursor = async (id = 1) => {
        const pkdxNames = document.getElementById("pokedex_names")

        let nodeNames = pkdxNames.querySelectorAll("li")
        let cursorImg = document.createElement("img")
        cursorImg.src = "./assets/cursor.png"
        cursorImg.classList.add("cursor")

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

    const renderImg = async (id = 1) => {
        const imgTag = document.getElementById("img_sprite")

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json()
            // console.log(data.sprites.other.showdown.front_default);
            await cursor(id)
            return imgTag.src = data.sprites.versions["generation-ii"].crystal.front_default
        } catch (err) {
            console.log(err)
            return imgTag.src = "./assets/pkdx_notseen.png"
        }
    }

    const getPkmNames = async () => {
        const pkdxNames = document.getElementById("pokedex_names")

        return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=251`)
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

    const init = async () => {
        await getPkmNames()
        await renderImg()
    }

    return { init, renderImg }
}

function buttonFunction(screen) {

    const up = () => {
        if (pkmNumber != 1) {
            pkmNumber > 1 ? pkmNumber-- : null
            screen.renderImg(pkmNumber)
        }
    };

    const down = () => {
        if (pkmNumber != 251) {
            pkmNumber < 251 ? pkmNumber++ : null
            screen.renderImg(pkmNumber)
        }
    };

    const left = () => {
        if (pkmNumber != 1) {
            pkmNumber > 6 ? pkmNumber -= 6 : pkmNumber = 1
            screen.renderImg(pkmNumber)
        }
    };

    const right = () => {
        if (pkmNumber != 251) {
            pkmNumber < 245 ? pkmNumber += 6 : pkmNumber = 251
            screen.renderImg(pkmNumber)
        }
    };

    return { up, down, left, right }
}

export { MainScreenBase, renderScreen, buttonFunction }