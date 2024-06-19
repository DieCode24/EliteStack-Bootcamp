// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [9]
// - Hora: [11:40]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que encuentra el valor del ángulo faltante de un triangulo si toma el valor de los otros dos ángulos como datos de entrada


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que encuentra el valor del ángulo faltante de un triangulo si toma el valor de los otros dos ángulos como datos de entrada\n\n")    // Titulo del programa (UX - Amable con el usuario)

let angulo1 = readLineSync.question("Usuario, por favor digite el valor del primer angulo => ");   // Variable que guarda el primer angulo
let angulo2 = readLineSync.question("\nAhora, por favor digite el valor del segundo angulo => ");  // Variable que guarda el segundo angulo

angulo1 = parseFloat(angulo1);    // Convierte a flotante el dato registrado en el angulo 1
angulo2 = parseFloat(angulo2);    // Convierte a flotante el dato registrado en el angulo 2

let angulo3 = 180 - (angulo1 + angulo2)    // Calcula el valor del angulo faltante

console.log(`\n\nEl valor del tercer angulo de un triangulo con angulos de:\nAngulo 1 => ${angulo1}\nAngulo 2 => ${angulo2}\n\nEs de => ${angulo3}`)  // Imprime el resultado, con el valor del angulo restante