/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Los 39 del Bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide al usuario 75 números y revisará cual es el número mayor y menor de
los datos ingresados, la cantidad de números mayores a 150, la cantidad de números negativos y
el promedio de los números positivos.*/

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

// Pedir entrada del usuario
function grupo_numeros(contador, mayor, menor, mayor_150, negativos, promedio, contar_positivos){
    if(contador <= 75){
    const number = parseInt(prompt('Por favor, ingresa un número: '));
    if(number==0){
        console.log("El número es 0");
        return grupo_numeros(contador, mayor, menor, mayor_150, negativos, promedio, contar_positivos);
    }else{
        if(number>mayor){
            mayor=number;
        }
        if(number<menor){
            menor=number;
        }
        if(number>150){
            mayor_150++;
        }
        if(number<0){
            negativos++;
        }
        if(number>0){
            promedio+=number;
            contar_positivos++;
        }
        return grupo_numeros(contador+1, mayor, menor, mayor_150, negativos, promedio, contar_positivos);
    }
}else{
    console.log(`Resultados:\nNúmeros mayores a 150: ${mayor_150}\nNúmero mayor del grupo: ${mayor}\nNúmero menor del grupo: ${menor}\nCantidad de números negativos: ${negativos}\nPromedio de números positivos: ${promedio/contar_positivos}`);
}
}
grupo_numeros(1, -Infinity, Infinity, 0, 0, 0, 0);