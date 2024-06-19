/*
- Fecha de publicación: [18/06/2024]
- Hora: 9:34 pm
- 0.0.2
- Autores: [Todos los ingenieros del grupo (39)]
- Nombre del lenguaje utilizado: [Javascript]
- Versión del lenguaje utilizado: [ECMAScript 6]
- Presentado a: [Doctor Ricardo Moreno Laverde]

------- | Universidad Tecnológica de Pereira |-------------
--- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción:
Recrear la serie de tayler de la funcion e^x con las nth iteraciones que indique el usuario 
*/


let VALOR_X = parseInt(prompt('Ingrese el valor de X: ')) // Valor de X
let numeroTerminos = parseInt(prompt('Ingrese el número de terminos de la serie: ')) // Número de términos de la serie

// Funcion factoriol(n)
// Parametros: n: número entero
// Retorno: n! (factorial de n)
// Descripción: Calcula el factorial de un número n de manera recursiva.
function factorial(n) {
    // Condición de terminación (caso base)
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1);
}



// Guarda el valor de x
let xValor = parseInt(prompt("Entre el valor de X: "));
let nTerminos = parseInt(prompt("Entre el número de términos de la serie: "));

// Guarda el valor calculado de la serie de tayler e^x en la nth iteracion
let yResultado = eulerTaylor(xValor, nTerminos);

// Imprime el valor de la serie de taylor con un mensaje extrea
console.log(`Con ${nTerminos} términos, e^(${xValor}) = ${yResultado}`);