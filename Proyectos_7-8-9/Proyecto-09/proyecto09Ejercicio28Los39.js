// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [28]
// - Hora: [10:53]AM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa imrimirá una piramide rotada 90° usando espacios y letras A, la suma de espacios y letras A es siempre 40, por cada recurción un espacio se resta y una letra se suma hasta hacer la mitad de la piramide, por backtracking se hace la otra mitad

// Cantidad de columnas de la pirámide
const COLUMNAS = 40;


// Funcion imprimirCaracternVeces(caracter, n)
// Parametros - caracter: un caracter en formato string
// Retorno - un string con el string concatenado n veces
// Descripción: Función que devuelve un string compuesto de n caracteres, el tipo de caracter y n se pasan como atributos
const imprimirCaracternVeces = (caracter, n) => {
  if (n > 0) {
    return caracter + imprimirCaracternVeces(caracter, n - 1);
  } else {
    return caracter;
  }
};


// Funcion imprimirPiramide(numeroLetras)
// Parametros - numeroLetras: cantidad de letras máximas que se imprimirán
// Descripción: Esta función genera 40 caracteres por linea, sindo los últimos numeroLetras caracteres
// letras A y los anteriores espacios, estos forman una piramide rotada 90 grados
const imprimirPiramide = (numeroLetras) => {
    // Se hará recursión mientras el número de letras a imprimir sea menor que 6
  if (numeroLetras < 6) {
    console.log(
        imprimirCaracternVeces(" ", 40 - numeroLetras - 2) + imprimirCaracternVeces("A", numeroLetras)
      // Se imprimirán 38 espacios - numeroLetras de la  actual iteración y se imprimirán numeroLetras caracteres A
    );

    imprimirPiramide(numeroLetras + 1); // Llamado recursivo con una letra más para imprimir

    // El condicional es para que en la última iteración, no se impriman dos lineas iguales y así lograr
    // que la pirámide termine en punta.
    if (numeroLetras < 5) {
      console.log(
        imprimirCaracternVeces(" ", 40 - numeroLetras - 2) + imprimirCaracternVeces("A", numeroLetras)
        // Este console.log hace lo mismo que el anterior pero se ejecutará por backtracking, entonces  
        // se  imprimirá primero lo último en la pila
      );
    }
  }
};

imprimirPiramide(0);
