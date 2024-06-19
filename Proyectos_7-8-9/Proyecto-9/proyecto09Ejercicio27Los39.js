/* -Fecha de publicación: Junio 18
Hora: 10:45pm
Versión de su código: 1
Autores. Ingenieros del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Imprime una piramide de z de altura 10 sin relleno
         z
        z z
       z   z
      z     z
     z       z
    z         z
   z           z
  z             z
 z               z
z                 z
*/

const altura = 10;

/* El bucle for itera sobre cada fila de la pirámide, desde la fila 1 hasta la fila 10 (la altura establecida). */
for (let fila = 1; fila <= altura; fila++) {
  let linea = ''; // Inicializa una cadena vacía llamada linea que almacenará la fila actual.

  // Crea un bucle que agrega espacios en blanco al principio de cada fila.
  // La cantidad de espacios disminuye a medida que avanzamos hacia las filas inferiores de la pirámide.

  for (let i = 1; i <= altura - fila; i++) {
    linea += ' '; // Por cada iteración de este bucle, se agrega un espacio en blanco a linea mediante
  }

  // Borde izquierdo
  linea += 'z';

  // Medio
  // Crea un bucle que agrega espacios en blanco en el medio de la parte visible de la pirámide.
  // La cantidad de espacios aumenta a medida que avanzamos hacia las filas inferiores de la pirámide.
  for (let i = 1; i <= 2 * (fila - 1) - 1; i++) {
    linea += ' ';
  }

  // Borde derecho (si no es la primera fila)
  if (fila > 1) {
    linea += 'z';
  }

  console.log(linea); // Imprime la fila construida
}