let count = 0;
document.getElementById("buttonCount").addEventListener("click", () => {
  count += 1;
  const container = document.getElementById("result");
  container.innerHTML = `Você apertou o botão ${count} vezes`;
});
