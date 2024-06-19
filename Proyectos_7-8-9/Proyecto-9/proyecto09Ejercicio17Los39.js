/*
- 18/Junio/2024
- Hora: 
- Versión: 1
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción: Este programa imprime por pantalla: 
    A la izquierda los numeros del 0 al 9, 
    a la derecha separados por un espacio los numeros del 1 al 5, cada uno dos impresiones,
    e.g. 1 1 2 2...
*/

function ejercicio17(left, right, index){
    if (index > 9){
        return;
    }
    else{
        console.log(left, right) //Imprime left y right separador por un espacio
        if ((index % 2) === 1){ // Si el indice es impar aumenta right
            ejercicio17(left+1, right+1, index+1); 
        }else{
            ejercicio17(left+1, right, index+1);
        }
    }

}

ejercicio17(0,1,0)