// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [10]
// - Hora: [11:50]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que convierte de mphData (millas por hora) a m/s


//npm install readline-sync
const readLineSync = require('readline-sync');

let mphData = readLineSync.question("por favor digite la cantidad de mphData que desea convertir a m/s: ");//guarda las millas por hora

mphData=parseFloat(mphData);
let mseg= 0.44704 * mphData;//calcula los metros por segundo

console.log(` ${mphData} mphData equivale a ${mseg} m/s`);


