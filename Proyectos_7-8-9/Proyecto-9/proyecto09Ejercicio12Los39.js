/*
// - Fecha de publicación: [19/06/2024]
// - Número de la tarea: [12]
// - Hora: [11:20]AM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [v12.22.9]
// - Presentado a: [Doctor Ricardo Moreno Laverde]
// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |--
// - Descripción:
// Este program lee desde el teclado un numero entero y lo
    imprima al revés.
    Salvedades: 
    para strings o numeros no enteros, no se garantizan resultados
    */
    const prompt = require("prompt-sync")(); //se importa la libreria prompt-sync


    // Función recursiva para invertir el numero 
    function invertirEntero(numero, contador, numeroInvertido) {
        if (contador >= 0) {
            numeroInvertido += numero[contador];                           // Añade el carácter actual a la cadena invertida
            return invertirEntero(numero, contador - 1, numeroInvertido);      // Llama recursivamente enviando contador - 1
        } else {
            return numeroInvertido;            // retorna la cadena invertida
           
        }
              
    }
    
    //funcion para verificar el numero, parametro: "numero"
    function  verificarEntero (numero) 
    {
     if(numero % 1 === 0)
        {return 1} 
      else
      {return 0}
}
      
    
    
    
    
    
    console.log("Este programa lee desde el teclado un número");
    console.log("entero y lo imprime al revés.");
    
    // Solicita al usuario que ingrese un número
    let numero = prompt("Entre el número: ");                  //numero del usuario 
      let numeroInvertido = "" ;                            //string vacio
    let contador = numero.length - 1;                          //contador con tamaño del numero - 1, - 1 para que en la funcion recursiva llegue hasta la posicion 0
    if (verificarEntero(numero) === 1) {
        
        console.log(invertirEntero(numero, contador, numeroInvertido));
    } 
    else 
    {
        console.log("El número ingresado no es un numero entero.");
    }