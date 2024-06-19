/* -Fecha de publicación: Junio 18
- Hora: 
- Versión de su código: 1
- Autores: Ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa pide un numero de termino deseado de la serie de Catalán: 1, 1, 2, 5, 14, 42, 132, 429, 1430, ...*/

const prompt = require('prompt-sync')(); // Se importa la libreria prompt-sync

function factorial(numero){
    if (numero == 1 || numero == 0) // Se valida si el numero es 1 o 0
        return 1; // Se retorna 1
    else return numero*factorial(numero-1); // Se retorna el factorial del numero
}

function serieDeCatalan(indice){
    let serie = []; // Se inicializa la serie
    if (indice < 0) // Se valida si el indice es negativo
        console.log("No se puede ingresar numeros menores a 0"); // Se imprime un mensaje de error
    else {
        for (let i = 0; i <= indice; i++) { // Se recorre la serie desde el termino 0 hasta el termino deseado
            serie[i] = (factorial(2*i)) / (factorial(i)*factorial(i+1)); // Se calcula el termino actual
        }
        return serie.join(", "); // Se retorna la serie
    }
}

let termino = parseInt(prompt("Ingrese el termino deseado: "));

console.log("La serie hasta el termino " + termino + " es: " + serieDeCatalan(termino));