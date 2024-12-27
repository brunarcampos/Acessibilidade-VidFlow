const botaoModoEscuro = document.querySelector(".cabecalho__switch-input");

botaoModoEscuro.addEventListener("change", () => {
  const root = document.querySelector(":root");
  root.classList.toggle("modo-escuro", botaoModoEscuro.checked);
});