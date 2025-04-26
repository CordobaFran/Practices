/* let age

age = parseInt(prompt("indique edad"))

if (age >= 18) {
    console.log("es mayor de edad")
} else {
    console.log("no es mayor de edad")
}
 */

let num1;
let num2;
let operacion;
let operacionString;
let resultado;


operacion = prompt(`Indique la operación:
    A: Suma
    B: Resta
    C: Multiplicar
    D: Dividir`).toLowerCase();

num1 = parseInt(prompt("Primer nùmero"));
num2 = parseInt(prompt("Segundo nùmero"));

if (operacion == "a") {
    resultado = num1 + num2;
} else if (operacion == "b") {
    resultado = num1 - num2;
} else if (operacion == "c") {
    resultado = num1 * num2;
} else if (operacion == "d") {
    if (num2 != 0) {
        resultado = num1 / num2;
    } else {
        resultado = "no se puede dividir por 0";
    }
} else {
    resultado = "Se ingresó mal la operación";
}

if (operacion == "a"){
    operacionString = "Suma";
} else if (operacion == "b") {
    operacionString = "Resta";
} else if (operacion == "c") {
    operacionString = "Multiplicación";
} else if (operacion == "d") {
    operacionString = "división";
}


alert( `El resultado de la ${operacionString} entre ${num1} y ${num2} es: ${resultado}`)