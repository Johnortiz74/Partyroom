function traerInformacionCategoria(){
    $.ajax({
        url         :   "http://localhost:8080/api/Category/all",
        type        :   "GET",
        datatype    :   "JSON",
        success:function(respuesta){
            console.log(respuesta)

                pintarRespuestaCategoria(respuesta);
                }
            });
}

function pintarRespuestaCategoria(items){
    $("#resultado").empty();
    
    let myTable="";
    
    //myTable += "<tr> <th>Codigo</th><th>Nombre</th><th>Descripcion</th> </tr>";
   
    for(i = 0; i < items.length; i++){
      
      myTable+="<tr>";
       
       myTable+="<td>"+ items[i].id + "</td>";
       myTable+="<td>"+ items[i].name + "</td>";
       myTable+="<td>"+ items[i].description + "</td>";
       myTable+="<td><button onclick='borrarInformacionCategoria("+items[i].id+")'>Borrar</button>";
       //myTable+="<td><button onclick='ModificarInformacionCategoria("+items[i].id+")'>Modificar</button>";
    
       myTable+="</tr>";
       
   }
   
   $("#resultado").append(myTable);
   
}

function guardarInformacionCategoria(){
    let myData = {
        id:$("#idCategoria").val(),
        name:$("#nombreCategoria").val(),
        description:$("#descripcionCategoria").val(),
    };
    
    let dataToSend = JSON.stringify(myData);

    $.ajax ({
        url          : "http://localhost:8080/api/Category/save",
        type         : "POST",
        data         :  dataToSend,
        datatype     :  "JSON",
        contentType  : 'application/json',
            success      :  function(respuesta){
                $("#resultado").empty();
                
                $("#idCategoria").val("");
                $("#nombreCategoria").val("");
                $("#descripcionCategoria").val("");
                traerInformacionCategoria();
                alert("Se guardo exitosamente");
            },
            error       :   function(xhr,status){
                alert('No se guardo datos,'+ xhr.status );
            }           
        });
}

function modificarInformacionCategoria() {
    
    let myData = {
        id:$("#idCategoria").val(),
        name:$("#nombreCategoria").val(),
        description:$("#descripcionCategoria").val(),
    };
        
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
           url          : "http://localhost:8080/api/Category/update",
           type         : 'PUT',
           data         :  dataToSend,
           datatype     : "JSON",
           contentType  : 'application/json',                    
               success  :  function(respuesta){

                            $("#idCategoria").val("");
                            $("#nombreCategoria").val("");
                            $("#descripcionCategoria").val("");
                            traerInformacionCategoria();   
                            alert("Actualizacion exitosa");
                           },
               error    :  function(xhr,status){
                               alert('Operacion no satisfactoria,'+ xhr.status );
                           }
               });
    }


function borrarInformacionCategoria(idElemento) {
    
    let myData = {id:idElemento}
    let dataToSend   = JSON.stringify(myData);

    $.ajax (
        {
            url          : "http://localhost:8080/api/Category/"+ idElemento,
            type         : "DELETE",
            data         :  dataToSend,
            contentType  : 'application/json',
            datatype     :  "JSON",
            success      :  function(respuesta){           
                            traerInformacionCategoria();
                            alert("Se Borro categoria");
                            },
            error       :   function(xhr,status){                                
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        });
}

function consultarIdc() {
   
    let codigo = $("#idCategoria").val();
    let myData = {
        id:$("#idCategoria").val(),
        
    };
    console.log(codigo);
    let dataToSend   = JSON.stringify(myData);
    $.ajax (
        {
            url          : "http://localhost:8080/api/Category/" + codigo ,
            type         : "GET",
            dataType     : "JSON",
            success      :  function(respuesta){

                            $("#idCategoria").val("");
                            console.log(respuesta);
                            pintarRespuestaCategoria1(respuesta);
                            //pintarRespuestaCategoria(); 
                            alert('Operacion  satisfactoria')          
                            },
            error        :  function(xhr,status){
                                alert('No exitosa,'+ xhr.status );
                            },
                });
}

 function pintarRespuestaCategoria1(categoria){
    $("#resultado").empty();
    let myTable = "";
    myTable+="<tr>";
       
       myTable+="<td>"+ categoria.id + "</td>";
       myTable+="<td>"+ categoria.name + "</td>";
       myTable+="<td>"+ categoria.description + "</td>";
       myTable+="<td><button onclick='borrarInformacionCategoria("+categoria.id+")'>Borrar</button>";
       //myTable+="<td><button onclick='ModificarInformacionCategoria("+items[i].id+")'>Modificar</button>";
    
       myTable+="</tr>";

       $("#resultado").append(myTable);

}


//  partyroom
function traerInformacionPartyroom(){
    $.ajax({
        url         :"http://localhost:8080/api/Partyroom/all",
        type        :"GET",
        datatype    :"JSON",
        success     :function(respuesta){
                    pintarRespuestaPartyroom(respuesta); },
    
        error       :function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
        }      
    });
}

