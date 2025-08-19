// Brutal Percikan Api
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  setInterval(() => {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = Math.random() * window.innerWidth + "px";
    spark.style.top = window.innerHeight + "px";

    // Warna random merah–kuning–oranye
    const colors = ["red", "orange", "yellow"];
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];

    body.appendChild(spark);
    setTimeout(() => spark.remove(), 4000);
  }, 150); // makin kecil makin rame
});

// Tambahkan CSS sparks lewat JS
const style = document.createElement("style");
style.innerHTML = `
  .spark {
    position: fixed;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    opacity: 0.9;
    animation: rise 4s linear forwards;
    z-index: 0;
  }
  @keyframes rise {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-120vh) scale(0.3); opacity: 0; }
  }
`;
document.head.appendChild(style);
