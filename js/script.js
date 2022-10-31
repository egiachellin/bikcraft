// Manter a estilização da navegação na página atual

const links = document.querySelectorAll(".header-menu a");

function ativaLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativaLink);

// Ao navegar à página de Orçamento, traz consigo os valores clicados na página de "Seguros"

const parametros = new URLSearchParams(location.search);

function ativaProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativaProduto);

// Ao clicar em uma pergunta na página de Seguros, exibe a resposta da pergunta

const perguntasFrequentes = document.querySelectorAll(".perguntas button");

function exibeResposta(event) {
  const perguntaAtual = event.currentTarget;
  const controls = perguntaAtual.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("mostraMensagem");

  const mensagemAtiva = resposta.classList.contains("mostraMensagem");
  perguntaAtual.setAttribute("aria-expanded", mensagemAtiva);
}

function perguntas(pergunta) {
  pergunta.addEventListener("click", exibeResposta);
}

perguntasFrequentes.forEach(perguntas);
