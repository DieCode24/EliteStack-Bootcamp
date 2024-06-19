// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// 


/*14- Que imprima de un articulo, clave, precio original y su precio con descuento.
 El descuento lo hace en base a la clave, si la clave es uno
(1) el descuento es del 10% y si la clave es 2 el descuento en del 20% (solo existen dos claves).
Datos de entrada: Clave, PrecioOriginal */

// Importamos el módulo 'prompt-sync' para interactuar con el usuario a través de la consola de manera sincrónica.
const prompt = require('prompt-sync')();

// Función para calcular el precio con descuento basado en la clave.
function calcularPrecioConDescuento(clave, precioOriginal) {
  let descuento = 0;

  if (clave === 1) {
    descuento = 0.10; // 10% de descuento
  } else if (clave === 2) {
    descuento = 0.20; // 20% de descuento
  } else {
    console.log('Clave no válida. Solo existen dos claves: 1 y 2.');
    return null;
  }

  const precioConDescuento = precioOriginal - (precioOriginal * descuento);
  return precioConDescuento;
}

// Función para pedir al usuario la clave y el precio original.
function pedirDatos() {
  const claveEntrada = prompt('Ingrese la clave del artículo (1 o 2): ');
  const clave = parseInt(claveEntrada, 10);

  const precioEntrada = prompt('Ingrese el precio original del artículo: ');
  const precioOriginal = parseFloat(precioEntrada);

  if (Number.isInteger(clave) && !isNaN(precioOriginal)) {
    const precioConDescuento = calcularPrecioConDescuento(clave, precioOriginal);

    if (precioConDescuento !== null) {
      console.log('Clave del artículo:', clave);
      console.log('Precio original:', precioOriginal);
      console.log('Precio con descuento:', precioConDescuento.toFixed(2));
    }
  } else {
    console.log('Por favor, ingrese valores válidos para la clave y el precio.');
    pedirDatos();
  }
}

// Llamamos a la función para iniciar el programa.
pedirDatos();
