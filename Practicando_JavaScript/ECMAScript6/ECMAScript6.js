// ECMAScrip 6

// 1. Operadores de Asignación (let, const)
let x = 1;
if (true) {
  let x = 2;// Esta variable es diferente a la anterior
  console.log(x);// Salida: 2
}
console.log(x);// Salida: 1// Declaración de variables constantes
const PI = 3.14159;
console.log(PI);// Salida: 3.14159

/*-------------------------------------------------------*/
// 4. Modulos
import { sumar, restar } from './matematica.js';

console.log(sumar(2, 3));// Salida: 5
console.log(restar(5, 2));// Salida: 3