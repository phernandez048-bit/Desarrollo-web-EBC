// Mostrar/Ocultar modal
function toggleModal(id) {
  var modal = document.getElementById(id);
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Botón "Me gusta"
function likeFunction(btn) {
  btn.innerHTML = "<i class='fa fa-thumbs-up'></i> Te gusta";
}

// Mostrar comentarios
function toggleComments(id) {
  var comments = document.getElementById(id);
  if (comments.style.display === "block") {
    comments.style.display = "none";
  } else {
    comments.style.display = "block";
  }
}

// Botón scroll arriba
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
