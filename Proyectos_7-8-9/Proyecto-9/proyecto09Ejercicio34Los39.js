/*
- 18/Junio/2024
- Hora: 
- Versión: 1
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Salvedades: Para valores no numericos, no se garantiza el resultado correcto
- Descripción: Este programa calcula la suma de n terminos en la sucesion infinita de la funcion seno
*/

const prompt = require('prompt-sync')(); // Importa el modulo prompt-sync para pedir input al usuario

const x = parseInt(prompt("Ingrese el valor en x : ")); // Guarda el valor de x ingresado por el usuario
const n = parseInt(prompt("Ingrese el numero de terminos de la serie : ")); // Guarda la cantidad de terminos a usar en la suma

function senHelper(x, n, lastTerm, limit, index) { 
    // Calcula la suma de n terminos en la sucesion seno 
    // el termino n en la serie es el termino (n-1) multiplicado por x^2 y dividido por (n * (n-1)) donde n es impar 
    let term = lastTerm * x * x / (n * (n-1)) * -1; // El termino anterior en la serie
    if ( index >= limit ){
        return 0;
    } else {
        return term + senHelper(x, n+2, term, limit, index+1); // Suma los terminos recursivamente 
    }
}

function sen(x, n){
    return x + senHelper(x, 3, x, n, 1);
}

console.log(sen(x,n));