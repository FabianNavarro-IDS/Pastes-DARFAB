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
            <h2>Borrar Cliente</h2>
            <ul>
                <li><a href="/PHP/CRUD/Clientes.php">Regresar</a></li> 
            </ul>
         </nav>

            <?php
include '../conexion.php';

//1.- Conexión al servidor de bases de datos interface procedimental
$link = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
if (mysqli_connect_errno()) {
	echo "Fallo al conectar: " . mysqli_error($link);
}

//validando los campos
$clave = $_REQUEST["clave"];
echo $clave;

if (isset($clave)) {
	$sql = "delete from cliente where numclientes = $clave";
	//echo $sql;
	$result = mysqli_query($link, $sql);

	if (mysqli_affected_rows($link) > 0) {
		echo " La informaci&oacute;n se ha borrado.\n";
	} else {
		die(' Consulta no v&aacute;lida: ' . mysqli_error($link));
	}
}

mysqli_close($link);
?>
        <Footer>
                <h2>Alimentamos tu cuerpo y alimentamos tu alma. Cocinamos pensando en tu bienestar.</h2>
            </Footer>

    </body>
</html>