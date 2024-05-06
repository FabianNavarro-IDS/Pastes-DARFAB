import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./FireBase.js";

    // Evento de envío del formulario (autenticación por correo electrónico y contraseña)
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        // Iniciar sesión con correo electrónico y contraseña
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Inicio de sesión exitoso
                const user = userCredential.user;
                console.log("Inicio de sesión exitoso:", user);
                // Cierra el cuadro de login después del proceso
                closeLoginModal();
            })
            .catch((error) => {
                // Error en el inicio de sesión
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error en inicio de sesión:", errorMessage);
                // Aquí puedes mostrar un mensaje de error al usuario
            });
    });