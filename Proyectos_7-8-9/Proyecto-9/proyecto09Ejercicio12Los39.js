/*- 18/06/2024
  - 9:50 pm
  - Versión 1.0
  -Autores. Ing(c)
  - Nombre del lenguaje utilizado: javascript
  - Versión del lenguaje utilizado: ECMAScript 6
  - Presentado a: Doctor Ricardo Moreno Laverde
  - Universidad Tecnológica de Pereira
  - Programa de Ingeniería de Sistemas y Computación
  - Este program lee desde el teclado un numero entero y lo
    imprima al revés.
  - numero: guarda el numero ingresado por el usuario
    numeroInvertido: guarda el numero invertid
    contador: contador inicializado con el tamaño de numero - 1
  -Salvedades: para strings o numeros no enteros, no se garantizan resultados*/ 

const prompt = require("prompt-sync")(); //se importa la libreria prompt-sync


// Función para invertir el numero 
function invertirEntero(numero) {
    let numeroInvertido= "";    
    for (let contador = numero.length - 1; contador >= 0; contador--) {
        numeroInvertido += numero[contador];
    }
    return numeroInvertido;
}

//funcion para verificar el numero
function verificarEntero (numero)
{
if(numero % 1 === 0) { return 1; }
else {return 0;}
}



console.log("Este programa lee desde el teclado un número");
console.log("entero y lo imprime al revés.");

// Solicita al usuario que ingrese un número
let numero = prompt("Entre el número: ");


if (verificarEntero(numero) === 1) {
    
    console.log(invertirEntero(numero));
} 
else 
{
    console.log("El número ingresado no es un numero entero.");
}