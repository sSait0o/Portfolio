function resetProgressBars() {
  document.getElementById("progressBars1").style.display = "none";
  document.getElementById("progressBars2").style.display = "none";
}

// Appeler resetProgressBars au chargement de la page pour cacher progressBars2
resetProgressBars();

function showProgressBars(buttonId) {
  // Réinitialiser toutes les barres de progression
  resetProgressBars();

  if (buttonId === "button1") {
    document.getElementById("progressBars1").style.display = "block";
  } else if (buttonId === "button2") {
    document.getElementById("progressBars2").style.display = "block";
  }
}
