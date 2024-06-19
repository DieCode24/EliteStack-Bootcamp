/*
- 18/Junio/2024
- Hora: 
- Versión: 2
- Autores: Los 39 del Bootcamp
- Nombre del lenguaje utilizado: JavaScript
- Versión del lenguaje utilizado: ECMAScript 6.0
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Salvedades: Para valores no positivos, no se garantiza el resultado correcto
- Descripción: Este programa calcula el resultado aproximado del logaritmo natural de x por Series de Taylor
*/

console.log(`Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.
Los números a sumar son:`)
let acumSumaterminos = 0;
    // esta variable es definida por el cliente en el contrato y limita el valor MÁXIMO que puede contener cáda elemento de la serie
    let limiteDelCliente = 100;
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
    console.log(elementosEnlaSerieFibonacci.join(', ') + " y su suma es: " + elementosEnlaSerieFibonacci.reduce((a, value) => a + value, 0))
    
    // fin del programa


