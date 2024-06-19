/*
-Fecha de publicación: 18 de Junio de 2024
-Hora: 11:57 PM
- Versión de su código: 12
- Autores. Ing(c) del bootcamp
- Nombre del lenguaje utilizado: Javascript y Node.js
- Versión del lenguaje utilizado: ECMAScript 6, Node.js 14.17.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Programa para dibujar una piramide de letras en pantalla, cafa fila cambiara de letra
    PPPPPPPPPPPPP
     NNNNNNNNNNN
      LLLLLLLLL
       JJJJJJJ
        HHHHH
         FFF
          D
*/

const CARACTERES = { // Objetos con el que guardaremos una clave valor en la cual cada letra o caracter tendra un numero asignado
    1: "P",
    2: "N",
    3: "L",
    4: "J",
    5: "H",
    6: "F",
    7: "D"
}

let string = "";
let letras = 1; // Variable que lleva el indice de las letras o caracteres que se van a imprimir
// Variables que vamos a usar como condicion para imprimir correctamente cada fila y formar la figura
let columnas1 = 13; 
let columnas2 = 13;
// Variable para llevar el conteo de los espacios
let espacios = 13;
// Variable para llevar el conteo de los caracteres
let totalCaracteres = 0;

// Bucle para imprimir cada una de las filas
for (let filas = 0; filas < 7; filas++) {
    // Bucle para imprimir cada uno de los espacios
    while (espacios < columnas1) {
        process.stdout.write(" "); // process.stdout.write nos sirve para imprimir sin un salto de linea automatico
        espacios++;
    }
    // Bucle para imprimir las letras
    while (totalCaracteres < columnas2) {
        string += CARACTERES[letras];
        totalCaracteres++;
    }
    // Reiniciar variables y ajustar valores
    console.log(string);
    string = "";
    totalCaracteres = 0;
    espacios = 13;
    columnas1 += 1;
    columnas2 -= 2;
    letras++;
}