

const personagem = document.getElementById('personagem');
const tropeco = document.getElementById('tropeco');

function checkCollision() {
  const personagemRect = personagem.getBoundingClientRect();
  const tropecoRect = tropeco.getBoundingClientRect();

  if (
    personagemRect.left < tropecoRect.right &&
    personagemRect.right > tropecoRect.left &&
    personagemRect.top < tropecoRect.bottom &&
    personagemRect.bottom > tropecoRect.top
  ) {
    alert('Colisão detectada!');
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      personagem.style.top = (parseInt(personagem.style.top) || 0) - 10 + 'px';
      break;
    case 'ArrowDown':
      personagem.style.top = (parseInt(personagem.style.top) || 0) + 10 + 'px';
      break;
    case 'ArrowLeft':
      personagem.style.left = (parseInt(personagem.style.left) || 0) - 10 + 'px';
      break;
    case 'ArrowRight':
      personagem.style.left = (parseInt(personagem.style.left) || 0) + 10 + 'px';
      break;
  }

  checkCollision();
});