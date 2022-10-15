



function traerInformacionReservacion(){
    $.ajax(
              {
                url:"http://localhost:8080/api/Reservation/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaReservacion(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }    
              });
}


function pintarRespuestaReservacion(items){

    $("#resultadoReservacion").empty();

   //declarar variables js
   let myTable="";
   //myTable += "<tr><th>Codigo Res</th><th> Fecha Inicio</th><th>Fecha final</th><th>Status</th><th>Codigo Partyroom</th><th>Nombre Partyroom</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idReservation+"</td>";
       myTable+="<td>"+items[i].startDate+"</td>";
       myTable+="<td>"+items[i].devolutionDate+"</td>";
       myTable+="<td>"+items[i].status+"</td>";       
       myTable+="<td>"+items[i].partyroom.id+"</td>";       
       myTable+="<td>"+items[i].partyroom.name+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].client.name+"</td>";
       
       myTable+="<td><button class='btn btn-danger' onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="<td><button class='btn btn-success' onclick='borrarElemento("+items[i].id+")'>Modificar</button>";
       myTable+="</tr>";
   }
   
   $("#resultadoReservacion").append(myTable);
}

function guardarInformacionReservacion(){

    //$("#resultado").empty();

    let myData ={
                startDate:$("#fechaInicio").val(),
                devolutionDate:$("#fechaFinal").val(),
                client:{idClient:$("#idClienteR").val()},
                partyroom:{id:$("#idPartyroomR").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
            url          : 'http://localhost:8080/api/Reservation/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){

                            $("#fechaInicio").val("");
                            $("#fechaFinal").val("");
                            $("#idClienteR").val("");
                            $("#idPartyroomR").val("");
                            traerInformacionReservacion();
                            alert("Inserción exitosa");
                            },
                        
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function modificarInformacionReservacion() {
    
    let myData ={
        startDate:$("#fechaInicio").val(),
        devolutionDate:$("#fechaFinal").val(),
        client:{idClient:$("#idClienteR").val()},
        partyroom:{id:$("#idPartyroomR").val()}}
let dataToSend = JSON.stringify(myData);
    $.ajax (
        {
           url          : "http://localhost:8080/api/Reservation/update",
           type         : 'PUT',
           data         :  dataToSend,
           datatype     : "JSON",
           contentType  : 'application/json',                    
               success  :  function(respuesta){

                $("#fechaInicio").val("");
                $("#fechaFinal").val("");
                //:idCliente$("#idClienteR").val(""};
                //id:$("#idPartyroomR").val("");
                            traerInformacionReservacion();   
                            alert("Actualizacion exitosa");
                           },
               error    :  function(xhr,status){
                               alert('Operacion no satisfactoria,'+ xhr.status );
                           }
               });
    }


function borrarInformacionReservacion(idElemento) {
    
    let myData = {id:idElemento}
    let dataToSend   = JSON.stringify(myData);

    $.ajax (
        {
            url          : "http://localhost:8080/api/Reservation/"+ idElemento,
            type         : "DELETE",
            data         :  dataToSend,
            contentType  : 'application/json',
            datatype     :  "JSON",
            success      :  function(respuesta){           
                            traerInformacionReservacion();
                            alert("Se Borro Reservacion");
                            },
            error       :   function(xhr,status){                                
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        });
}

function consultarIdc() {
   
    let codigo = $("#idReservacion").val();
    let myData = {
        id:$("#idReservacion").val(),
        
    };
    console.log(codigo);
    let dataToSend   = JSON.stringify(myData);
    $.ajax (
        {
            url          : "http://localhost:8080/api/Reservation/" + codigo ,
            type         : "GET",
            dataType     : "JSON",
            success      :  function(respuesta){

                            $("#idReservacion").val("");
                            console.log(respuesta);
                            pintarRespuestaReservacion1(respuesta);
                            //pintarRespuestaCategoria(); 
                            alert('Operacion  satisfactoria')          
                            },
            error        :  function(xhr,status){
                                alert('No exitosa,'+ xhr.status );
                            },
                });
}

 function pintarRespuestaReservacion1(Reservacion){
    $("#resultadoReservacion").empty();
    
    let myTable="";
   //myTable += "<tr><th>Codigo Res</th><th> Fecha Inicio</th><th>Fecha final</th><th>Status</th><th>Codigo Partyroom</th><th>Nombre Partyroom</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
   
       myTable+="<tr>";
       myTable+="<td>"+items[i].idReservation+"</td>";
       myTable+="<td>"+items[i].startDate+"</td>";
       myTable+="<td>"+items[i].devolutionDate+"</td>";
       myTable+="<td>"+items[i].status+"</td>";       
       myTable+="<td>"+items[i].partyroom.id+"</td>";       
       myTable+="<td>"+items[i].partyroom.name+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].client.name+"</td>";
       
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   

       $("#resultadoReservacion").append(myTable);

}

