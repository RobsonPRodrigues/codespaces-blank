function mostrarMensagemContato() {
  const mensagem = document.getElementById('mensagemContato');
  mensagem.classList.add('visivel');
}

function exibirDataAtual() {
  const hoje = new Date();
  const opcoes = { day: '2-digit', month: 'long', year: 'numeric' };
  const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);
  document.getElementById('dataAtual').textContent = dataFormatada;
}

exibirDataAtual();