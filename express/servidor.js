//ESTAMOS DEL LADO DEL SERVIDOR, NO NECESITAMOS HTML.
var express = require("express"); 
//requiere = existe ne el backend cuando usamos node.js - busca las librerias instalados en la pc
//las trae y las guarda en la variable express.

var app = express();
app.get("/",init);//colocamos la url de la dirección que vamos a abrir
app.get("/cursos", cursos);


//request = petición, es lo que el navegador le pide al servidor.
//responsive = resultado, es lo que el servidor le quiere mandar al navegador.
function init(request,responsive)
{
    responsive.send("Hola mundo en mi primer <strong>servidor</strong> web");
}

function cursos(request,responsive)
{
    responsive.send("Estos son los <strong>cursos</strong>")
}

//para poner a correr esto, se usa .listen(3000); en el puerto 3000 generalmente.
app.listen(8989);


//FUENTE.
/**https://www.npmjs.com/package/express */