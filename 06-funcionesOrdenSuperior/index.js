const DATOS_RND = [
    {
        nombre: "Franco",
        año: 1992
    },
    {
        nombre: "Lucia",
        año: 1993
    },
    {
        nombre: "Luciana",
        año: 2006
    },
    {
        nombre: "Ana",
        año: 1997
    },
    {
        nombre: "Francisco",
        año: 1980
    }
]

const DATOS_RND1 = [

]

const NOMBRES = []

DATOS_RND.forEach((pers) => {
    NOMBRES.push(pers.nombre)
})

console.log(NOMBRES);

// PROMEDIO DE AÑOS ENTRE LOS DATOS
let anioDat = []
let prom

//DATOS_RND.forEach((pers)=>{
//    anioDat.push(pers.año)
//})

//prom = anioDat.reduce((prev,act)=> prev+act,0) / anioDat.length

// PROMEDIO DE AÑOS EN UNA FX
function promedio_anios(dataProm) {
    let tempData = dataProm.map((data) => data.año)
    //valida si el array tiene 1 solo dato y no dividir por 0
    if (tempData.length !== 0) {
        return tempData.reduce((prev, act) => prev + act, 0) / tempData.length
    } else {
        return tempData
    }
}

console.log(promedio_anios(DATOS_RND));
console.log(promedio_anios(DATOS_RND));
console.clear()

function buscador_nombre(datos, nombre) {
    let temp = datos.find((el) => el.nombre === nombre)

    if (temp) {
        return temp
    } else {
        return "no se encontró el nombre"
    }
}

console.log(buscador_nombre(DATOS_RND, "Franco"));
console.log(buscador_nombre(DATOS_RND, "Fra"));
console.clear()

//math

function mayor(data) {

    let anios = data.map((el) => el.año)
    let max = Math.max(...anios)
    let newData = data[anios.indexOf(max)]

    return newData
}

console.log(mayor(DATOS_RND));







