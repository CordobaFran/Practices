// ✓ escribir los numeros y que aparezcan en la pantalla
// ✓ al apretar un numero tiene que llegar como numero y no string
// tengo que poder poner cada operador solo 1 vez entre numeros
// si divido o multiplico puedo poner el - antes del numero
// si resto no puedo poner otro - adelante del numero
// si sumo y pongo un - para indicar numero negativo se tiene que reemplazar el + por un -

let display = 0
let num1 = 0, num2 = 0, operator ="", partialResult = 0, numSw = 1

let displayGet = document.getElementById("write")
let displayResultGet = document.getElementById("result")

let buttonNumPress = document.querySelectorAll(".num")
let operPress = document.querySelectorAll(".oper")
let buttonEqual = document.getElementById("solve")
let buttonClear = document.getElementById("clear")

displayGet.innerText = 0

const refreshScreen = (calc) => {
    return displayGet.innerText = calc
}

const REFRESH_RESULTSCREEN = (calc) => {
    //num1 = partialResult
    //num2 = 0
    return displayResultGet.innerText = calc
}

const PARTIAL_RESULT = (num1, num2, oper) => {
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
    num1 = 0
    num2 = 0
    operator = ""
    partialResult = 0
    display = 0
    displayResultGet.innerText = ""
    numSw = 1
    refreshScreen(display)
    console.clear()
}

buttonNumPress.forEach((el) => {
    el.addEventListener("click", (el) => {
        let lastDisplayChar = display[parseInt(display.length-1)];

        if (display != 0) {
            display = display + el.target.innerText

            if(lastDisplayChar == "="){
                RESET()
                display = el.target.innerText
            }

            if (numSw == 1) {
                num1 = parseFloat(num1 + el.target.innerText)
            } else {
                num2 = parseFloat(num2 + el.target.innerText)
            }
        } else {
            display = el.target.innerText
            num1 = parseFloat(el.target.innerText)
        }

        refreshScreen(display)
        clg()
    })
})

//to review
operPress.forEach((el) => {
    el.addEventListener("click", (el) => {
        lastOperator = operator
        operator = el.target.innerText
        display = display + operator


        if (numSw == 1 && num1 != 0 ){
            numSw = 2
        }

        if (num1 !== 0 && num2 !== 0 && operator) {
            REFRESH_RESULTSCREEN(PARTIAL_RESULT(num1, num2, lastOperator))
            num1 = partialResult
            num2 = 0
            display = num1 + operator
        } else {

        }

        refreshScreen(display)
        clg()
    })
})

buttonEqual.addEventListener("click", (el) => {
    display = display + "="
    refreshScreen(display)
    REFRESH_RESULTSCREEN(PARTIAL_RESULT(num1, num2, operator))
    //operator = ""
    clg()
})

buttonClear.addEventListener("click", (el) => {
    RESET()
    clg()
})

function clg(){
    console.log(`num1: ${num1} oper: ${operator} num2: ${num2}
display: ${display} sw: ${numSw} PR: ${partialResult}`);
}





/* let num1 = 0
let num2 = 0
let operator

function operation(num1, num2, operator) {
    if (operator == "+") {
        return parseFloat(num1) + parseFloat(num2)
    } else if (operator == "-") {
        return num1 - num2
    }

}


Equal = document.getElementById("solve") = document.querySelectorAll(".num")
let buttonOperator = document.querySelectorAll(".oper")
let solve = document.getElementById("solve")

buttonOperator.forEach((el) => {
    el.addEventListener("click", (el) => {
        operator = el.target.innerText
        return console.log("operation", operator);
    })
Equal = document.getElementById("solve").forEach((el) => {
    el.addEventListener("click", (el) => {
        if (operator == "+") {
            num2 = num2 + el.target.innerText
            let writting = document.getElementById("write")
            writting.innerText = num2
            return console.log("num1:", num1, operator, "num2:", num2)
        } else {
            num1 = num1 + el.target.innerText
            let writting = document.getElementById("write")
            writting.innerText = num1
            return console.log("num1:", num1, operator, "num2:", num2)
        }
    })
})

solve.addEventListener("click", () => {
    let result = document.getElementById("result")
    result.innerText = operation(num1, num2, operator)
})




let plusButton = document.getElementById("plus") */

