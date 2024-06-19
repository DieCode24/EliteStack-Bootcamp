/* -Fecha de publicación: Junio 18
Hora: 9:09pm
Versión de su código: 1
Autores. Ingenieros del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Este programa solicita un número e imprime la serie de Lucas
Restrincciones: El número ingresado debe ser mayor a 0, no puede ser decimal y no puede ser mayor o a 45 (Tiempo de ejecución)
*/

const prompt = require('prompt-sync')(); // Importa la librería prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Lucas
 
// Función recursiva para calcular la serie de Lucas
const serieLucas = (termino) => {
  if (termino === 0) return 2; // Primer término de la serie de Lucas
  if (termino === 1) return 1; // Segundo término de la serie de Lucas

  // Calcula el término actual como la suma de los dos términos anteriores
  return serieLucas(termino - 1) + serieLucas(termino - 2);
};

let serie = ""; // Variable para almacenar la serie de Lucas

// Genera la serie de Lucas hasta el término nTermino
for (let termino = 0; termino < nTermino - 1; termino++) {
  serie += serieLucas(termino) + ", ";
}
serie += serieLucas(nTermino - 1) + ".";  // Agrega el último término de la serie de Lucas para que termine con un punto.

console.log(serie); // Imprime la variable serie con la serie de Lucas generada.

