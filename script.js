const form = document.getElementById("contatoForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    mensagem: form.mensagem.value
  };

  try {
    const response = await fetch("SUA_URL_DO_WEB_APP", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    if(result.result === "success") {
      status.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    } else {
      status.textContent = "Erro ao enviar, tente novamente.";
    }

  } catch (err) {
    status.textContent = "Erro ao enviar, tente novamente.";
    console.error(err);
  }
});

// Botão limpar formulário
const btnLimpar = document.getElementById("limparForm");
btnLimpar.addEventListener("click", () => {
  form.reset();
  status.textContent = "";
});


