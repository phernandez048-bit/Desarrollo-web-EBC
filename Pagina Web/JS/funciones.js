// Mostrar u ocultar comentarios
function toggleComments(id) {
  const elem = document.getElementById(id);
  elem.style.display = elem.style.display === "block" ? "none" : "block";
}

// Función para dar "me gusta"
function likeFunction(button) {
  button.style.fontWeight = "bold";
  button.innerHTML = "✓ Me gusta";
}

// Abrir y cerrar modal
function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

// Scroll hacia arriba
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); // Quitamos la clase 'active' de todos
    if (i === index) {
      slide.classList.add("active"); // Solo activamos el slide actual
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Siguiente slide
  showSlide(currentSlide);
}

// Mostrar la primera imagen al inicio
showSlide(currentSlide);

// Cambiar automáticamente cada 10 segundos
setInterval(nextSlide, 10000);
