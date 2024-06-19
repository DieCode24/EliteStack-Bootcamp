/* 
- Fecha de publicación: [18/06/2024]
- Número de la tarea: [25]
- Hora: [10:00]PM
- Versión de la tarea: [01]
- Autores: [Todos los ingenieros del grupo (39)]
- Nombre del lenguaje utilizado: [Javascript]
- Versión del lenguaje utilizado: [v12.22.9]
- Presentado a: [Doctor Ricardo Moreno Laverde]

------- | Universidad Tecnológica de Pereira |-------------
--- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción:
El prograam imprime un rombo de "Z"
          Z
         ZZZ
        ZZZZZ 
       ZZZZZZZ
        ZZZZZ
         ZZZ
          Z
*/


//la funcion rombo se encarga de diregir la impresion el rombo
function MainDisplayRombo(space,letter,row){
    let spaceAux = space;//variable que contiene el array espacios que se imprimiran
    let letterAux = letter;//variable que contiene el array de letras que se imprimiran
    for(let i = 0; i < row/2; i++){
        console.log(`${spaceAux}${letterAux}`);
        //.silice es un metodo para crear una copia superficial de una array
        spaceAux = spaceAux.slice(0,spaceAux.length-1);
        letterAux = letterAux + letter + letter;
    }
  letterAux = letterAux.slice(0,letterAux.length-2);
  spaceAux = spaceAux + " ";
    for(let i = 0; i < row/2; i++){
      spaceAux = spaceAux + " ";
      letterAux = letterAux.slice(0,letterAux.length-2);
      console.log(`${spaceAux}${letterAux}`);
    }
}
// se llama a la funcion con el numero inicial de espacios"          " y letras, y el numero de columnnas
console.log(MainDisplayRombo("        ","Z",7));

