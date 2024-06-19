// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [1]
// - Hora: [10:00]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Convierte de grados centígrados a grados fahrenheit.


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que convierte de grados centígrados a grados fahrenheit\n\n") // Titulo del programa (UX - Amable con el usuario)

let gradosCentigrados = readLineSync.question("Usuario, por favor digite los grados centigrados que desea convertir a grados fahrenheit => ")     // Solicita los grados a convertir

gradosCentigrados = parseInt(gradosCentigrados);    // Convierte el dato registrado a entero

let gradosFarenheit = ((9 / 5) * gradosCentigrados) + 32;     // Convierte de grados a centigrados

console.log(`\n\n${gradosCentigrados}°C son ${parseFloat(gradosFarenheit)} grados Fahrenheit.`)   // Imprime los grados convertidos a fahrenheit