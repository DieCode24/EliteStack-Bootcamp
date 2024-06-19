// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [27]
// - Hora: [10:00]AM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un valor de X y la cantidad de terminos de la serie, calculará la serie de taylor y devolverá el resultado
// Imprime una piramide de z de altura 10 sin relleno
/*
         z
        z z
       z   z
      z     z
     z       z
    z         z
   z           z
  z             z
 z               z
z                 z
*/

// Primera función recursiva que controla el recorrido de las filas
const filas = ((ALTURA, alturaActual) => { // Recibe como párametros la Altura máxima, y la altura actual o la FILA donde nos encontramos
    if (alturaActual == ALTURA) {  // CASO BASE: La fila o altura actual es igual a la altura máxima
        return;
    }

    let linea = ' '; // Variable para almecenar los resultados de espacios y carácteres 'z' de cada fila

     /* Segunda función recursiva que nos ayudara a generar los espacios, recibe como parámetros
    la altura maxima, la fila actual, el numero de espacios que SIEMPRE inicia en 1, y la varaible linea donde se alamcenan estos espacios.*/ 
    linea = espacios(ALTURA, alturaActual, 1, linea); // Almacena el resultado de retorno de la función recursiva

    // Después de la finalización de segunda función recursiva, linea almacena el carecter z.
    linea += 'z';


    /*Tercera función recursiva que nos ayudara a generar los espacios en el centro de la piramide es decir, sin relleno, recibe como parámetros la fila actual,
    el espacio que SIEMPRE inicia en 1, y la variable linea que almacenera los espacios*/
    linea = espaciosDentroPiramide(alturaActual, 1, linea); // Almacena el resultado de retorno de la función recursiva

    /* Nos aseguramos que la fila o la altura actual sea mayor a 1, ya que si no ponemos esta condición
    al inicio de la piramide imprimira dos carácteres de 'z' */
    if (alturaActual > 1) {
        linea += 'z'; /* Si la fila actual es mayor a uno, sumara el caracter 'z' a la variable linea, en este punto ya tenemos los espacios, la 'z' del borde izauierdo
        los espacios del centro y la 'z' del borde derecho*/
    }

    console.log(linea); // Imprimos la linea resultante de almacenar los espacios y 'z'

    return filas(ALTURA, alturaActual + 1); // Hacemos la llamada recursiva, aumentando la fila o altura actual en 1.
});

/*Segunda función recursiva*/
const espacios = ((ALTURA, alturaActual, espacio, linea) => {
    if (espacio >= ALTURA - alturaActual) { /* Verfica que "espacio" no sea mayor a la altura maxima menos la actual actual, para imprimir los espacios adecuados */
        return linea;  /* Retornamos los espacios de linea apenas se cumpla el caso base, esto para que la generación de la cadena linea no se pierda por las
        llamadas recursivas*/
    }

    linea += ' '; /* Almacenamos los espacios en cada llamada, si no tenemos 'return linea' lo que pasaria es que, cuando se devuelve, se pierden los espacios creados*/
    return espacios(ALTURA, alturaActual, espacio + 1, linea); // Aumentamos en 1 la variable espacio.
});

/*Tercera función recursiva*/
const espaciosDentroPiramide = ((alturaActual, espacio, linea) => {
    if (espacio > 2 * (alturaActual - 1) - 1) { /* Formula que calcula la cantidad de espacios que habra en el centro, ejemplo:
        Supongamos que estamos en la fila 6, y nuestro espacio como ya sabemos siempre empieza en 1, si aplicamos la formula nos dice que espacio
        debe ser mayor a 9 es decir, 1 > 9, la proxima iteración 2 > 9, en resumen en la fila 6 abra 9 espacios en el centro*/
        return linea;
    }

    linea += ' ';
    return espaciosDentroPiramide(alturaActual, espacio + 1, linea);
});

let alturaActual = 1; // Altura inicial para empezar la construcción del triangulo
filas(10, alturaActual); // Recibe como argumentos, la altura maxima y la actual
