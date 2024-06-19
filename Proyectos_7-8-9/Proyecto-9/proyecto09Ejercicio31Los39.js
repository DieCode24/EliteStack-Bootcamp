/*
- 18/Junio/2024
- Hora: 
- Versión: 2
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Salvedades: Para valores no numericos, no se garantiza el resultado correcto
- Descripción: Este programa calcula el resultado aproximado del seno hiperbolico de x por Series de Taylor
*/

const prompt = require('prompt-sync')(); // Importa el modulo prompt-sync que viene de Node.js

const x = parseFloat(prompt("Digite el valor de x: ")); // Guarda el valor de x ingresado por el usuario
const terminos = parseFloat(prompt("Digite el numero de terminos de la serie: ")); // Guarda la cantidad de terminos a iterar

function factorial(n) { // Funcion para calcular el factorial de un numero
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const senhTaylor = (x, terminos) => {
    let senhX = 0; // Define la suma en 0

    for (let n = 0; n < terminos; n++) { // La iteracion empieza desde 0
        let termino = Math.pow(x, 2 * n + 1) / factorial(2 * n + 1); // Define cada termino de la serie
        senhX += termino; // Suma cada termino
    }

    return senhX; // Retorna la suma total
}

console.log(senhTaylor(x, terminos));