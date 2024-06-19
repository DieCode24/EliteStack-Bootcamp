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


//Descripcion del programa
//El programa usa una funcion recursiva para imprimir en consola las siguientes ternas de enteros
/*
1 1 1
2 1 2
3 1 3
4 2 1
5 2 2
6 2 3
7 3 1
8 3 2
9 3 3
*/


function imprimir(i,c1,c2,c3){
  //Condicion de parada
  //El parametro i es el numero de la terna si i es mayor que 9 se detiene la recursividad
  if(i>9){
    return
  }

  //Impresion de la terna(columna1,columna2,columna3)
  console.log(c1,c2,c3); 

  //en cada llamado recursivo se aumenta el valor de las columnas c1 y c3
  c1++;
  c3++;
  //Si la columna 1 es divisible por 3 se aumenta el valor de la columna 2
  if(c1%3===1){
    c2++;
  }
  //Si la columna 3 es mayor que 3 se reinicia en 1
  if(c3>3){
    c3=1;
  }

  //Llamado recursivo se aumenta el valor de i
  imprimir(i+1,c1,c2,c3); 
}

//Llamado inicial
//inicialmente el i(iterador) es 1 y las columnas c1,c2 y c3 son 1
imprimir(1,1,1,1); 