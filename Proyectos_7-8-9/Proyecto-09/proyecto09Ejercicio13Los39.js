// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [13]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa pide al usuario 75 números y revisará cual es el número mayor y menor de
//los datos ingresados, la cantidad de números mayores a 150, la cantidad de números negativos y
//el promedio de los números positivos.

// Importa el módulo 'prompt-sync' para recibir entradas del usuario de forma síncrona
const prompt = require('prompt-sync')();

//Funcion grupoNumeros que hace el llamado a los 75 valores y hacer el respectivo análisis.
function grupoNumeros(contador, mayor, menor, mayor_150, negativos, promedio, contar_positivos){
    if(contador <= 75){
        // Pedir entrada del usuario mientras no haya ingresado los 75 números
    const number = parseInt(prompt('Por favor, ingresa un número: '));
    //constante number que guarda el número ingresado por el usuario.
    if(number==0){
        //Si es 0, avisa y no cambia la cantidad de números ingresados.
        console.log("El número es 0");
        return grupoN
    umeros(contador, mayor, menor, mayor_150, negativos, promedio, contar_positivos);
    }else{
        //Verifica si se puede modificar algún parametro
        if(number>mayor){
            mayor=number;
        }
        if(number<menor){
            menor=number;
        }
        if(number>150){
            mayor_150++;
        }
        if(number<0){
            negativos++;
        }
        if(number>0){
            promedio+=number;
            contar_positivos++;
        }
        //Volvemos a llamar a la funcion con sus respectivos cambios
        return grupoN
    umeros(contador+1, mayor, menor, mayor_150, negativos, promedio, contar_positivos);
    }
}else{
    //Imprime por consola el resultado final del proceso.
    console.log(`Resultados:\nNúmeros mayores a 150: ${mayor_150}\nNúmero mayor del grupo: ${mayor}\nNúmero menor del grupo: ${menor}\nCantidad de números negativos: ${negativos}\nPromedio de números positivos: ${promedio/contar_positivos}`);
}
}
//Llamamos a la funcion principal
grupoNumeros(1, -Infinity, Infinity, 0, 0, 0, 0);