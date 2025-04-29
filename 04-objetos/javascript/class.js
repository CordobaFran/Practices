class Persona {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age
    }
    saludo() {
        console.log(`Mi nombre es ${this.name} ${this.lastname} y tengo ${this.age} años`);
    }
}

class Trabajador extends Persona {
    constructor(name, lastname, age, years) {
        super(name, lastname, age);
        this.years = years;
    }
    info() {
        console.log(`Soy el Trabajador ${this.name} y trabajo hace ${this.years} años`);
    }
}

const PERSONA1 = new Persona("Franco", "Cordoba", 33)



PERSONA1.saludo()

let persona2 = PERSONA1

console.log(persona2 === PERSONA1);

console.log(PERSONA1, persona2);

// Las clases funciona de la misma manera que los Objetos constructores
// proporciona una sintaxis más legible, facilita la herencia y la organización del código
// https://chatgpt.com/share/680b11e4-38f0-800f-925e-d56164caa271

console.clear()

const TRABAJADOR1 = new Trabajador(PERSONA1.name, PERSONA1.lastname, 33, 18)
console.log(TRABAJADOR1);
