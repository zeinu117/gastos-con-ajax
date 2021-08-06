$(document).ready(function(){

	$('#btnActualizarGasto').click(function(){
		actualizarContacto();
	});
});

function agregarNuevoGasto() {
    $.ajax({
        type: "POST",
        data: $('#frmAgregarGasto').serialize(),
        url: "../procesos/gastos/agregarNuevoGasto.php",
        success: function(resultados) {
            resultados = resultados.trim();

            if (resultados == 1) {

                $('#frmAgregarGasto')[0].reset();
                swal.fire(":D", "agregado", "success")
                $('#tablaGastosLoad').load("gastos/tablaGastos.php");
            } else {
                Swal.fire(":(", "No se pudo agregar" + resultados, "error");
            }
        }
    });
    return false;
};
function actualizarContacto() {
	$.ajax({
		type: "POST",
		url: "../procesos/gastos/actualizarContacto.php",
		data: $('#frmAgregarContactoU').serialize(),
		success:function(respuesta) {
			respuesta = respuesta.trim();
			if (respuesta == 1) {
				swal.fire(":D", "se actualizo con exito", "success")
                $('#tablaGastosLoad').load("gastos/tablaGastos.php");
            } else {
                Swal.fire(":(", "No se pudo actualizar" + resultados, "error");
            }
		}
	});
}

function eliminarGasto(idGasto) {
    $.ajax({
        type: "POST",
        data: "idGasto=" + idGasto,
        url: "../procesos/gastos/eliminarGasto.php",
        success: function(resultados) {
            resultados = resultados.trim();
            if (resultados == 1) {

                $('#frmAgregarGasto')[0].reset();
                swal.fire(":D", "Eliminado con exito", "success")
                $('#tablaGastosLoad').load("gastos/tablaGastos.php");
            } else {
                Swal.fire(":(", "No se pudo agregar" + resultados, "error");
            }
        }
    });
    return false;
};

function obtenerDatosGastos(idGasto) {
    $.ajax({
        type: "POST",
        data: "idGasto=" + idGasto,
        url: "../procesos/gastos/obtenerDatosGasto.php",
        success: function(respuesta) {
            respuesta = respuesta.trim();
            respuesta = jQuery.parseJSON(respuesta);
            idCategoria = respuesta['id_categoria'];
            $('#montoU').val(respuesta['monto']);
            $('#descripcionU').val(respuesta['descripcion']);
            $('#fechaU').val(respuesta['fecha']);
            $('#idGastoU').val(respuesta['id_gasto']);
            $('#categoriasIdU').load("gastos/selectCategoriasUpdate.php?idCategoria=" + idCategoria);

        }
    });
}