function pintarRespuestaPartyroom(items){
    $("#resultado").empty();
   
   let myTable="";
   //myTable += "<tr><th>Codigo</th><th>Nombre</th> <th> Dueño</th><th>Capacidad</th><th>descripcion</th><th>Codigo Categoria</th><th>Nombre Categoria</th><th>Descripcion Categoria</th> <th>Mensaje</th><th>Reservacion</th></tr>";
   for(i=0; i<items.length; i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].id+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].owner+"</td>";
       myTable+="<td>"+items[i].capacity+"</td>";
       myTable+="<td>"+items[i].description+"</td>";                
       myTable+="<td>"+items[i].category.id +"</td>";                
       myTable+="<td>"+items[i].category.name +"</td>";                
       myTable+="<td>"+items[i].category.description +"</td>";                
       myTable+="<td>"+items[i].messages +"</td>";                        
       myTable+="<td>"+items[i].reservations+"</td>";                
        myTable+="<td><button onclick='borrarInformacionPartyroom("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   
   $("#resultado").append(myTable);
}

function guardarInformacionPartyroom(){

    $("#resultado").empty();
    
    let myData ={
        id:$("#idPartyroom").val(),
        name:$("#nombrePartyroom").val(),
        owner:$("#duenoPartyroom").val(),
        capacity:$("#capacidadPartyroom").val(),
        description:$("#descripcionPartyroom").val(),
        category:{id:$("#idCategoriaP").val()}
    };
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
            url          : 'http://localhost:8080/api/Partyroom/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            
                            traerInformacionPartyroom();
                            //$("#resultado").empty();
                            $("#idPartyroom").val("");
                            $("#nombrePartyroom").val("");
                            $("#duenoPartyroom").val("");
                            $("#capacidadPartyroom").val("");
                            $("#descripcionPartyroom").val("");
                            $("#idCategoriaP").val("");
                            
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}


function modificarInformacionPartyroom(){

    //$("#resultado").empty();
    
    let myData ={
        id:$("#idPartyroom").val(),
        name:$("#nombrePartyroom").val(),
        owner:$("#duenoPartyroom").val(),
        capacity:$("#capacidadPartyroom").val(),
        description:$("#descripcionPartyroom").val(),
        category:{id:$("#idCategoriaP").val()}
    };
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
            url          : 'http://localhost:8080/api/Partyroom/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            //$("#resultado").empty();
                            traerInformacionPartyroom();
                            
                            $("#idPartyroom").val("");
                            $("#nombrePartyroom").val("");
                            $("#duenoPartyroom").val("");
                            $("#capacidadPartyroom").val("");
                            $("#descripcionPartyroom").val("");
                            $("#idCategoriaP").val("");
                            
                            alert("Actializacion exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function borrarInformacionPartyroom(idElemento) {
    
    let myData = {id:idElemento}
    let dataToSend   = JSON.stringify(myData);

    $.ajax (
        {
            url          : "http://localhost:8080/api/Partyroom/"+ idElemento,
            type         : "DELETE",
            data         :  dataToSend,
            contentType  : 'application/json',
            datatype     :  "JSON",
            success      :  function(respuesta){           
                            traerInformacionPartyroom();
                            alert("Se Borro partyroom");
                            },
            error       :   function(xhr,status){                                
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        });
}

function consultarId() {
    let data = $("#idPartyroom").val();
    
    $.ajax (
        {
            url          : "http://localhost:8080/api/Partyroom/" + data ,
            type         : "GET",
            dataType     : "JSON",
            success      :  function(respuesta){
                            $("#idPartyroom").val("");
                            pintarRespuestaPartyroom1(respuesta);
                            //traerInformacionCategoria();   
                            alert('Operacion  satisfactoria')          
                            },
            error        :  function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            },
                });
}

function pintarRespuestaPartyroom1(partyroom){
    $("#resultado").empty();
    let myTable="";
   //myTable += "<tr><th>Codigo</th><th>Nombre</th> <th> Dueño</th><th>Capacidad</th><th>descripcion</th><th>Codigo Categoria</th><th>Nombre Categoria</th><th>Descripcion Categoria</th> <th>Mensaje</th><th>Reservacion</th></tr>";
   
       myTable+="<tr>";
       myTable+="<td>"+items[i].id+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].owner+"</td>";
       myTable+="<td>"+items[i].capacity+"</td>";
       myTable+="<td>"+items[i].description+"</td>";                
       myTable+="<td>"+items[i].category.id +"</td>";                
       myTable+="<td>"+items[i].category.name +"</td>";                
       myTable+="<td>"+items[i].category.description +"</td>";                
       myTable+="<td>"+items[i].messages +"</td>";                        
       myTable+="<td>"+items[i].reservations+"</td>";                
        myTable+="<td><button onclick='borrarInformacionPartyroom("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   

       $("#resultado").append(myTable);

}














