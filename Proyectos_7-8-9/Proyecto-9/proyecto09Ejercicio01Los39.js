// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [28]
// - Hora: [23:23:23]
// - Versión de la tarea: [0.0.2]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

//          Universidad Tecnológica de Pereira
//  Programa de Ingeniería de Sistemas y Computación

/*  Descripción:

    éste programa imprime por consola la SERIE FIBONACCI hasta el rango numerico
    solicitado por el cliente, la versión previa (del año 2019) extendía la serie
    hasta valores que sobrepasaban dícho límite.

    cliente/tutor: PHD Ricardo Moreno Laverde

 observaciones del cliente:

    Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando
progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......

    requerimientos del cliente:
Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.
*/

console.log(`Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va
sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.`)
// esta variable es definida por el cliente en el contrato y limita el valor MÁXIMO que puede contener cáda elemento de la serie
let limiteDelCliente      = 10000;
// PAR inicial de valores en la serie soliciatda por el cliente:
let elementosEnlaSerieFibonacci   = [0, 1];
// cíclo con incremento UNO (1) que itera para asignar los valores a la serie,
// en éste cíclo se recurre a la variable temporal {i}
for(i = 0; i < limiteDelCliente + 1; ++ i){
// se define la variable {suma} con el valor suma de LOS DOS ÚLTIMOS ELEMENTOS de la serie solicitada por el cliente:
let sumaUltimos2Elementos = elementosEnlaSerieFibonacci[elementosEnlaSerieFibonacci.length - 1] + elementosEnlaSerieFibonacci[elementosEnlaSerieFibonacci.length - 2];
// únicamente se agrega el elemento a la lísta si dícho elemento NO SOBREPASA el límite establecido por el cliente:
    if(sumaUltimos2Elementos < limiteDelCliente) {
        elementosEnlaSerieFibonacci.push(sumaUltimos2Elementos);
// si el elemento sobrepasa la restricción indicada por el cliente, finalizamos el cíclo:
	}
    }

// el cliente ha solicitado imprimir el resultado:
console.log(elementosEnlaSerieFibonacci.join(', '));

// fin del programa
