window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Agregar clase activa a los enlaces del navbar
  document.addEventListener('DOMContentLoaded', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      const navBarToggler = document.querySelector('.navbar-toggler');

      // Función para manejar la activación del enlace del navbar
      function handleNavLinkActivation() {
          let current = '';

          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              if (pageYOffset >= sectionTop - 60) {
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

      // Escucha el evento de desplazamiento para activar el enlace del navbar
      window.addEventListener('scroll', handleNavLinkActivation);

      // Escucha el evento de clic en el toggler para cerrar el menú y activar el enlace
      navLinks.forEach(link => {
          link.addEventListener('click', function() {
              navBarToggler.click();
              handleNavLinkActivation();
          });
      });

      // Llama a la función una vez para activar el enlace correcto al cargar la página
      handleNavLinkActivation();
  });