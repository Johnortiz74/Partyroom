
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
        myTable+="<td><button class='btn btn-danger' onclick='borrarInformacionPartyroom("+items[i].id+")'>Borrar</button>";
        myTable+="<td><button class='btn btn-success' onclick='modificarInformacionPartyroom("+items[i].id+")'>Modificar</button>";
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
