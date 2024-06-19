// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [20]
// - Hora: [10:00]PM
// - Versión de la tarea: [04]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// Imprimirá un triangulo rectangulo de 25 filas.
let numeroEspacios = 79 //numero de espacios a imprimir, en la primera iteración.
let numeroLetras = 1 //numero de letras a imprimir, en la primera iteración.
let letra = "A"//segundo caracter a imprimir.
let espacio = " "//primer caracter a imprimir.
let fila = 0//contador de filas.
let maxfilas = 25//limite de filas maximas.
console.log("Programa que dibuja un triangulo rectangulo.")

function trianguloRectangulo(numeroEspacios, numeroLetras, fila, letra, espacio){
    if(fila < maxfilas){
        imprimirAlgo(espacio,numeroEspacios)//Se llama a la funcion imprimirAlgo con el caracter " " y el numero de caracteres a imprimir.
        imprimirAlgo(letra,numeroLetras)//Se llama a la funcion imprimirAlgo con el caracter "A" y el numero de caracteres a imprimir.
        fila++
        numeroEspacios--
        numeroLetras++//En cada fila los espacios se disminuyen mientras que las letras se incrementan.
        console.log("")/*console.log imprime y despues agrega un cambio de linea por eso se usa cuando todos los caracteres de una linea han sido impresos.*/
        trianguloRectangulo(numeroEspacios, numeroLetras, fila, letra, espacio)
    }else{process.stdout.write("")}
}


//La funcion imprimirAlgo, imprime la variable algo hasta que el numero de impresiones llegue a 1.
function imprimirAlgo(algo,numeroDeImpresiones){//Esta función se utiliza para imprimir todos los caracteres correspondientes a una fila ya sea espacio o A.
    if(numeroDeImpresiones > 0){
        process.stdout.write(`${algo}`)//process.stdout.write() imprime sin hacer un cambio de linea.
        numeroDeImpresiones--//En cada iteración el contador numeroDeImpresiones se reduce por 1, indicando que en la proxima iteracion se imprimira un caracter menos que en la anterior.
        return imprimirAlgo(algo,numeroDeImpresiones)
    }else{process.stdout.write("")}
}

trianguloRectangulo(numeroEspacios, numeroLetras, fila, letra, espacio)