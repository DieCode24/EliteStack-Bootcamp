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

const prompt = require('prompt-sync')(); // Importa la librería prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Pell

// Función recursiva para calcular la serie de Pell
const seriePell = ((termino) => {
  if (termino === 0) return 0; // Primer término de la serie de Pell
  if (termino === 1) return 1; // Segundo término de la serie de Pell

  // Calcula el término actual como el doble del término anterior más el término anterior
  return 2 * seriePell(termino - 1) + seriePell(termino - 2);
});

let serie = ""; // Variable para almacenar la serie de Pell

// Genera la serie de Pell hasta el término nTermino
for (let termino = 0; termino < nTermino - 1; termino++) {
  serie += seriePell(termino) + ", ";
}

serie += seriePell(nTermino - 1) + ".";  // Agrega el último término de la serie de Pell para que termine con un punto.
console.log(serie); // Imprime la variable serie con la serie de Pell generada.