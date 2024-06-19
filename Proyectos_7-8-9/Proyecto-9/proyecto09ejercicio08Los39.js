// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [1]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa muestra los términos de la seria de Catalan hasta el término deseado

const prompt = require('prompt-sync')(); // Importa prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Catalan

function factorial(number){ //Función factorial
    //Number es el numero que al que se le va a hallar el factorial.
    if (number < 0){
        return "No se puede";
    }else if (number > 0 && number <= 1){
        return 1;
    }else{
        return number*factorial(number - 1);//Llamada recursiva
    }
};//Fin función

// Función recursiva para calcular el termino de la serie de Catalan
const terminoCatalan = (termino) => {
  //Usamos termino como el numero del termino que se quiere hallar en la serie de Catalan
  if (termino === 0 || termino === 1 ) return 1; // Primer y Segundo término de la serie de Catalan

  // Calcula el término actual con la formula (2n)! / (n!(n+1)!),
  return factorial(2*termino) / (factorial(termino) * factorial(termino + 1));
};//Fin función

//Funcion principal que escribe en consola el numero de terminos que se hallaran en la serie de Catalan
function serieCatalan (nTerm, n) {
  //Usamos nTerm como el numero de terminos que se quiere hallar y n como contador
  if (n < nTerm - 1) {
    process.stdout.write(terminoCatalan(n) + ", ");//Mostramos el termino de Catalan sin hacer salto de linea usando la función termiCatalan
    serieCatalan(nTerm, (n + 1));//Llamada recursiva a la función principal
  } else {
    process.stdout.write(terminoCatalan(n) + ".");//Mostramos el ultimo termino de la serie y un punto al final/ Salida de la función principal
  }
};//Fin función

serieCatalan(nTermino, 0);//Llamada a la función principal.