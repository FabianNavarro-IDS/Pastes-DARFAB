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
});