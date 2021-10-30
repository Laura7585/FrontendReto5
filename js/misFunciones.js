/**
 * Category
 */

function traerInformacionCategorias(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button class='button' onclick=' actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";
        myTable +="<td> <button class='button' onclick='borrarElementoCategorias(" +respuesta[i].id +")'> Borrar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://168.138.142.208:8080/api/Category/save",
        
        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionCategorias(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarElementoCategorias(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado1").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });

}


/**
 * Skate
 */

function traerInformacionSkates(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Skate/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaSkates(respuesta);
        }
    });
}

function pintarRespuestaSkates(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button class='button' onclick=' actualizarInformacionSkates("+respuesta[i].id+")'>Actualizar</button>";
        myTable +="<td> <button class='button' onclick='borrarElementoSkates(" +respuesta[i].id +")'> Borrar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionSkates(){
    let var3 = {
        name:$("#Sname").val(),
        brand:$("#Sbrand").val(),
        year:$("#Syear").val(),
        description:$("#Sdescription").val()
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://168.138.142.208:8080/api/Skate/save",
        
        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionSkates(idElemento){
    let myData={
        id:idElemento,
        name:$("#Sname").val(),
        brand:$("#Sbrand").val(),
        year:$("#Syear").val(),
        description:$("#Sdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Skate/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            $("#id").val("");
            $("#Sname").val(),
            $("#Sbrand").val(),
            $("#Syear").val(),
            $("#Sdescription").val()
            traerInformacionSkates();
            alert("se ha actualizado correctamente el skate")
        }
    });

}

function borrarElementoSkates(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Skate/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado2").empty();
            traerInformacionSkates();
            alert("Se ha Eliminado.")
        }
    });

}

/**
 * CLIENTS
 */

function traerInformacionClients(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClients(respuesta);
        }
    });
}

function pintarRespuestaClients(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button class='button' onclick=' actualizarInformacionClients("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button class='button' onclick='borrarElementoClients(" +respuesta[i].idClient +")'> Borrar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClients(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val()
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.142.208:8080/api/Client/save",
        
        success:function(response) {
            console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionClients(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            $("#idClient").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClients();
            alert("se ha Actualizado correctamente el cliente")
        }
    });
}

function borrarElementoClients(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado3").empty();
            traerInformacionClients();
            alert("Se ha Eliminado.")
        }
    });

}
/*
 * MESSAGES
 */

function traerInformacionMessages(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessages(respuesta);
        }
    });
}

function pintarRespuestaMessages(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button class='button' onclick=' actualizarInformacionMessages("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button class='button' onclick='borrarElementoMessages(" +respuesta[i].idMessage +")'> Borrar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMessages(){
    let var5 = {
        messageText:$("#MmessageText").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://168.138.142.208:8080/api/Message/save",
        
        success:function(response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionMessages(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#MmessageText").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            $("#idMessage").val("");
            $("#MmessageText").val(),
            traerInformacionMessages();
            alert("se ha Actualizado correctamente el mensaje")
        }
    });

}

function borrarElementoMessages(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado4").empty();
            traerInformacionMessages();
            alert("Se ha Eliminado.")
        }
    });

}

/**
 * RESERVATIONS
 */

function traerInformacionReservations(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservations(respuesta);
        }
    });
}

function pintarRespuestaReservations(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td> <button class='button' onclick=' actualizarInformacionReservations("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button class='button' onclick='borrarElementoReservations(" +respuesta[i].idReservation +")'> Borrar </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservations(){
    let var6 = {
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        };

        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://168.138.142.208:8080/api/Reservation/save",
        
        success:function(response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionReservations(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            $("#idReservation").val("");
            $("#RstartDate").val(),
            $("#RdevolutionDate").val(),
            traerInformacionReservations();
            alert("se ha actualizado correctamente la reserva")
        }
    });
}

function borrarElementoReservations(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.142.208:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado5").empty();
            traerInformacionReservations();
            alert("Se ha Eliminado.")
        }
    });

}

/**
 * REPORTES
 */
 function traerReporteStatus(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaStatus(respuesta);
        }
    });
}

function pintarRespuestaStatus(respuesta){

    let myTable="<table>";
    myTable+="<tr>";
    myTable+="<th>completadas</th>";
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<th>canceladas</th>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}
function traerReporteClientes(){
    $.ajax({
        url:"http://168.138.142.208:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes2(respuesta);
        }
    });
}

function pintarRespuestaClientes2(respuesta){

    let myTable="<table>";
    myTable+="<tr>";

    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].total+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td>"+respuesta[i].client.email+"</td>";
        myTable+="<td>"+respuesta[i].client.age+"</td>";
    
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}

function traerReporteDate(){
    
   

    var fechaInicio = document.getElementById("RstarDate1").value;
    var fechaCierre = document.getElementById("RdevolutionDate1").value;
  

    $.ajax({
        url:"http://168.138.142.208:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDate(respuesta);
        }
    });
}
function pintarRespuestaDate(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoDate").html(myTable);
}