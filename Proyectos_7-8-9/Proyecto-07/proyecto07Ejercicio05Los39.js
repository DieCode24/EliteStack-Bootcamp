// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [5]
// - Hora: [11:00]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que pide horas y minutos, y devuelve el total de los minutos


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que pide horas y minutos, y devuelve el total de los minutos\n\n") // Titulo del programa (UX - Amable con el usuario)

let horasData = readLineSync.question("Usuario, por favor digite la cantidad de horasData => ");    // Variable que acumula la hora
let minutosData = readLineSync.question("\nAhora, por favor digite la cantidad de minutosData => ");    // Varible que guarda los minutosData ingresados


horasData = parseInt(horasData) // Convierte a entero las horas digitadas por el usuario
minutosData = parseInt(minutosData) // Convierte a entero los minutos digitados por el usuario


totalMinutos = (horasData * 60) + minutosData;  // Calcula la totalidad de los minutos

console.log(`\n\n${horasData} horas y ${minutosData} minutos equivalen a ${totalMinutos} minutos.`);    // Imprime los minuto(s) totale digitados por el uisuario