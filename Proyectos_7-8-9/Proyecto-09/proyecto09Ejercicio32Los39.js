// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [32]
// - Hora: [11:11]AM
// - Versión de la tarea: [1]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un valor de X y la cantidad de terminos de la serie, calculará la serie de taylor y 
// devolverá el resultado de la suma de esos terminos en la sucesion de coseno hiperbolico

const prompt = require('prompt-sync')(); // Importa el modulo prompt-sync para pedir input al usuario

const x = parseInt(prompt("Ingrese el valor en x : ")); // Guarda el valor de x ingresado por el usuario
const n = parseInt(prompt("Ingrese el numero de terminos de la serie : ")); // Guarda la cantidad de terminos a usar en la suma
function coshHelper(x, n, lastTerm, limit, index) {
    /*Calcula la suma de n terminos en la sucesion coseno hiperbolico
    el termino n en la serie es el termino (n-1) multiplicado por x^2 y dividido por (n * (n-1)) donde n es par  
        Parameters:
        x : Number - El x ingresado por el usuario
        n : Potencia (y facorial) e.g. en el termino 1 es 2, en el 2 es 4, etc
        lastTerm : El termino anterior en la serie
        limit : El numero de terminos ingresado por el usuario
        index : El indice (numero de termino, empezando en 0)
    */
    let term = lastTerm * x * x / (n * (n-1)) // El termino anterior en la serie
    if ( index >= (limit-1) ){
        return 0
    } else {
        return term + coshHelper(x, n+2, term, limit, index+1) // Suma los terminos recursivamente 
    }
}

function cosh(x, n){
    return 1 + coshHelper(x, 2, 1, n, 1) // Retorna el primero termino en la serie mas el output de coshHelper
}
 
console.log(`Con ${n} términos, cosh(${x}) = ${cosh(x, n)}`) // Imprime el resultado