/*
// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [05]
// - Hora: [10:00]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
Pide un nuemro de terminos para la serie de Padovan y la impime uno a uno los terminos hasta el numero ingresado.
Vgr: Salvedad: Para entradas de tipo string, no garantizamos los resultados.
*/


// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

//la funcion SeriePerrin se encarga de imprimir la serie de perrin hasta n terminos
function SeriePerrin(n,start,next,next2) {
    if(n > 0){
        //Imprime el termino inicial de la serie
        console.log(start);
        //llamado recursivo para calcular el siguente termino de la serie
        return SeriePerrin(n-1, next, next2, start + next);
    }
}

const number = parseInt(
    prompt("Por favor, ingresa el número de terminos deseados: "),
);
//Se llama a la serie con el numero inicial de terminos y los valores iniciales de los terminos
SeriePerrin(number, 3, 0, 2);
