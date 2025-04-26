/* let numero
let resultado

numero = parseInt(prompt("ingrese el numero a multiplicar"))

for (i = 1; i <= 10; i++) {
    resultado = numero * i
    console.log(`el resultado de ${numero} x ${i} es ${resultado}`)
}

 */

/* Tabla de multiplicar con if */

/* let numero;
let resultado = [];

numero = parseInt(prompt("Ingrese el nùmero a multiplicar"))

for (i = 0; i <= 10; i++) {
    resultado.push(numero * i)
}

console.log(`La tabla del ${numero} es:`)
console.table(resultado) */


/* Tabla de multiplicar con While */

/* let numero, cantidad, contador = 1;
let resultado = [0];

numero = parseInt(prompt("Indicar el número a multiplicar"))
cantidad = parseInt(prompt("Indique la cantidad de veces a multiplicar"))

while (contador <= cantidad) {
    resultado.push(numero * contador);
    contador++;
}

console.table(resultado); */


/* Calculadora con SWITCH */

/* let num1, num2, operacion, operacionTexto, resultado;

operacion = prompt(`Indique la operación:
    A: Suma
    B: Resta
    C: Multiplicar
    D: Dividir`).toLowerCase()

num1 = parseInt(prompt("Indique su primer número"))
num2 = parseInt(prompt("indique su segundo número"))

switch (operacion) {
    case "a":
        resultado = num1 + num2
        operacionTexto = "+"
        break;

    case "b":
        resultado = num1 - num2
        operacionTexto = "-"
        break;

    case "c":
        resultado = num1 * num2
        operacionTexto = "*"
        break;

    case "d":
        if (num2 !== 0) {
            resultado = num1 / num2
            operacionTexto = "/"
            break;
        } else {
            alert("No se puede dividir por 0")
            operacionTexto = "fail"
            break;
        }

    default:
        alert("Parametros mal ingresados")
        operacionTexto = "fail"
        break;
}
if (operacionTexto !== "fail") {
    alert(`El resultado de ${num1} ${operacionTexto} ${num2} = ${resultado}`)
} */




/* Login basico con contraseña */

/* let password;

do {
    password = prompt("Ingrese su contraseña")
} while (password !== "clavecorrecta"); */

let password;
let passwordOk = "clave123";
const MAX_INTENTOS = 3;
let intentos = MAX_INTENTOS;

do {
    if (intentos !== 0) {
        password = prompt("Ingrese su contraseña")
        intentos--
        console.log( `intentos ${ intentos }` )
    } else {
        alert("Se acabaron los intentos, vuelve a intentar mas tarde")
        break;
    }

    if (password === passwordOk){
        alert("Contraseña correcta, bienvenido/a")
        console.log("login OK")
    }


} while (password !== passwordOk);