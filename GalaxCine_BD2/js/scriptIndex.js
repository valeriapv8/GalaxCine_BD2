
/*   Loaging   */
document.addEventListener("DOMContentLoaded", function() {
  // Espera a que la página esté completamente cargada
  window.addEventListener("load", function() {
    // Oculta la pantalla de carga y muestra el contenido principal
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
  });
});

/*   Barra de Navegación    */
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
