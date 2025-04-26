// Constructor de objetos
// la funcion de los constructores de objetos es crear una "plantilla" 
// del objeto para luego poder instanciar (crear) un objeto en base a la pantilla que hemos creado

//Guia util de objetos
// https://www.freecodecamp.org/espanol/news/objetos-en-javascript-una-guia-para-principiantes

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = () => {
        return `Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`
    }
}

const personaje1 = new Personaje("Juan", "Salvador", 31)

console.log(personaje1.saludar())
personaje1.ocupacion = "Director"

console.log('Personaje1: ', personaje1)

personaje2 = personaje1

console.log('personaje2: ', personaje2);
personaje2.edad = 33
console.log('personaje1: ', personaje1);
console.log(personaje1 === personaje2)

personaje3 = { ...personaje2 }

console.log('personaje2:', personaje2);
console.log('personaje3:', personaje3);
console.log(personaje2 === personaje3);

personaje2.edad = 37

console.log('personaje2:', personaje2);
console.log('personaje3:', personaje3);

console.log(Object.getPrototypeOf(personaje3).constructor);
console.log(Object.getPrototypeOf(personaje2).constructor);

// Preguntas a chat gpt de como crear una copia de un objeto instanciado de un constructor
// y poder modificarlos sin que uno afecte al otro ya que al hacerlo de la forma
// objeto1 = objeto2; al modificar cualquiera de los objetos tambien se modifica el otro.
// en cambio al utilizar un sread operator (objeto3 = {...objeto2}) se crea una copia plana
// del objeto y no se genera una instancia del constructor, perdiendo el enlace al prototipo
// a los metodos que contiene el constructor o clase.
// https://chatgpt.com/share/6809ef1f-ca74-800f-8ab1-6982d4b5ba97

console.clear()