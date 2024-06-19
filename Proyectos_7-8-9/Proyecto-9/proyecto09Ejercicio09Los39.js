/*
 - Fecha de publicación: [18/06/2024]
 - Número de la tarea: [28]
 - Hora: [10:00]PM
 - Versión de la tarea: [01]
 - Autores: [Todos los ingenieros del grupo (39)]
 - Nombre del lenguaje utilizado: [Javascript]
 - Versión del lenguaje utilizado: [v12.22.9]
 - Presentado a: [Doctor Ricardo Moreno Laverde]

 ------- | Universidad Tecnológica de Pereira |-------------
 --- | Programa de Ingeniería de Sistemas y Computación |---

Un descriptivo de que hace el programa : Funciona para calcular las series de bell
-Para cada variable, haga un comentario de para que la usara dentro del código
-Solo haga lo que le piden, no agregue nada adicional.
-Salvedades si las hubiese.Salvedad:No se garantizan resultados para datos que no sean enteros positivos 
*/

const prompt = require('prompt-sync')();// se importa la libreria prompt-sync en una constante PromptSync

function doFactorial(number) {//Calcula el factorial
    if (number === 0) {
        return 1;
    } else {
        return number*doFactorial(number - 1);
    }
}

function binominial(n, i) {//Es la operacion que se repite constantemente, es una funcion aux para summationBell
    return (doFactorial(n - 1) / (doFactorial(i) * doFactorial((n - 1) - i)));//n es el maximo termino e i es el termino en el que va iterando
}

function summationBell(n, i, accumulator) { // Función principal de las sumatorias
    if (i > n - 1) { // Si el índice i igual a n-1, es decir, si hemos iterado por todos los términos
        return accumulator; // Retorna el valor acumulado
    } else { // De lo contrario
        // Llama recursivamente a summationBell con el índice i incrementado y el acumulador actualizado
        return summationBell(n, i + 1, accumulator + binominial(n, i) * calculateTerm(i));
    }
}
function calculateTerm(term) {//funcion que ayuda a calcular los terminos
    if (term === 0 || term === 1) {//si es cero o uno, el termino será 1
        return 1;
    } else {//de lo contrario llama a la funcion que calcula propiamente los terminos
        return summationBell(term, 0, 0);
    }
}

function printBell(term, quantity) {//imprime uno a uno los terminos de la sumatoria
    if (term < quantity) {//mientras no sea igual al "n", seguirá iterando
        console.log(calculateTerm(term));//llama a la funcion que calcula los terminos
        printBell(term + 1, quantity);//recursividad
    } else {
        console.log(calculateTerm(term) + ".");//cuando sea el ultimo termino, le agg un punto
    }
}

function ask(){//le pide al usuario que ingrese el termino n
let quantityTerms = prompt ( "Ingrese el termino: ");
printBell(0, parseInt(quantityTerms) - 1);//llama a la funcion que imprime
}

ask();