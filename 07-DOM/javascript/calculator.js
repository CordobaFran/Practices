let num1 = 0
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




let plusButton = document.getElementById("plus")

