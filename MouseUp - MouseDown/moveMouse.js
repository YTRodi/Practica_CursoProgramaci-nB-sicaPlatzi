var teclas = {
    //tipo de datos estilo JSON - Javascript Object Notation.
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}; 

var mouse = {
    C_IZQ:0,
    C_CEN:1,
    C_DER:2
};

//AHORA CON EL MOUSE. //mouseup y mousedown

document.addEventListener("mouseup",writeXMouse);

var cuadrito = document.getElementById("area_Dibujo");//nos trae un elemento de html por su ID.
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

writeLine("red",x-1,y-1,x+1,y+1, papel);//dibujo un punto



////// FUNCIONES //////
function writeLine(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;//3 pixeles
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function writeXMouse(evento)
{
    /* la propiedad .offsetX = devuelve la coordenada (horizontal) X del puntero del mouse.
     * la propiedad .offsetY = devuelve la coordenada (vertical) Y del puntero del mouse.
     */
    console.log(evento);
    writeLine("red",x,y,evento.offsetX,evento.offsetY,papel);
	x = evento.layerX;
    y = evento.layerY;
    



    
    ////////////////////////////////////////////////////////////////////////

    /*var colour = "black";
    var move = 5;
    var coordenada_X = evento.offsetX;
    var coordenada_Y = evento.offsetY;

    //alert(evento.target); //Una referencia al objeto en el que ocurrió originalmente el evento.

    if(evento.target == cuadrito)
    {
        switch(evento.button)
        {
            case mouse.C_IZQ:
                 if(evento.type == "mouseup")
                {
                    console.log("ubicado en x: "+ coordenada_X + " en y: " + coordenada_Y);
                    writeLine(colour,x,y,coordenada_X,coordenada_Y,papel);
                    x = coordenada_X++;
                    y = coordenada_Y++;
                }
                else if(evento.type == "mousedown")
                {
                    console.log("Vuelve a oprimir para dibujar");
                }
                
                break;
        }
    }*/

}