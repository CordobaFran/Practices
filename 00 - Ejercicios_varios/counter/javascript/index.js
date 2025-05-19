let counter = 0
let counterStatus = "stopped"
let interval

document.getElementById("back").addEventListener("click", () => {
    history.back();
});

const chronoContainer = document.getElementById("counter_container")
chronoContainer.innerHTML = `
        <pre id="counter"></pre>
        <div class="buttons">
            <button id="start">START</button>
            <button id="stop_reset">ST/RS</button>
            <button id="minus">-</button>
            <button id="plus">+</button>
        </div>
`
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const startButton = document.getElementById("start")
const stopResetButton = document.getElementById("stop_reset")

renderChrono()

plusButton.addEventListener("click", (el) => {
    if (counterStatus != "on") {
        plusChrono()
    }
})

plusButton.addEventListener("wheel", (el) => {
    if (counterStatus != "on") {
        plusChrono()
    }
})

minusButton.addEventListener("click", (el) => {
    if (counterStatus != "on") {
        minusChrono()
    }
})

minusButton.addEventListener("wheel", (el) => {
    if (counterStatus != "on") {
        minusChrono()
    }
})

startButton.addEventListener("click", (el) => {
    if (counterStatus != "on") {
        startChrono()
    }
})

stopResetButton.addEventListener("click", (el) => {
    stopReset()
})

function renderChrono() {
    const counterScreen = document.getElementById("counter")
    counterScreen.textContent = (Math.round((counter) * 100) / 100).toFixed(2)
}

setInterval((handler) => {
    console.log(counterStatus);
}, 1000)

function plusChrono() {
    counter++
    renderChrono()
}

function minusChrono() {
    counter > 0 ? counter-- : counter = 0
    renderChrono()
}

function startChrono() {

    counterStatus = "on"
    if (counterStatus == "on"){

        interval = setInterval(() => {
            if (counter > 0 && (counterStatus == "stopped" || "on")) {
                counter = ((Math.round(counter * 100) / 100) - 0.010)
                renderChrono()
            } else {
                clearInterval(interval)
                counterStatus = "stopped"
            }
        }, 10);
    }
}

function stopReset() {
    switch (counterStatus) {
        case "on":
            clearInterval(interval)
            counterStatus = "paused"
            break;
        case "paused":
            clearInterval(interval)
            counter = 0
            counterStatus = "stopped"
            renderChrono()
            break;
        default:
            break;
    }
}


