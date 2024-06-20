/* --------------------------------------------------
● Fecha y Hora de publicación: [20/06/2024]
● Versión de su código: [0.1]
● Autores: [Todos los ingenieros del grupo (39)]
● Nombre del lenguaje utilizado: [JavaScript]
● Versión del lenguaje utilizado: [ECMAScript 6]
● Universidad Tecnológica de Pereira
● Programa de Ingeniería de Sistemas y Computación
● Cuarta (IV) cohorte Coding BootCamp FullStack
-------------------------------------------------- */

/* --------------------------------------------------
● Descripción del programa:
Este programa en JavaScript permite analizar y graficar polinomios de forma textual en la consola. Está estructurado en varios pasos:
1.parseo de la cadena de polinomio.
2.construcción de un arreglo bidimensional.
3. impresión del arreglo.
4. lectura de rangos.
5. construcciones de tablas de valores.
6. finalmente la graficación del polinomio con la inclusión de los ejes X y Y.

● Salvedades:
1. Se asegura el funcionamiento del programa con exponentes enteros y positivos.
-------------------------------------------------- */

// Importa la librería para pedir información al usuario
const prompt = require('prompt-sync')();

// Paso 1: Parseo de la cadena
function parsePolynomial(polynomial) {
    // Inicializar un array vacío para almacenar los términos del polinomio
    let terms = [];

    // Expresión regular para coincidir con los términos del polinomio
    // ([+-]?\d*)\(?X\^?(-?\d*)\)? coincide con términos como "X^2", "-3X", "5X^0"
    // | (opción alternativa)
    // ([+-]?\d+) coincide con términos constantes como "7" o "-4"
    let termRegex = /([+-]?\d*)\(?X\^?(-?\d*)\)?|([+-]?\d+)/g;

    /*
    Esta expresión regular se utiliza para coincidir con términos de un polinomio que contienen la variable 'X', como "X^2", "-3X", "5X^0", etc.
    - ([+-]?\d*): Coincide con el coeficiente del término.
      - [+-]?: Coincide con un signo positivo o negativo opcional.
      - \d*: Coincide con cero o más dígitos.
    - \(?: Coincide con un paréntesis de apertura opcional.
    - X: Coincide literalmente con la letra 'X'.
    - \^?: Coincide con el símbolo '^' opcional.
    - (-?\d*): Coincide con la potencia del término.
      - -?: Coincide con un signo negativo opcional.
      - \d*: Coincide con cero o más dígitos.
    - \)?: Coincide con un paréntesis de cierre opcional.
    - |: Alterna entre términos con 'X' y términos constantes.
    - ([+-]?\d+): Coincide con términos constantes como "7" o "-4".
    */

    // Buscar todos los términos que coinciden con la expresión regular en la cadena de entrada
    let matches = polynomial.match(termRegex);

    if (!matches) {
        // Mostrar un error si no se encontraron términos válidos
        console.error("El polinomio proporcionado no es válido.");
        return [];
    }

    // Iterar sobre cada término coincidente
    for (let match of matches) {
        if (match.includes('X')) {
            // Usar otra expresión regular para extraer el coeficiente y la potencia
            let [_, coefficient, power] = match.match(/([+-]?\d*)X\^?(-?\d*)/);

            // Manejar casos especiales para el coeficiente
            // Si el coeficiente es '' o '+', se asume que es 1
            // Si el coeficiente es '-', se asume que es -1
            // De lo contrario, convertir el coeficiente a un número entero
            coefficient = coefficient === '' || coefficient === '+' ? 1 : coefficient === '-' ? -1 : parseInt(coefficient);

            // Manejar caso especial para la potencia (si no se especifica, se asume 1)
            power = power === '' ? 1 : parseInt(power);

            // Agregar el término al array como un par [coeficiente, potencia]
            terms.push([coefficient, power]);
        } else {
            // Si el término es una constante, agregarla al array como [constante, 0]
            terms.push([parseInt(match), 0]);
        }
    }

    // Devolver el array de términos
    return terms;
}

// Paso 2: Construcción del arreglo bidimensional
function buildArray(terms) {
    // Limitar el número de filas a 30 o el número de términos, lo que sea menor
    const rows = Math.min(30, terms.length);
    // Crear un array de 30 filas inicializado con pares [0, 0]
    let polynomialArray = new Array(rows).fill(0).map(() => [0, 0]);

    // Copiar los términos en el array, hasta un máximo de 30 términos
    for (let i = 0; i < terms.length && i < rows; i++) {
        polynomialArray[i][0] = terms[i][0]; // Coeficiente
        polynomialArray[i][1] = terms[i][1]; // Potencia
    }

    // Devolver el array bidimensional
    return polynomialArray;
}

