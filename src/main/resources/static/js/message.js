function traerInformacionMensaje(){
    $.ajax(
              {
                url:"http://localhost:8080/api/Message/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaMensaje(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }       
              });
}


function pintarRespuestaMensaje(items){

    $("#resultado").empty();

   //declarar variables js
   let myTable="";
   //myTable += "<tr><th>Codigo</th><th> Mensaje</th><th>codigo Bicicleta</th><th>Nombre Bicicleta</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idMessage+"</td>";
       myTable+="<td>"+items[i].messageText+"</td>";
       myTable+="<td>"+items[i].partyroom.id+"</td>";       
       myTable+="<td>"+items[i].partyroom.name+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].client.name+"</td>";
       
        myTable+="<td><button class='btn btn-danger' onclick='borrarInformacionMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="<td><button class='btn btn-success' onclick='ModificarInformacionMensaje("+items[i].id+")'>Modificar</button>";
       myTable+="</tr>";
   }
   
   $("#resultado").append(myTable);
}


function guardarInformacionMensaje(){

    //$("#resultado").empty();

    let myData ={messageText:$("#idMessage").val(),
                partyroom:{id:$("#idPartyroomM").val()},
                client:{idClient:$("#idClienteM").val()}
            };
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
            url          : 'http://localhost:8080/api/Message/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#resultado").empty();
                            $("#mensaje").val(""),
                            $("#idPartyroomM").val(""),
                            $("#idClienteM").val("")
                            traerInformacionMensaje();
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function modificarInformacionMensaje() {
    
    let myData ={messageText:$("#mensaje").val(),
                partyroom:{id:$("#idPartyroomM").val()},
                client:{idClient:$("#idClienteM").val()}
            };
        
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
           url          : "http://localhost:8080/api/Message/update",
           type         : 'PUT',
           data         :  dataToSend,
           datatype     : "JSON",
           contentType  : 'application/json',                    
               success  :  function(respuesta){

                            $("#mensaje").val("");
                            $("#idPartyroomM").val("");
                            $("#idClienteM").val("");
            
                            traerInformacionMensaje();   
                            alert("Actualizacion exitosa");
                           },
               error    :  function(xhr,status){
                               alert('Operacion no satisfactoria,'+ xhr.status );
                           }
               });
    }

    function borrarInformacionMensaje(idElemento) {
    
        let myData = {id:idElemento}
        let dataToSend   = JSON.stringify(myData);
    
        $.ajax (
            {
                url          : "http://localhost:8080/api/Message/"+ idElemento,
                type         : "DELETE",
                data         :  dataToSend,
                contentType  : 'application/json',
                datatype     :  "JSON",
                success      :  function(respuesta){           
                                traerInformacionMensaje();
                                alert("Se Borro categoria");
                                },
                error       :   function(xhr,status){                                
                                    alert('Operacion no satisfactoria,'+ xhr.status );
                                }
            });
    }

    function consultarIdc() {
   
        let codigo = $("#idMensaje").val();
        let myData = {
            id:$("#idMensaje").val(),
            
        };
        console.log(codigo);
        let dataToSend   = JSON.stringify(myData);
        $.ajax (
            {
                url          : "http://localhost:8080/api/Message/" + codigo ,
                type         : "GET",
                dataType     : "JSON",
                success      :  function(respuesta){
    
                                $("#idMensaje").val("");
                                console.log(respuesta);
                                pintarRespuestaMensaje1(respuesta);
                                //pintarRespuestaCategoria(); 
                                alert('Operacion  satisfactoria')          
                                },
                error        :  function(xhr,status){
                                    alert('No exitosa,'+ xhr.status );
                                },
                    });
    }
    function pintarRespuestaMensaje1(mensaje){
        $("#resultado").empty();
        let myTable="";
   //myTable += "<tr><th>Codigo</th><th> Mensaje</th><th>codigo Bicicleta</th><th>Nombre Bicicleta</th><th>Codigo Cliente</th><th>Nombre Cliente</th></tr>";
   
       myTable+="<tr>";
       myTable+="<td>"+items[i].idMessage+"</td>";
       myTable+="<td>"+items[i].messageText+"</td>";
       myTable+="<td>"+items[i].partyroom.id+"</td>";       
       myTable+="<td>"+items[i].partyroom.name+"</td>";
       myTable+="<td>"+items[i].client.idClient+"</td>";
       myTable+="<td>"+items[i].client.name+"</td>";
       
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   
    
           $("#resultado").append(myTable);
    
}

