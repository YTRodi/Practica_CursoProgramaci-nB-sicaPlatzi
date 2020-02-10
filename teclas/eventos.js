//en document esta la forma de detectar que las flechas/cualquier tecla fue presionada

var teclas = {
    //tipo de datos estilo JSON - Javascript Object Notation.
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}; 

//AHORA CON EL MOUSE. //mouseup y mousedown

document.addEventListener("keyup",writeKeyboard);//"keyup" / "keydown"

var cuadrito = document.getElementById("area_Dibujo");//nos trae un elemento de html por su ID.
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

writeLine("red",x-1,y-1,x+1,y+1, papel);//dibujo un punto


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

function writeKeyboard(evento)
{
    var colour = "black";
    var move = 10;//un movimiento de 10 pixeles.
    /* --LOGICA--
    cuando vamos para arriba restamos "Y".
    cuando vamos para abajo sumamos "Y".
    -------------------------------------
    cuando vamos para derecha sumamos "X".
    cuando vamos para izquierda restamos "X".
    */ 

    switch(evento.keyCode)
    {
        case teclas.UP:
            console.log("Arriba");
            writeLine(colour,x,y,x,y-move,papel);//resto
            y = y - move;//guardo el ultimo movimiento
            break;

        case teclas.DOWN:
            console.log("Abajo");
            writeLine(colour,x,y,x,y+move,papel);
            y = y + move;
            break;
        
        case teclas.LEFT:
            console.log("Izquierda");
            writeLine(colour,x,y,x - move,y,papel);
            x = x - move;
            break;
        
        case teclas.RIGHT:
            console.log("Derecha");
            writeLine(colour,x,y,x + move,y,papel);
            x = x + move;
            break;
        
        default:
            alert("Solamente se aceptan las teclas:arriba,abajo,izquierda o derecha");
            break;
    }
}