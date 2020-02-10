////// Variables //////

var d = document.getElementById("dibujito");//aca adentro tengo toda la etiqueta de canvas
var lienzo = d.getContext("2d");//objeto del canvas
var lienzito = d.getContext("2d");


var txtBoxLine = document.getElementById("txtBox_Lines");//Son como se llaman en HTML
var txtBoxCuanto = document.getElementById("txtBox_Cuanto");
var buttonAtomos = document.getElementById("button_Atomos");

buttonAtomos.addEventListener("click",writeXClick);
//1)A que evento reaccionar - 2)funcion que se dispara cuando haga click

var ancho = d.width;



////// FUNCIONES //////

function writeLine(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzito.beginPath();
    lienzito.strokeStyle = color;
    lienzito.moveTo(xinicial,yinicial);
    lienzito.lineTo(xfinal,yfinal);
    lienzito.stroke();
    lienzito.closePath();
}

function writeXClick()
{
    var cuanto = parseInt(txtBoxCuanto.value);
    var lineas = parseInt(txtBoxLine.value);//30;
    var espacio = ancho/lineas;
    var i = 0;
    var xFinal, yInit;

    //writeLine("blue",0,0,150,150);//arranca arriba
    //writeLine("blue",0,10,150,150);//NOTA: EL EJE XINICIAL DEBE INCREMENTAR EN 1
    //writeLine("blue",0,300,150,150);//termina abajo

    switch(cuanto)
    {
        case 1:
            for(i=0;i<lineas;i++)
            {
                yInit = espacio * i;
                xFinal = espacio * (i+1);

                writeLine("yellow",0,yInit,xFinal,300);
                console.log("lineas: " + lineas);
            }
            break;

        case 2:
            for(i=0;i<lineas;i++)
            {
                yInit = espacio * i;
                xFinal = espacio * (i+1);

                writeLine("black",0,yInit,xFinal,300);
                writeLine("black",300,yInit,xFinal,0);
                //writeLine("blue",300,yInit+1,xFinal,0);
                console.log("lineas: " + lineas);
            }
            break;

        case 3:
            for(i=0;i<lineas;i++)
            {
                yInit = 10 * i;
                xFinal = 10 * (i+1);

                writeLine("black",0,yInit,xFinal,300);
                writeLine("black",300,yInit,xFinal,0);
                console.log("lineas: " + lineas);
            }
            break;
    }

    /*for(i=0;i<lineas;i++)
    {
        yInit = espacio * i;
        xFinal = espacio * (i+1);

        writeLine("yellow",0,yInit,xFinal,300);
        console.log("lineas: " + lineas);
    }*/


        

}
