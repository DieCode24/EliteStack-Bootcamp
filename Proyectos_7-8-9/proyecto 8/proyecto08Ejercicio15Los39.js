// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [15]
// - Hora: [10:00]AM
// - Versión de la tarea: [02]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción: Saca el valor apagar a partir del descuento

// Se inicializa el modulo para la lectura de datos
const prompt = require ('prompt-sync')();

console.log("Hola querido Usuario. \nRecuerda que por la compra de tres camisas o más obtienes un descuento del 20% sobre el total de su compra y si son menos de tres un 10% . \n");

// Se Reciben los parametros del usuario a traves del prompt y lo pasas a entero
let NumeroDeCamisas = parseInt (prompt (`¿Cuantas camisas deseas comprar hoy? : `));
let Precio = parseInt(prompt( "¿Cuál es el valor total de su compra?: "));

//funcion tipo flecha en mas de una linea de codigo por eso se hace uso de {}, para la de una linea no es requeridad 
valorAPagar = (NumeroDeCamisas, Precio) => {
    // Se declara un if para el caso de que sean 3 o mas camisas
    if( NumeroDeCamisas >= 3 ){

        //El valor negativo es el descuento que se hace al Precio de la compra, para asi dar un valor neto.
        let ValorAPagar =(Precio - ((Precio * 20) / 100)); // asigna a la variable declarada la cantidad del nuevo precio con descuento.
        console.log(`El valor apagar es: ${ValorAPagar} \n\n Gracias por tu compra.`);
    }
    // se declara otra condicional para asegurar que el numero ingresado sea valido
    else if(NumeroDeCamisas <= 2 && NumeroDeCamisas >0){
        let ValorAPagar = (Precio - ((Precio * 10) / 100)); // asigna a la variable declarada la cantidad del nuevo precio con descuento.
        console.log(`El valor apagar es: ${ValorAPagar} \n\nGracias por tu compra, vuelva pronto.`) //imprime el valor a pagar en el texto mostrado en consola por medio de una interpolación ${}. 
    }
    // se declara un else para el mensaje de error en caso de numeros negativos
    else{
        console.log("Para valores negativos ingresados en el numero de compra, no se permiten descuentos.") // imprime por consola el texto de la excepción
    }
}

valorAPagar(NumeroDeCamisas, Precio); // llamada que ejecuta la función recibiendo dos parametros