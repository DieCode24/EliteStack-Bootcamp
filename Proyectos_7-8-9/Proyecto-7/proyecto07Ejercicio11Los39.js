/*
-Fecha de publicación: 18/06/2024
-Hora:7:40 pm
- 1.0.0
--autor: los 39
- JavaScript
- version ECMAScript 2019
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- descripcion: a partir de horas minutos y segundos calcula el total de milisegundos
*/
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


