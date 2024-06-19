// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [26]
// - Hora: [11:30]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa recibirá un valor parámetro de espacio interior, otro de espacio exterior y un ultimo de letra, con lo cual se colocarán los carácteres debidos en cada espacio indicado 


function imprimir(char, cantidad) {
    if (cantidad === 0) {
        return;
    } else {
        process.stdout.write(char);  // Usar process.stdout.write para evitar el salto de línea
        return imprimir(char, cantidad - 1);
    }
}

function imprimirTriangulo(espacioInterior, espacioExterior, letra) {
    if (!(espacioInterior < 0)) {
        imprimir(' ', espacioExterior);
        imprimir('Z', letra);
        if (espacioInterior > 0) {
            imprimir(' ', espacioInterior);
            imprimir('Z', letra);
        }
        console.log();  // Imprimir un salto de línea

        return imprimirTriangulo(espacioInterior - 2, espacioExterior + 1, letra);
    } else {
        imprimir(' ', espacioExterior);
        imprimir('Z', letra);
        console.log();  // Imprimir un salto de línea
    }

    return;
}

imprimirTriangulo(17, 0, 1);

