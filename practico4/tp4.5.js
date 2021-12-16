function cantidad(){
var texto = "con los dedos de la manos,con los dedos de los pies,con la polla y los cojones suman 23.";
var cant = 0; 


for (var i = 0; i<texto.length; i++){ 

    if(texto[i]=='a'){ 
        cant = cant+1; 
    }
}

alert("El texto tiene " + cant+" de letras A");
}