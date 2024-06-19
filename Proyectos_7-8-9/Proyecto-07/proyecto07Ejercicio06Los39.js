// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [6]
// - Hora: [11:05]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que calcula las horas en base a los minutos ingresados


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que calcula las horas en base a los minutos ingresados\n\n") // Titulo del programa (UX - Amable con el usuario)

let minutosData  = readLineSync.question("Usuario, por favor digite la cantidad de minutos => ")

minutosData = parseInt(minutosData);    // Convierte en entero el valor introducido por el usuario

let horasRedondeadas = Math.floor(minutosData / 60);  // Hace la operacion matematica para las horas a partir de los datos registrados
let minutosRedondeados = Math.floor(minutosData  % 60);   // Hace la operacion matematica para los minutos a partir de los datos registrados

/*
La función Math.floor() redondea hacia abajo el resultado de la división al número entero más cercano. Esto es necesario porque queremos obtener únicamente las horas y minutos completos, sin decimales. Por ejemplo, si minutosData es 120, 120 / 60 resulta en 2, y Math.floor(2) también da como resultado 2.
*/

console.log(`\n\n${minutosData} minutos equivalen a ${horasRedondeadas} hora(s) y ${minutosRedondeados} minuto(s).`);  // Imprime las horas a partir de los datos registrados por el usuario