


const character = document.getElementById('character');
const vidaCountElement = document.getElementById('vidaCount');

let vidaCount = 3;

function updateVidaCount() {
  vidaCountElement.textContent = vidaCount;
}

function subtrairVida() {
  vidaCount--;
  updateVidaCount();

  if (vidaCount <= 0) {
    alert('Game Over! Vidas esgotadas.');
    resetGame();
  }
}

function resetGame() {
  vidaCount = 3;
  updateLifeCount();
  character.style.left = '0px';
  character.style.top = '0px';
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Enter':
      subtrairVida();
      break;
  }
});