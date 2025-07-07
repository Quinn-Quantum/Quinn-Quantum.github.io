const images = [
    "./assets/warten/Seite_01.png",
    "./assets/warten/Seite_2.png",
    "./assets/warten/Seite_3.png"
  ];
  
  let currentPage = 0;

function updateImage() {
  const img = document.getElementById("comic-image");
  img.src = images[currentPage];
  document.getElementById("page-indicator").textContent = `${currentPage + 1} / ${images.length}`;
}

function nextPage() {
  if (currentPage < images.length - 1) {
    currentPage++;
    updateImage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateImage();
  }
}

updateImage(); // initial aufrufen
  