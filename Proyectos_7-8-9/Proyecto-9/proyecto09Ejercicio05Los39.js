/*
-18/06/2024 
- hora ---
- version 1.0
-Autores. Los 39 del Bootcamp
- JavaScript
- JavaScript ES6.
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
Pide un nuemro de terminos para la serie de Perrin y la impime uno a uno los terminos hasta el numero ingresado.
Vgr: Salvedad: Para entradas de tipo string, no garantizamos los resultados.
*/

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')(); // Importa la librería prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Perrin

// Función recursiva para calcular la serie de Perrin
const seriePerrin = ((termino) => {
  if (termino === 0) return 3; // Primer término de la serie de Perrin
  if (termino === 1) return 0; // Segundo término de la serie de Perrin
  if (termino === 2) return 2; // Segundo término de la serie de Perrin

  
  return seriePerrin(termino - 2) + seriePerrin(termino - 3);
});

let serie = ""; // Variable para almacenar la serie de Perrin

// Genera la serie de Pell hasta el término nTermino
for (let termino = 0; termino < nTermino - 1; termino++) {
  serie += seriePerrin(termino) + ", ";
}

serie += seriePerrin(nTermino - 1) + ".";  // Agrega el último término de la serie de Perrin para que termine con un punto.
console.log(serie); // Imprime la variable serie con la serie de Perrin generada.