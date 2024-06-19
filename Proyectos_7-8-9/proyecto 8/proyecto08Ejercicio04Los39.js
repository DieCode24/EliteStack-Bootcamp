// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [04]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un valor que representa el numero del mes e imprime el mes en palabra

const prompt = require("prompt-sync")();

console.log("Este programa, lee un número entre [1 y 12] e imprime el mes que le corresponde en el año. Referencia: 1=Enero. 12=Diciembre")
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; //array

const imprimirMes = () => {
    
let mes = prompt("Ingrese el numero del mes: ");

console.log(`El mes es ${meses[mes-1]}`)
};

// Llamar a la función para calcular el volumen de la esfera
imprimirMes();

