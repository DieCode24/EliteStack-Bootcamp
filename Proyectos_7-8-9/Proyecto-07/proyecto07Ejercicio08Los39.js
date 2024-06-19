// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [8]
// - Hora: [11:30]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que recibe 2 numeros y suma, resta, multiplica y divide


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que recibe 2 numeros y suma, resta, multiplica y divide\n\n") // Titulo del programa (UX - Amable con el usuario)

let numero1Registrado = readLineSync.question("Usuario, por favor digite el primer numero => ");    // Variable que guarda el primer numero
let numero2Registrado = readLineSync.question("\nAhora, por favor digite el segundo numero => ");    // Variable que guarda el segundo numero

numero1Registrado = parseFloat(numero1Registrado) // Convierte el segundo numero registrado en un entero
numero2Registrado = parseFloat(numero2Registrado) // Convierte el segundo numero registrado en un entero

console.log("\n\nRESULTADOS:")
console.log(`\nSuma => ${numero1Registrado + numero2Registrado}`);  // Imprime el resultado de la suma con los valores registrados
console.log(`\nResta => ${numero1Registrado - numero2Registrado}`);  // Imprime el resultado de la resta con los valores registrados
console.log(`\nMultiplicacion => ${numero1Registrado * numero2Registrado}`);  // Imprime el resultado de la multiplicacion con los valores registrados
console.log(`\nDivision => ${numero1Registrado / numero2Registrado}`);  // Imprime el resultado de la division con los valores registrados