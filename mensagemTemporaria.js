

var messageElement = document.getElementById('message');

function mostrarMensagem(mensagem, duracao) {
  messageElement.textContent = mensagem;
  messageElement.style.display = 'block';
  setTimeout(function() {
    messageElement.style.display = 'none';
  }, duracao);
}

document.addEventListener('DOMContentLoaded', function() {
  mostrarMensagem('Esta é uma mensagem temporária.', 3000); // Mensagem por 3 segundos
});