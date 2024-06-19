// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---


// Descripción del programa
// El programa imprime una piramide invertida con la letra P, la piramide tiene un tamaño de 7 filas y 13 columnas.


// Funciones utilizadas


//Funcion recurisva que agrega un caracter al principio de la cadena n veces
//Retorma la cadena con el caracter agregado n veces
//Parametros: caracter: caracter a agregar, cadena: cadena a la que se le va a agregar el caracter, veces: numero de veces que se va a agregar el caracter
function agregarCaracterNVeces(caracter,cadena,veces){
    if(veces == 0){//Condicion de parada
        return cadena;//Retorna la cadena
    }else{//Caso recursivo
        return agregarCaracterNVeces(caracter,caracter+cadena,veces-1);//disminuye cadena
    }
}

//Funcion recursiva que quita n veces un caracter de una cadena
//Retorna la cadena sin el caracter n veces
//Parametros: cadena: cadena a la que se le va a quitar el caracter, caracter: caracter a quitar, n: numero de veces que se va a quitar el caracter
function quitarNCaracteres(cadena,caracter, n){
    if(n == 0){//Condicion de parada
        return cadena;//Retorna la cadena
    }else{//Caso recursivo
        //cadena.replace(caracter,"") remplaza el caracter por un espacio vacio en la cadena
        return quitarNCaracteres(cadena.replace(caracter,""),caracter,n-1);
    }
}

//Funcion recursiva que imprime una piramide invertida con la letra P
//Parametros: filas: numero de filas de la piramide, cadena: cadena que se va a imprimir, letra: letra con la que se va a imprimir la piramide, columnas: numero de columnas de la primera fila
function imprimir(filas, cadena, letra,columnas){
    if(filas <= 0){//Condicion de parada cuando ya no hay mas filas
        return;
    }
    if(cadena.length == 0){//Condicion para agregar la primera fila de la piramide
        cadena=agregarCaracterNVeces(letra,cadena,columnas);//Agrega la letra a la cadena n veces
        console.log(cadena);//Imprime la primera fila de la piramide
        imprimir(filas-1,cadena,letra,0);//Llama la funcion recursiva disminuyendo el numero de filas
        //La variable columnas ya no se necesita pasada esta primera fila
    }else{//si no es la primera fila
        cadena=quitarNCaracteres(cadena,letra,2);//Quita dos veces la letra de la cadena
        cadena=" "+cadena;//Agrega un espacio al principio de la cadena
        console.log(cadena);//Imprime la fila de la piramide
        imprimir(filas-1,cadena,letra,0);//Llama la funcion recursiva disminuyendo el numero de filas
    }
}

//Variables
let filas=7;
let cadena="";
let letra="P";
let columnas=filas*2-1;

//Llamado a la funcion imprimir
imprimir(filas,cadena,letra,columnas);

