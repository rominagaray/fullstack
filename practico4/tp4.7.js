function cantidad (){
    var texto =$('#texto');

   // alert(texto.innerHTML);
    var cant = 0;

    for (var i = 0; i<texto.html().length; i++){ 
        cant = cant+1; 
    }
    alert("el texto tiene "+cant);
}