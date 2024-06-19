/* -Fecha de publicación: Junio 18
Hora: 11:05pm
Versión de su código: 1
Autores. Ingenieros del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Desplaza en el eje orizontal a dos letras "A" que estan al estremo y se detienen al frente de ellas
*/

// Se define el patrón de desplazamiento
const desplazamiento = [
    "A      A",
    " A    A ",
    "  A  A  ", 
    "   AA   "
];

// Función que maneja la animación del desplazamiento
const animacionDeDesplazamiento = (desplazamiento) => {
    for(let i = 0; i < desplazamiento.length; i++){
        
        //intervalo de tiempo
        setTimeout(() => {

            //limpia la pantalla despues de 1000milisegundos
            console.clear();
            console.log(desplazamiento[i]);
        }, i * 1000);
    }
}

// Ejecutar la animación
animacionDeDesplazamiento(desplazamiento);

