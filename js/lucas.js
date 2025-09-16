document.addEventListener("DOMContentLoaded", () => {
  // Función para cambiar el lema de la casa
  const slogans = [
    '"El invierno se acerca..."',
    '"Escucha mi rugido!"',
    '"Fuego y Sangre"',
    '"Nunca doblegado, nunca roto"',
    '"Crece fuerte"',
  ];
  let currentSloganIndex = 0;
  const sloganDisplay = document.getElementById("slogan-display");
  const toggleSloganBtn = document.getElementById("toggle-slogan-btn");

  if (toggleSloganBtn && sloganDisplay) {
    toggleSloganBtn.addEventListener("click", () => {
      currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
      sloganDisplay.textContent = slogans[currentSloganIndex];
    });
  }

  // Función para mostrar/ocultar información adicional
  const toggleInfoBtn = document.getElementById("toggle-info-btn");
  const additionalInfo = document.getElementById("info-adicional");

  if (toggleInfoBtn && additionalInfo) {
    toggleInfoBtn.addEventListener("click", () => {
      if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
      } else {
        additionalInfo.style.display = "none";
      }
    });
  }

  // Función para mostrar un mensaje secreto con un alert
  const showAlertBtn = document.getElementById("show-alert-btn");
  if (showAlertBtn) {
    showAlertBtn.addEventListener("click", () => {
      alert("¡El Norte recuerda! Valar Morghulis.");
    });
  }

  // Función para desplazamiento suave al inicio de la página
  window.scrollSuave = (targetId) => {
    const targetElement = document.getElementById(targetId) || document.body;
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };
});
