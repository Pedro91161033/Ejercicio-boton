function saludar() {
  const aviso = document.getElementById("aviso"); // Obtiene el div
  aviso.style.display = "block";                 // Lo muestra

  // Ocultar automáticamente después de 3 segundos
  setTimeout(() => {
    aviso.style.display = "none";
  }, 3000);
}