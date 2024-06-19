// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa 2 columnas donde la primera (left) aumenta de 0 - 9 y la segunda (right) va de 1 a 5 pero se repite dos veces

function parejasEnteros(left, right, index){
    // condicion de parada
    if (index > 9){
        return;
    }
    else{
        console.log(left, right) //Imprime left y right separador por un espacio
        if ((index % 2) === 1){ // Si el indice es impar aumenta right
            parejasEnteros(left+1, right+1, index+1); 
        }else{
            parejasEnteros(left+1, right, index+1);
        }
    }

}

parejasEnteros(0,1,0)