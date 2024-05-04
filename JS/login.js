document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencias a los elementos del DOM
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("closeBtn");
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

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

    // Evento de envío del formulario (autenticación por correo electrónico y contraseña)
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        // Iniciar sesión con correo electrónico y contraseña
        firebase.auth().signInWithEmailAndPassword(email, password)
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
});