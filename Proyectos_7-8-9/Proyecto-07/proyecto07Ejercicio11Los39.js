// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [11]
// - HoraData: [12:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que a partir de horas, minutos y segundos calcula el total de milisegundos


//npm install readline-sync
const readLineSync = require('readline-sync');

console.log("# Programa que a partir de horas, minutos y segundos calcula el total de milisegundos\n\n")    // Titulo del programa (UX - Amable con el usuario)

console.log("Usuario, por favor digite el numero de hora, minutos y segundos que desea convertir a milisegundos\n\n"); // Solicita los valores

let horaData = readLineSync.question("- Digite hora => "); //Recibe el valor para la variable hora
let minutosData = readLineSync.question("\n- Digite minutos => "); //Recibe el valor para la variable minutos
let segundosData = readLineSync.question("\n- Digite segundos => "); //Recibe el valor para la variable segundos

horaData = parseFloat(horaData);    // Convierte a flotantes el valor registrado en la variable hora
minutosData = parseFloat(minutosData);    // Convierte a flotantes el valor registrado en la variable minutos
segundosData = parseFloat(segundosData);    // Convierte a flotantes el valor registrado en la variable segundos

let milisegundosData = (((horaData * 60) * 60)*1000)+((minutosData * 60) * 1000)+(segundosData * 1000); // Calcula los milisegundos teniendo en cuenta los valorews registrados

console.log(`\n\nLa cantidad de milisegundos por ${horaData} horaData, ${minutosData} minutos y ${segundosData} segundos es de:\n=> ${milisegundosData} milisegundos`);    // Imprime el resultado