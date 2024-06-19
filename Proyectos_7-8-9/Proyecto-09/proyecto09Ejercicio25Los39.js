/* 
// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [25]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---
- Descripción:
El prograam imprime un rombo de "Z"
          Z
         ZZZ
        ZZZZZ 
       ZZZZZZZ
        ZZZZZ
         ZZZ
          Z
*/

// La función MainDisplayRombo se encarga de dirigir la impresión del rombo
function MainDisplayRombo(space, letter, row) {
    if (row > 0) {
        //Imprime la cadena de espacios y letras
        DisplaySpace(space);
        DisplayLetter(letter);
        process.stdout.write('\n');
        if (row > 4) {
            //llamada rescurciva para imprimir la parte de aiva del rombo
            MainDisplayRombo(space - 1, letter + 2, row - 1);
        } else {
            //llamada recursiva para imprimir la parte de abajo del rombo
            MainDisplayRombo(space + 1, letter - 2, row - 1);
        }
    }
}



//funcion para imprimir espacios
function DisplaySpace(space) {
    if (space > 0) {
        process.stdout.write(' ');
        DisplaySpace(space - 1);
    } else {
        return;
    }
}

//funcion para imprimer letras
function DisplayLetter(amont) {
    if (amont > 0) {
        process.stdout.write('Z');
        DisplayLetter(amont - 1);
    } else {
        return '';
    }
}

// Se llama a la función con el número inicial de letras y espacios, y la cantidad de líneas
MainDisplayRombo(9, 1, 7);



