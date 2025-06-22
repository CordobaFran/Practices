let MainScreenBase01 = `
                    <div id="screen_description">
                        
                    </div>
`

function renderScreen01(fx) {

    const screenId = document.getElementById("div_screen")
    screenId.innerHTML = MainScreenBase01

    const init = () => {

    }

    return { init }
}


function buttonFunction01(updateScreen, updateDisplay, clearDOM) {

    const up = () => {

    };

    const down = () => {

    };

    const left = () => {

    };

    const right = () => {

    };

    const a = async () => {

    }

    const b = async () => {
        updateDisplay(1);
        updateScreen();
    }

    return { up, down, left, right, a, b }
}

export { MainScreenBase01, renderScreen01, buttonFunction01 }