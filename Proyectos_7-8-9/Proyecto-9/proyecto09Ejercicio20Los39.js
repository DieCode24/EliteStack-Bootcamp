/* -Fecha de publicación: Junio 18 de 2024
Hora: 10:11
Versión de su código: 5
Autores. Ing(c): Los 39 del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Programa dibuja un triangulo rectangulo hecho con caracteres.
*/

/*
Variables
numeroEspacios: Numero de espacios de la primera iteración (La primera fila del triangulo es de 80 caracteres 79 espacios y una A).
numeroLetras: Numero de letras de la primera iteración.
letra: Uno de los caracteres a imprimir.
espacio: Uno de los caracteres a imprimir.
fila: Contador de filas.
maxfilas: Limite de filas a imprimir.
*/

let numeroEspacios = 79
let numeroLetras = 1
let letra = "A"
let espacio = " "
let fila = 0
let maxfilas = 25
console.log("Programa que dibuja un triangulo rectangulo.")

function trianguloRectangulo(numeroEspacios, numeroLetras, fila, letra, espacio){
    if(fila < maxfilas){
        imprimirAlgo(espacio,numeroEspacios)
        imprimirAlgo(letra,numeroLetras)
        fila++
        numeroEspacios--
        numeroLetras++
        //En cada fila los espacios se disminuyen mientras que las letras se incrementan.
        console.log("")
        /*console.log imprime y despues agrega un cambio de linea por eso
        se usa cuando todos los caracteres de una linea han sido impresos.*/
        trianguloRectangulo(numeroEspacios, numeroLetras, fila, letra, espacio)
    }else{process.stdout.write("")}
}

//Esta función se utiliza para imprimir todos los caracteres correspondientes a una fila ya sea espacio o A.
//La funcion imprimirAlgo, imprime la variable algo hasta que el numero de impresiones llegue a 1.
function imprimirAlgo(algo,numeroDeImpresiones){
    if(numeroDeImpresiones > 0){
        process.stdout.write(`${algo}`)
        //process.stdout.write() imprime sin hacer un cambio de linea.
        numeroDeImpresiones--
        //En cada iteración el contador numeroDeImpresiones se reduce por 1, 
        //indicando que en la proxima iteracion se imprimira un caracter menos que en la anterior.
        return imprimirAlgo(algo,numeroDeImpresiones)
    }else{process.stdout.write("")}
}

trianguloRectangulo(numeroEspacios, numeroLetras, fila, letra, espacio)