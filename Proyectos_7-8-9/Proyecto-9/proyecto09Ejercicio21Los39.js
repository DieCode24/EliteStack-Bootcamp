// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [4]
// - Hora: [10:00]AM
// - Versión de la tarea: [09]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---
/* 
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

// funcion recursiva para imprimir cada uno de los espacios
function espaciosCount(espacios, columnas1){
    if (espacios >= columnas1){ // Condicion de parada cuando los espacios lleguen a ser igual a la columna
        return ""; // Devuelve un string vacio, para que no se realice ningun otro proceso en este punto
    } else {
        // process.stdout.write es metodo para imprimir en pantalla sin el salto de linea automatico que posee el console.log
        process.stdout.write(" ");  // process.stdout.write genera directamente en la consola 
        espaciosCount(espacios + 1, columnas1); // Llamado recursivo enviando espacios +1
    }
}

// Funcion recursiva para imprimir las letras
function imprimirCaracteres(totalCaracteres, letras, columnas2){
    if (totalCaracteres >= columnas2){ // Condicion de parada cuando totalCaracter llegue a ser igual que columnas2
        console.log(""); // Es una forma de hacer un salto de linea
    } else {
        process.stdout.write(CARACTERES[letras]); // Escribe en pantallla los caracteres dependieno de la clave correspondiente
        imprimirCaracteres(totalCaracteres + 1, letras, columnas2) // Llamado recursivo aumentando 1 el contador de caracteres
    }
}

// Funcion recursiva para imprimir cada una de las filas
function filasCount(filas, totalCaracteres, columnas1, columnas2, espacios, letras) {
    if (filas >= 7){ // Condicion de parada cuando filas llegue a la cantidad que necesitamos
        return ""; // Devuelve un string vacio, para que no se realice ningun otro proceso en este punto
    } else {
        espaciosCount(espacios, columnas1); // Llamada a al funcion que imprime los espacios
        imprimirCaracteres(totalCaracteres, letras, columnas2); // Llamada a al funcion que imprime las letras
        filasCount(filas + 1, 0, columnas1 + 1, columnas2 - 2, 0, letras + 1) // Llamado recursivo para las filas
    }
}

// Inicio del programa
filasCount(0, 0, 0, 13, 0, 1);
