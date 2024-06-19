// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción: determina el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas del producto.

// Descripcion variables:
// - individualPrice: Valor unitario de una docena, ingresado por el usuario
// - dozens: Cantidad de docenas en la venta, ingresado por el usuario 
// - gift: Unidades a regalar, una por cada docena despues de la tercera
// - totalPrice: Precio total de la venta, sin descuento 
// - discount: Valor del descuento del producto, 15% del precio total si son mas de 3 decenas y 10% del precio total en caso contrario
// - finalPrice: Valor del precio luego de restarle el total 

const prompt = require("prompt-sync")();
let gift = 0;
let discount = 0;
let finalPrice = 0;
let dozens = prompt("Por favor, ingresa la cantidad de docenas: ");
let individualPrice = prompt("Por favor, ingresa el precio de cada docena: ");
let totalPrice = individualPrice * dozens;
// Comparador que da valor al descuento y al precio final, si las docenas son mayores a 3,el descuento es del 15% si no lo es, el descuento es del 10, luego se resta el valor del descuento al precio total

if (dozens > 3) { // condicional que compara si la cantidad comprada es superior a 3 
  discount = totalPrice * 0.15; // asigna el porcentaje de descuento por compras mayores a 3 docenas
  gift = dozens - 3; // asigna a la variable la cantidad de camisas a regalar calculando cuantas docenas por encima de 3 se han comprado.
} else {
  discount = totalPrice * 0.1; // asigna el porcentaje de descuento por compras menores a 3 docenas
}

finalPrice = totalPrice - discount; // calcula el precio final después de aplicado el descuento


// Metodos console.log que devuelven el resultado de las operaciones
console.log("El monto de la compra es: " + totalPrice);
console.log("El monto del descuento es: " + discount);
console.log("El monto a pagar es: " + finalPrice);
console.log("Cantidad de unidades regaladas es: " + gift);
