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

// - Descripción:
//Lee un numero entero N, no negativo y muestra la suma de los factoriales de todos los numero desde 0 hasta N

//importar la libreria prompt-sync
const prompt = require("prompt-sync")();

//Definicion de funciones a utilizar

//Funcion recursiva para calcular el factorial de un numero
function factorial(numero) {
  if (numero == 0) {// Condicion de parada
    //si el numero es 0
    return 1; //el factorial de 0 es 1
  } else {
    //si el numero es diferente de 0
    return numero * factorial(numero - 1); //Llamado recursivo 
  }
}

//funcion recursiva para calcular la suma de los factoriales de los numeros desde 0 hasta N
function sumaFactoriales(numero) {
  if (numero == 0) {//Condicion de parada
    //si el numero es 0
    return factorial(numero); //retorna el factorial de 0
  } else {
    //si el numero es diferente de 0
    return factorial(numero) + sumaFactoriales(numero - 1); //retorna la suma del factorial del numero mas la suma de los factoriales de los numeros anteriores
  }
}

//Funcion para leer un numero entero no negativo-> retorna el numero
function leerNumero(){
  let numero=parseInt(prompt("Ingrese un numero entero no negativo: "));
  if(isNaN(numero) || numero<0){
    console.log("El numero ingresado no es valido, intente de nuevo");
    return leerNumero();
  }
  return numero;
}


//Inicio del programa
function main(){
  console.log("Programa para calcular la suma de los factoriales de los numeros desde 0 hasta N");
  let numero=leerNumero();
  let resultado=sumaFactoriales(numero);
  console.log(`La suma de los factoriales de los numeros desde 0 hasta ${numero} es: ${resultado}`);
}

main(); //Ejecucion de la funcion principal