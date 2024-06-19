// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [30]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

/*20-Una compañía dedicada al alquiler de automóviles cobra un monto fijo de $400000 para los primeros 300 km de recorrido. Para más de
300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un
monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas,
IVA. Diseñe un algoritmo que determine el monto a pagar por el alquiler de un vehículo y el monto incluido del impuesto.*/

const prompt = require('prompt-sync')();

function calcularAlquiler(kilometros) {
  const tarifaBase = 400000;
  const tarifaMedia = 15000;
  const tarifaLarga = 10000;
  let costoAlquiler = tarifaBase;

  if (kilometros > 300 && kilometros <= 1000) {
    costoAlquiler += (kilometros - 300) * tarifaMedia;
  } else if (kilometros > 1000) {
    costoAlquiler += (700 * tarifaMedia) + ((kilometros - 1000) * tarifaLarga);
  }

  // Calculamos el IVA incluido en el precio.
  const IVA = costoAlquiler - (costoAlquiler / 1.2);
  
  return { costoAlquiler, IVA };
}

// Solicitamos al usuario que ingrese los kilómetros recorridos.
const kilometrosRecorridos = parseInt(prompt('Ingrese los kilómetros recorridos: '), 10);

// Calculamos y mostramos el costo y el IVA.
const { costoAlquiler, IVA } = calcularAlquiler(kilometrosRecorridos);
console.log(`El monto a pagar por el alquiler es: $${costoAlquiler}`);
console.log(`El monto incluido del impuesto (IVA) es: $${IVA.toFixed(2)}`);
