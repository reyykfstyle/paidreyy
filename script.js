document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("sparkCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  let sparks = [];

  function spawnSpark() {
    sparks.push({
      x: Math.random() * canvas.width,
      y: canvas.height,
      speed: 1 + Math.random() * 2,
      size: 2 + Math.random() * 3,
      color: ["red", "orange", "yellow"][Math.floor(Math.random() * 3)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks.forEach((s, i) => {
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      s.y -= s.speed;
      if (s.y < 0) sparks.splice(i, 1);
    });
    requestAnimationFrame(draw);
  }

  setInterval(spawnSpark, 200);
  draw();
});
