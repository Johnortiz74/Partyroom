function traerInformacionCliente() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaCliente(respuesta);
        },
        error: function (xhr, status) {
            alert("Operacion no satisfactoria," + xhr.status);
        },
    });
}

function pintarRespuestaCliente(items) {
    $("#resultadoCliente").empty();

    let myTable = "";
    //myTable += "<tr><th>Codigo</th><th>Correo</th><th>Password</th><th>Nombre</th><th>Edad</th><th>Mensaje</th><th>Reservaciones</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idClient + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].password + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td>" + items[i].messages + "</td>";
        myTable += "<td>" + items[i].reservations + "</td>";
        myTable +=
            "<td><button class='btn btn-danger' onclick='borrarInformacionCliente(" +
            items[i].id +
            ")'>Borrar</button>";
        myTable +=
            "<td><button class='btn btn-success' onclick='ModificarInformacionCliente(" +
            items[i].id +
            ")'>Modificar</button>";
        myTable += "</tr>";
    }
    $("#resultadoCliente").append(myTable);
}

function guardarInformacionCliente() {
    //$("#resultado").empty();

    let myData = {
        name: $("#nombreCliente").val(),
        email: $("#emailCliente").val(),
        password: $("#claveCliente").val(),
        age: $("#edadCliente").val(),
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type: "POST",
        data: dataToSend,
        datatype: "JSON",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoCliente").empty();

            traerInformacionCliente();
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#claveCliente").val("");
            $("#edadCliente").val("");
            alert("Se guardo exitosamente el cliente");
        },
        error: function (xhr, status) {
            alert("Operacion no satisfactoria," + xhr.status);
        },
    });
}

function modificarInformacionCliente() {
    let myData = {
        name: $("#nombreCliente").val(),
        email: $("#emailCliente").val(),
        password: $("#claveCliente").val(),
        age: $("#edadCliente").val(),
    };

    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        datatype: "JSON",
        contentType: "application/json",
        success: function (respuesta) {
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#claveCliente").val("");
            $("#edadCliente").val("");

            traerInformacionCategoria();
            alert("Actualizacion exitosa");
        },
        error: function (xhr, status) {
            alert("Operacion no satisfactoria," + xhr.status);
        },
    });
}

function borrarInformacionCliente(idElemento) {
    let myData = { id: idElemento };
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: "http://localhost:8080/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function (respuesta) {
            traerInformacionCliente();
            alert("Se Borro cliente");
        },
        error: function (xhr, status) {
            alert("Operacion no satisfactoria," + xhr.status);
        },
    });
}

function consultarIdc() {
    let codigo = $("#idCliente").val();
    let myData = {
        id: $("#idCliente").val(),
    };
    console.log(codigo);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/" + codigo,
        type: "GET",
        dataType: "JSON",
        success: function (respuesta) {
            $("#idcliente").val("");
            console.log(respuesta);
            pintarRespuestaClient1(respuesta);
            //pintarRespuestaCategoria();
            alert("Operacion  satisfactoria");
        },
        error: function (xhr, status) {
            alert("No exitosa," + xhr.status);
        },
    });
}

function pintarRespuestaCliente1(cliente) {
    $("#resultadoCliente").empty();
    let myTable = "";
    //myTable += "<tr><th>Codigo</th><th>Correo</th><th>Password</th><th>Nombre</th><th>Edad</th><th>Mensaje</th><th>Reservaciones</th></tr>";

    myTable += "<tr>";
    myTable += "<td>" + items[i].idClient + "</td>";
    myTable += "<td>" + items[i].email + "</td>";
    myTable += "<td>" + items[i].password + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable += "<td>" + items[i].age + "</td>";
    myTable += "<td>" + items[i].messages + "</td>";
    myTable += "<td>" + items[i].reservations + "</td>";
    // myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
    myTable += "</tr>";

    $("#resultadoCliente").append(myTable);
}
