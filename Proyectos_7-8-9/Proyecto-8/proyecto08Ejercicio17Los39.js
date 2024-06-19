// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [28]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
/*El código permite calcular el Índice de Masa Corporal (IMC) de una persona utilizando Node.js.
 Solicita al usuario que ingrese su peso y altura desde la consola,
 calcula el IMC basado en estos datos y luego determina y muestra un 
 diagnóstico de salud según el valor del IMC calculado. Utiliza el módulo 
 readline de Node.js para manejar la entrada de datos desde el teclado 
 de manera sincrónica, validando las entradas para asegurar que sean números 
 válidos antes de realizar el cálculo del IMC y mostrar el diagnóstico correspondiente.*/


const readline = require('readline');

// Crear una interfaz de lectura y escritura
const rl = readline.createInterface({
  input: process.stdin, // Utilizar la entrada estándar (teclado)
  output: process.stdout // Utilizar la salida estándar (consola)
});

// Función para calcular el IMC y mostrar el diagnóstico
function calcularIMC(peso, altura) {
  // Calcular el IMC
  const imc = peso / (altura * altura);

  // Determinar el diagnóstico basado en el IMC
  let diagnostico = '';
  if (imc < 16) {
    diagnostico = 'Criterio de ingreso en hospital'; // IMC menor que 16
  } else if (imc >= 16 && imc < 17) {
    diagnostico = 'Infrapeso'; // IMC entre 16 (incluido) y 17 (excluido)
  } else if (imc >= 17 && imc < 18) {
    diagnostico = 'Bajo peso'; // IMC entre 17 (incluido) y 18 (excluido)
  } else if (imc >= 18 && imc < 25) {
    diagnostico = 'Peso normal (saludable)'; // IMC entre 18 (incluido) y 25 (excluido)
  } else if (imc >= 25 && imc < 30) {
    diagnostico = 'Sobrepeso (obesidad de grado I)'; // IMC entre 25 (incluido) y 30 (excluido)
  } else if (imc >= 30 && imc < 35) {
    diagnostico = 'Sobrepeso crónico (obesidad de grado II)'; // IMC entre 30 (incluido) y 35 (excluido)
  } else if (imc >= 35 && imc < 40) {
    diagnostico = 'Obesidad premórbida (obesidad de grado III)'; // IMC entre 35 (incluido) y 40 (excluido)
  } else {
    diagnostico = 'Obesidad mórbida (obesidad de grado IV)'; // IMC mayor o igual a 40
  }

  // Mostrar el resultado del cálculo del IMC y el diagnóstico
  console.log(`Tu IMC es: ${imc.toFixed(2)}`); // Mostrar el IMC redondeado a 2 decimales
  console.log(`Tienes: ${diagnostico}`); // Mostrar el diagnóstico según el IMC calculado

  // Cerrar la interfaz después de mostrar el resultado
  rl.close();
}

// Preguntar al usuario por el peso
rl.question('Introduce tu peso en kg: ', (peso) => {
  // Convertir el peso a número (parseFloat para permitir decimales)
  peso = parseFloat(peso);

  // Validar que el peso sea un número válido
  if (isNaN(peso)) {
    console.error('El peso ingresado no es válido.');
    rl.close(); // Cerrar la interfaz si el peso no es válido
    return;
  }

  // Preguntar al usuario por la altura
  rl.question('Introduce tu altura en metros: ', (altura) => {
    // Convertir la altura a número (parseFloat para permitir decimales)
    altura = parseFloat(altura);

    // Validar que la altura sea un número válido
    if (isNaN(altura)) {
      console.error('La altura ingresada no es válida.');
      rl.close(); // Cerrar la interfaz si la altura no es válida
      return;
    }

    // Calcular el IMC y mostrar el diagnóstico
    calcularIMC(peso, altura);
  });
});
