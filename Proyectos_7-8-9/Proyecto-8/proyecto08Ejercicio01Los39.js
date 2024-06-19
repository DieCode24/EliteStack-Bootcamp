// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// Devuelve los primeros números primos

/*1. Que pida un número del 1 al 5 e imprima si es primo o no.
Requisitos:
- Saber que es un número primo. “Es un número entero natural
desde el cero(0), con incremento constante de +1 e infinito;
ejemplo: 0,1,2,3,4,5,6..... Que solo es divisible
exactamente(residuo cero(0)) por si mismo y por la unidad(1). Por
convensión el número uno(1) no es primo.

- Partiendo de esta definición, para los números del 1 al 5, los
números primos son el 2, 3 y el 5. Y los números 1 y 4 no son
primos. */

// Se importa el módulo 'prompt-sync' para habilitar la lectura sincrónica desde la línea de comandos.
const prompt = require('prompt-sync')();

console.log("Este programa, lee un número entre uno(1) y cinco(5), e imprime si es primo o no.\n")

// Se define la función 'esPrimo' que determina si un número es primo.
function esPrimo(numero) {
    // Si el número es 1, no es primo por definición, por lo que retorna falso.
    if (numero == 1) {
        return "El número no es primo.";
    }
    // Se itera desde 2 hasta el número - 1 para verificar si el número tiene divisores.
    for (var i = 2; i < numero; i++) {
        // Si el número es divisible por 'i', entonces no es primo y retorna falso.
        if (numero % i === 0) {
            return "El número no es primo.";
        }
    }
    // Si el número no tiene divisores además de 1 y sí mismo, es primo y retorna verdadero.
    return "El número es primo";
}

// Se define la función 'pedirNumero' que solicita al usuario ingresar un número.
function pedirNumero() {
    // Se hace una pregunta al usuario y se espera su respuesta.
    let numero = prompt("Entre un número: ");
    // Se verifica si el número ingresado está entre 1 y 5.
    if (numero >= 1 && numero <= 5) {
        // Si es así, se imprime si el número es primo o no.
        console.log(esPrimo(numero));
    } else {
        // Si el número no está en el rango, se muestra un mensaje de error y se vuelve a pedir un número.
        console.log("Ingrese un numero entre 1 y 5");
        pedirNumero();
    }
}

// Se llama a la función 'pedirNumero' para iniciar el proceso.
pedirNumero();
