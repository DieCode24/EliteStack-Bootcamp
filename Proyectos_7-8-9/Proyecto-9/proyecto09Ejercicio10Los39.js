// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [10]
// - Hora: [00:45]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción: Programa que pide que se ingrese la el número n de terminos para que se muestre en pantalla los terminos de la serie de Motzkin hasta su enésimo terminos

//Se usa para importar el paquete readline
const readline = require('readline-sync');

// See deine una función anonima flecha para la serie de Motzkin

const memo = {};//Se crea un objeto vacío para usar memoización y guardar los resultados de la serie

const motzkin = (n) => {
    // Si si el termino n de la serie ya fue calculado lo usamos en vés de volver a calcular
    if (n in memo) {
        return memo[n];
    }

    // Los dos primeros terminos de la serie de motzkin
    if (n === 0 || n === 1) {
        return 1;
    }

    //Formula M(n) =  M(n-1) + sumatoria(k=0,n-2)M(k)*M(n-2-k) 
    let sumatoria = 0;
    for (let k = 0; k <= n - 2; k++) {
        sumatoria += motzkin(k) * motzkin(n - 2 - k);
    }

    //Se guardan los resultados
    memo[n] = motzkin(n - 1) + sumatoria; // Por cada calculo de n lo agregamos al objeto de memorización
    return memo[n]; // n es la clave dentro de el objeto memo, y el valor es el resultado o termino de la serie
};

//Pedir al usuario que ingrese el número de terminos
console.log('Función de la serie de Motzkin');
let input = readline.question("Ingresa el numero de terminos: ");
const n = parseInt(input);
console.log(`M(${n}) = ${motzkin(n)}`);