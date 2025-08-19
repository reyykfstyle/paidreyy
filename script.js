// ====== Percikan Api Background (tetap sama) ====== //
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createSpark() {
  return {
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    size: random(1, 3),
    speedX: random(-1, 1),
    speedY: random(-2, -0.5),
    life: random(60, 120)
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (sparks.length < 80 && Math.random() < 0.3) {
    sparks.push(createSpark());
  }

  for (let i = 0; i < sparks.length; i++) {
    let s = sparks[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 50, 0, 0.8)";
    ctx.fill();
    s.x += s.speedX;
    s.y += s.speedY;
    s.life--;
    if (s.life <= 0) {
      sparks.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ====== Tombol Order WhatsApp (per produk) ====== //
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const product =
      btn.dataset.product?.trim() ||
      btn.closest(".card")?.querySelector("h2")?.textContent?.trim() ||
      "Order";

    const message = encodeURIComponent(`Halo kak, saya mau order: ${product}`);
    window.open(`https://wa.me/6282189769841?text=${message}`, "_blank");
  });
});
