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
            <h2>Modificar Cliente desde Lista</h2>
            <ul>
                <li><a href="/PHP/CRUD/Clientes.php">Regresar</a></li> 
            </ul>
         </nav>

        <div id="contenido">
            <form action="modificar.php" method="get">
                <p>Escriba los nuevos datos del registro:</p>
                <table>
                    <tbody>
                        <tr>
                            <?php
                                include '../conexion.php';
                                $link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
                                if (mysqli_connect_errno()) {
                                    echo "Fallo al conectar: " . mysqli_error($link);
                                }
                               $valor =$_REQUEST['clave']; 
                               $sql = "SELECT * from cliente where numclientes=$valor";
                               $result = mysqli_query($link, $sql);
                               $row = mysqli_fetch_row($result)

                            ?>
                            <td>Clave:</td>
                            <td><input type="text" name="clave" value=<?=$valor?>    size="40" maxlength="10" /></td>

                            <td>Nombre:</td>
                            <td><input type="text" name="nombre" value=<?=$row[1]?> size="40" maxlength="40" /></td>
                        </tr>
                        <tr>
                            <td>Direcci&oacute;n:</td>
                            <td><input type="text" name="direccion" value=<?=$row[2]?> size="60" maxlength="60" /></td>
                            <td>Telefono</td>
                            <td><input type="text" name="telefono" value=<?=$row[3]?> size="15" maxlength="15" /></td>
                        </tr>
                    </tbody>
                </table>
                <p><input type="submit" value="Añadir" /></p>
            </form>
        </div>
        <?php
          mysqli_close($link);
        ?>

<Footer>
            <h2>Alimentamos tu cuerpo y alimentamos tu alma. Cocinamos pensando en tu bienestar.</h2>
        </Footer>
    </body>
</html>