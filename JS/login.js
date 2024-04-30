document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a los elementos del DOM
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("closeBtn");
    const loginForm = document.getElementById("loginForm");

    // Función para mostrar el cuadro de login
    function openLoginModal() {
        loginModal.style.display = "block";
    }

    // Función para cerrar el cuadro de login
    function closeLoginModal() {
        loginModal.style.display = "none";
    }

    // Eventos de clic para mostrar y cerrar el cuadro de login
    loginBtn.addEventListener("click", openLoginModal);
    closeBtn.addEventListener("click", closeLoginModal);

    // Evento de envío del formulario (puedes agregar la lógica de autenticación aquí)
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Agrega la lógica de autenticación aquí
        // Cierra el cuadro de login después del proceso
        closeLoginModal();
    });

    /*
    ////CODIGO PARA CONECTAR A UNA BASE DE DATOS CON MONGODB
    const express = require('express');
    const bodyParser = require('body-parser');
    const { MongoClient } = require('mongodb');
    
    const app = express();
    const port = 3000;
    
    // Middleware para parsear el cuerpo de las solicitudes
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    // Conexión a la base de datos MongoDB
    const uri = 'mongodb://localhost:27017'; // Cambia esto según tu configuración de MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Endpoint para la verificación del inicio de sesión
    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
    
        try {
            await client.connect();
    
            const database = client.db('tu_basede_datos'); // Cambia esto al nombre de tu base de datos
            const collection = database.collection('usuarios'); // Cambia esto al nombre de tu colección de usuarios
    
            // Buscar el usuario en la base de datos
            const user = await collection.findOne({ username, password });
    
            if (user) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                res.status(401).json({ message: 'Credenciales incorrectas' });
            }
        } catch (error) {
            console.error('Error en la verificación del inicio de sesión:', error);
            res.status(500).json({ message: 'Error en el servidor' });
        } finally {
            await client.close();
        }
    });
    
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });

*/
    
});
