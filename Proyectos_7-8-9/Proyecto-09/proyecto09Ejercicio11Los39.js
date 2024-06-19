// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [11]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa pide al usuario cuantos terminos quiere ver de la serie triangular.
//Salvedad: Para valores de 0 o menores no garantizamos los resultados.
// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

// Pedir entrada del usuario
const terminoMaximo = parseInt(prompt('Por favor, ingresa el número de términos que desea ver: '));
//Constante terminoMaximo que guarda la cantidad de términos para ver
//Funcion serieTriangular que imprimirá la cantidad de terminos de la serie triangular que el usuario quiere ver
function serieTriangular(contador){
if(contador<=terminoMaximo){
    //Imprimimos un término.
    process.stdout.write((contador*(contador+1))/2 + ", ");
    return serieTriangular(contador+1);
}
};
//Llamamos a la función serieTriangular
serieTriangular(1);