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
