// - Fecha de publicación: [18/07/2024]
// - Número de la tarea: [03]
// - Hora: [11:22]AM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un variable termino, que significa el limite de la secuencia de Lucas a imprimir.


const prompt = require('prompt-sync')(); // Importa la librería prompt-sync
const nTermino = parseInt(prompt("Ingrese el término para la serie de Lucas: "));

// Función recursiva para calcular el término de la serie de Lucas
const lucas = (n) => {
    if (n === 0) return 2; // Primer término de la serie de Lucas
    if (n === 1) return 1; // Segundo término de la serie de Lucas

    return lucas(n - 1) + lucas(n - 2); // Fórmula recursiva de la serie de Lucas
};

// Función recursiva para generar la serie de Lucas hasta el término n
const generarSerieLucas = (terminoActual, n, serie) => {
    if (terminoActual > n) {
        return serie; // Retorna la serie completa cuando se alcanza el término n
    }

    // Calcula el término actual de la serie de Lucas
    let termino = lucas(terminoActual);

    // Agrega el término actual a la serie, separado por coma
    serie += (terminoActual === n) ? termino + "." : termino + ", ";

    // Llama recursivamente para el siguiente término
    return generarSerieLucas(terminoActual + 1, n, serie);
};

let serie = generarSerieLucas(0, nTermino, ""); // Inicia la generación de la serie de Lucas desde el término 0

console.log(serie); // Imprime la serie de Lucas generada

