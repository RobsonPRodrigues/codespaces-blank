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

async function carregarDisciplinas() {
 const resposta = await fetch("/api/disciplinas");
 const disciplinas = await resposta.json();
 const lista = document.getElementById("lista");
 lista.innerHTML = "";
 disciplinas.forEach((d) => {
 const li = document.createElement("li");
 li.textContent = `${d.nome} (${d.semestre}º semestre)`;
 lista.appendChild(li);
 });
}
carregarDisciplinas();
