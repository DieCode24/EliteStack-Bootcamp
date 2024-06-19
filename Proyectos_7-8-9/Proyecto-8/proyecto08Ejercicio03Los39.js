/*
-Fecha de creación:
-Version de su código: 1
-Autores: Ing(c)
-Nombre lenguaje utilizado: javascript
-Version del lenguaje utilizado: ECMAScript 6
-Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación

Requerimiento:
instalar prompr-sync con el siguiente comando
"npm install prompt-sync"

*/

//Descripcion del programa
//Que pida un número del 1 al 7 e imprima el día de la semana correspondiente.

//Importar libreria prompt-sync
const prompt = require("prompt-sync")();

console.log(
  "Este programa, lee un número entre [1 y 7] e imprime el día que le corresponde en la semana. Referencia: 1=Lunes. 7=Domingo"
);

//Variable que almacena el número
let numero = prompt("Entre un número: ");

//Convertir la cadena a número
numero = parseInt(numero);

switch (numero) {
  case 1:
    console.log("El día es Lunes");
    break;
  case 2:
    console.log("El día es Martes");
    break;
  case 3:
    console.log("El día es Miércoles");
    break;
  case 4:
    console.log("El día es Jueves");
    break;
  case 5:
    console.log("El día es Viernes");
    break;
  case 6:
    console.log("El día es Sábado");
    break;
  case 7:
    console.log("El día es Domingo");
    break;
  default:
    console.log("El número no está en el rango de 1 a 7");
    break;
}
