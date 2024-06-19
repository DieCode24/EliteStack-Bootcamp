// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [11]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [ECMAScript 6]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Pide un número y muestra si es impar o no
// Descripcion: Aplica un descuento del 20% a una compra del cliente en caso de un precio mayor a 100K*/
const prompt = require('prompt-sync')();
let precio = parseFloat(prompt("Ingrese el precio de la compra: "));
function descuento() {
  if (precio > 100000) {
    //si el precio es mayor a 100K lo multiplica por 0.80 para quitar el 20%
    let precioFinal = precio * 0.8;
    console.log(`El precio final con descuento es de ${precioFinal} pesos`);
  } else {
    console.log(`El precio final es de ${precio} pesos`); //si no, se muestra el precio normal
  }
  console.log("Gracias por su compra");
}
descuento();