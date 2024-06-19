// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Dadas tres notas, se dice si el alumno aprobó o no.

const prompt = require('prompt-sync')();

function promedio(){
let nota1 = parseFloat(prompt('Ingrese la primera nota: '));
let nota2 = parseFloat(prompt('Ingrese la segunda nota: '));
let nota3 = parseFloat(prompt('Ingrese la tercera nota: '));
let promediof = (nota1+nota2+nota3)/3 //se halla el promedio
if (promedio >= 3.0){
    console.log("El estudiante aprobó con un promedio de: "+promediof.toFixed(2)); //promedio to fixed para mostrar pocos decimales, 2 en este caso.
        } else {
            console.log("El estudiante no aprobó con un promedio de: "+promediof.toFixed(2)); // muestra por consola el promedio to fixed para mostrar pocos decimales, 2 en este caso añadiendo el mensaje de excepción.
                }}
promedio(); // Llama a la función 