// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [4]
// - Hora: [10:30]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Convierte de km/h a mph (millas por hora)


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que convierte de km/h a mph (millas por hora)\n\n") // Titulo del programa (UX - Amable con el usuario)

kmhData = readLineSync.question("Usuario, por favor digite cuantos km/h (kilometros x hora) quiere convertir a mph (millas x hora) => ");   // Solicita los kilometros por hora

kmhData = parseInt(kmhData);  // Convierte a entero el dato registrado por el usuario

mphData = kmhData * 0.621371    // Calcula las millas por hora a partir de su formula en funcion de los kilometros por hora

console.log(`\n\n${kmhData} km/h equivale a ${mphData} mph.`);     // Imprime las millas por hora
