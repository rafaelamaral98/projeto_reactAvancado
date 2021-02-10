<?php
    require('conexao.php');
    if($_SERVER['REQUEST_METHOD']=='POST') {
        $nome = $_POST ['nome'];
        $msg = $_POST ['msg'];
        $email = $_POST ['email'];
        $sql = "INSERT INTO clientes (nome,email) VALUES ('$nome','$email');";
        semRetorno ($sql);

        $sql_resultado = "SELECT id_cliente FROM clientes WHERE email = '$email';";
        $id_cliente = mysqli_fetch_assoc (comRetorno($sql_resultado));
        $id_final = $id_cliente['id_cliente'];
        $sql_comentario = "INSERT INTO comentarios (id_cliente,msg) VALUES ('$id_final','$msg');";
        semRetorno ($sql_comentario);
        header ('Access-Control-Allow-Origin: *');
    }
?>