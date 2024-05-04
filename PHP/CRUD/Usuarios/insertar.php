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
            <h2>Añadir Cliente</h2>
            <ul>
                <li><a href="/PHP/CRUD/Clientes.php">Regresar</a></li> 
            </ul>
         </nav>
         
            <?php
            
include '../conexion.php';

//1.- Conexión al servidor de bases de datos, interface OOP
$link = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);

if ($link->connect_error) {
	echo "Fallo al conectar: " . $link->connect_error;
}

//2.- obteniendo los datos del formulario
$clave = $_REQUEST["clave"];
$nombre = $_REQUEST["nombre"];
$direccion = $_REQUEST["direccion"];
$telefono = $_REQUEST["telefono"];

//validando los campos
if (isset($clave) && isset($nombre) && isset($direccion) && isset($telefono)) {
	//creando la consulta
	$sql = "INSERT INTO cliente (numclientes, nombre, domicilio, telefono) " .
		"VALUES ($clave, '$nombre', '$direccion', '$telefono')";
	//echo $sql;
	//4.- ejecutando la consulta
	$result = $link->query($sql);

	//5.- validando la consulta
	if ($link->affected_rows > 0) {

		echo "La informaci&oacute;n se ha insertado con &eacute;xito.\n";
	} else {
		die('Consulta no v&aacute;lida: ' . $link->error);
	}
	$link->close();
} else {
	echo "Debes llenar todos los datos \n";
}
?>
        <Footer>
                <h2>Alimentamos tu cuerpo y alimentamos tu alma. Cocinamos pensando en tu bienestar.</h2>
            </Footer>

    </body>
</html>