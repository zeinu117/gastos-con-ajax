<?php
    session_start();
    $idUsuario = $_SESSION['usuario']['id'];
    include "../../clases/Gastos.php";
    $Gastos = new Gastos();
    $datos = array(
        "idGasto" => $_POST['idGastoU'],
        "idCategoria" => $_POST['idCategoriaSelectU'],
        "monto" => $_POST['montoU'],
        "descripcion" => $_POST['descripcionU'],
        "fecha" => $_POST['fechaU']
    );
    echo $Gastos->actualizarGasto($datos);
//"idCategoriaSelectU=2&idGastoU=5&montoU=4555&descripcionU=com&fechaU=2021-08-06"
?>
