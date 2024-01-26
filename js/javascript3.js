function resetimagespagefive() {
  document.getElementById("etudiantgouv").style.display = "none";
  document.getElementById("todolist").style.display = "none";
}

// Appeler resetProgressBars au chargement de la page pour cacher progressBars2
resetimagespagefive();

function showimagespagefive(buttonId) {
  // Réinitialiser toutes les barres de progression
  resetimagespagefive();

  if (buttonId === "button3") {
    document.getElementById("etudiantgouv").style.display = "block";
  } else if (buttonId === "button4") {
    document.getElementById("todolist").style.display = "block";
  }
}
