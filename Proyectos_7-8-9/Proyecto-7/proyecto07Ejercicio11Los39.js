// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [11]
// - Hora: [12:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Programa que a partir de horas minutos y segundos calcula el total de milisegundos


//npm install readline-sync
const readlineSync = require('readline-sync');


console.log("por favor digite el numero de horas, minutos y segundos que desea convertir a milisegundos: ");//solicita los valores

let hora = readlineSync.question("Digite horas: ");//recibe los valores
let minutos = readlineSync.question("Digite minutos: ");
let segundos = readlineSync.question("Digite segundos: ");

hora=parseFloat(hora);//convierte a flotantes
minutos=parseFloat(minutos);
segundos=parseFloat(segundos);

let milisegundos=(((hora*60)*60)*1000)+((minutos*60)*1000)+(segundos *1000);//calcula los milisegundos

console.log(`La cantidad de milisegundos pora ${hora} hora, ${minutos} minutos y ${segundos} segundos es  de ${milisegundos} milisegundos`);//imprime los milisegundos


