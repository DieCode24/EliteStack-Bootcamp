// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [2]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa muestra los términos de la sucesión de Fibonacci siempre que sean menores a 100 y luego muestra la suma de estos

console.log(`Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.
Los números a sumar son: `);

//Función principal que encuentra los números en la sucesion de fibonacci y la suma de esos digitos
function sumaFibonacci (suma, n1, n2) {
    //Usamos suma como acumulador de los terminos que se van encontrando, n1 y n2 como terminos
    if (n1 < 100) {
        process.stdout.write(n1 + ", ");//Escribimos los terminos conforme se van encontrando sin hacer salto de linea 
        sumaFibonacci(suma + n1, n2, (n1 + n2));//Llamada recursiva de la funcion principal
    } else {
        console.log("y su suma es " + suma);
    }
};//Fin funcion principal

sumaFibonacci(0, 0, 1);