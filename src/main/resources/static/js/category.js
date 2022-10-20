function traerInformacionCategoria() {
  $.ajax({
    url: "http://localhost:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuesta) {
      pintarRespuestaCategoria(respuesta);
    },
  });
}

function pintarRespuestaCategoria(items) {
  $("#resultadoCategoria").empty();
  let myTable = "";

  for (i = 0; i < items.length; i++) {
    myTable += "<tr>";

    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable += "<td>" + items[i].description + "</td>";
    myTable +=
      "<td><button class='btn btn-danger m-2' onclick='borrarInformacionCategoria(" +
      items[i].id +
      ")'>Borrar</button><button class='btn btn-success' onclick='modificarInformacionCategoria(" +
      items[i].id +
      ")'>Modificar</button></td>";
    //myTable+="<td><button class='btn btn-success' onclick='modificarInformacionCategoria("+items[i].id+")'>Modificar</button>";
    myTable += "</tr>";
  }
  $("#resultadoCategoria").append(myTable);
}

function guardarInformacionCategoria() {
  let myData = {
    id: $("#idCategoria").val(),
    name: $("#nombreCategoria").val(),
    description: $("#descripcionCategoria").val(),
  };

  let dataToSend = JSON.stringify(myData);

  $.ajax({
    url: "http://localhost:8080/api/Category/save",
    type: "POST",
    data: dataToSend,
    datatype: "JSON",
    contentType: "application/json",
    success: function (respuesta) {
      $("#resultadoCategoria").empty();

      $("#idCategoria").val("");
      $("#nombreCategoria").val("");
      $("#descripcionCategoria").val("");
      traerInformacionCategoria();
      alert("Se guardo exitosamente");
      
    },
    error: function (xhr, status) {
      //alert("Ingrese todos los datos," + xhr.status);
      if($("#nombreCategoria").val()){
        alert("ingrese el descripcion")

      }else{
        alert("Ingrese nombre")
      }
    },
  });
}

function modificarInformacionCategoria() {
  let myData = {
    id: $("#idCategoria").val(),
    name: $("#nombreCategoria").val(),
    description: $("#descripcionCategoria").val(),
  };

  let dataToSend = JSON.stringify(myData);

  $.ajax({
    url: "http://localhost:8080/api/Category/update",
    type: "PUT",
    data: dataToSend,
    datatype: "JSON",
    contentType: "application/json",
    success: function (respuesta) {
      $("#idCategoria").val("");
      $("#nombreCategoria").val("");
      $("#descripcionCategoria").val("");
      
      traerInformacionCategoria();
      
      alert("Actualizacion exitosa");
    },
    error: function (xhr, status) {
      alert("Operacion no satisfactoria," + xhr.status);
    },
  });
}

function borrarInformacionCategoria(idElemento) {
  let myData = { id: idElemento };
  let dataToSend = JSON.stringify(myData);

  $.ajax({
    url: "http://localhost:8080/api/Category/" + idElemento,
    type: "DELETE",
    data: dataToSend,
    contentType: "application/json",
    datatype: "JSON",
    success: function (respuesta) {
      traerInformacionCategoria();
      alerta();

      alert("Se Borro categoria");
    },
    error: function (xhr, status) {
      alert("Operacion no satisfactoria," + xhr.status);
    },
  });
}

function consultarIdc() {
  let codigo = $("#idCategoria").val();
  let myData = {
    id: $("#idCategoria").val(),
  };
  console.log(codigo);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://localhost:8080/api/Category/" + codigo,
    type: "GET",
    dataType: "JSON",
    success: function (respuesta) {
      $("#idCategoria").val("");
      console.log(respuesta);
      pintarRespuestaCategoria1(respuesta);
      //pintarRespuestaCategoria();
      alert("Operacion  satisfactoria");
    },
    error: function (xhr, status) {
      alert("No exitosa," + xhr.status);
    },
  });
}

function pintarRespuestaCategoria1(categoria) {
  $("#resultadoCategoria").empty();
  let myTable = "";
  myTable += "<tr>";

  myTable += "<td>" + categoria.id + "</td>";
  myTable += "<td>" + categoria.name + "</td>";
  myTable += "<td>" + categoria.description + "</td>";
  //myTable+="<td><button onclick='borrarInformacionCategoria("+categoria.id+")'>Borrar</button>";
  //myTable+="<td><button onclick='ModificarInformacionCategoria("+items[i].id+")'>Modificar</button>";

  myTable += "</tr>";

  $("#resultadoCategoria").append(myTable);
}

