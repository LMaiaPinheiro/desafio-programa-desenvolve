document.querySelector("#submit").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  const texto = document.querySelector("#mensagem").value;
  if (preenchido(email) && preenchido(texto)) {
    if (validateEmail(email)) {
      alert(`Obrigado pelo contato, ${email}`);
    } else if (!validateEmail(email)) {
      alert("Erro no envio: Endereço de mail inválido");
    }
  } else if (!preenchido(texto)) {
    alert("Erro no envio: Insira uma mensagem");
  } else if (!preenchido(email)) {
    alert("Erro no envio: Endereço de mail inválido");
  }
});

function preenchido(valor) {
  const preenchido = valor.length > 0;

  if (!preenchido) {
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const partesEmail = email.split("@");
  const validado =
    partesEmail[0].length > 0 &&
    partesEmail[0].length <= 32 &&
    partesEmail[1].length > 0 &&
    partesEmail[1].length <= 16;
  if (validado) {
    return true;
  } else {
    return false;
  }
}
