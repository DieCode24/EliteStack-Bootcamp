/* --------------------------------------------------
● Fecha y Hora de publicación: [19/06/2024]
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
    Veamos cada parte de la expresión:

    ([+-]?\d*): Esta parte coincide con el coeficiente del término.

    [+-]?: El signo '?' después del corchete hace que el patrón coincida con cero o una ocurrencia de los caracteres dentro de los corchetes, que son '+' y '-'. Esto significa que el coeficiente puede tener un signo positivo, negativo, o no tener signo.
    \d*: El carácter '\d' coincide con cualquier dígito (0-9), y el '*' después de él indica que puede haber cero o más ocurrencias de dígitos. Esto permite que el coeficiente sea un número entero, como '3', '-5', o incluso una cadena vacía (en cuyo caso se asume un coeficiente de 1).
    (): Los paréntesis alrededor de esta parte de la expresión regular crean un grupo de captura, lo que significa que la subcadena coincidente se almacenará para su uso posterior.


    \(?: Este patrón coincide con un paréntesis de apertura '(' de forma opcional.
    X: Este carácter coincide literalmente con la letra 'X' (sin distinguir mayúsculas y minúsculas).
    \^?: Este patrón coincide con el símbolo '^' de forma opcional, que indica la potencia.
    (-?\d*): Esta parte coincide con la potencia del término.

    -?: El signo '?' después del guión hace que el patrón coincida con cero o una ocurrencia del carácter '-'. Esto significa que la potencia puede ser negativa o positiva.
    \d*: Similar al coeficiente, '\d*' coincide con cero o más dígitos, lo que permite que la potencia sea un número entero, como '2', '-3', o una cadena vacía (en cuyo caso se asume una potencia de 1).
    (): Los paréntesis alrededor de esta parte de la expresión regular crean otro grupo de captura para almacenar la subcadena coincidente de la potencia.


    \)?: Este patrón coincide con un paréntesis de cierre ')' de forma opcional.
    |: Este símbolo de barra vertical es el operador alternativo de expresiones regulares, lo que significa que la expresión regular puede coincidir con el patrón anterior a la barra vertical o el patrón siguiente a ella.
    */

    // Buscar todos los términos que coinciden con la expresión regular en la cadena de entrada
    let matches = polynomial.match(termRegex);

    // Iterar sobre cada término coincidente
    for (let i = 0; i < matches.length; i++) {
        let match = matches[i];

        // Si el término contiene la variable 'X'
        if (match.includes('X')) {
            // Usar otra expresión regular para extraer el coeficiente y la potencia
            let [_, coefficient, power] = match.match(/([+-]?\d*)X\^?(-?\d*)/);

            /*

            */

            // Manejar casos especiales para el coeficiente
            coefficient = coefficient === '' || coefficient === '+' ? 1 : coefficient === '-' ? -1 : parseInt(coefficient);

            /*

            */

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
    // Definir el número máximo de filas del arreglo bidimensional
    const rows = 30;

    // Crear un nuevo arreglo bidimensional de tamaño 'rows' x 2
    // Inicialmente, todas las celdas están llenas con el valor 0
    // Cada fila será un par [coeficiente, potencia]
    let polynomialArray = new Array(rows).fill(0).map(() => [0, 0]);

    /*
    Se crea un nuevo arreglo bidimensional polynomialArray de tamaño rows x 2 utilizando la siguiente sintaxis:

    new Array(rows) crea un nuevo arreglo de longitud rows.
    .fill(0) llena todas las celdas del arreglo con el valor 0.
    .map(() => [0, 0]) crea un nuevo arreglo con rows filas, donde cada fila es un par [0, 0].
    */

    // Iterar sobre los términos del polinomio
    for (let i = 0; i < terms.length && i < rows; i++) {
        // Asignar el coeficiente del término actual a la primera columna de la fila correspondiente
        polynomialArray[i][0] = terms[i][0];

        // Asignar la potencia del término actual a la segunda columna de la fila correspondiente
        polynomialArray[i][1] = terms[i][1];
    }

    // Devolver el arreglo bidimensional construido
    return polynomialArray;
}

// Paso 3: Impresión del arreglo en consola
function printArray(array) {
    console.log("{Coeficiente, Potencia}");
    for (let i = 0; i < array.length; i++) {
        let row = array[i];
        if (row[0] !== 0 || row[1] !== 0) {
            console.log(`{${row[0]}, ${row[1]}}`);
        }
    }
}

// Paso 4: Lectura de rango e incremento de forma sincrónica
function readRange() {
    const start = prompt('Ingrese el rango de inicio: ');
    const end = prompt('Ingrese el rango de fin: ');
    const increment = prompt('Ingrese el incremento: ');

    return {
        start: parseInt(start),
        end: parseInt(end),
        increment: parseInt(increment)
    };
}

// Paso 5: Construcción de la tabla de valores
function evaluatePolynomial(terms, x) {
    return terms.reduce((sum, [coefficient, power]) => sum + coefficient * Math.pow(x, power), 0);
}

function buildValueTable(start, end, increment, terms) {
    let table = [];
    for (let x = start; x <= end; x += increment) {
        let y = evaluatePolynomial(terms, x);
        table.push({ x, y });
    }
    return table;
}

// Paso 6: Graficar el polinomio en modo texto
function plotPolynomial(valueTable) {
    const rows = 24;
    const cols = 80;
    const graph = Array.from({ length: rows }, () => Array(cols).fill(' '));

    // Escalar y centrar la gráfica
    let minY = Math.min(...valueTable.map(point => point.y));
    let maxY = Math.max(...valueTable.map(point => point.y));
    let yRange = maxY - minY;
    let yScale = yRange / (rows - 1);

    for (let i = 0; i < valueTable.length; i++) {
        let point = valueTable[i];
        let xPos = Math.floor((point.x - valueTable[0].x) / (valueTable[valueTable.length - 1].x - valueTable[0].x) * (cols - 1));
        let yPos = rows - 1 - Math.floor((point.y - minY) / yScale);
        if (yPos >= 0 && yPos < rows && xPos >= 0 && xPos < cols) {
            graph[yPos][xPos] = '*';
        }
    }

    for (let i = 0; i < graph.length; i++) {
        let row = graph[i];
        console.log(row.join(''));
    }
}

// Ejemplo de uso
let polynomial = "348(X^5)-784(X^2)+6";
let terms = parsePolynomial(polynomial);
let polynomialArray = buildArray(terms);

console.log("Arreglo bidimensional:");
printArray(polynomialArray);

let { start, end, increment } = readRange();
let valueTable = buildValueTable(start, end, increment, terms);
console.log("Tabla de valores:");
console.table(valueTable);

console.log("Gráfica del polinomio:");
plotPolynomial(valueTable);