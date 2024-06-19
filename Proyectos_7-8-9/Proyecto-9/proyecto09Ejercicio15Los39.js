// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [15]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un número entero y le sacará su respectivo Factorial.

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona.
const prompt = require('prompt-sync')();

// Pedir entrada del usuario
const number = prompt('Por favor, ingresa el número para aplicarle Factorial: ');
// constante number que guardaráel número a sacar el Factorial.

//Funcion Factorial que dado un número, se le devolverá su respectivo factorial.
function Factorial(number){
if (number<0){
    return "No se puede";
}else if (number>0 && number<=1){
    return 1;
}else{
    return number*Factorial(number-1);
}
}
//Imprimimos por consola la funcion 
console.log(Factorial(number));
