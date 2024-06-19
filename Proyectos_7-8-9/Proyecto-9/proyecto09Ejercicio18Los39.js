/*
- 18/Junio/2024
- Hora: 
- Versión: 1
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
*/

//Descripcion del programa
//El programa usando ciclos anidados imprimer las siguientes ternas de enteros
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

//la variable i corresponde a la segunda columna de la terna
//la variable j corresponde a la tercera columna de la terna
//la variable k corresponde a la primera columna de la terna y se calcula como (i-1)*3+j
/*
(i-1)*3 -> 0, 3, 6 en cada iteracion de i
j -> 1, 2, 3 en cada iteracion de j
por lo tanto k -> 1, 2, 3, 4, 5, 6, 7, 8, 9
*/

//Primer bucle se llama 3 veces, i toma los valores 1, 2 y 3
for (let i = 1; i <= 3; i++) {
  //segundo bucle se llama 3 veces (en cada llamado del primer bucle) tomara los valores 1, 2 y 3
  for (let j = 1; j <= 3; j++) {
    let k = (i - 1) * 3 + j; //Se calcula el valor de k
    console.log(k, i, j); //Se imprime la terna
  }
}
