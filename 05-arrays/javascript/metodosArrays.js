let listaSuperDetallada = [
    {
        producto: "arroz",
        cantidad: 2
    },
    {
        producto: "papas",
        cantidad: 6
    },
    {
        producto: "jamon",
        cantidad: 2
    },
    {
        producto: "queso",
        cantidad: 3
    }
]

// los metodos del array es una función integrada en el lenguaje que nos permite manipular, transformar e iterar arrays

// selecionar un producto por su indice. El indice es la posicion del elemento que se encuentra en el array y empieza con el numero 0
// se puede seleccionar poniendo el indice entre corchetes [] y se puede combinar con los selectores de los objetos

console.log(listaSuperDetallada[0])
console.log(listaSuperDetallada[3])

console.log(`Se necesita ${listaSuperDetallada[2].cantidad} de ${listaSuperDetallada[2].producto}`)
console.clear()

//tambien se pueden modificar elementos al array

listaSuperDetallada.push({producto: "manzanas", cantidad: 8}) //agrega elementos al final del array seleccionado 
console.log(listaSuperDetallada);
console.clear();

listaSuperDetallada.unshift({producto: "cacao", cantidad: 1}) //agrega elementos al inicio del array seleccionado.
console.log(listaSuperDetallada);
console.clear();

listaSuperDetallada.pop() //Elimina el ultimo elemento del array
console.log(listaSuperDetallada);
console.clear();

listaSuperDetallada.shift() //Elimina el primer elemento del array
console.log(listaSuperDetallada);
console.clear();

//los arreglos se pueden iterar, ordenar, mapear, etc.

listaSuperDetallada.forEach((productos)=> console.log(productos.producto)) //recorre los "productos" del array y imprime su nombre (.producto)

const OTRA_LISTA = listaSuperDetallada.map((productos)=> productos.cantidad)
//Itera los productos y lo almacena en una constante o variable nueva
//agregando los datos que elija, en este caso la cantidad (.cantidad)

console.log(OTRA_LISTA);

const LISTA_SUMADA = OTRA_LISTA.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)//suma los valores internos del array
console.log(LISTA_SUMADA);