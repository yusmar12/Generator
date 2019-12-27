# Generator
Get results from a prediction model


It is important, some details that were missing from this version of the project

1. It is necessary to update the token every hour. An audio was played that plays every time there is an error. When this sounds consecutively it is because the token has already expired. It was a simple way to control that detail.
2. The file it generates at the end is not in the correct format. Well, the correct CSV format is as follows:
          titulo1,titulo2,titulo3,titulo4,titulo5
          dato1,"dato2","dato3","dato4","dato5"
          dato1,"dato2","dato3","dato4","dato5"
   But the code exports it in the following way (without titles and in the following format)
          dato1,"dato2","dato3","dato4","dato5",
          ,dato1,"dato2","dato3","dato4","dato5",
   It was intended to do a PHP script to solve this, but it was not achieved (that code is in getFile.php)
