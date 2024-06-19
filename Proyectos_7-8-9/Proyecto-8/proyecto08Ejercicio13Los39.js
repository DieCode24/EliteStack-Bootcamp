/*
* Fecha de publicacion: 18/06/2024
* Hora: 16:00
* Version codigo: 1.0
* Autor Los 39 del bootcamp
* Version: ECMAScript 6.0
* Presentado a: Doctor Ricardo Moreno Laverde
* Universidad Tecnologica de Pereira
* Programa de Ingenieria de Sistemas y Computacion
* Descripcion: progama que muestra la actividad, tiempo y calorias consumidas 
*
* Descripcion variables:
 - actividad: variable que ingresa el usuario de la actividad que puede realizar
 - tiempo: variable que ingresa el usuario del tiempo que realiza la actividad
 - caloriasPorMinuto: valor por actividad 
 - caloriasConsumidas: tiempo * caloriasPorMinuto
*/
// Importa el módulo prompt-sync
const prompt = require('prompt-sync')();

// Función para calcular las calorías consumidas
function calcularCalorias(actividad, tiempo) {
    let caloriasPorMinuto;

    if (actividad === 'dormir') {
        caloriasPorMinuto = 1.08;
    } else if (actividad === 'reposo') {
        caloriasPorMinuto = 1.66;
    } else {
        console.log("esa actividad no esta en las permitidas")
        return
    }

    let caloriasConsumidas = caloriasPorMinuto * tiempo;
    console.log("activadad: " + actividad + " tiempo: " + tiempo + " calorias consumidas: " + caloriasConsumidas);
}

let actividad = prompt('For favor, ingresa la actividad (dormir/reposo): ').toLowerCase();
let tiempo = parseFloat(prompt('Por favor, ingrese el tiempo: '));


calcularCalorias(actividad, tiempo);
