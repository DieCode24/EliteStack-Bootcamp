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
*/

//Descripcion del programa
//Lee un numero entero N, no negativo y muestra la suma de los factoriales de todos los numero desde 0 hasta N

//importar la libreria prompt-sync
const prompt = require("prompt-sync")();

//Definicion de funciones a utilizar

//funcion para calcular el factorial de un numero
function factorial(numero) {
  if (numero == 0) {
    //si el numero es 0
    return 1; //el factorial de 0 es 1
  } else {
    //si el numero es diferente de 0
    return numero * factorial(numero - 1); //se calcula el factorial del numero
  }
}

//funcion para calcular la suma de los factoriales de los numeros desde 0 hasta N
function sumaFactoriales(numero) {
  if (numero == 0) {
    //si el numero es 0
    return factorial(numero); //retorna el factorial de 0
  } else {
    //si el numero es diferente de 0
    return factorial(numero) + sumaFactoriales(numero - 1); //retorna la suma del factorial del numero mas la suma de los factoriales de los numeros anteriores
  }
}

//Programa principal
let numeroEsNegativo = true; //Variable para verificar si el numero ingresado es positivo

let numero; //Variable para almacenar el numero ingresado por el usuario

while (numeroEsNegativo) {
  //Se solicita al usuario que ingrese un numero entero no negativo
  numero = prompt("Ingrese un numero entero no negativo: ");

  //Se convierte el numero ingresado a entero
  numero = parseInt(numero);
  if (numero >= 0) {
    numeroEsNegativo = false;
  } else {
    console.log("ERROR: EL numero es negativo");
  }
}

let resultado = sumaFactoriales(numero); // Variable para almacenar el resultado de la suma de los factoriales

console.log(
  `La suma de los factoriales de los numeros desde 0 hasta ${numero} es: ${resultado}`
);
