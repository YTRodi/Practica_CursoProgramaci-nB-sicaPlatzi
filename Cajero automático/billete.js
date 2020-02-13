class Billete
{
    constructor(value,quanty)
    {
        this.value = value;
        this.quanty = quanty;

        //agrego img de billetes
        this.imagen = new Image();
        this.imagen.src = imgOfBilletes[this.value];
    }
    
    showBilletes()
    {
        document.body.appendChild(this.imagen);
    }

}