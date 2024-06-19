/* Fecha de publicación: Junio 18
Hora:
Versión de su código: 1
Autores. Los 32 ingenieros
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: El programa pide imprime las tablas del 1 al 10 completas.*/

//haremos la recursividad con una función, num1 se cambia cuando num2 llegue a 10; num1*1...num1*10
//En cada llamado recursivo se cambiará el valor de num2.
function tablasMultiplicar(num1,num2){
    if (num2 <= 10){//verificamos que el numero 2 y el uno sean menores o iguales a 10
        console.log(`${num1} x ${num2} = ${num1 * num2}`);//mostramos el dato
        tablasMultiplicar(num1,(num2+1))//llamamos a la función con num2 + 1 para que muestre la multiplicacion del siguiente numero
    } else { //El numero 2 será 11 entonces es hora de mostrar la siguiente tabla
        if (num1 < 10){
        console.log(`\n`)
        tablasMultiplicar((num1+1),1)//pasamos a la otra tabla e iniciamos num2 en 1
    }}

}
tablasMultiplicar(1,1)
