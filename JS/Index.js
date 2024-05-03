document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('image-carousel');
    let currentIndex = 0;
    console.log(carousel);

    function showImage(index) {
        const position = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + position + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Obtén todos los elementos del carrusel
    var carouselItems = document.querySelectorAll('.best-seller-item');
    
    // Inicializa el índice del elemento actual
    var currentIndex2 = 0;
    
    // Establece la función del carrusel
    function showNextItem() {
        // Oculta todos los elementos del carrusel
        carouselItems.forEach(function(item) {
            item.style.display = 'none';
        });
        
        // Muestra el elemento actual
        carouselItems[currentIndex2].style.display = 'block';
        
        // Incrementa el índice para mostrar el siguiente elemento
        currentIndex2 = (currentIndex2 + 1) % carouselItems.length;
    }
    
    // Establece la función setInterval para cambiar los elementos cada 3 segundos
    setInterval(showNextItem, 3000);
    
    // Ejecuta showNextItem() inicialmente para mostrar el primer elemento inmediatamente
    showNextItem();
    // Initial display
    showImage(currentIndex);


});