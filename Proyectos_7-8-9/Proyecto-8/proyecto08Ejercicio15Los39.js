/* -Fecha de publicación: Junio 18
Hora: 10:50pm
Versión de su código: 1
Autores. Ingenieros del bootcamp
Nombre del lenguaje utilizado: JavaScript
Versión del lenguaje utilizado: ECMAScript 6
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion: Saca el valor apagar a partir del descuento
*/

const prompt = require ('prompt-sync')();

console.log("Hola querido Usuario. \nRecuerda que por la compra de tres camisas o más obtienes un descuento del 20% sobre el total de su compra y si son menos de tres un 10% . \n");
//Recibes los parametros del usuario a traves del prompt y lo pasas a entero
let NumeroDeCamisas = parseInt (prompt (`¿Cuantas camisas deseas comprar hoy? : `));

let Precio = parseInt(prompt( "¿Cuál es el valor total de su compra?: "));

//funcion tipo flecha en mas de una linea de codigo por eso se hace uso de {}, para la de una linea no es requeridad 
valorAPagar = (NumeroDeCamisas, Precio) => {
    if( NumeroDeCamisas >= 3 ){

        //El valor negativo es el descuento que se hace al Precio de la compra, para asi dar un valor neto.
        let ValorAPagar =(Precio - ((Precio * 20) / 100));
        console.log(`El valor apagar es: ${ValorAPagar} \n\n Gracias por tu compra.`);
    }
    else if(NumeroDeCamisas < 2 && NumeroDeCamisas >0){
        let ValorAPagar = (Precio - ((Precio * 10) / 100));
        console.log(`El valor apagar es: ${ValorAPagar} \n\nGracias por tu compra, vuelva pronto.`)
    }
    else{
        console.log("Para valores negativos ingresados en el numero de compra, no se permiten descuentos.")
    }
}

valorAPagar(NumeroDeCamisas, Precio);