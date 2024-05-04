<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>PHP y MySQL</title>
        <link href="/Css/Style.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
    <header>
            <div class="logo">
                <img src="/Imagenes/Logo/Pastes.png"width="350" alt="paste">
                </div>
            <h1>Bienvenidos a Pastes Darfa</h1>
        </header>
        
         <nav>
            <h2>Buscar Cliente</h2>
            <ul>
                <li><a href="/PHP/CRUD/Clientes.php">Regresar</a></li> 
            </ul>
         </nav>

         <div id="contenido">
            <p>El usuario es:</p>

            <?php

            include '../conexion.php';

            ///1.- Conexión al servidor de bases de datos interface procedimental
            $link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS,DB_NAME);
            if (mysqli_connect_errno())
                    echo "Fallo al conectar: " . mysqli_error ($link);
            
            $clave = $_REQUEST["clave"];

            if (isset($clave)) {

                $sql = "select * from cliente where numclientes = $clave";

                $result = mysqli_query($link,$sql);

                if (!$result) {
                    die('Consulta no v&aacute;lida: ' . mysqli_error($link));
                } else {
                    if (mysqli_affected_rows($link) > 0) {

                        echo "<table border = '1'> \n";
                        echo "<tr><td>Clave</td><td>Nombre</td><td>Direcci&oacute;n</td><td>Telefono</td></tr> \n";

                        while ($row = mysqli_fetch_row($result)) {
                            echo "<tr><td>$clave</td><td>$row[1]</td><td>$row[2]</td><td>$row[3]</td></tr> \n";
                        }

                        echo "</table>\n";
                    } else {
                        echo "<p> El dato no existe </p>";
                    }
                }
            }
            mysqli_close($link);
            
            ?>

</div>
            
<Footer>
                <h2>Alimentamos tu cuerpo y alimentamos tu alma. Cocinamos pensando en tu bienestar.</h2>
            </Footer>

    </body>
</html>