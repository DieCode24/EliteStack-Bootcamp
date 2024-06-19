// - Fecha de publicación: [19/06/2024]
// - Número del ejercicio: [22]
// - Hora: [12:12]AM
// - Versión de la tarea: [03]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [EMASCRIPT 6.0]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción: Este código construye una pirámide invertida de "P" en la consola

const prompt = require("prompt-sync")(); 

// Proposito: Imprimir una piramide invertida

function imprimirEspacios(cantidad) {
    return ' '.repeat(cantidad + 33 );//.repeat es un método para concatenar un número de veces la copia del mismo y se suma 33 para hacer los 33 espacios en los que arranca la piramide
}

function imprimirP(p) {
    return 'P'.repeat(p);
}

function piramideInvertidaP(numeroFila, p, cantidadEspacios) {//Se declara la variable piramideInvertidaP 
/*numeroFila: numero de renglones
p: cantidad de p que se hará la pirámide, tamaño de la base de la pirámide
cantidadEspacios: La cantidad de espacios en cada renglón*/
    if (numeroFila > 0) {
        let espacios = imprimirEspacios(cantidadEspacios); //Se declara la varaible cantidadEspacios
        let P = imprimirP(p); //Se declara la varaible imprimirP
//Las dos variables se declaran para en la siguiente linea concatenar ambas para hacer los "renglones" de la pirámide
        console.log(espacios + P);//concatenación
        piramideInvertidaP(numeroFila - 1, p - 2, cantidadEspacios + 1);/*Se llama de nuevo la función con los parámetros modificados, 
        esto se repetirá hasta que el caso base sea falso*/ 
        
    }
}

piramideInvertidaP(7, 13, 0);

