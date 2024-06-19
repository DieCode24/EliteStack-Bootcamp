/* -Fecha de publicación: Junio 18 de 2024
Hora: 9:03
Versión de su código: 3
Autores. Ing(c): Los 39 del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Programa que calcula el salario semanal de un obrero basado en las horas trabajadas.
*/

const prompt = require('prompt-sync')();

console.log("Programa el salario semanal de un obrero.")
// Pedir entrada del usuario,es decir, las horas trabajadas por el obrero y lo almacena en la variable horasTrabajas.
const horasTrabajadas = prompt('Por favor, ingresa el número de horas semanales trabajadas:');

/*Variables
horasTrabajadas : Variable que recibe el input del usuario y representa el numero de horas totales trabajadas.
salarioSemanal : Variable en donde se almacena el total del salario semanal del obrero.
horasNormales : Variable que guarda el número normal de horas trabajadas por el obrero en una semana (40).
tarifaHorasNormales : Variable que guarda el valor de la tarifa por las horas normales.
tarifaHorasExtra : Variable que guarda el valor de la tarifa por las horas extra.
*/

function calculoSalarioSemanal(horasTrabajadas){
    let salarioSemanal;
    let horasNormales = 40;
    let tarifaHorasNormales = 16;
    let tarifaHorasExtra = 20;
    //Condicional que evalua si el obrero trabaja más horas que la jornada normal (40 horas).
    if(horasTrabajadas <= 40 ){
        salarioSemanal = 16 * horasTrabajadas;
        }else{
        let horasTrabajadasExtras = horasTrabajadas - horasNormales;
        //Si las horas trabajadas son más de 40 las horasTrabajadas - horasNormales son el número de horas extras.
        salarioSemanal = (tarifaHorasNormales * horasNormales) + (horasTrabajadasExtras * tarifaHorasExtra);
        }
    return salarioSemanal
}

console.log(`El salario semanal del obrero corresponde a: $ ${calculoSalarioSemanal(horasTrabajadas)}.`)