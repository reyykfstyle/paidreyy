// Efek percikan api background
function createSpark() {
  const spark = document.createElement("div");
  spark.classList.add("spark");

  // Posisi acak
  spark.style.left = Math.random() * window.innerWidth + "px";
  spark.style.top = Math.random() * window.innerHeight + "px";

  // Ukuran acak
  const size = Math.random() * 6 + 3; 
  spark.style.width = size + "px";
  spark.style.height = size + "px";

  // Tambahkan ke body
  document.body.appendChild(spark);

  // Hapus setelah animasi
  setTimeout(() => spark.remove(), 4000);
}

// Generate percikan terus-menerus
setInterval(createSpark, 200);