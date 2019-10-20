# Generator
Get results from a prediction model


Es importante mencionar algunos detalles que faltaron a esta versión del proyecto

1. Es necesario actualizar el token cada hora. Se colocó un audio que se reproduce cada vez que hay un error. Cuando este suena de forma consecutiva es porque el token ya caducó. Fue una forma sencilla para controlar ese detalle.
2. El archivo que genera al final no queda en formato correcto. Pues el formato correcto CSV es de la siguiente forma:
          titulo1,titulo2,titulo3,titulo4,titulo5
          dato1,"dato2","dato3","dato4","dato5"
          dato1,"dato2","dato3","dato4","dato5"
   Pero el codigo lo exporta de la siguiente forma (sin títulos y en el siguiente formato)
          dato1,"dato2","dato3","dato4","dato5",
          ,dato1,"dato2","dato3","dato4","dato5",
   Se quizo hacer script en PHP que solucionara esto, pero no se logró (ese código está en getFile.php) 
