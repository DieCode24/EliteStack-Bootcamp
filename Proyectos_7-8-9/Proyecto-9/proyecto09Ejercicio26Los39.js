/*
- 18/Junio/2024
- Hora: 
- Versión: 2
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Salvedades: Para valores no positivos, no se garantiza el resultado correcto
- Descripción: Este programa calcula el resultado aproximado del logaritmo natural de x por Series de Taylor
*/



// Definir el número de filas y columnas
const filas = 10;
const columnas = 20;

// Imprimir el patrón
for (let fila = 0; fila < filas; fila++) {
  //Se declara la variable para imprimir la fila
  let filaImpresa = '';
  for (let col = 0; col < columnas; col++) {
    // Determinar si se debe imprimir una 'Z' en la posición actual
    let imprimirZ = false;

    // Verificar el patrón de 'Z' para cada fila
    if (fila === 0) {
      imprimirZ = col === 0 || col === columnas - 1;
    } else if (fila <= 4) {
      imprimirZ = col === fila || col === columnas - 1 - fila;
    } else if (fila <= 8) {
      imprimirZ = col === columnas - 1 - fila || col === 0 + fila;
    } else {
      imprimirZ = col === columnas - 10 || col === 9;
    }

    // Imprimir 'Z' o un espacio en blanco
    if (imprimirZ) {
      filaImpresa += 'Z';
    } else {
      filaImpresa += ' ';
    }
  }

  console.log(filaImpresa);
}

