// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [03]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [ECMAScript 6]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

//Descripcion del programa
//Que pida un número del 1 al 7 e imprima el día de la semana correspondiente.

//Importar libreria prompt-sync
const prompt = require("prompt-sync")();

console.log("Este programa, lee un número entre [1 y 7] e imprime el día que le corresponde en la semana. Referencia: 1=Lunes. 7=Domingo");

const DIAS = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domigo"];

// Pedir por consola el numero del dia de la semana
let numeroDia = parseInt(prompt("Entre un número: "));

if (numeroDia < 0 || numeroDia > 7){
  console.log("El numero supera el rango")
} else {
  console.log(`El numero ${numeroDia} corresponde al dia de la semana ${DIAS[numeroDia-1]}`);
}
