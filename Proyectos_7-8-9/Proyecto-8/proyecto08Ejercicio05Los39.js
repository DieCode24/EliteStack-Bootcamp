// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [05]
// - Hora: [10:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

/*5- Que leyendo por teclado la antigüedad en años, que calcule el sueldo mensual que le corresponde al trabajador de una empresa
que cobra 40.000 euros anuales, el programa debe realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%.
Se debe imprimir la tabla n la consola
*/


//modulo prompt para recibir datos por consola, lo carga de npm
const prompt = require('prompt-sync')();

//Impresión de tabla 
//process.stdout es un objeto que flujo de salida estandar, por lo cual no tiene un salto de linea definido al final. 
process.stdout.write("Años de antiguedad"+"              " + "Porcentaje de aumento\n");
process.stdout.write("Tiempo > 10" + "                     "+ "10%\n");
process.stdout.write("Tiempo <= 10 && Tiempo > 5"+"      " + "7%\n");
process.stdout.write("Tiempo <= 5 && Tiempo > 3" +"       "+ "5%\n");
process.stdout.write("Tiempo <= 3"+"                     " + "3%\n");

//ingreso por teclado de la variable tiempo con la función prompt
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