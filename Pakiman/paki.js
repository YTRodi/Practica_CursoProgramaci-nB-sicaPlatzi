//Array asociativo (tiene valores de string, NO numéricos).
//img es el diccionario de las URL de mis imagenes.
var img = [];
img["Cauchin"] = "vaca.png";
img["Pokacho"] = "pollo.png";
img["Tocinauro"] = "cerdo.png";

/*cauchin.show();
pokacho.show();
tocinauro.show();*/

var collection = [];
collection.push(new Pakiman("Cauchin",100,30)); //cuando hacemos un push, estamos creando un índice.
collection.push(new Pakiman("Pokacho",80,50));
collection.push(new Pakiman("Tocinauro",120,40));

for(var control of collection)//solo va a operar por la cantidad de objetos que tengamos dentro del array.
{
    //"in" = trae el indice del array y hace faltar poner collection sub [p].
    //"of" = nos trae directamente la instancia.
    //console.log(p);
    //console.log(collection[p]);
    console.log(control);
    control.show();
}