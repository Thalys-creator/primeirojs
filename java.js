// Espera o DOM carregar antes de rodar
window.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript carregado");

  // 🧩 Restaura dados do localStorage
  const cep = localStorage.getItem("cep");
  const logradouro = localStorage.getItem("logradouro");
  const bairro = localStorage.getItem("bairro");
  const cidade = localStorage.getItem("cidade");

  if (cep) document.getElementById("cep").value = cep;
  if (logradouro) document.getElementById("logr").value = logradouro;
  if (bairro) document.getElementById("bairro").value = bairro;
  if (cidade) document.getElementById("cidade").value = cidade;

  // 🔍 Evento para buscar o CEP quando sair do campo
  document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    // validação básica
    if (cepInformado.length !== 8) {
      alert("CEP deve ter 8 números!");
      return;
    }

    // busca na API ViaCEP
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
      .then((resposta) => resposta.json())
      .then((data) => {
        if (!data.erro) {
          // Preenche os campos
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("logr").value = data.logradouro;

          // Salva no localStorage
          localStorage.setItem("cep", cepInformado);
          localStorage.setItem("bairro", data.bairro);
          localStorage.setItem("cidade", data.localidade);
          localStorage.setItem("logradouro", data.logradouro);
        } else {
          alert("CEP não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP.");
      });
  });

  // 📝 Salva manualmente quando o usuário altera os campos
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      localStorage.setItem(input.id, input.value);
    });
  });
});