// escribir los numeros y que aparezcan en la pantalla
// al apretar un numero tiene que llegar como numero y no string
// tengo que poder poner cada operador solo 1 vez entre numeros
// si divido o multiplico puedo poner el - antes del numero
// si resto no puedo poner otro - adelante del numero
// si sumo y pongo un - para indicar numero negativo se tiene que reemplazar el + por un -

let display = 0
let displayGet = document.getElementById("write")
let buttonNumPress = document.querySelectorAll(".num")
let operPress = document.querySelectorAll(".oper")

displayGet.innerText = 0

const refreshScreen = (calc)=> {
    return displayGet.innerText = calc
}

buttonNumPress.forEach((el)=>{
    el.addEventListener("click", (el)=>{
        if (display != 0) {
            display = parseFloat(display + el.target.innerText)
            refreshScreen(display)
            console.log(display);
        } else {
            display = el.target.innerText
            refreshScreen(display)
        }
    })
})

//to review
operPress.forEach((el)=>{
    el.addEventListener("click", (el)=>{
        oper = el.target.innerText
        display = display + oper
        
        refreshScreen(display)
        console.log(display);
    })
})





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


let buttonPress = document.querySelectorAll(".num")
let buttonOperator = document.querySelectorAll(".oper")
let solve = document.getElementById("solve")

buttonOperator.forEach((el) => {
    el.addEventListener("click", (el) => {
        operator = el.target.innerText
        return console.log("operation", operator);
    })
})

buttonPress.forEach((el) => {
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

