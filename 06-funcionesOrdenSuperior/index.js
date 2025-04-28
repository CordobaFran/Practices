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

prom = DATOS_RND.nombre

console.log(prom);



