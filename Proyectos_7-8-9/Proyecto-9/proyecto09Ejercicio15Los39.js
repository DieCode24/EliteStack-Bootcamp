/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Los 39 del Bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide al usuario un número al cual, se le aplicará el factorial.*/

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

// Pedir entrada del usuario
const number = prompt('Por favor, ingresa el número para aplicarle factorial: ');

function factorial(number){
if (number<0){
    return "No se puede";
}else if (number>0 && number<=1){
    return 1;
}else{
    return number*factorial(number-1);
}
}

console.log(factorial(number));
