// ✓ escribir los numeros y que aparezcan en la pantalla
// ✓ al apretar un numero tiene que llegar como numero y no string
// ✓ tengo que poder poner cada operador solo 1 vez entre numeros
// si divido o multiplico puedo poner el - antes del numero
// ✓ si resto no puedo poner otro - adelante del numero
// ✓ si sumo y pongo un - para indicar numero negativo se tiene que reemplazar el + por un -

let display = 0;
let num1 = 0, num2 = 0, operator = "", partialResult = 0, numSw = 1;

let displayGet = document.getElementById("write");
let displayResultGet = document.getElementById("result");

let buttonNumPress = document.querySelectorAll(".num");
let buttonOperPress = document.querySelectorAll(".oper");
let buttonEqual = document.getElementById("solve");
let buttonClear = document.getElementById("clear");

displayGet.innerText = 0;

const REFRESH_CALCSCREEN = (data) => {
    return displayGet.innerText = data;
}

const REFRESH_RESULTSCREEN = (data) => {
    return displayResultGet.innerText = data;
}

const PARTIAL_RESULT = (num1, num2, oper) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (oper) {
        case "+":
            return partialResult = num1 + num2
        case "-":
            return partialResult = num1 - num2
        case "/":
            return partialResult = num1 / num2
        case "x":
            return partialResult = num1 * num2
        default:
            break;
    }
}

const RESET = () => {
    num1 = 0;
    num2 = 0;
    operator = ""
    partialResult = 0
    display = 0
    displayResultGet.innerText = ""
    numSw = 1
    REFRESH_CALCSCREEN(display)
    console.clear()
}

const CLG = () => {
    console.log(`num1: ${num1} oper: ${operator} num2: ${num2}
display: ${display} sw: ${numSw} PR: ${partialResult}`);
}

const LAST_DISPLAY_CHAR = (last = 1) => display[parseInt(display.length - last)]

buttonNumPress.forEach((el) => {
    el.addEventListener("click", (el) => {

        if (display != 0) {
            display = display + el.target.innerText

            if (LAST_DISPLAY_CHAR(2) == "=") {
                RESET()
                CLG()
                display = el.target.innerText
            }

            if (numSw == 1) {
                num1 = num1 + el.target.innerText
            } else {
                num2 = num2 + el.target.innerText
            }

        } else {
            display = el.target.innerText
            num1 = el.target.innerText
        }

        REFRESH_CALCSCREEN(display)
        CLG()
    })
})

buttonOperPress.forEach((el) => {
    el.addEventListener("click", (el) => {
        lastOperator = operator
        operator = el.target.innerText

        switch (LAST_DISPLAY_CHAR()) {
            case "+":
                display = display.slice(0, -1)
                break;
            case "-":
                display = display.slice(0, -1)
                break;
            case "/":
                display = display.slice(0, -1)
                break;
            case "x":
                display = display.slice(0, -1)
                break;
            default:
                break;
        }

        display = display + operator

        if (numSw == 1 && num1 != 0) {
            numSw = 2
        }

        if (num1 !== 0 && num2 !== 0 && operator) {
            REFRESH_RESULTSCREEN(PARTIAL_RESULT(num1, num2, lastOperator))
            num1 = partialResult
            num2 = 0
            display = num1 + operator
        }

        REFRESH_CALCSCREEN(display)
        CLG()
    })
})

buttonEqual.addEventListener("click", (el) => {

    if (LAST_DISPLAY_CHAR() == "=") {
        display = display.slice(0, -1)
        num1 = partialResult
    }

    display = display + "="
    REFRESH_CALCSCREEN(display)
    REFRESH_RESULTSCREEN(PARTIAL_RESULT(num1, num2, operator))
    CLG()
})

buttonClear.addEventListener("click", (el) => {
    RESET()
    CLG()
})