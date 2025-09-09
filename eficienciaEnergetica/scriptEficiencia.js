const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Define função para atualizar posição do carrossel
function updateCarousel() {
  const width = images[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Botão próximo
nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // volta ao início
  }
  updateCarousel();
});

// Botão anterior
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1; // vai para a última imagem
  }
  updateCarousel();
});

// Ajusta quando a tela muda de tamanho
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel
updateCarousel();
