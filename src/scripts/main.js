document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form-sorteador').addEventListener('submit', (e) => {
    e.preventDefault();

    let
      numeroMaximo = document.getElementById('numero-maximo').value,
      numeroAleatorio = Math.random() * numeroMaximo,
      resultado = document.getElementById('resultado-valor'),
      mensagemResultado = document.querySelector('.resultado');

    numeroMaximo = parseInt(numeroMaximo);

    resultado.innerText = Math.floor(numeroAleatorio + 1);

    mensagemResultado.style.display = 'block';
  })
})
