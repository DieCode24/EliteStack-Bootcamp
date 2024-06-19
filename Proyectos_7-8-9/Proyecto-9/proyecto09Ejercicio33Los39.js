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
- Salvedades: Para valores no positivos, no se garantiza el resultado correcto
- Descripción: Este programa calcula el resultado aproximado del logaritmo natural de x por Series de Taylor
*/

const prompt = require('prompt-sync')(); // Importa el modulo prompt-sync que viene de Node.js

const x = parseFloat(prompt("Digite el valor de x: ")); // Guarda el valor de x ingresado por el usuario
const terminos = parseFloat(prompt("Digite el numero de terminos de la serie: ")); // Guarda la cantidad de terminos a iterar

const lnTaylor = (x, terminos) => {
    let lnX = 0; // Define la suma en 0

    for (let n = 1; n < terminos; n++) { // La iteracion empieza desde 1
        let termino = Math.pow((-1), n + 1) * Math.pow(x - 1, n) / n; // Define cada termino de la serie
        lnX += termino; // Suma cada termino
    }

    return lnX; // Retorna la suma total
}

console.log(lnTaylor(x, terminos));