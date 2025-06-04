let pressed = null

function controller(screenEvent) {

    let btnUp = document.getElementById("up")
    let btnDown = document.getElementById("down")
    let btnLeft = document.getElementById("left")
    let btnRight = document.getElementById("right")
    let btnA = document.getElementById("a")
    let btnB = document.getElementById("b")

    const buttonUpListener = () => {
        btnUp.addEventListener("mousedown", () => arrowKeys("up", screenEvent.up))
        btnUp.addEventListener("mouseup", () => arrowKeys("stop"))
        document.addEventListener("keydown", (ev) => {
            ev.key === "ArrowUp" ? arrowKeys("up", screenEvent.up) : null;
            arrowKeys("stop")
        })
    }

    const buttonDownListener = async () => {
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

    const buttonAListener = () => {
        let assignedA = "a"
        btnA.addEventListener("click", () => { arrowKeys("a", screenEvent.a) })
        document.addEventListener("keydown", (ev) => {
            ev.key === assignedA ? arrowKeys("a", screenEvent.a) : null;
        })
    }

    const buttonBListener = () => {
        let assignedB = "s"
        btnB.addEventListener("click", () => { arrowKeys("b", screenEvent.b) })
        document.addEventListener("keydown", (ev) => {
            ev.key === assignedB ? arrowKeys("b", screenEvent.a) : null;
        })
    }

    buttonUpListener(), buttonDownListener(), buttonLeftListener(), buttonRightListener(), buttonAListener(), buttonBListener()
}

async function arrowKeys(key, event) {

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

    const aKey = () => {
        event()
    }

    const bKey = () => {
        event()
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
        case "a":
            aKey()
            break;
        case "b":
            bKey()
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