//Cliente

function traerInformacionCliente(){
    $.ajax(
              {
                url:"http://localhost:8080/api/Client/all",
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaCliente(respuesta);                    
                },
                error       :   function(xhr,status){
                    alert('Operacion no satisfactoria,'+ xhr.status );
                }
             });
}

function pintarRespuestaCliente(items){

    $("#resultado").empty();

   let myTable="";
   //myTable += "<tr><th>Codigo</th><th>Correo</th><th>Password</th><th>Nombre</th><th>Edad</th><th>Mensaje</th><th>Reservaciones</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].idClient+"</td>";
       myTable+="<td>"+items[i].email+"</td>";
       myTable+="<td>"+items[i].password+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].age+"</td>";                
       myTable+="<td>"+items[i].messages+"</td>";                        
       myTable+="<td>"+items[i].reservations+"</td>";                
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   $("#resultado").append(myTable);
}

function guardarInformacionCliente(){

    //$("#resultado").empty();

    let myData ={
        name:$("#nombreCliente").val(),
        email:$("#emailCliente").val(),
        password:$("#claveCliente").val(),
        age:$("#edadCliente").val()};
    
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
            url          : 'http://localhost:8080/api/Client/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            $("#resultado").empty();

                            traerInformacionCliente();
                            $("#nombreCliente").val("");
                            $("#emailCliente").val("");
                            $("#claveCliente").val("");
                            $("#edadCliente").val("");
                            alert("Se guardo exitosamente el cliente");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        });
}

function modificarInformacionCliente() {
    
    let myData ={
        name:$("#nombreCliente").val(),
        email:$("#emailCliente").val(),
        password:$("#claveCliente").val(),
        age:$("#edadCliente").val()};
        
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {
           url          : "http://localhost:8080/api/Client/update",
           type         : 'PUT',
           data         :  dataToSend,
           datatype     : "JSON",
           contentType  : 'application/json',                    
               success  :  function(respuesta){

                $("#nombreCliente").val("");
                $("#emailCliente").val("");
                $("#claveCliente").val("");
                $("#edadCliente").val("");
                
                traerInformacionCategoria();   
                alert("Actualizacion exitosa");
                           },
               error    :  function(xhr,status){
                               alert('Operacion no satisfactoria,'+ xhr.status );
                           }
               });
    }

    function borrarInformacionCliente(idElemento) {
    
        let myData = {id:idElemento}
        let dataToSend   = JSON.stringify(myData);
    
        $.ajax (
            {
                url          : "http://localhost:8080/api/Client/"+ idElemento,
                type         : "DELETE",
                data         :  dataToSend,
                contentType  : 'application/json',
                datatype     :  "JSON",
                success      :  function(respuesta){           
                                traerInformacionCliente();
                                alert("Se Borro cliente");
                                },
                error       :   function(xhr,status){                                
                                    alert('Operacion no satisfactoria,'+ xhr.status );
                                }
            });
    }
    

    function consultarIdc() {
   
        let codigo = $("#idCliente").val();
        let myData = {
            id:$("#idCliente").val(),
            
        };
        console.log(codigo);
        let dataToSend   = JSON.stringify(myData);
        $.ajax (
            {
                url          : "http://localhost:8080/api/Client/" + codigo ,
                type         : "GET",
                dataType     : "JSON",
                success      :  function(respuesta){
    
                                $("#idcliente").val("");
                                console.log(respuesta);
                                pintarRespuestaClient1(respuesta);
                                //pintarRespuestaCategoria(); 
                                alert('Operacion  satisfactoria')          
                                },
                error        :  function(xhr,status){
                                    alert('No exitosa,'+ xhr.status );
                                },
                    });
    }

    function pintarRespuestaCliente1(cliente){
        $("#resultado").empty();
        let myTable="";
   //myTable += "<tr><th>Codigo</th><th>Correo</th><th>Password</th><th>Nombre</th><th>Edad</th><th>Mensaje</th><th>Reservaciones</th></tr>";
   
       myTable+="<tr>";
       myTable+="<td>"+items[i].idClient+"</td>";
       myTable+="<td>"+items[i].email+"</td>";
       myTable+="<td>"+items[i].password+"</td>";
       myTable+="<td>"+items[i].name+"</td>";
       myTable+="<td>"+items[i].age+"</td>";                
       myTable+="<td>"+items[i].messages+"</td>";                        
       myTable+="<td>"+items[i].reservations+"</td>";                
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   
           $("#resultado").append(myTable);
    
}

//mensaje


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
       
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   
   $("#resultado").append(myTable);
}


function guardarInformacionMensaje(){

    //$("#resultado").empty();

    let myData ={messageText:$("#mensaje").val(),
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

    $("#resultado").empty();

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
       
       // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   
   $("#resultado").append(myTable);
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
    $("#resultado").empty();
    
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
   

       $("#resultado").append(myTable);

}

