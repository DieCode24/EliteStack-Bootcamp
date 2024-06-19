const readlineSync = require('readline-sync');

// Paso 1: Parseo de la cadena
function parsePolynomial(polynomial) {
    let terms = [];
    let termRegex = /([+-]?\d*)\(?X\^?(-?\d*)\)?|([+-]?\d+)/g;
    let matches = polynomial.match(termRegex);

    for (let i = 0; i < matches.length; i++) {
        let match = matches[i];
        if (match.includes('X')) {
            let [_, coefficient, power] = match.match(/([+-]?\d*)X\^?(-?\d*)/);
            coefficient = coefficient === '' || coefficient === '+' ? 1 : coefficient === '-' ? -1 : parseInt(coefficient);
            power = power === '' ? 1 : parseInt(power);
            terms.push([coefficient, power]);
        } else {
            terms.push([parseInt(match), 0]);
        }
    }

    return terms;
}

// Paso 2: Construcción del arreglo bidimensional
function buildArray(terms) {
    const rows = 30;
    let polynomialArray = new Array(rows).fill(0).map(() => [0, 0]);

    for (let i = 0; i < terms.length && i < rows; i++) {
        polynomialArray[i][0] = terms[i][0];
        polynomialArray[i][1] = terms[i][1];
    }

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
    const start = readlineSync.question('Ingrese el rango de inicio: ');
    const end = readlineSync.question('Ingrese el rango de fin: ');
    const increment = readlineSync.question('Ingrese el incremento: ');

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