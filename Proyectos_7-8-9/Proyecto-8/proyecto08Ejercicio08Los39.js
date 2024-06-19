/*-Fecha de publicación
- Hora: 20:06
- Versión de su código: 1.0
- Autores. Ing(c): Cooding Bootcamp 
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: 
- Presentado a: Doctor Ricardo Moreno Laverde y supervisores del Coodin Bop
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
- Este programa recibe 3 numeros ingresados por el usuario e indica si el tercer número 
es el producto de los dos primeros*/
const prompt = require ('prompt-sync')(); //Se requiere el módulo prompt 
let numero1 = prompt("Ingrese el primer número: "); // Por medio de un prompt se declaran las variables 
let numero2 = prompt("Ingrese el segundo número: ");
let numero3 = prompt("Ingrese el tercer número: ");
if (numero3 == numero1 * numero2){//Se usa el condicional para revisar si el tercer número es el producto de los dos anteriores
    console.log ("El tercer número es el producto de los dos primeros");// En caso de que sea true
}
else{
    console.log ("El tercer número no es el producto de los dos primeros");// En caso de que sea false 
}