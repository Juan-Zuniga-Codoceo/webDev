document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navBarToggler = document.querySelector('.navbar-toggler');
    const backToTopButton = document.querySelector('.back-to-top');

    // Función para manejar la activación del enlace del navbar
    function handleNavLinkActivation() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Función para mostrar/ocultar el botón de volver al inicio
    function handleBackToTopVisibility() {
        if (window.pageYOffset > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    // Escucha el evento de desplazamiento para activar el enlace del navbar y mostrar/ocultar el botón de volver al inicio
    window.addEventListener('scroll', function() {
        handleNavLinkActivation();
        handleBackToTopVisibility();
    });

    // Escucha el evento de clic en el toggler para cerrar el menú y activar el enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navBarToggler.getAttribute('aria-expanded') === 'true') {
                navBarToggler.click();
            }
            handleNavLinkActivation();
        });
    });

    // Llama a las funciones una vez para activar el enlace correcto al cargar la página y mostrar/ocultar el botón de volver al inicio
    handleNavLinkActivation();
    handleBackToTopVisibility();
});
