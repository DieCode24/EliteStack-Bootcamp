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

// Objeto que memoriza el valor calculado de cada término, se añaden los dos casos base desde el principio
// M(0) = 1
// M(1) = 1
let memo = {}

// Formula M(n) =  M(n-1) + sumatoria(k=0,n-2)M(k)*M(n-2-k) 
// Descripción: Función auxiliar para calcular la sumatoria de 0 a n - 2  que es el segundo termino de la sumatoria
// Parámetros: 
// memo: Un objeto que memoriza el cálculo de todos los terminos de motzkin para ser usados y evitar cáclulos inecesarios
// k: iterador de la sumatoria
// n: número del termino al que pertenece la sumatoria
const sumatoriaAux = (k, n) => {
    if (k > n - 2) { return 0; } else {
        return motzkin(k) * motzkin(n - 2 - k) + sumatoriaAux(k + 1, n);
    }
}


// Se define una función anonima flecha para la serie de Motzkin - Se crea un objeto (memo) 
//vacío para usar memoización y guardar los resultados de la serie. La función almacena n + 1 
//elementos en el objeto memo, el objeto memo se puede usar para consultar un valor

// La razón por la que se agregan n + 1 términos a memo es porque el primer termino de 
// la serie corresponde a M(0) = 1, puesto que la serie no empieza en 1 sino en 0, todo n generará n + 1 terminos.

const motzkin = (n) => {
    // Si el termino n de la serie ya fue calculado lo usamos en vez de volver a calcular
    if (n in memo) { // si n no está en memo, este se agrega a memo
        return memo[n];
    }

    if (n === 0) { // si n es 0 o 1, la serie devuelve 1 es decir M(0) = 1, M(1) = 1
        memo[n] = 1;
        return 1;
    };
    if (n === 1) {
        memo[n] = 1;
        return 1;
    }

    //Formula M(n) =  M(n-1) + sumatoria(k=0,n-2)M(k)*M(n-2-k) 
    let sumatoria = sumatoriaAux(0, n);

    //Se guardan los resultados en memo
    memo[n] = motzkin(n - 1) + sumatoria; // Por cada calculo de n lo agregamos al objeto de memorización
    return memo[n]; // n es la clave dentro de el objeto memo, y el valor es el resultado o termino de la serie
};

//Pedir al usuario que ingrese el número de terminos
console.log('Función de la serie de Motzkin');
let n = parseInt(prompt('Ingresa el n termino: ')) // Valor de n para los terminos

// Se llama a la función que calcula la función con n - 1 porque en esta implementación la función devuelve n + 1 términos
motzkin(n - 1)

//Se imprimen los terminos
const values = Object.values(memo).join(', ');

// Si n es 1 o 2, se imprime 1 o 1, 1 respectivamente, estos corresponden a los dos primeros casos de la serie.
// Estos if son necesarios para manejar correctamente n = 1 y n = 2
if(n === 1){
    console.log("1")
} else if(n === 2){
    console.log("1, 1")
} else {
    console.log(values);
}
