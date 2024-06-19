
/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores: los 39
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion:programa que presenta una piramide invertida .*/
//npm install readline-sync

const readlineSync = require('readline-sync');


function imprimir(f){
    let totalColum=(f * 2)-1;//calcula el numero de columnas
    let limiteEspacio=0;//contador para limitar el espacio
    
 
    recorrer(totalColum,limiteEspacio);
    function recorrer(totalColum,limiteEspacio){ //limita el numero de espacios y p
        let p='';//cadena de P
        let espacio='';//cadena de espacios
        
        for( let j=0;j<limiteEspacio;j++){//acumula espacios(concatena)
            espacio +=' ';
        }
        limiteEspacio+=1;//aumenta el limite de espacios
        for(let i=0;i<totalColum;i++){//acumula P(concatena)
            p+="P";
        }

        console.log(espacio+p);//imprime la concatenacion de espacion y P
        totalColum-=2; //limitador de P
        if(limiteEspacio<=f-1){
            recorrer(totalColum,limiteEspacio);
        }
        
    }

}


let filas = 7; // declara el número de filas
imprimir(filas); // llama a la función imprimir