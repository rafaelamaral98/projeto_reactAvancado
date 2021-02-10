<?php
    require('conexao.php');
    if($_SERVER['REQUEST_METHOD']=='POST') {
        $cliente = $_POST ['cliente'];
        $produto = $_POST ['produto'];
        $valor_total = $_POST ['valor_unitario'];
        $sql = "INSERT INTO pedidos (id_pedido,cliente,produto,valor_total) VALUES (null,'$cliente','$produto','$valor_total');";
        semRetorno ($sql);
        header ('Access-Control-Allow-Origin: *');
    }
?>