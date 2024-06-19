// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [7]
// - Hora: [11:20]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que pida los datos del usuario y los imprima juntos

//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que pida los datos del usuario y los imprima juntos\n\n") // Titulo del programa (UX - Amable con el usuario)

let nombreUsuario = readLineSync.question("Usuario, por favor digite su nombre => "); // Variable que guarda el nombre del usuario
let apellidoUsuario = readLineSync.question("\nAhora, por favor digite su apellido => "); // Variable que guarda del apellido del usuario
let anioNacimientoUsuario = readLineSync.question("\nAhora, por favor digite su año de nacimiento => "); // Variable que guarda el año de nacimiento del usuario

console.log(`\n\nDatos reistrados:\n-> ${nombreUsuario}\n-> ${apellidoUsuario}\n-> ${anioNacimientoUsuario}`)  // Imprime los datos registrados por el usuario