// Paso 3: Impresión del arreglo en consola
function printArray(array) {
    console.log("{Coeficiente, Potencia}");
    for (let row of array) {
        // Imprimir solo términos no nulos
        if (row[0] !== 0 || row[1] !== 0) {
            console.log(`{${row[0]}, ${row[1]}}`);
        }
    }
}

// Paso 4: Lectura de rango e incremento de forma sincrónica
function readRange() {
    while (true) {
        const start = prompt('Ingrese el rango de inicio: ');
        const end = prompt('Ingrese el rango de fin: ');
        const increment = prompt('Ingrese el incremento: ');

        // Convertir las entradas a números enteros
        const startNum = parseInt(start);
        const endNum = parseInt(end);
        const incrementNum = parseInt(increment);

        // Validar que las entradas sean números y que el incremento no sea cero
        if (!isNaN(startNum) && !isNaN(endNum) && !isNaN(incrementNum) && incrementNum !== 0) {
            // Devolver un objeto con los valores válidos
            return { start: startNum, end: endNum, increment: incrementNum };
        } else {
            // Mostrar un error si las entradas no son válidas
            console.error("Por favor ingrese valores válidos. El incremento no puede ser cero.");
        }
    }
}

// Paso 5: Construcción de la tabla de valores
function evaluatePolynomial(terms, x) {
    // Evaluar el polinomio en un punto x dado
    // Utilizando la fórmula sum(coefficient * x^power)
    return terms.reduce((sum, [coefficient, power]) => sum + coefficient * Math.pow(x, power), 0);
}

function buildValueTable(start, end, increment, terms) {
    let table = [];
    // Construir una tabla de valores para el rango especificado
    for (let x = start; x <= end; x += increment) {
        // Evaluar el polinomio en x y agregar el par {x, y} a la tabla
        let y = evaluatePolynomial(terms, x);
        table.push({ x, y });
    }
    return table;
}

// Paso 6: Graficar el polinomio en modo texto
function plotPolynomial(valueTable) {
    const rows = 24; // Número de filas en la gráfica
    const cols = 80; // Número de columnas en la gráfica
    const graph = Array.from({ length: rows }, () => Array(cols).fill(' '));

    // Encontrar el valor mínimo y máximo de y en la tabla
    let minY = Math.min(...valueTable.map(point => point.y));
    let maxY = Math.max(...valueTable.map(point => point.y));
    let yRange = maxY - minY;
    let yScale = yRange / (rows - 1);

    // Graficar cada punto de la tabla de valores en el gráfico de texto
    for (let point of valueTable) {
        // Calcular la posición x en la gráfica
        let xPos = Math.floor((point.x - valueTable[0].x) / (valueTable[valueTable.length - 1].x - valueTable[0].x) * (cols - 1));
        // Calcular la posición y en la gráfica (invertida porque el origen está en la parte superior izquierda)
        let yPos = rows - 1 - Math.floor((point.y - minY) / yScale);
        if (yPos >= 0 && yPos < rows && xPos >= 0 && xPos < cols) {
            graph[yPos][xPos] = '*';
        }
    }

    // Añadir ejes X y Y
    const yAxisPos = Math.max(0, Math.min(rows - 1, Math.floor((0 - minY) / yScale)));
    const xAxisPos = Math.max(0, Math.min(cols - 1, Math.floor((0 - valueTable[0].x) / (valueTable[valueTable.length - 1].x - valueTable[0].x) * (cols - 1))));

    // Añadir el eje Y (vertical)
    for (let i = 0; i < rows; i++) {
        graph[i][xAxisPos] = '|';
    }
    // Añadir el eje X (horizontal)
    for (let j = 0; j < cols; j++) {
        graph[yAxisPos][j] = '-';
    }
    // Añadir el origen
    graph[yAxisPos][xAxisPos] = '+';

    // Imprimir la gráfica en consola
    for (let row of graph) {
        console.log(row.join(''));
    }
}

// Ejemplo de uso
let polynomial = prompt("Ingrese el polinomio: ");
let terms = parsePolynomial(polynomial);
if (terms.length === 0) {
    console.error("No se pudo parsear el polinomio. Terminando el programa.");
    return;
}
let polynomialArray = buildArray(terms);

console.log("Arreglo bidimensional:");
printArray(polynomialArray);

let { start, end, increment } = readRange();
let valueTable = buildValueTable(start, end, increment, terms);
console.log("Tabla de valores:");
console.table(valueTable);

console.log("Gráfica del polinomio:");
plotPolynomial(valueTable);