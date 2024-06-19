/*
 - Fecha de publicación: [18/06/2024]
 - Número de la tarea: [28]
 - Hora: [10:00]PM
 - Versión de la tarea: [01]
/- Autores: [Todos los ingenieros del grupo (39)]
 - Nombre del lenguaje utilizado: [Javascript]
 - Versión del lenguaje utilizado: [v12.22.9]
 - Presentado a: [Doctor Ricardo Moreno Laverde]

 ------- | Universidad Tecnológica de Pereira |-------------
 --- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción:
*/

const PromptSync = require('prompt-sync')();// se importa la libreria prompt-sync en una constante PromptSync

function NumberMajor100(){//Metodo para decir si un numero es mayor a 100
    let value = PromptSync('Escriba el numero que desea ver si es mayor que 100: ');//le pide al usuario el numero
    if(value>100){
        console.log(`El numero ${value} es mayor que 100`);//si value es mayor a 100 imprime esto
    } else{
        console.log(`El numero ${value} es menor o igual a 100`)//de lo comtrario esto
    }
}

NumberMajor100();//llamado al metodo