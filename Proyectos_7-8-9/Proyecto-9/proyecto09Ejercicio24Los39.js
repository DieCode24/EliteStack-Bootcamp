// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [24]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]
// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---
// - Descripción: El programa imprime un reloj de arena invertido.*/

//-------- PARA MAYOR ENTENDIMIENTO DEL CÓDIGO VER EL OTPUT O EL DOCUMENTO------------//

//Lo dividimos en dos partes, la parte de arriba y la de abajo, cada una de estas será la parte de la izquierda "A", los espacios " " y la derecha "A".
//Imprimir añadirá caracteres a un string, cuando tengamos cada string completo lo mostraremos

function imprimir(carac,times,line){ //Esta función concatena caracteres "carac" "times" veces, será "A" y " "(espacio), line será la línea concatenada
    if (times > 0){//si times es mayor a 0 concatena a line el "carac"
        line += carac;
        return imprimir(carac,(times-1),line); //Llama a la función con times-1 para finalizar el ciclo en algún momento
    } else {
        return line;//si ya es 0, la linea está completa y la retornamos, para posteriormente mostrarla
    }
}
function recursividadArriba(n,times,esp){//imprimirá la parte de arriba a partir de un n, en este caso será 3, cont será la cantidad de "A" a imprimir y los espacios.
    if (n > 0){
        let line = imprimir("A",times,""); //Añade a la línea existente las "A",
        let line2 = imprimir(" ",esp,line);//los espacios
        let line3 = imprimir("A",times,line2);//Y las "A" del final
        console.log(line3);//Muestra la línea
        return recursividadArriba((n-1),(times +1),(esp - 2));
    } else {
        console.log(imprimir("A",(((times-1)*2)+1),""))//Esto muestra la línea de la mitad, que es el doble de la cantidad de filas o "times" n + 1, mirar imagen.
    //La lógica de esta linea es "times", básicamente en lugar del espacio del medio imprimimos una A demás.
    }
}
//La proxima función será casi igual, solo que al llamar la función se sumarán espacios y se restarán letras o "times"
function recursividadAbajo(n,times,esp){//imprimirá la parte de arriba a partir de un n, en este caso será 3, cont será la cantidad de "A" a imprimir y los espacios.
    if (n > 0){
        let line = imprimir("A",times,""); //Añade a la línea existente las "A",
        let line2 = imprimir(" ",esp,line);//los espacios
        let line3 = imprimir("A",times,line2);//Y las "A" del final
        console.log(line3);//Muestra la línea
        return recursividadAbajo((n-1),(times -1),(esp + 2));
    }}
recursividadArriba(3,1,5)
recursividadAbajo(3,3,1)

//-------------------------- TERMINADO, OPCIONAL LEERLO ----------------------------------- 
//En el funcionamiento para casos distintos, se pedirá al usuario el n o cantidad de filas, pasaremos a cada función un floor de  n / 2
//al llamar recursividadAbajo, times será por igual n / 2, los espacios de la primera función serán n - 2.
//----------------- n DEBE SER IMPAR. -----------------------
function show(n){
    recursividadArriba(Math.floor(((n/2))),1,(n-2))
    recursividadAbajo(Math.floor((n/2)),Math.floor((n/2)),1)
}
//show(7);