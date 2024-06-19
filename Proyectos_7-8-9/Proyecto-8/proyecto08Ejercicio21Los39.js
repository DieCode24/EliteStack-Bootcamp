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

function NumCapicuo(){//Metodo para decir si un numero es capicuo o no
    let value = PromptSync('Escriba un numero de 3 cifras: ');//le pide al usuario el numero
    while(value<100 || value>999){//En caso de que no este en el rango, que lo vuelva a pedir
        console.log(`Error, el numero ${value} no esta en el rango`);
        value = PromptSync('Vuelva a intentarlo: ');//se le vuelve a pedir al usuario el numero de 3 cifras
    }
    if(value%10===Math.floor(value/100)){//Confirma si es capicúo
                                        //math.floor devuelve el entero de la division y el % el resto
        console.log(`El numero ${value} es capicúo`);//Si si lo es, imprime esto
    }else{
        console.log(`El numero ${value} no es capicúo`);//en caso contrario
    }
}

NumCapicuo();//llamado al metodo