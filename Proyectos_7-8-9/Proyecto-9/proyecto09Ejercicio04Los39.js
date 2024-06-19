/* -Fecha de publicación: Junio 18
Hora: 10:21pm
Versión de su código: 1
Autores. Ingenieros del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Este programa solicita un número e imprime la serie de Pell
Restrincciones: El número ingresado debe ser mayor a 0, no puede ser decimal y no puede ser mayor o a 45 (Tiempo de ejecución)
*/
// Importa la librería para pedir información al usuario
const prompt = require('prompt-sync')();

// Pide al usuario que escriba cuántos bloques (términos) quiere en la serie de Pell
const nTermino = parseInt(prompt("Cuántos bloques quieres en la serie de Pell? "));

// Función mágica que calcula cómo construir cada bloque usando recursividad
const seriePell = (termino) => {
  // Si el bloque es el primero, devuelve 0
  if (termino === 0) return 0;
  // Si el bloque es el segundo, devuelve 1
  if (termino === 1) return 1;

  // Si no es el primero ni el segundo, usa la ecuacion para construirse
  return 2 * seriePell(termino - 1) + seriePell(termino - 2);
};

// Función especial que organiza a todos los bloques para que se construyan en orden
const generarSeriePell = (terminoActual, n, serie) => {
  if (terminoActual > n) {
    return serie;
  }
  // Si es el primer bloque, lo agregamos a la serie con una coma después
  if (terminoActual === 0) {
    serie += seriePell(terminoActual) + ", ";
  } 
  // Si es el último bloque, lo agregamos a la serie con un punto al final
  else if (terminoActual === n) {
    serie += seriePell(terminoActual) + ".";
  } 
  // Para todos los demás bloques, los agregamos a la serie con una coma después
  else {
    serie += seriePell(terminoActual) + ", ";
  }

  // Llamamos a la función nuevamente para construir el siguiente bloque
  return generarSeriePell(terminoActual + 1, n, serie);
};

// Variable para almacenar la serie de Pell
let serie = generarSeriePell(0, nTermino - 1, "");

// Imprimimos la serie de Pell completa que hemos construido
console.log("La serie de Pell hasta el término " + nTermino + " es: " + serie);
