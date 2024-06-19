/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Los 39
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Piramide invertida.*/

let n = 7;
n = (n+1) /2;
for(let i=0; i<n-1; i++){//Dividimos la piramide en dos partes y se concatenan en un string
    let string="";
    for(let a=0; a<=i; a++){//La parte de la izquierda
        string +="A";
    }
    for(let spacio=i; spacio<=n-i; spacio++){//espacios
        string +=" ";
    }
    for(let a=0; a<=i; a++){//parte de la derecha
        string +="A";
    }
    console.log(string);//parte de la izquierda
}   
let a="";
//bucle de la parte de abajo
for(let i=1; i<n*2; i++){
    a +="A";
}
console.log(a);
for(let i=n-2; i>=0; i--){
    let string="";
    for(let a=0; a<=i; a++){
        string +="A";
    }
    for(let spacio=i; spacio<=n-i; spacio++){
        string +=" ";
    }
    for(let a=0; a<=i; a++){
        string +="A";
    }
    console.log(string);
}
