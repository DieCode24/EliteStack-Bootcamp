/*
* Fecha de publicacion: 18/06/2024
* Hora: 16:00
* Version codigo: 1.0
* Autor: Los ingenieros del bootcamp
* Version: ECMAScript 6.0
* Presentado a: Doctor Ricardo Moreno Laverde
* Universidad Tecnologica de Pereira
* Programa de Ingenieria de Sistemas y Computacion
* Descripcion: pedir un numero del 1 al 12 y mostrar el mes correspondiente
*
* Descripcion variables:
 - meses: array que contiene todos los meses
 - mesEntrada: variable donde el usuario ingresa el dato por terminal
 - mes: se convierte la variable mesEntrada a int
*/
/*
Importar el módulo readline
proporciona una manera de leer datos de entrada
*/
const readline = require('readline');

console.log("Este programa, lee un número entre [1 y 12] e imprime el mes que le corresponde en el año. Referencia: 1=Enero. 12=Diciembre")
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const imprimirMes = () => {
    // Crear una interfaz de readline permite leer y escribir datos desde la terminal
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Preguntar por el radio de la esfera
    rl.question('Entre un número: ', (mesEntrada) => {
        let mes = parseInt(mesEntrada);
        console.log("El mes es " + meses[mes-1]);

        // Cerrar la interfaz de readline
        rl.close();
    });
};

// Llamar a la función para calcular el volumen de la esfera
imprimirMes();

