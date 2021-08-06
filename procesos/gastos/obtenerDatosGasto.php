<?php

    session_start();
    $idUsuario = $_SESSION['usuario']['id'];
    include "../../clases/Gastos.php";
    $Gasto = new Gastos();
    $idGasto = $_POST['idGasto'];
    echo json_encode($Gasto->obtenerDatosGasto($idGasto))
    
    
?> 
 