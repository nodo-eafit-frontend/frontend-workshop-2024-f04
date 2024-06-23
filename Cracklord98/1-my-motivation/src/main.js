const musicButton = document.getElementById("music-button");
const musicPlayer = document.getElementById("music-fondo");

musicButton.addEventListener("click", () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    musicButton.textContent = "Pausar música😥";
  } else {
    musicPlayer.pause();
    musicButton.textContent = "🔥Reproducir música😎";
  }
});
