/*
 - Fecha de publicación: [18/06/2024]
 - Número de la tarea: [28]
 - Hora: [10:00]PM
 - Versión de la tarea: [01]
/- Autores: [Todos los ingenieros del grupo (39)]
 - Nombre del lenguaje utilizado: [Javascript]
 - Versión del lenguaje utilizado: [v12.22.9]
 - Presentado a: [Doctor Ricardo Moreno Laverde]

 ------- | Universidad Tecnológica de Pereira |-------------
 --- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción: hace los calculos para que una empresa tome una decicion frente a el pago de unas refacciones
- Salvedad: solo funciona con numeros positivos para funcionar correctamente
*/

const PromptSync = require('prompt-sync')();// se importa la libreria prompt-sync en una constante PromptSync

function CalculatePieces(value, amount){
    let amountInvested=0, valueBankLoan=0, valueManufacturerCredit=0, interestCollectedByManufacturer=0, valueTotal=0;
    valueTotal=value*amount;//monto total
    if(valueTotal>500000){//si el total es mayor a $500000
        amountInvested=valueTotal*0.55;//la empresa invierte un 55% del total
        valueBankLoan=valueTotal*0.3;//prestamo al banco del 30% del monto total
        valueManufacturerCredit=valueTotal*0.15;//credito del fabricante de 15% del total
    } else {
        amountInvested=valueTotal*0.7;//la empresa invierte un 70% del total
        valueManufacturerCredit=valueTotal*0.3;//credito del fabricante de 30% del total
    }
    interestCollectedByManufacturer=valueManufacturerCredit*0.2;//el interes del fabricante es del 20%
    console.log(`La empresa invierte ${amountInvested}, el banco prestó ${valueBankLoan}, el credito que le pediran 
al fabricante sera de ${valueManufacturerCredit} y pagaran un interes al fabricante de ${interestCollectedByManufacturer}`);
        //imprime los resultados
}

function ask(){
    let amount = PromptSync('Digite el numero de refacciones a comprar: ');//le pide al usuario el numero de refacciones
    let value = PromptSync('Digite el valor de cada refaccion: ');//le pide al usuario el numero de refacciones
    CalculatePieces(value, amount);//llama al metodo para dar los resultados
}
ask();