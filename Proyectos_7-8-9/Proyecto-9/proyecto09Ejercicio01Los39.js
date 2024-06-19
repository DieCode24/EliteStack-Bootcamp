// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [1]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa muestra los términos de la sucesión de Fibonacci siempre que sean menores a 10000

console.log(`Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va
sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.`);

//Funcion principal que muestra los números de la sucesiónn de Fibbonacci cuando el valor de este es menor a 10000
function Fibonacci(n1, n2) {
    //Usamos n1 y n2 como terminos de la sucesión
    if (n1 < 10000) {
        process.stdout.write(n1 + ", "); //Muestra en consola el n1 con la coma y el espacio sin hacer salto de linea
        Fibonacci(n2, (n1 + n2)); //Llamada recursiva 
    }
}; //Fin función

//Llamada a la función principal
Fibonacci(1, 1);