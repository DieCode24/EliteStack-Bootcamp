// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [33]
// - Hora: [12:00]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un valor de X y la cantidad de terminos de la serie, calculará la serie de taylor del logaritmo natural y devolverá el resultado

const prompt = require('prompt-sync')(); // Importa el modulo prompt-sync que viene de Node.js

const x = parseFloat(prompt("Digite el valor de x: ")); // Guarda el valor de x ingresado por el usuario
const terminos = parseInt(prompt("Digite el numero de terminos de la serie: ")); // Guarda la cantidad de terminos a iterar

const lnTaylor = (x, terminos) => {
    const calcularTermino = (n) => Math.pow((-1), n + 1) * Math.pow(x - 1, n) / n; // Define cada termino de la serie
    
    const sumarTerminos = (n, acumulado) => {
        if (n >= terminos) { // Caso de parada o caso base
            return acumulado; // Retorna el acumulado
        } else {
            return sumarTerminos(n + 1, acumulado + calcularTermino(n)); // Llamada recursiva sumando el siguiente termino
        }
    }

    return sumarTerminos(1, 0); // Inicializa la suma de terminos en 0
}

console.log(lnTaylor(x, terminos));