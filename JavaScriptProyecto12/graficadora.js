

let width = 80;
let height = 24;
// let padding = 50;

function Range(min, max, inc){
    let result = [];
    for (let i = min; i <= max; i = i+inc){
        result.push(i);
    }
    return result;
}
    


function Plot(xMin, xMax, inc, fx){
    let Xs = Range(xMin, xMax, inc );
    let xRange = Math.abs(xMin - xMax) + 1;
    let xScale = width/xRange;
    let Ys = Xs.map(fx);
    let yMin = Math.min(...Ys);
    let yMax = Math.max(...Ys);
    let yRange = Math.abs(yMin - yMax) + 1; 
    let yScale = height/yRange;
    let xAxis = -yMin * yScale;
    let yAxis = -xMin * xScale;
    // console.log("xAxis", xAxis);

    let drawXAxis = ( yMin <= 0 <= yMax ) ? height - xAxis : height;
    let drawYAxis = ( xMin <= 0 <= xMax ) ? yAxis : 0;
    let graphString = axisString(drawYAxis, drawXAxis);
    console.log("1", graphString.length)

    // console.log("yMin: ", yMin)
    // console.log("yScale: ", yScale)
    // console.log(graphString);
    // Dibujar numeros en el eje Y
    for(let i = 0; i < (Ys.length - 1); i++){
        let valueY = Ys[i];
        let StrvalueY = valueY.toString(); 
        let posY = Math.round(Ys[i] * yScale + xAxis);
        let index = ((height - posY) * 81 + drawYAxis);
        graphString = replaceSubStr(graphString, index, StrvalueY.length, StrvalueY);
    }
    
    console.log("2", graphString.length)
    for (let i = 0; i < Xs.length; i++){
        let posX = Math.round(Xs[i] * xScale + yAxis);
        let posY = Math.round(height - (Ys[i] * yScale + xAxis));
        strIndex = posX + posY * 81;
        // console.log("typeof(Xs)", typeof(Xs))
        // console.log("Xs: ", Xs);
        // console.log("Ys: ", Ys);
        // console.log("posX: ", posX);
        // console.log("posY: ", posY);
        // console.log("INDEX: ", strIndex);
        graphString = replaceChar(graphString, strIndex, "x");
    }
    
    console.log(graphString);
}


// Implementar funcion drawYAxis
function stringOnlyChar(numSpaces, char){
    if(numSpaces > 0){
        return char + stringOnlyChar(numSpaces-1, char);
    }
    else{
        return "";
    }
}

//drawXAxis : function that draws the axis on the perspective on the needed plot.
//Parameters:   yDrawOrigin (integer) - the position of the y axis on the plot.
//              xDrawOrigin (integer) - the position of the x axis on the plot.
//Returns:      stringAxis (string) - the string representing the axis.
function axisString(yDrawOrigin, xDrawOrigin){
    let stringAxis = "";
    for(let row = 0; row < height; row++){
        if(row !== xDrawOrigin) {
            console.log(yDrawOrigin);
            stringAxis += stringOnlyChar(Math.round(yDrawOrigin-1)," ") + "|" + stringOnlyChar(width-yDrawOrigin," ")+"\n";
        }
        else{
            stringAxis += stringOnlyChar(width,"-")+"\n";
        } 
    }
    return stringAxis;
}

//Toma una string y reemplaza una de sus posiciones destro de la gráfica (24x80)

function replaceChar(str, index, char){
    return str.substring(0, index) + char + str.substring(index+1);
}

function replaceSubStr(str, index, length, subStr){
            // console.log("typeof(Xs)", typeof(Xs))
        // console.log("Xs: ", Xs);
        // console.log("Ys: ", Ys);
        // console.log("posX: ", posX);
        // console.log("posY: ", posY);
        console.log((str.substring(0, index)).length);

        console.log(subStr.length);
        console.log((str.substring(index+length)).length);

        console.log((str.substring(0, index) + subStr + str.substring(index+length)).length);

    return str.substring(0, index) + subStr + str.substring(index+length);
}

/// 0 1 2 3 4 5          0 1 2 3 4 6 7 8 


// let graph = axisString(10, 10);

// console.log(graph);
const func = function func(x){
    return x**3;
}


function drawNumbersY(str, yScale, yDrawOrigin, Ys, graphString){
    
    for(let i = 0; i < Ys.length; i++){
        let valueY = Ys[i];
        let StrvalueY = valueY.toString(); 
        let posY =  Math.round(height - (valueY * yScale + yDrawOrigin));
        let index = posY * 81 + yDrawOrigin;
        graphString = replaceSubStr(graphString, index, StrvalueY.length, StrvalueY);

        
    }
    return graphString; 

}

Plot(-10, 10, 1, func);