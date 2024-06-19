// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [14]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [ECMAScript 6]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---
/* - Descripción:  Que imprima de un articulo, clave, precio original y su precio con descuento.
 El descuento lo hace en base a la clave, si la clave es uno
(1) el descuento es del 10% y si la clave es 2 el descuento en del 20% (solo existen dos claves).
Datos de entrada: Clave, PrecioOriginal */

// Importamos el módulo 'prompt-sync' para interactuar con el usuario a través de la consola de manera sincrónica.
const prompt = require('prompt-sync')();

// Función para calcular el precio con descuento basado en la clave.
function calcularPrecioConDescuento(clave, precioOriginal) {
  let descuento = 0;  // Declaración de variable let para descuento.
  if (clave === 1) {  //Condición para revisar si la clave que ingresa el usuario es estrictamente igual a 1
    descuento = 0.10; // En caso de que sí, se aplica un 10% de descuento
  } else if (clave === 2) { //En caso de que no, se revisa si la clave es 2
    descuento = 0.20; // En caso de que í, se le aplica un 20% de descuento
  } else { // Si ninguna de las dos condiciones anteriores es verdadera, el falso le indicaría al usuario que la clave ingresada no es válida 
    console.log('Clave no válida. Solo existen dos claves: 1 y 2.');
    return null; //"Termina" o cierra de cierta manera 
  }

  const precioConDescuento = precioOriginal - (precioOriginal * descuento);
  return precioConDescuento; //Cuando la clave sea válida se va a declarar la variable descuento y posterior a ello se realizará el cálculo para obtener el precio con el descuento aplicado
}

// Función para pedir al usuario la clave y el precio original.
function pedirDatos() {
  const claveEntrada = prompt('Ingrese la clave del artículo (1 o 2): '); //Se le pide al usuario que ingrese la clave para comprobar si se le puede o no aplicar el descuento 
  const clave = parseInt(claveEntrada, 10);//con parseInt se convierte a entero el dato ingresado por el usuario 

  const precioEntrada = prompt('Ingrese el precio original del artículo: '); //Se pide el precio del articulo por consola y se declara en variable precioEntrada
  const precioOriginal = parseFloat(precioEntrada);//Se declara la variable precioOriginal 

  if (Number.isInteger(clave) && !isNaN(precioOriginal)) { //Se usa .isInteger para comprobar si el dato es un número entero, isNaN se usa para comprobar que sea un número
    const precioConDescuento = calcularPrecioConDescuento(clave, precioOriginal);

    if (precioConDescuento !== null) { //Mientras que el precio con descuento no sea null
      console.log('Clave del artículo:', clave);//Se muestra en pantalla la clave del articulo, el precio y el precio una vez ya se le ha aplicado el descuento
      console.log('Precio original:', precioOriginal);
      console.log('Precio con descuento:', precioConDescuento.toFixed(2));
    }
  } else {
    console.log('Por favor, ingrese valores válidos para la clave y el precio.'); //Si el usuario no ingresa un valor válido en los campos necesarios, se le pide que vuelva a ingresar el dato 
    pedirDatos();
  }
}
// Llamamos a la función para iniciar el programa.
pedirDatos();