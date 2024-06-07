const personagem = document.getElementById('personagem');
let posicaoHorizontal = 0;
let posicaoVertical = 0;
const step = 10;
const larguraDaTela = window.innerWidth;

const inimigo = document.getElementById('inimigo');
let inimigoPositionX = window.innerWidth;

function moverInimigo() {
  inimigo.style.left = inimigoPositionX + 'px';
  inimigoPositionX -= 2;

  if (inimigoPositionX < -50) {
    inimigoPositionX = window.innerWidth;
    inimigo.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
  }

  const personagemRect = personagem.getBoundingClientRect();
  const inimigoRect = inimigo.getBoundingClientRect();

  if (
    personagemRect.left < inimigoRect.right &&
    personagemRect.right > inimigoRect.left &&
    personagemRect.top < inimigoRect.bottom &&
    personagemRect.bottom > inimigoRect.top
  ) {
    alert('Colisão detectada!');
  }
}

setInterval(moverInimigo, 10);

function updatePersonagemPosition() {
  personagem.style.left = posicaoHorizontal + 'px';
  personagem.style.top = posicaoVertical + 'px';
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      posicaoVertical -= step;
      break;
    case 'ArrowDown':
      posicaoVertical += step;
      break;
    case 'ArrowLeft':
      posicaoHorizontal -= step;
      break;
    case 'ArrowRight':
      posicaoHorizontal += step;
      break;
  }

  updatePersonagemPosition();
});

function atirar() {
  const tiro = document.createElement('div');
  tiro.classList.add('tiro');
  document.body.appendChild(tiro);

  const personagemRect = personagem.getBoundingClientRect();
  tiro.style.left = (personagemRect.left + personagemRect.width / 2) + 'px';
  tiro.style.top = (personagemRect.top + personagemRect.height / 2) + 'px';

  const tiroInterval = setInterval(() => {
    const tiroRect = tiro.getBoundingClientRect();
    if (tiroRect.right < window.innerWidth) {
      tiro.style.left = (parseInt(tiro.style.left) || 0) + 5 + 'px';
    } else {
      clearInterval(tiroInterval);
      document.body.removeChild(tiro);
    }
  }, 10);
}

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') { // Tecla de espaço para atirar
    atirar();
  }
});
