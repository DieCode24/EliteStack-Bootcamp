// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un valor de X y la cantidad de terminos de la serie, calculará la serie de taylor y devolverá el resultado

// prompt-sync: modulo que proporciona una manera de pedir valores por consola
const prompt = require('prompt-sync')(); // Función para pedir un valor al usuario

let VALOR_X = parseInt(prompt('Ingrese el valor de X: ')) // Valor de X
let numeroTerminos = parseInt(prompt('Ingrese el número de terminos de la serie: ')) // Número de términos de la serie

// Funcion factoriol(n)
// Parametros: n: número entero
// Retorno: n! (factorial de n)
// Descripción: Calcula el factorial de un número n de manera recursiva.
function factorial(n) {
    // Condición de terminación (caso base)
    if (n === 0 || n === 1) { // Casos bases del factorial
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1); // Recursión para cada número del factorial
}

// Función cosTaylor(iteraciones)
// Parametros: iteraciones: número entero
// Retorno: Suma de los n primeros términos de la serie de Taylor para el coseno de x.
// Descripción: Calcula la suma de los n primeros términos de la serie de Taylor para el
// coseno de x de manera recursiva.
const cosTaylor = (iteraciones) => {
    // Condición de terminación (caso base)
    if(iteraciones > 0){ //Se hace el calcula para el termino n actual y se suma con el termino n-1 llamando a la función recursivamente.
        return (-1)**iteraciones * VALOR_X**(2*iteraciones) / factorial(2*iteraciones) + cosTaylor( iteraciones - 1); // Serie de taylor del coseno
    }
    else{
        return 1; // Caso base
    }
}

// Se imprime el texto de resultado y las variables que usamos para calcular
console.log(`con (${numeroTerminos}) términos, sin(${VALOR_X}) = ${cosTaylor(numeroTerminos)}`)
