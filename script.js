document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // 🔥 Brutal Percikan Api (optimized)
  setInterval(() => {
    const sparks = document.querySelectorAll(".spark");
    if (sparks.length > 50) sparks[0].remove(); // max 50 sparks aktif

    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = Math.random() * window.innerWidth + "px";
    spark.style.top = window.innerHeight + "px";

    const colors = ["red", "orange", "yellow"];
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];

    body.appendChild(spark);
    setTimeout(() => spark.remove(), 4000);
  }, 400); // lebih jarang → enteng
  

  // 🔊 Kontrol suara background
  const fireSound = document.getElementById("fire-sound");
  if (fireSound) fireSound.volume = 0.25;

  // ⚡ Order Button SFX + Animasi Glow
  const orderButtons = document.querySelectorAll(".order-btn");
  const orderSfx = document.getElementById("order-sfx");
  if (orderButtons && orderSfx) {
    orderButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        orderSfx.currentTime = 0;
        orderSfx.play();

        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 300);
      });
    });
  }

  // 🎵 Tombol ON/OFF Sound
  const soundToggle = document.getElementById("sound-toggle");
  if (soundToggle && fireSound) {
    soundToggle.addEventListener("click", () => {
      if (fireSound.muted) {
        fireSound.muted = false;
        soundToggle.textContent = "🔊";
      } else {
        fireSound.muted = true;
        soundToggle.textContent = "🔇";
      }
    });
  }
});
