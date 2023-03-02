const botonVerMas = document.getElementById('ver-mas');
const elementosOcultos = document.querySelectorAll('.oculto');

botonVerMas.addEventListener('click', function() {
  elementosOcultos.forEach(function(elemento) {
    elemento.classList.toggle('mostrar');
  });
});