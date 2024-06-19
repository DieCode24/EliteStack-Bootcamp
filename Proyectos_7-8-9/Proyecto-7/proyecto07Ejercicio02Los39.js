// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [2]
// - Hora: [10:10]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Calcula el volumen de una esfera.


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que calcula el volumen de una esfera\n\n") // Titulo del programa (UX - Amable con el usuario)

const PI = 3.1415926;   // Crea la constante π

let radioEsfera = readLineSync.question("Usuario, por favor digite el radio de la esfera a la que desea saber su volumen => ");     // Variable que acumula el radioEsfera dado
radioEsfera = parseInt(radioEsfera)   // Convierte a entero el radio digitado

let volumenEsfera = (4 / 3) * PI * (radioEsfera ** 3);    // Operacion para obtener el volumen de una esfera a partir del radio

console.log(`\n\nEl volumen de una esfera de radio ${radioEsfera} es de ${volumenEsfera} `)     // Imprime el resultado