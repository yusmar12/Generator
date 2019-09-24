<?php 

    //echo "Iniciando ... <br>";
    $fila = 1;
    //$fila_a_consultar = 60;
    $fila_a_consultar = $_POST['fila']; 
    $bandera_paso = 0;
    $bandera_encontro = false;
    $fila_regreso = [];
    $x=0;
    //echo "Abriendo el archivo... <br>";

    //verificando si existe el archivo
    if( ($gestor = fopen("join_invoice_payment.csv", "r")) !== FALSE ){
        //echo "Arhivo encontrado! <br>";
        while( ($dato = fgetcsv($gestor, 0, ",")) !== FALSE ){
            // verifica cuandos tados encontró
            $numero = count($dato);
            //despliega los datos encontrados delimitados
            //echo "<p> En la linea $fila hay : $numero valores <br></p>";
            //incrementa la fila
            $fila++;
            if($fila==$fila_a_consultar+1){
                $bandera_encontro = true; 
                for($x=0; $x<$numero; $x++){
                    $fila_regreso[$x] = $dato[$x];
                    //echo $dato[$x]. "<br>";
                    $bandera_paso=1;                    
                }
                if($bandera_paso==1){
                    break;
                } 
                          
            }
        }
        if($bandera_encontro==false){
            echo "¡UPS! Lo sentimos, al parecer la fila $fila_a_consultar no se pudo encontrar <br>";
        }
        // se ha finalizado el analisis
        //echo "Se ha finalizado el analisis del archivo";
        //cierra el flujo del archivo
        fclose($gestor);
    }else{
        echo "El archivo no existe";
        echo "Fin del programa";
    }
    //echo $fila_regreso;
  
    echo json_encode($fila_regreso);

?>