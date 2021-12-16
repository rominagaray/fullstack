/*alert("hola esto es javascript");*/
document.write("texto");
var edad="tengo 14 años";
edad="ahora tengo 15 años";
alert(edad);
alert("hola mundo");

//4
var x =14;
var y=3;
document.write (x+y);

//5
var x=parseInt(prompt("dime un numero"));
var y=parseInt(1/*prompt("dime otro")*/);
var suma=x+y;
var resultado=("la suma de los dos numeros es" + suma);
document.write(resultado);    

// 6
var aleatorio=Math.round(Math.random()*3);
var resultado=("El numero aleatorio es"+ aleatorio);
document.write (resultado);  

//7
var edad=parseInt(prompt("dime tu edad"));
if (edad>18) (document.write("eres mayor de edad"));
else (document.write("eres menor de edad"));

//8
if (confirm("¿quieres ir a  la pagina de tecnologia?"))
{
    window.open("https://www.areatecnologia.com");
}
else
{
    alert("esta bien nos quedamos aqui");
}

//9
var i; i=1; while (i<=5);
{
    document.write("esto se repite");
    i=i+1;
}

//10
var z=0;
var aleatorio=math.round(math.random(100)*1);
var i; i=1; while (i<=4);
{
    var numeroElegido= parseInt(prompt("¿que numero es?"));
    if (aleatorio == numeroElegido)
    {
        document.write("¡¡¡eres un fenomeno acertaste!!");
    }
    else
    {
        document.write("has fallado" + "<br>")
    };
    if (aleatorio==numeroElegido)
    {
        i=5
    };
    if (aleatorio !=numeroElegido)
    {
        z=z+1
    };
    if (z==4)
    {
        document.write ("¡¡¡volviste a fallar y ya no tienes mas intentos!!")
    };
    i=i+1;
}

function sumar (x,y)
{
    var total=x+y;
}
sumar (1,2);
var sumaNueva=total +5;
alert(sumaNueva);