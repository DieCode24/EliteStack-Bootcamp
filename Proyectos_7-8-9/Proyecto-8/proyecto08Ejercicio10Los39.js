/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Ing Los 39
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Dadas tres notas, se dice si el alumno aprobó o no.*/
const prompt = require('prompt-sync')();

function promedio(){//Ingreso de las notas
    let nota1 = parseFloat(prompt('Ingrese la primera nota: '));
    let nota2 = parseFloat(prompt('Ingrese la segunda nota: '));
    let nota3 = parseFloat(prompt('Ingrese la tercera nota: '));
    let promediof = (nota1+nota2+nota3)/3 //se halla el promedio
if (promedio >= 3.0){
    console.log("El estudiante aprobó con un promedio de: "+promediof.toFixed(2)); //promedio to fixed para mostrar pocos decimales, 2 en este caso.
        } else {
            console.log("El estudiante no aprobó con un promedio de: "+promediof.toFixed(2));
                }}
promedio();