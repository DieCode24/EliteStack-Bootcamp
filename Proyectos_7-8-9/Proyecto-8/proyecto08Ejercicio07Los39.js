/*Fecha de publicación: 19/06/2024
Hora: 2:00
Versión de su código: 0.1
Autores. Ing(c): [Todos los ingenieros del grupo (39)]
Versión del lenguaje utilizado: ECMAScript 6.0
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación*/

/*7-Que tome dos números y diga si ambos son pares o ambos son impares.*/

const prompt = require('prompt-sync')();

const nume1 = prompt("Ingrese el primer numero: ");
const nume2 = prompt("Ingrese el segundo numero: ");

function dosNumeros(nume1, nume2) { // Función para determinar si dos números son pares o impares
    if (nume1 % 2 === 0 && nume2 % 2 === 0) { // Verificar si ambos números son pares
        return `El número ${nume1} y el número ${nume2} son pares.`; // Retornar mensaje indicando que ambos son pares
    } else if (nume1 % 2 !== 0 && nume2 % 2 !== 0) { // Verificar si ambos números son impares
        return `El número ${nume1} y el número ${nume2} son impares.`; // Retornar mensaje indicando que ambos son impares
    } else { // Si no cumplen ninguna de las condiciones anteriores, entonces uno es par y otro impar
        return `El número ${nume1} y el número ${nume2} son diferentes (uno es par y el otro impar).`; // Retornar mensaje indicando que son diferentes
    }
}

const resultado = dosNumeros(parseInt(nume1), parseInt(nume2)); // Llamar a la función y convertir las entradas a números enteros
console.log(resultado); // Mostrar en consola el resultado de la función