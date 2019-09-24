/* DECLARACIÓN DE VARIABLES GLOBALES */
var result = [];            //guardará los datos obtenidos de la primer API 
var contador;               //Llevará el conteo de la fila a consultar en la primer API
var contnt = [];            //Guardará
var count_error = [];       //Arreglo que contiene las posiciones de filas con errores

var PAYMENT_DATE__C;        //Fecha que pagó el usuario
var MAWB_MBL__C;            //AWB
var DUEDATE__C;             //Fecha límite de pago
var CREATEDDATE;            //Fecha de creación
var AIRLINE__C;             //Facilities
var NOTIFICATION_EMAIL__C;  //Email
var PAYMENT_TYPE__C;        //Tipo de pago



function generate () {
        $(".loading_img").show();
        $(".img_success").hide();
        
        var row_num = $("#row_num").val();     //obtiene valor de input con id= row_num
        var row_final = $("#row_final").val(); //obtiene valor de input con id= row_final
        var contador =  row_num;               //contador para llevar la recursividad
        $.ajax({
                url:"getRow.php",              //Consulta de una fila del documento CSV
                type: "post",                  //request type,
                dataType: 'json',
        data: {fila: row_num},
                success:function(result){
                    contador++;
                    /*console.log(result);     */
                    console.log("FIRST OPERATION SUCCESFULLY");
                    valores = result;           //guarda result en variable global
                    $("#row_num").val(contador);//asigna contador incrementado a input->fila inicial
                },
            complete:function(){
                getValues();    

                $.ajax({   
                    type: "POST",
                    url: 'https://automl.googleapis.com/v1beta1/projects/350141376048/locations/us-central1/models/TBL1305472145891000320:predict',  //API Call
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ya29.c.KmOKB2lXMI_00UcKyDTKmzk3_XVvYlHvxG9pHxmw9T5HBvWKq7fpeCLnw2aMTU4VlaQhrftqTvVWtk-wiXp_jYUWSs7zXy3lZVAWgaRS2n-diS8sxJSrk8lAp2G9SajzP4hHcF4' //remember refresh token
                    },
                    dataType: 'json',
                    processData: false,
                    data: JSON.stringify({
                        "payload": {
                          "row": {
                              "values": [
                              valores[0],
                              valores[1],
                              valores[2],
                              valores[3],
                              valores[4],
                              valores[5],
                              valores[6],
                              valores[7],
                              valores[9],
                              valores[10],
                              valores[11],
                              valores[12],
                              valores[13],
                              valores[14],
                              valores[15],
                              valores[16],
                              valores[17],
                              valores[18],
                              valores[19],
                              valores[20],
                              valores[21],
                              valores[22],
                              valores[23],
                              valores[24],
                              valores[25],
                              valores[26],
                              valores[27],
                              valores[28],
                              valores[29],
                              valores[30],
                              valores[31],
                              valores[32],
                              valores[33],
                              valores[34],
                              valores[35],
                              valores[36],
                              valores[37],
                              valores[38],
                              valores[39],
                              valores[40],
                              valores[41],
                              valores[42],
                              valores[43],
                              valores[44],
                              valores[45],
                              valores[46],
                              valores[47],
                              valores[48],
                              valores[49],
                              valores[50],
                              valores[51],
                              valores[52],
                              valores[53],
                              valores[54],
                              valores[55],
                              valores[56],
                              valores[57],
                              valores[58],
                              valores[59],
                              valores[60],
                              valores[61],
                              valores[62],
                              valores[63],
                              valores[64],
                              valores[65],
                              valores[66],
                              valores[67],
                              valores[68],
                              valores[69],
                            ],
                            "columnSpecIds": [
                                "2993825026899181568",
                              "5299668036112875520",
                              "1840903522292334592",
                              "687982017685487616",
                              "7605511045326569472",
                              "6452589540719722496",
                              "399751641533775872",
                              "4146746531506028544",
                              "5394243628287655936",
                              "3088400619073961984",
                              "7700086637501349888",
                              "1935479114467115008",
                              "6547165132894502912",
                              "4241322123680808960",
                              "8853008142108196864",
                              "494327233708556288",
                              "5106013252135944192",
                              "2800170242922250240",
                              "7411856261349638144",
                              "1647248738315403264",
                              "6258934756742791168",
                              "3953091747529097216",
                              "8564777765956485120",
                              "1070787986011979776",
                              "5682474004439367680",
                              "3592803777339457536",
                              "6475107538856574976",
                              "7988317013653061632",
                              "3376630995225673728",
                              "4529552499832520704",
                              "2223709490618826752",
                              "1863421520429187072",
                              "5322186034249728000",
                              "6835395509046214656",
                              "3016343025036034048",
                              "4745725281946304512",
                              "134039263518916608",
                              "9141238518259908608",
                              "7051568291159998464",
                              "2439882272732610560",
                              "1286960768125763584",
                              "5898646786553151488",
                              "8204489795766845440",
                              "2728112648884322304",
                              "710500015822340096",
                              "7628029043463421952",
                              "4169264529642881024",
                              "8780950548070268928",
                              "422269639670628352",
                              "5033955658098016256",
                              "7339798667311710208",
                              "1575191144277475328",
                              "6186877162704863232",
                              "3881034153491169280",
                              "8492720171918557184",
                              "998730391974051840",
                              "5610416410401439744",
                              "4457494905794592768",
                              "3304573401187745792",
                              "7916259419615133696",
                              "2151651896580898816",
                              "6763337915008286720",
                              "278154451594772480",
                              "9069180924221980672",
                              "4889840470022160384",
                              "1431075956201619456",
                              "2583997460808466432",
                              "6042761974629007360",
                              "7195683479235854336"
                            ]
                        }
                        }
                    })
                })
                .then((response) => {
                    /*console.log(response);                   */
                    /*DECLARACION DE VARIABLES*/
                    console.log("SECOND OPERATION SUCCESFULLY");
                    const respuestaApi= response;
                    var prediccion;                 //contiene el valor arrojado de la API
                    var prediction_date_format;     //contiene valor de fecha con formato nuevo
                    var payment_date_format;        //   "       "   "    "    "     "      "
                    var diference_days;             //contiene la diferencia de días entre fecha predicha y fecha hecha
                    
                    
                    //OBTIENE EL VALOR DE LA PREDICCIÓN
                    respuestaApi.payload.map(item => {      
                        prediccion =item.tables.value;
                    })
               
                    
                    /* CONVERSIÓN DE EPOCH A FORMATO DATE */
                    var DATE_PREDICTION = new Date(prediccion*1000); 
                    var date_PAYMENT_DATE__C = new Date(PAYMENT_DATE__C*1000); 
                    var date_DUEDATE__C = new Date(DUEDATE__C*1000); 
                    var date_CREATEDDATE = new Date(CREATEDDATE*1000); 
                    /*console.log("PREDICTION_DATE: "+DATE_PREDICTION);     */
                    /*console.log("PAYMENT_DATE__C: "+date_PAYMENT_DATE__C);*/
                    /*console.log("DUE_DATE__C: "+date_DUEDATE__C);         */
                    /*console.log("CREATED_DATE: "+date_CREATEDDATE);       */
                    /* ------------------------------------- */
                    
                    
                    /* ORDENACIÓN DE FORMATO DE FECHA Y OBTENCION DE DIFERENCIA DE DÍAS DE PREDICCION Y LA FECHA HECHA */
                    prediction_date_format = getOnlyDate(DATE_PREDICTION);
                    payment_date_format = getOnlyDate(date_PAYMENT_DATE__C);
                    prediction_date_format = moment(prediction_date_format);
                    payment_date_format = moment(payment_date_format);
                    diference_days = prediction_date_format.diff(payment_date_format, 'days');
                    /*console.log(prediction_date_format.diff(payment_date_format, 'days'), ' dias de diferencia'); */
                    /* ------------------------------------- */

                    
                   /* CONCATENACION DE RESULTADOS EN ARRAY */
                   /*console.log("Payment type: "+ PAYMENT_TYPE__C);       */
                    /*console.log("AWB: "+ MAWB_MBL__C );                   */
                    /*console.log("Facilities: " + AIRLINE__C );            */
                    /*console.log("Email: "+NOTIFICATION_EMAIL__C );        */
                    contnt = contnt.concat(diference_days);
                    contnt = contnt.concat('"'+PAYMENT_TYPE__C+'"');
                    contnt = contnt.concat('"'+MAWB_MBL__C+'"');
                    contnt = contnt.concat('"'+NOTIFICATION_EMAIL__C+'"');
                    contnt = contnt.concat('"'+AIRLINE__C+'"');
                    contnt = contnt.concat('\n');
                    console.log("contenedor: "+contnt);                   
                    /* ---------------------------------------------------- */
                    
                    
                    //validación de limite inicial y final
                    if(contador < row_final){
                        generate();            //llamada a la función otra vez
                    }else{
                        $(".loading_img").hide();
                        $(".img_success").show();
                    }
                    /*------------------------------------------------------*/
                }, () => {
                    //control de errores
                    console.log("we can´t");                          
                    count_error = count_error.concat(contador);      //guarda fila con error   
                    $(".audio")[0].play();                           //reproduce audio para cuando haya fallos (saber cuando hay demasiados fallos, refrescar token)   
                    console.log("contador de errores: "+count_error);
                    if(contador < row_final){                      
                        generate();                                  //continuar con la ejecucion
                    }
                    /*-----------------------------------------------------*/
                });
            },
        }).fail( function (jqXHR, textStatus, errorThrown){
            //alert( 'Error!!' );
        });
}


