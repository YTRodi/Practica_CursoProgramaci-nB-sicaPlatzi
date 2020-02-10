var numbers = 100;
var divisible = false;//flag.
for(var i=1;i<=numbers;i++)
{
    divisible = false;
    if(i % 3 == 0)
    {
        document.write("Fizz ");
        divisible = true;
    }
    if(i % 5 == 0)
    {
        document.write("Buzz ");
        divisible = true;
    }
    //if(!divisible)
    //if(i%3 != 0 && i%5 != 0)
    if(!esDivisible(i,3) && !esDivisible(i,5))
    {
        document.write(i);
    }

    document.write("<br/>");
}

function esDivisible(num,divisor)
{
    var todoOk = false;
    if(num % divisor == 0)
    {
        todoOk = true;
    }
    else
    {
        todoOk = false;
    }
    return todoOk;
}