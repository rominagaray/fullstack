$( "#pais" ).change (function(){                                              
   $("#provincia").empty();
    

     if ($(this).val()=="arg"){
           $ (`#provincia`). append($(`<option>`,{
          value: "Bsas",
          text: `Buenos aires`
          }))
          $ (`#provincia`). append($(`<option>`,{
          value: "Lp",
          text: `La pampa`
          }))
          $ (`#provincia`). append($(`<option>`,{
          value: "Cba",
          text: `Cordoba`
          }))
          $ (`#provincia`). append($(`<option>`,{
          value: "Mza",
          text: `Mendoza`
          }))
          $ (`#provincia`). append($(`<option>`,{
          value: "Sl",
          text: `San luis`
           }))
      
     }
     if ($ (this).val()=="bra"){
         
          $ (`#provincia`). append($(`<option>`,{
               value: "Sp",
               text: `Sao paulo`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "rio",
               text: `Rio de janeiro`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "br",
               text: `brasilia`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "For",
               text: `Fortaleza`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "Sal",
               text: `Salvador`
          }))
     }
     if ($ (this).val()=="chi"){
          $ (`#provincia`). append($(`<option>`,{
               value: "Sdc",
               text: `Santiago de chile`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "Con",
               text: `Concepcion`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "Val",
               text: `Valparaiso`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "Pm",
               text: `Puerto montt`
          }))
          $ (`#provincia`). append($(`<option>`,{
               value: "Ran",
               text: `Rancagua`
           }))
     }
     $("#provincia"). prop("disabled", false);
          
});
$("#provincia").change (function(){
     $("#ciudad"). prop("disabled", false);
     $("#ciudad").val(""); 
});
 



 /* function addOption (){
      optionText = `provincia`;
      optionValue = `provincia`;

      $ ("#provincia"). appened ($)
  } */