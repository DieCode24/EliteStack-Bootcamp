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
// Programa que convierte de mph (millas por hora) a m/s


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que convierte de mph (millas por hora) a m/s\n\n")    // Titulo del programa (UX - Amable con el usuario)

let mphData = readLineSync.question("Usuario, por favor digite la cantidad de mph que desea convertir a m/s => ");    // Guarda las millas por hora

mphData = parseFloat(mphData);    // Convierte en flotante los datos registrados
let msData = (0.44704 * mphData);    // Calcula los metros por segundo

console.log(` ${mphData} mphData equivale a ${msData} m/s`);  // Imprime el resultado, con el valor del angulo restante
