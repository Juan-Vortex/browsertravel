<?php

    $ciudad = $_POST['ciudad'];
    $humedad = $_POST['humedad'];

    $conn = mysqli_connect("127.0.0.1:3306", "root", "", "laravel");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    date_default_timezone_set('America/Mexico_City');
    $fecha_actual = date("d-m-Y h:i:s");
    
    $sql = "INSERT INTO consultas(ciudad, humedad, created_at) VALUES (' ".$ciudad." ', ' ".$humedad." ', ' ".$fecha_actual." ')";
    if (mysqli_query($conn, $sql)) {
          echo "Se agrego al historial de consultas";
    } else {
          echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
?>