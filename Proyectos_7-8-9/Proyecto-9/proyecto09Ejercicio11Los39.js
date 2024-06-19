/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Los 39 del Bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide al usuario cuantos terminos quiere ver de la serie triangular.*/

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

// Pedir entrada del usuario
const terminoMaximo = parseInt(prompt('Por favor, ingresa el número de terminos deseados: '));
//Funcion serieTriangular que imprimirá la cantidad de terminos de la serie triangular que el usuario quiere ver
function serieTriangular(contador){
if(contador<=terminoMaximo){
    console.log((contador*(contador+1))/2);
    return serieTriangular(contador+1);
}
}
serieTriangular(1);