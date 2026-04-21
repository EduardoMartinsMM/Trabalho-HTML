/* Função para alternar tema claro/escuro*/
function toggleTema() {
  document.body.classList.toggle("dark");
}
/* FUNÇÃO PARA VALIDAR FORMULÁRIO*/
function enviarForm(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || msg === "") {
    alert("Preencha todos os campos!");
    return;
  }
   // Limpa o formulário
  e.target.reset();
  alert("Mensagem enviada!");
}
