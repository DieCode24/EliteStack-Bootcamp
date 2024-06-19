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
// Pide un número y muestra si es impar o no


/*2. Que pida un número e imprima si es par o impar.
Requisitos:
- Saber que un número entero es par, cuando el residuo de la división entera entre dos(2) es igual a cero(0).
- Saber que es “resto de” ó residuo en una división entera. */

// Importamos el módulo 'prompt-sync' para interactuar con el usuario a través de la consola de manera sincrónica.
const prompt = require('prompt-sync')();

// Función para determinar si un número es par o impar.
function esPar(numero) {
  // Un número es par si el residuo de su división entre 2 es 0.
  return numero % 2 === 0;
}

console.log("Este programa lee un número e imprime si es par o impar\n");
// Función para pedir al usuario que ingrese un número y mostrar si es par o impar.
function pedirNumero() {
  // Pedimos al usuario que ingrese un número.
  let entrada = prompt('Entre un número: ');

  // Convertimos la entrada a un número.
  const numero = parseInt(entrada, 10);

  // Verificamos si la entrada es un número válido.
  if (Number.isInteger(numero)) {
    // Imprimimos si el número es par o impar.
    console.log(esPar(numero) ? 'El número es par' : 'El número es impar');
  }
}

// Llamamos a la función para iniciar el programa.
pedirNumero();