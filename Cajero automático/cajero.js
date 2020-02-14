///// Functions /////
function deliverMoney()
{
    
    var txtBox = document.getElementById("dinero");// t = caja de texto.
    money = parseInt(txtBox.value);//con esto el dinero ya esta representado en pantalla.

    for(var bi of boxContainer)//agarra to2 los elementos de la caja y va uno por uno colocandolos en el "bi";
    {
        if(money > 0)
        {
            div = Math.floor(money / bi.value);
            //console.log(div);
            //210 / 50 = 4
            //210 / 20 = 10
            //210 / 10 = 21
            
            if(div > bi.quanty)
            {
                papers = bi.quanty;
            }
            else
            {
                papers = div;
            }

            delivered.push(new Billete(bi.value,papers));

            money = money - (bi.value * papers);//el dinero que tengo lo toma pero le resta los billetes que ya entregué
            
        }
        
        
    }
    if(money > 0)
    {
        result.innerHTML = "Soy un malo y no puedo darte esa cantidad :(";//es la forma en la que podemos controlar el contenido de una etiqueta.
        //innetHTML = es el atributo del objeto result (es el elemento del documento llamado "resultado" del HTML);
    }
    else
    {
        //en cada ciclo muestro la cantidad de billetes correcta.
        for(var e of delivered) //e = instancia de la clase billete. //of =  voy a obtener una intancia de cada uno de los objetos.
        {
            result.innerHTML += "Dinero retirado: <br/>";
            if(e.quanty > 0)
            {
                
                result.innerHTML +=  e.quanty + " billetes de $ " + e.value + "<br/>";
                
                //console.log(e);
                e.showBilletes(); 
                
                //ULTIMO AGREGADO.
                //result.appendChild(e.imagen);
                totalDelivered = totalDelivered + (e.quanty * e.value);
                console.log(totalDelivered);
                available = available - totalDelivered;
                //console.log(available);
            
            }   
            e.quanty = 0;
            totalDelivered = 0;
            moneyAvailable.innerHTML = "El dinero disponible en el cajero es: " + available;
        }
        delivered = [];
        if(available == 0)
        {
            alert("Usted ha retirado lo último que poseía el cajero, dirijase a la siguiente caja por favor.");
        }
    }
} 

///// Billetes /////
var imgOfBilletes = [];
imgOfBilletes["50"] = "billete_cincuenta.png";
imgOfBilletes["20"] = "billete20.png";
imgOfBilletes["10"] = "billete10.png";

///// Variables /////
var boxContainer = [];
var delivered = [];
//boxContainer.push(new Billete(100,5));
boxContainer.push(new Billete(50,35)); //push le agrega nuevo objetos a nuestro array.
boxContainer.push(new Billete(20,8)); 
boxContainer.push(new Billete(10,10));
//boxContainer.push(new Billete(5,5)); 


var money = 0;
var div = 0;
var papers = 0;
var button = document.getElementById("extraer");//obtenemos un elemento de html por el ID
button.addEventListener("click",deliverMoney);//entregar dinero.

var result = document.getElementById("resultado");//resultado.

//Ejercicio 2.
var available = parseInt(prompt("Ingrese dinero disponible:"));//disponible
var totalDelivered = 0;
var initMoneyAvailable = document.getElementById("inicioCajeroDinero");
initMoneyAvailable.innerHTML += "El cajero arrancó con $ " + available;
var moneyAvailable = document.getElementById("dineroDisponibleParrafo");
