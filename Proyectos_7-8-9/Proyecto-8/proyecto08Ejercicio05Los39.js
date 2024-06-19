/*Fecha de publicación: 19/06/2024
Hora: 2:00
Versión de su código: 0.1
Autores. Ing(c): [Todos los ingenieros del grupo (39)]
Versión del lenguaje utilizado: ECMAScript 6.0
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación*/

/*5- Que leyendo por teclado la antigüedad en años, que calcule el sueldo mensual que le corresponde al trabajador de una empresa
que cobra 40.000 euros anuales, el programa debe realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%.*/

const prompt = require('prompt-sync')();

console.log(`Este programa leyendo por teclado la antigüedad en años, calcula el sueldo mensual que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, el programa debe realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%.\n`)
const tiempo = prompt("Entre el número de años de antigüedad del trabajador: ")

const SALARIOANUAL = 40000; //Declaramos una variable tipo constante

function aumentoAntiguedad(tiempo){ // Declaramos la funcion, se necesita una variable para ejecutarla
    let totalaumento = 0; // Declaramos una variable 
    if(tiempo > 10){ //Creamos un condicional if donde validamos que el tiempo sea mayor a 10
        totalaumento = SALARIOANUAL + ((SALARIOANUAL * 10) / 100); //Realizamos la operacion y damos el aumento anual
    }else if ((tiempo <= 10) && (tiempo > 5)){ //Creamos un condicional if donde validamos que el tiempo sea menor o igual a 10 y mayor a 5
        totalaumento = SALARIOANUAL + ((SALARIOANUAL * 7) / 100); //Realizamos la operacion y damos el aumento anual
    }else if ((tiempo <= 5) && (tiempo > 3)){ //Creamos un condicional if donde validamos que el tiempo sea menor o igual a 5 y mayor a 3
        totalaumento = SALARIOANUAL + ((SALARIOANUAL * 5) / 100); //Realizamos la operacion y damos el aumento anual
    }else if (tiempo <= 3){ //Creamos un condicional if donde validamos que el tiempo sea menor o igual 3 
        totalaumento = SALARIOANUAL + ((SALARIOANUAL * 3) / 100); //Realizamos la operacion y damos el aumento anual
    }
    const SALARIOMES = totalaumento / 12; // Declaramos una variable tipo constante y realizamos la operacion para conocer el salario mensual
    console.log(`El sueldo mensual es de ${SALARIOMES} euros`); // Mostramos por pantalla el resultado
}

console.log(aumentoAntiguedad(tiempo)); // Ejecutamos la funcion 