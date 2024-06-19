// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [09]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

/* Descripcion variables:
 - interes: valor del interes que ingresa el usuario
 - capital: valor del capital que ingresa el usuario
 - saldo: saldo final que se muestra si al ngresar el capital supera los 7000
*/

const prompt = require('prompt-sync')(); // Se importa la libreria

console.log("Este programa lee dos valores. Interés(%) y Capital. Si el dinero recibido por intereses es mayor que $7000," +
    " se le indicara al inversionista que invierta, de lo contrario se le indicara que no debe invertir") // Se indica que realiza el programa en pantalla
function invertir() { // Declara la funcion
    let interes = 0; // Declara una variable tipo let
    let capital = 0; // Declara una variable tipo let
    let saldo = 0; // Declara una variable tipo let
    interes = parseFloat(prompt('Entre el interes en %: ')); // Se le solicita al usuario que ingrese el valor para el interes y se almacena en la variable
    capital = parseFloat(prompt('Entre el capital a invertir en $: '));// Se le solicita al usuario que ingrese el valor del capital a invertir y se almacena en la variable

    if (capital > 7000) { // Inicializa una condicion para validar que el capital sea mayor a 7000
        saldo = capital + ((capital * interes)/ 100 ) // Como se cumple la condicion anterior se realiza el procemiento y se almacena en la variable
        console.log("INVIERTA. SU SALDO SERA: $" + saldo) // Se muestra por pantalla el valor que tendra al invertir
    } else { // Si no se cumplio la condicion anterior se ejecutara lo que se encuntra dentro de las llaves
        console.log("NO INVIERTA") // Se muestra por pantalla que no debe invertir
    }
}


invertir() // Ejecuta la funcion