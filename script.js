// Efek percikan api background
function createSpark() {
    const spark = document.createElement("div");
    spark.classList.add("spark");

    // Posisi & ukuran acak
    spark.style.left = Math.random() * window.innerWidth + "px";
    spark.style.top = Math.random() * window.innerHeight + "px";
    const size = Math.random() * 6 + 3;
    spark.style.width = size + "px";
    spark.style.height = size + "px";

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 4000);
}
setInterval(createSpark, 200);

// --- Music Control ---
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("toggleMusic");

  // kalau tombol diklik, play/pause musik
  toggleBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggleBtn.textContent = "🔊 Music";
    } else {
      music.pause();
      toggleBtn.textContent = "🔈 Off";
    }
  });
});