/* Guardar distintos valores de la fila consultada necesarios para operaciones */
function getValues(){
    PAYMENT_DATE__C = valores[8];
    DUEDATE__C = valores[14];
    CREATEDDATE =   valores[20];
    PAYMENT_TYPE__C = valores[62];
    MAWB_MBL__C = valores[10];
    NOTIFICATION_EMAIL__C = valores[50];
    AIRLINE__C = valores[25];
    
}

// generador de archivos de resultados
function getFile(){
    /*$.ajax({
            url:"getFile.php", //the page containing php script
            type: "post", //request type,
            dataType: 'json',
            data: {cadena: contnt },
            success:function(final){
                console.log("final: "+final);
                var blob = new Blob([final],{type:"text/plain"});
                saveAs(blob,"api_resultados.csv");    //guarda el resultado en un archivo
            }
        });*/
        var blob = new Blob([contnt],{type:"text/plain"});
    saveAs(blob,"api_resultados.csv");    //guarda el resultado en un archivo
    
}

// vacía la variables que almacenan todos los resultados y errores
function resetParameters(){
    contnt = [];
    count_error = [];
}

// pasa de formato "day-month-year" a "year-month-day" para ser aceptado por moment.js
function getOnlyDate(date_c){
    var dia = date_c.getDate();
    var mes = date_c.getMonth()+1;
    var anio = date_c.getFullYear();
    date_c = String(anio+"-"+mes+"-"+dia);
    return date_c;
}

//generador de archivo de errores
function getErrors(){
    var blob = new Blob([count_error],{type:"text/plain"});
    saveAs(blob,"errores.txt");    //guarda el resultado en un archivo
}
