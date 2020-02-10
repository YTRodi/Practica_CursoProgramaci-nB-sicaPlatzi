function numAleatorio(min,max)
{
    //floor redondea numeros para abajo.
    //ceil redondea numeros para arriba (SIEMPRE).
    //Math.random() devuelve un número aleatorio de 0 a 0.999…
    return Math.floor(Math.random() * (max-min+1)  + min);
}

////// Code //////
//conecto el HTML con javascript.
var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOk: false
};

var vaca = {
    //ATRIBUTOS!!!!!
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    initPointX: 200,
    initPointY: 250
}

var cantidad = numAleatorio(5,15);

//fondo
fondo.imagen = new Image();//width and height
fondo.imagen.src = fondo.url;//carga la url del archivo .png
fondo.imagen.addEventListener("load",loadFondo)//el evento load no sirve para to2 las img

//animales//
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",loadVacas);

//DESAFIO POLLO MOVIENDOSE.
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",loadCerdos);

//fondo//- POCO PRACTICAS.
//CARGAR FONDO 
function loadFondo()
{
    fondo.cargaOk = true;
    draw();
}

function loadVacas()
{
    vaca.cargaOk = true;
    draw();
}

function loadCerdos()
{
    cerdo.cargaOk = true;
    draw();
}

function draw()
{
    if(fondo.cargaOk)
    {
        paper.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOk)
    {
        console.log("La cantidad de vacas es: " + cantidad);
        for(var i=0;i<cantidad;i++)
        {
            var x = numAleatorio(0,7);//500-80x80 que tiene la img
            var y = numAleatorio(0,7);
            var x = x * 60;
            var y = y * 60;
            paper.drawImage(vaca.imagen,x,y);
        }
    }
    if(cerdo.cargaOk)
    {
        paper.drawImage(cerdo.imagen,cerdo.initPointX,cerdo.initPointY);
        cerdo.initPointX = 1000;
        cerdo.initPointY = 1000;
    }
}


//MOVER CERDO CON TECLADO.
var teclas = {
    //tipo de datos estilo JSON - Javascript Object Notation.
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}; 

var x = cerdo.initPointX;
var y = cerdo.initPointY;

document.addEventListener("keyup",moveCerdos);

function moveCerdos(evento)
{
    var move = 10;
    
    
    switch(evento.keyCode)
    {
        case teclas.UP:
            console.log("Up");
            loadFondo();
            paper.drawImage(cerdo.imagen,x,y - move);
            y = y - move;
            break;
        
        case teclas.DOWN:
            console.log("Down");
            loadFondo();
            paper.drawImage(cerdo.imagen,x,y+move);
            y = y + move;
            break;
        
        case teclas.LEFT:
            console.log("Left");
            loadFondo();
            paper.drawImage(cerdo.imagen,x-move,y);
            x = x - move;
            break;
        
        case teclas.RIGHT:
            console.log("Right");
            loadFondo();
            paper.drawImage(cerdo.imagen,x+move,y);
            x = x + move;
            break;
        
        default:
            alert("Teclas permitidas: up, down, left and right.");
    }

}
























/*var z;

for(var i=0;i<5;i++)
{
    z = numAleatorio(10,40);
    document.write(" " + z + ",");
}*/