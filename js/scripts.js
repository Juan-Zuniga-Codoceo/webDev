document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado exitosamente');
  });
  
// Mostrar/ocultar el botón de volver al inicio
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  