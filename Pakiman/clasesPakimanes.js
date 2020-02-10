class Pakiman//(name,health,attack)
{
    //clase = definicion de un objeto;
    constructor(name,health,attack)
    {
        //this es un indicador de la instancia de la class.
        //this.type = "Tierra";
        this.imagen = new Image();//representacion visual de nuestro Pakiman
        this.name = name;
        this.health = health;
        this.attack = attack;

        this.imagen.src = img[this.name];
    }

    speak()
    {
        //dispara el nombre de la instancia en pakiman.
        alert(this.name);
    }

    show()
    {
        //document.write(this.imagen); - NO ES FORMA DE MOSTRARLO.
        //A la etiqueta body le estoy agregando cosas.
        document.body.appendChild(this.imagen);//Como agregarle un hijo.
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong> <br />");
        document.write("Health: " + this.health + "<br />");
        document.write("Attack: " + this.attack + "<hr />");
        document.write("</p>");
    }
}