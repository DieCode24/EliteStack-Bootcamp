/* -Fecha de publicación: Junio 18
- Hora: 
- Versión de su código: 1
- Autores: Ingenieros del BootCamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripcion: Este programa pide un numero de termino deseado de la serie de Narayana: 1, 1, 1, 2, 3, 4, 6, 9, 13, ...*/

const prompt = require('prompt-sync')(); // Importa la librería prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de PNrayana

// Función recursiva para calcular la serie de PNrayana
const seriePNrayana = ((termino) => {
  if (termino === 0) return 1; // Primer término de la serie de PNrayana
  if (termino === 1) return 1; // Segundo término de la serie de PNrayana
  if (termino === 2) return 1; // Segundo término de la serie de PNrayana

  
  return seriePNrayana(termino - 1) + seriePNrayana(termino - 3);
});

let serie = ""; // Variable para almacenar la serie de Nrayana

// Genera la serie de Pell hasta el término nTermino
for (let termino = 0; termino < nTermino - 1; termino++) {
  serie += seriePNrayana(termino) + ", ";
}

serie += seriePNrayana(nTermino - 1) + ".";  // Agrega el último término de la serie de Perrin para que termine con un punto.
console.log(serie); // Imprime la variable serie con la serie de Padovan genNrayana