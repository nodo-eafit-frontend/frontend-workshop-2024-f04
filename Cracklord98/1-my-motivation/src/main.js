const musicButton = document.getElementById("musicButton");
const musicPlayer = document.getElementById("musicaFondo");

musicButton.addEventListener("click", () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    musicButton.textContent = "Pausar música";
  } else {
    musicPlayer.pause();
    musicButton.textContent = "Reproducir música";
  }
});
