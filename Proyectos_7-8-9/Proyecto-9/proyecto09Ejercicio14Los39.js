/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Los 39 del Bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide imprime las tablas del 1 al 10 completas.*/
const prompt = require('prompt-sync')();
//usaremos la lógica de un for anidado, el cual es "un for en un for".
function tablasMultiplicar(){
    for (let numero1 = 1; numero1 <= 10; numero1++) { // los números 1 y 2 irán desde el 1 al 10, incrementando en uno al final de cada iteración.
        console.log(`\nTabla del ${numero1}\n`) // número1 será el número que se multiplica por los numeros del 1 al 10.
        for (let numero2 = 1; numero2 <= 10; numero2++) { //Este número itera por cada tabla hasta el 10
            console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`) //mostramos el resultado.
        }

}}
tablasMultiplicar()