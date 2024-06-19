// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [4]
// - Hora: [3:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Este programa solicita un número e imprime la serie de Pell utilizando ciclos for.
// Restricciones: El número ingresado debe ser mayor a 0, no puede ser decimal y no puede ser mayor a 45 (Tiempo de ejecución)


// Importa la librería para pedir información al usuario
const prompt = require('prompt-sync')();

// Pide al usuario que escriba cuántos términos quiere en la serie de Pell
const nTerminos = parseInt(prompt("Cuántos términos quieres en la serie de Pell? "));

// Función que calcula la serie de Pell usando ciclos for
const calcularSeriePell = (n) => {
  // Array para almacenar la serie de Pell
  let serie = [];

  // Primeros dos términos de la serie de Pell
  if (n > 0) serie.push(0);
  if (n > 1) serie.push(1);

  // Calcula los siguientes términos de la serie
  for (let i = 2; i < n; i++) {
    let nuevoTermino = 2 * serie[i - 1] + serie[i - 2];
    serie.push(nuevoTermino);
  }

  return serie;
};

// Calcula la serie de Pell hasta el término deseado
let seriePell = calcularSeriePell(nTerminos);

// Imprime la serie de Pell completa
console.log("La serie de Pell hasta el término " + nTerminos + " es: " + seriePell.join(", "));