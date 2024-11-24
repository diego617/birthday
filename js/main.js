const candela = document.querySelector('.candela');
const papeles = document.querySelectorAll('.papel');

candela.addEventListener('click', (e) => {
  candela.classList.add("activate");
  papeles.forEach((papel, index) => {
    papel.addEventListener('transitionend', () => {
      papel.classList.add('oculto');
    });
    setTimeout(() => {
      papel.classList.add('caido');
    }, index * 100);
  });
});

// Selecciona todos los papeles

// Función para iniciar la animación en todos los papeles
/*function iniciarCaida() {
  papeles.forEach(papel => {
    papel.classList.add('caido');
  });
}

// Inicia la animación al cargar la página (puedes cambiar esto por un evento de clic en un botón)
window.onload = iniciarCaida;*/
