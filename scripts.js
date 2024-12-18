function initSlideshow(slideshowClass) {
    let slideIndex = 0;
    showSlides(slideshowClass);

    function showSlides(slideshowClass) {
        let i;
        let slides = document.querySelectorAll(`.${slideshowClass} .mySlides`);
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(() => showSlides(slideshowClass), 3000); // Muda a imagem a cada 3 segundos
    }
}

// Inicializa os slideshows para cada seção
initSlideshow('Agenda-Pessoal');
initSlideshow('Agenda-Empresa');
initSlideshow('Caderneta-Infantil');
initSlideshow('Kit-Escolar');