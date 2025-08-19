// Canvas background api
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

let sparks = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Buat percikan api baru
function createSpark() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 10;
  const size = Math.random() * 3 + 2;
  const speedY = Math.random() * -2 - 1;
  const speedX = (Math.random() - 0.5) * 1;
  const alpha = Math.random() * 0.5 + 0.5;

  sparks.push({ x, y, size, speedY, speedX, alpha });
}

// Update posisi & gambar percikan
function updateSparks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < sparks.length; i++) {
    let s = sparks[i];
    s.x += s.speedX;
    s.y += s.speedY;
    s.alpha -= 0.005;

    // Warna percikan random antara merah → oranye → kuning
    let gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 3);
    gradient.addColorStop(0, `rgba(255, ${Math.floor(Math.random() * 150)}, 0, ${s.alpha})`);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();

    // Hapus kalau sudah hilang
    if (s.alpha <= 0) {
      sparks.splice(i, 1);
      i--;
    }
  }
}

// Loop animasi
function animate() {
  if (Math.random() < 0.3) createSpark(); // kecepatan spawn percikan
  updateSparks();
  requestAnimationFrame(animate);
}

animate();
