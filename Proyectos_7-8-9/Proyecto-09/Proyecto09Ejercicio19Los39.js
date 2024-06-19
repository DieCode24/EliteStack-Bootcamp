// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [24]
// - Hora: [1:30]PM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]
// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---
// - Descripción: El programa imprime un reloj de arena invertido.*/

const a = "A";
let espacio = " ";

//espacio entre las letras
let espacioIntermedio = 6;

//espacio que avanza la letra A
let espacioAvanza = 0;
let i = 0;

/* A_ _ _ _ _ _A
    A_ _ _ _ A 
     A _ _ A 
       A A
*/

let ciclo = (a) => {
    i++;

    //Limpia la pantalla cada 5 segundos
    console.clear();

    //Espacio para avanzar la primera letra, ejemp: posicion 1: "A" | => posicion 2: " A"
    espacioAvanza++;

    //repeat se encarga de multiplicar los estring, ejemplo: "x".repeat(2) = "xx"
   //el primer $ se encarga de la ubicacion de la primera A 
   //el segundo $ es la primera
   //el tercer $ es el espacio entre la primera letra A y la segunda
   //el cuarto $ es la segunda letra A
    console.log(`${espacio.repeat(espacioAvanza)}${a}${espacio.repeat(espacioIntermedio)}${a}`);
    i === 0 ? espacioIntermedio : espacioIntermedio -= 2;

    //Genera un delay de 1 segundo
    if (i !== 4) {
        setTimeout(() => {
            ciclo(a);
        }, 1000);
    }
};

ciclo(a);
