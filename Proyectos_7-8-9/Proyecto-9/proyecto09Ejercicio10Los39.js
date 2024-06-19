// - Fecha de publicación: [20/06/2024]
// - Número de la tarea: [10]
// - Hora: [00:45]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]
// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---
// - Descripción: Programa que pide que se ingrese la el número n de terminos para que se muestre en pantalla los terminos de la serie de Motzkin hasta su enésimo terminos

//Se usa para importar el paquete prompt
const prompt = require('prompt-sync')(); // Función para pedir un valor al usuario

// Formula M(n) =  M(n-1) + sumatoria(k=0,n-2)M(k)*M(n-2-k) 
// Descripción: Función auxiliar para calcular la sumatoria de 0 a n - 2  que es el segundo termino de la sumatoria
// Parámetros: 
// memo: Un objeto que memoriza el cálculo de todos los terminos de motzkin para ser usados y evitar cáclulos inecesarios
// k: iterador de la sumatoria
// n: número del termino al que pertenece la sumatoria
const sumatoriaAux = (k, n, memo) => {
    if (k > n - 2) { return 0; } else {
        return motzkin(k, memo) * motzkin(n - 2 - k, memo) + sumatoriaAux(k + 1, n, memo);
    }
}

// Se define una función anonima flecha para la serie de Motzkin - Se crea un objeto (memo) vacío para usar memoización y guardar los resultados de la serie
const motzkin = (n, memo = {}) => {
    // Si el termino n de la serie ya fue calculado lo usamos en vez de volver a calcular
    if (n in memo) {
        return memo[n];
    }
    
    // Los dos primeros terminos de la serie de motzkin
    if (n === 0 || n === 1) {
        return 1;
    }

    //Formula M(n) =  M(n-1) + sumatoria(k=0,n-2)M(k)*M(n-2-k) 
    let sumatoria = sumatoriaAux(0, n, memo);

    //Se guardan los resultados
    memo[n] = motzkin(n - 1, memo) + sumatoria; // Por cada calculo de n lo agregamos al objeto de memorización
    return memo[n]; // n es la clave dentro de el objeto memo, y el valor es el resultado o termino de la serie
};


//Pedir al usuario que ingrese el número de terminos
console.log('Función de la serie de Motzkin');
let n = parseInt(prompt('Ingresa el n termino: ')) // Valor de n para los terminos
console.log(`M(${n}) = ${motzkin(n)}`);
