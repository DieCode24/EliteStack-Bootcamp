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
6. finalmente la graficación del polinomio con la inclusión de los ejes X e Y.

● Salvedades:
1. Se asegura el funcionamiento del programa con exponentes enteros.
-------------------------------------------------- */

// Importa la librería para pedir información al usuario
const prompt = require('prompt-sync')();

// Paso 1: Parseo de la cadena
function parsePolynomial(polynomial) {
    let terms = [];

    // Expresión regular mejorada para coincidir con los términos del polinomio
    let termRegex = /([+-]?\d*\.?\d*)X(?:\((-?\d+)\)|(\d+))?|([+-]?\d+)/g;

    /*
    Esta expresión regular está diseñada para coincidir con los diferentes términos de un polinomio.

    ([+-]?\d*\.?\d*)X: Esta parte coincide con el coeficiente y la variable X.
        [+-]?: Coincide opcionalmente con un signo más o menos.
        \d*: Coincide con cero o más dígitos.
        \.?: Coincide opcionalmente con un punto decimal.
        \d*: Coincide nuevamente con cero o más dígitos después del punto decimal.
        X: Coincide literalmente con la letra X (la variable).


    (?:\((-?\d+)\)|(\d+))?: Esta parte es opcional y coincide con el exponente.
        (?:...): Un grupo no capturante.
        \((-?\d+)\): Coincide con un exponente entre paréntesis, permitiendo números negativos.
        |: O bien...
        (\d+): Coincide con un exponente sin paréntesis (solo números positivos).
        El ? al final hace que todo este grupo sea opcional.


    |: Este operador OR separa la expresión anterior de la siguiente alternativa.

    ([+-]?\d+): Esta parte coincide con términos constantes (sin X).
        [+-]?: Coincide opcionalmente con un signo más o menos.
        \d+: Coincide con uno o más dígitos.


    /g: Esta bandera al final indica que la búsqueda debe ser global, es decir, encontrar todas las coincidencias en la cadena, no solo la primera.

    En resumen, esta expresión regular puede coincidir con:
        Términos con X y coeficiente (ej: 2X, -3.5X)
        Términos con X, coeficiente y exponente (ej: 2X^2, -3X^(-1), 4X(3))
        Términos constantes (ej: 5, -7)

    Esta expresión es bastante robusta y puede manejar una amplia variedad de formatos de términos polinómicos, lo que la hace muy útil para parsear polinomios ingresados por el usuario.
    */

    // Buscar todas las coincidencias en el polinomio usando la expresión regular
    let matches = polynomial.match(termRegex);

    // Si no hay coincidencias, el polinomio es inválido
    if (!matches) {
        console.error("El polinomio proporcionado no es válido.");
        return [];
    }

    // Iterar sobre cada término encontrado en la expresión polinómica
    for (let match of matches) {
        // Si el término contiene 'X', es un término con variable
        if (match.includes('X')) {
            // Extraer coeficiente y exponente usando otra expresión regular
            // La expresión regular descompone el término en partes:
            // ([+-]?\d*\.?\d*)X(?:\((-?\d+)\)|(\d+))?
            let [_, coefficient, power1, power2] = match.match(/([+-]?\d*\.?\d*)X(?:\((-?\d+)\)|(\d+))?/);

            // Procesar el coeficiente
            // Si está vacío o es '+', el coeficiente es 1
            // Si es '-', el coeficiente es -1
            // En otro caso, convertir a número flotante
            coefficient = coefficient === '' || coefficient === '+' ? 1 : 
                        coefficient === '-' ? -1 : 
                        parseFloat(coefficient);

            // Procesar el exponente
            // Si power1 está definido, usar ese (exponente entre paréntesis)
            // Si power2 está definido, usar ese (exponente sin paréntesis)
            // Si ninguno está definido, asumir que el exponente es 1
            let power = power1 !== undefined ? parseInt(power1) : 
                        power2 !== undefined ? parseInt(power2) : 
                        1;

            // Añadir el término [coeficiente, exponente] al array de términos
            terms.push([coefficient, power]);
        } else {
            // Si el término no contiene 'X', es un término constante
            // Convertir a entero y añadir al array con exponente 0
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

    // Crear un array de 'rows' filas inicializado con pares [0, 0]
    // 'fill(0)' llena el array con ceros inicialmente
    // 'map(() => [0, 0])' convierte cada cero en un par [0, 0]
    let polynomialArray = new Array(rows).fill(0).map(() => [0, 0]);

    // Copiar los términos en el array, hasta un máximo de 30 términos
    // Iterar sobre los términos del polinomio
    for (let i = 0; i < terms.length && i < rows; i++) {
        // Asignar el coeficiente del término a la primera posición de la fila
        polynomialArray[i][0] = terms[i][0]; // Coeficiente
        // Asignar la potencia del término a la segunda posición de la fila
        polynomialArray[i][1] = terms[i][1]; // Potencia
    }

    // Devolver el array bidimensional que representa el polinomio
    return polynomialArray;
}

// Paso 3: Impresión del arreglo en consola
function printArray(array) {
    // Imprimir encabezado para clarificar el contenido del array
    console.log("{Coeficiente, Potencia}");

    // Iterar sobre cada fila del array
    for (let row of array) {
        // Imprimir solo términos no nulos
        if (row[0] !== 0 || row[1] !== 0) {
            console.log(`{${row[0]}, ${row[1]}}`);
        }
    }
}

// Paso 4: Lectura de rango e incremento de forma sincrónica
function readRange() {
    // Bucle infinito que se ejecuta hasta que el usuario ingrese valores válidos
    while (true) {
        // Solicitar al usuario que ingrese el rango de inicio
        const start = prompt('Ingrese el rango de inicio: ');
        // Solicitar al usuario que ingrese el rango de fin
        const end = prompt('Ingrese el rango de fin: ');
        // Solicitar al usuario que ingrese el incremento
        const increment = prompt('Ingrese el incremento: ');

        // Convertir las entradas a números enteros
        const startNum = parseInt(start); // Convierte la entrada de inicio a número entero
        const endNum = parseInt(end); // Convierte la entrada de fin a número entero
        const incrementNum = parseInt(increment); // Convierte la entrada de incremento a número entero

        // Validar que las entradas sean números válidos y que el incremento no sea cero
        if (!isNaN(startNum) && !isNaN(endNum) && !isNaN(incrementNum) && incrementNum !== 0) {
            // Si todas las entradas son válidas, devolver un objeto con los valores convertidos
            return { start: startNum, end: endNum, increment: incrementNum };
        } else {
            // Si alguna entrada no es válida, mostrar un mensaje de error
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

// Función que construye una tabla de evaluación para los puntos dados y los términos del polinomio
function buildEvaluationTable(valueTable, terms) {
    // Inicializar la tabla de evaluación como un array vacío
    let evaluationTable = [];

    // Iterar sobre cada punto en la tabla de valores
    for (let point of valueTable) {
        // Construir una cadena de evaluación para el punto actual
        let evaluationString = terms.map(([coefficient, power]) =>
            `${coefficient} * (${point.x}^${power})`
        ).join(' + ');

        // Evaluar el polinomio en el valor x del punto actual
        let evaluation = evaluatePolynomial(terms, point.x);

        // Añadir el resultado a la tabla de evaluación
        evaluationTable.push({
            x: point.x,             // El valor x del punto
            evaluacion: evaluationString, // La cadena que muestra cómo se evalúa el polinomio en x
            y: evaluation           // El resultado de evaluar el polinomio en x
        });
    }

    // Devolver la tabla de evaluación completa
    return evaluationTable;
}

// Paso 6: Graficar el polinomio en modo texto
function plotPolynomial(valueTable) {
    // Definir el tamaño de la gráfica en filas y columnas
    const rows = 24;
    const cols = 80;

    // Crear una matriz para representar la gráfica, inicializada con espacios en blanco
    const graph = Array.from({ length: rows }, () => Array(cols).fill(' '));

    // Calcular el rango de los valores de X e Y en la tabla de valores
    let minX = Math.min(...valueTable.map(point => point.x));
    let maxX = Math.max(...valueTable.map(point => point.x));
    let minY = Math.min(...valueTable.map(point => point.y));
    let maxY = Math.max(...valueTable.map(point => point.y));

    // Calcular las escalas para ajustar los puntos a las dimensiones de la gráfica
    let xScale = (cols - 1) / (maxX - minX);
    let yScale = (rows - 1) / (maxY - minY);

    // Ajustar las posiciones de los ejes X y Y para que estén dentro del rango
    const yAxisPos = Math.max(0, Math.min(cols - 1, Math.round((0 - minX) * xScale)));
    const xAxisPos = Math.max(0, Math.min(rows - 1, rows - 1 - Math.round((0 - minY) * yScale)));

    // Graficar cada punto de la tabla de valores
    for (let point of valueTable) {
        // Convertir las coordenadas del punto a posiciones en la gráfica
        let xPos = Math.round((point.x - minX) * xScale);
        let yPos = rows - 1 - Math.round((point.y - minY) * yScale);

        // Verificar que el punto esté dentro de los límites de la gráfica
        if (yPos >= 0 && yPos < rows && xPos >= 0 && xPos < cols) {
            graph[yPos][xPos] = '*';  // Marcar el punto en la gráfica
        }
    }

    // Añadir el eje Y (vertical) a la gráfica
    for (let i = 0; i < rows; i++) {
        graph[i][yAxisPos] = '|';
    }

    // Añadir el eje X (horizontal) a la gráfica
    for (let j = 0; j < cols; j++) {
        graph[xAxisPos][j] = '-';
    }

    // Marcar la intersección de los ejes X e Y
    graph[xAxisPos][yAxisPos] = '+';

    // Añadir etiquetas en el eje Y
    for (let point of valueTable) {
        let yPos = rows - 1 - Math.round((point.y - minY) * yScale);
        let label = point.y.toFixed(1).padStart(5);  // Formatear el valor de Y con un ancho fijo

        for (let j = 0; j < label.length; j++) {
            if (yAxisPos - 6 + j >= 0 && yAxisPos - 6 + j < cols && yPos >= 0 && yPos < rows) {
                graph[yPos][yAxisPos - 6 + j] = label[j];  // Añadir la etiqueta en la posición correspondiente
            }
        }
    }

    // Añadir etiquetas en el eje X
    for (let point of valueTable) {
        let xPos = Math.round((point.x - minX) * xScale);
        let label = point.x.toFixed(1).padStart(5);  // Formatear el valor de X con un ancho fijo

        for (let i = 0; i < label.length; i++) {
            if (xAxisPos + 1 < rows && xPos + i < cols) {
                graph[xAxisPos + 1][xPos + i] = label[i];  // Añadir la etiqueta en la posición correspondiente
            }
        }
    }

    // Imprimir la gráfica
    for (let row of graph) {
        console.log(row.join(''));  // Unir los caracteres de cada fila y mostrar la fila en consola
    }
}

/*--------------------------------------------------------------------------------------*/

// Ejecución del programa
// Obtención del polinomio por parte del usuario
let polynomial = prompt("Ingrese el polinomio: ");
let terms = parsePolynomial(polynomial);

// Verifica si luego de hacer el parse al polinomio este queda vacío o no apto para posterior ejecución
if (terms.length === 0) {
    console.error("No se pudo parsear el polinomio. Terminando el programa.");
    return;
}

// Construcción de arreglo bidimensional {Coeficiente, Potencia}
let polynomialArray = buildArray(terms);
console.log("Arreglo bidimensional:");
printArray(polynomialArray);

// Lectura del rango y el incremento por parte del usuario
let { start, end, increment } = readRange();

// Construcción de la tabla de valores evaluando el polinomio en el rango especificado
let valueTable = buildValueTable(start, end, increment, terms);
console.log("Tabla de valores:");
console.table(valueTable);

// Construcción y despliegue de la tabla de tanteo
console.log("Tabla de tanteo:");
let evaluationTable = buildEvaluationTable(valueTable, terms);
console.table(evaluationTable);

// Despliegue gráfico del polinomio en modo texto
console.log("Gráfica del polinomio:");
plotPolynomial(valueTable);