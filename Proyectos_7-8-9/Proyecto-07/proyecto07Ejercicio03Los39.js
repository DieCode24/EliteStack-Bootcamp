// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [3]
// - Hora: [10:20]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que calcula el perímetro de un rectángulo.


// npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que calcula el perímetro de un rectángulo\n\n") // Titulo del programa (UX - Amable con el usuario)

let largoRectangulo =  readLineSync.question("Usuario, por favor digite el largo del rectangulo => ");  //solicita el largo del rectangulo
let anchoRectangulo = readLineSync.question("\nAhora, por favor digite el ancho del rectangulo => ");    // Solicita el ancho del rectangulo

largoRectangulo = parseInt(largoRectangulo);    // Vuelve en entero el largo ingreado por el usuario
anchoRectangulo = parseInt(anchoRectangulo);    // Vuelve en entero el ancho ingreado por el usuario

let perimetroRectangulo = (largoRectangulo * 2) + (anchoRectangulo * 2);    // Calcula el perimetro del rectangulo

console.log(`\n\nEl perimetro de un rectangulo con largo ${largoRectangulo}  y ancho ${anchoRectangulo} es de => ${perimetroRectangulo} `);   // Imprime el perimetro del rectangulo