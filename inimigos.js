

const inimigo = document.getElementById('inimigo');
let inimigoPositionX = window.innerWidth; // Inimigo começa na extremidade direita

function moverInimigo() {
  inimigo.style.left = inimigoPositionX + 'px';
  inimigoPositionX -= 2; // Movimento para a esquerda

  // Reposicionar o inimigo quando ele sair da tela
  if (inimigoPositionX < -50) {
    inimigoPositionX = window.innerWidth;
    inimigo.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Posição vertical aleatória
  }
}

setInterval(moverInimigo, 10);