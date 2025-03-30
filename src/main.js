// Carrega a página sobre após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  exibir("sobre");
});

// Função para exibir apenas a sessão informada
function exibir(alvo) {
  ocultarTodasSecoes();
  document.getElementById(alvo).style.display = "block";
  return false;
}

//Função para ocultar todas as sessões da página
function ocultarTodasSecoes() {
  const secoes = document.getElementsByTagName("section");
  //Pega todas as tag section e oculta com o display none.
  for (let i = 0; i < secoes.length; i++) {
    secoes[i].style.display = "none";
  }
}

// Adiciona um handler para o evento submit do formulário de contato
document.querySelector('#contato form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const mensagem = document.querySelector('textarea').value;

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  alert('Formulário enviado com sucesso!');
  this.reset();
});