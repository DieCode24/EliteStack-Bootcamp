// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [13]
// - Hora: [10:00]PM
// - Versión de la tarea: [04]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// el programa recibe una actividad y un tiempo y devuelve el enunciado que indica las calorias por minuto
const prompt = require('prompt-sync')();

// Función para calcular las calorías consumidas
function calcularCalorias(actividad, tiempo) {
    let caloriasPorMinuto; //se informa que se va a definir una variable

    if (actividad === 'dormir') { //si la actividad es dormir, 
        caloriasPorMinuto = 1.08; // define caloriasPorMinuto como 1.08
    } else if (actividad === 'reposo') { //si la actividad es reposo, 
        caloriasPorMinuto = 1.66; // define caloriasPorMinuto como 1.66
    } else {
        console.log("esa actividad no esta en las permitidas") //si la actividad no es 'reposo' o 'dormir' le indica que la actividad no esta permitida
    }

    let caloriasConsumidas = caloriasPorMinuto * tiempo; //se multiplica las calorias que gasta por minuto por el ltiempo que la realiza para hayar las calorias consumidas
    console.log("activadad: " + actividad + " tiempo: " + tiempo + " calorias consumidas: " + caloriasConsumidas); // se muestran los parametros y resultados
}

let actividad = prompt('For favor, ingresa la actividad (dormir/reposo): ').toLowerCase(); //se realiza el enunciado par aque el usuario ingrese la actividad
let tiempo = parseFloat(prompt('Por favor, ingrese el tiempo: ')); //se realiza el enunciado par aque el usuario ingrese el tiempo


calcularCalorias(actividad, tiempo); // se llama a la funcion calcularCalorias
