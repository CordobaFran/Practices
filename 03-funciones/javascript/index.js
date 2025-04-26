let numPrompt1, numPrompt2, operacion;

operacion = prompt(`Indique la operación:
    A: Suma
    B: Resta
    C: Multiplicar
    D: Dividir`).toLowerCase();

numPrompt1 = parseInt(prompt("Ingrese el primer numero"));
numPrompt2 = parseInt(prompt("Ingrese el segundo numero"));


const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "No se puede dividir por 0";
    };
};

switch (operacion) {
    case "a":
        resultadoAlert(numPrompt1, numPrompt2, "+", suma(numPrompt1, numPrompt2));
        break;
    case "b":
        resultadoAlert(numPrompt1, numPrompt2, "-", resta(numPrompt1, numPrompt2));
        break;
    case "c":
        resultadoAlert(numPrompt1, numPrompt2, "x", multiplicacion(numPrompt1, numPrompt2));
        break;
    case "d":
        resultadoAlert(numPrompt1, numPrompt2, "/", division(numPrompt1, numPrompt2));
        break;
    default:
        alert(`La opción " ${operacion} " no es una operación válida`);
        break;
};


function resultadoAlert(num1, num2, oper, operCallback) {
    if ( typeof operCallback !== "string") {
        alert(`El resultado de ${num1} ${oper} ${num2} = ${operCallback}`);
    } else {
        alert(operCallback);
    };
};

/* function suma(num1, num2) {
    return num1 + num2
}

function resta(num1, num2) {
    return num1 - num2
}

function multiplicacion(num1, num2){
    return num1 * num2
}

function division(num1, num2){
    if(num2 !== 0){
        return num1 / num2
    } else {
        return "No se puede dividir por 0"
    }
} */



