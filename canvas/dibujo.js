


////// Variables //////

var d = document.getElementById("dibujito");//aca adentro tengo toda la etiqueta de canvas
var lienzo = d.getContext("2d");//objeto del canvas
var lienzito = d.getContext("2d");


var txtBoxLine = document.getElementById("txtBox_Lines");//Son como se llaman en HTML
var buttonAtomos = document.getElementById("button_Atomos");
buttonAtomos.addEventListener("click",writeXClick);//1)A que evento reaccionar - 2)funcion que se dispara cuando haga click

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
    //console.log(txtBoxLine);
    //alert("No me toques ahí. " + txtBoxLine.value);
    //var test = parseInt(txtBoxLine.value);

    //Para que se dibujen las lineas cuando hay un evento.
    var lineas = txtBoxLine.value;//30;
    var espacio = ancho/lineas;
    var i = 0;
    var xFinal, yInit;

    //while(i<lineas)
    for(i=0;i<lineas;i++)
    {
        yInit = espacio * i;
        xFinal = espacio * (i+1);

        writeLine("blue",0,yInit,xFinal,300);
        console.log("lineas: " + lineas);

        //i ++;
    }

    writeLine("pink",1,1,1,ancho-1);
    writeLine("pink",1,ancho-1,ancho-1,ancho-1);

    for(i=0;i<lineas;i++)
    {
        yInit = espacio * i;
        xFinal = espacio * (i+1);

        writeLine("blue",300,yInit,xFinal,1);
        console.log("lineas: " + lineas);

        //i ++;
    }
}


//writeLine("pink",100,300,220,10);
//writeLine("yellow",300,100,10,220);

//con esto ya esta listo para dibujar.

/*lienzo.beginPath();//arrancar un trazo.
lienzo.strokeStyle = "blue";
lienzo.moveTo(100,100);//para mover el lapiz donde va a rrancar la linea.
lienzo.lineTo(200,200);//linea hasta el punto 200, 200.
lienzo.stroke();
lienzo.closePath();*/





