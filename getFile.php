<?php
        //$cadena = '4,"","125-31060050,","","a0CE0000001HHu9MAG", ,-255,"","180-68740195,","diane.mays@damco.com","a0CE0000001HHwMMAW", ,5,"ISC (Import Service Fee / CVF)","020-80453343,","lynn.jorgensen@iffusa.com","a0CE0000002hdimMAA", ,5,"","","tiffany.busch@cevalogistics.com","a0C4400000RMnWGEA1", ,86,"","IT 045530435/focbal4676101V,","lthompson@uli-atl.com","a0CE000000ChZ42MAF", ,-1,"","549-03742443,","dalai@kuehne-nagel.com","a0C4400000PqpcyEAB", ,-12,"Storage","999-83052454,","jmantineo@globalcare-logistics.com","a0CE0000008Wc8XMAS", ,5,"Other","817961-01+JUS170802307,","christie.williams@carouseldesigns.com","a0CE0000007PBqXMAW", ,5,"","988-80123363,","htnsatl@htns.com","a0CE0000009fJytMAE",';
        $cadena = $_POST["cadena"];
        //echo $cadena;
        
        //$cadena;
        //$separado_por_comas = implode(",", $array_contenedor);
        
        //$order = ", ,";
        //$replace ="\n"; //remplaza el caracter
        
        //$newstr = str_replace($order, $replace, $cadena);
        $finalstr = substr_replace($cadena ,"",-1);

        echo json_encode($finalstr);
        /*
        $cont = 0;
        $ns =  trim($dato, ",");
        $final = substr($ns, 0, -3);    
        echo $final;  */
?>