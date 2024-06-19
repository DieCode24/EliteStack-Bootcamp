/*
- Fecha de publicación: [19/06/2024]
- Hora: 10:31 pm
- 0.0.4
- Autores: [Todos los ingenieros del grupo (39)]
- Nombre del lenguaje utilizado: [Javascript]
- Versión del lenguaje utilizado: [ECMAScript 6]
- Presentado a: [Doctor Ricardo Moreno Laverde]

------- | Universidad Tecnológica de Pereira |-------------
--- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción:
Recrear la serie de tayler de la funcion e^x con las nth iteraciones que indique el usuario 
*/

const prompt = require("prompt-sync")();

// Funcion de euler con la serie de taylor
function eulerTaylor(x, n, i=1, exp=1, fact=1) {
    if(i > n+1) return 0;
    return (exp/fact) + eulerTaylor(x, n, i+1, exp*x, fact*i);
}



// Guarda el valor de x
let xValor = parseInt(prompt("Entre el valor de X: "));
let nTerminos = parseInt(prompt("Entre el número de términos de la serie: "));

// Guarda el valor calculado de la serie de tayler e^x en la nth iteracion
let yResultado = eulerTaylor(xValor, nTerminos);

// Imprime el valor de la serie de taylor con un mensaje extrea
console.log(`Con ${nTerminos} términos, e^(${xValor}) = ${yResultado}`);