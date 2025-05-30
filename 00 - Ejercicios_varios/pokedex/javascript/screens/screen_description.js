let MainScreenBase01 = `
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

export { MainScreenBase01 }