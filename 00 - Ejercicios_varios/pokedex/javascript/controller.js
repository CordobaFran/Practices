let pressed = null

function controller(screenEvent) {

    let btnUp = document.getElementById("up")
    let btnDown = document.getElementById("down")
    let btnLeft = document.getElementById("left")
    let btnRight = document.getElementById("right")

    const buttonUpListener = () => {
        btnUp.addEventListener("mousedown", () => arrowKeys("up", screenEvent.up))
        btnUp.addEventListener("mouseup", () => arrowKeys("stop"))
        document.addEventListener("keydown", (ev) => {
            ev.key === "ArrowUp" ? arrowKeys("up", screenEvent.up) : null;
            arrowKeys("stop")
        })
    }

    const buttonDownListener = () => {
        btnDown.addEventListener("mousedown", () => arrowKeys("down", screenEvent.down))
        btnDown.addEventListener("mouseup", () => arrowKeys("stop"))
        document.addEventListener("keydown", (ev) => {
            ev.key === "ArrowDown" ? arrowKeys("down", screenEvent.down) : null;
            arrowKeys("stop")
        })
    }

    const buttonLeftListener = () => {
        btnLeft.addEventListener("mousedown", () => arrowKeys("left", screenEvent.left))
        btnLeft.addEventListener("mouseup", () => arrowKeys("stop"))
        document.addEventListener("keydown", (ev) => {
            ev.key === "ArrowLeft" ? arrowKeys("left", screenEvent.left) : null;
            arrowKeys("stop")
        })
    }

    const buttonRightListener = () => {
        btnRight.addEventListener("mousedown", () => { arrowKeys("right", screenEvent.right) })
        btnRight.addEventListener("mouseup", () => arrowKeys("stop"))
        document.addEventListener("keydown", (ev) => {
            ev.key === "ArrowRight" ? arrowKeys("right", screenEvent.right) : null;
            arrowKeys("stop")
        })
    }

    buttonUpListener(), buttonDownListener(), buttonLeftListener(), buttonRightListener()
}


function arrowKeys(key, event) {

    const leftKey = () => {
        event()
        pressed = setInterval(() => {
            event()
        }, 300)
    }

    const rightKey = () => {
        event()
        pressed = setInterval(() => {
            event()
        }, 300)
    }

    const upKey = () => {
        event()
        pressed = setInterval(() => {
            event()
        }, 300)

    }

    const downKey = () => {
        event()
        pressed = setInterval(() => {
            event()
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

export { controller }