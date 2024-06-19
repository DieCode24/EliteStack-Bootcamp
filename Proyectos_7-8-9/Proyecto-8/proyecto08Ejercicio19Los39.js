/*
* Fecha de publicacion: 18/06/2024
* Hora: 23:00
* Version codigo: 1.0
* Autor Los 39 del bootcamp
* Version: ECMAScript 6.0
* Presentado a: Doctor Ricardo Moreno Laverde
* Universidad Tecnologica de Pereira
* Programa de Ingenieria de Sistemas y Computacion
* Descripcion: Programa que devuelve ciertos datos en la venta al por mayor de un producto con descuento
*
* Descripcion variables:
 - individualPrice: Valor unitario de una docena, ingresado por el usuario
 - dozens: Cantidad de docenas en la venta, ingresado por el usuario 
 - gift: Unidades a regalar, una por cada docena despues de la tercera
 - totalPrice: Precio total de la venta, sin descuento 
 - discount: Valor del descuento del producto, 15% del precio total si son mas de 3 decenas y 10% del precio total en caso contrario
 - finalPrice: Valor del precio luego de restarle el total 
 */

const prompt = require("prompt-sync")();
let gift = 0;
let discount = 0;
let finalPrice = 0;
let dozens = prompt("Por favor, ingresa la cantidad de docenas: ");
let individualPrice = prompt("Por favor, ingresa el precio de cada docena: ");
let totalPrice = individualPrice * dozens;
/*Comparador que da valor al descuento y al precio final, si las docenas son mayores a 3,el descuento es del 15%
si no lo es, el descuento es del 10, luego se resta el valor del descuento al precio total*/

if (dozens > 3) {
  discount = totalPrice * 0.15;
} else {
  discount = totalPrice * 0.1;
}
finalPrice = totalPrice - discount;

/*Ciclo for se repite una vez por cada docena, aumenta en 1 la variable gift por cada iteracion donde i sea mayor a 3,
osea que cuenta cuantas docenas por encima de 3 hay
*/
for (let i = 0; i < dozens; i++) {
  if (i >= 3) {
    gift++;
  }
}
/* Metodos console.log que devuelven el resultado de las operaciones */
console.log("El monto de la venta es: " + totalPrice);
console.log("El monto del descuento es: " + discount);
console.log("El monto a pagar es: " + finalPrice);
console.log("Cantidad de unidades regaladas es: " + gift);
