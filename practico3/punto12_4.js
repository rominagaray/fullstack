alert("entro");
ss = document.styleSheets;
for(i=0; i<ss.length; i++)
 {
 for(j=0; j<ss[0].cssRules.length; j++)
  {
  dump( ss[i].cssRules[j].selectorText + "\n" );
  }
 }
 