// Previne o comportamento padrão do envio do Formulário, captura os dados e checa se o envio foi realizado com sucesso

const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p>class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background:#F7F7F7;'><span style='color:#317A00;'>Formulário enviado</span>. Entraremos em contato em breve.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background:#F7F7F7;'><span style='color:#E00000;'>Erro no envio</span>. Encaminhe diretamente para contato@contato.com.br que entraremos em contato.</p";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");

  botao.disabled = true;
  botao.innerText = "Enviando . . .";

  const data = new FormData(formulario);
  console.log(data);

  fetch("./enviar.php", {
    method: "post",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
