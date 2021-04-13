let modoNoiteSelecionado = false;
let botoes = document.getElementById('botoes');
let divs = document.getElementById('divs');
let icone = document.getElementById('icone');

botoes.onclick = () => {
  modoNoiteSelecionado = !modoNoiteSelecionado;

  if (modoNoiteSelecionado) {
    divs.classList.remove('div-modo-dia');
    divs.classList.add('div-modo-noite');

    botoes.classList.remove('btn-modo-noturno-desativado');
    botoes.classList.add('btn-modo-noturno-ativado');

    // Altera o src do icone
    icone.setAttribute('src', './icons/modo-escuro.svg');
  } else {
    divs.classList.remove('div-modo-noite');
    divs.classList.add('div-modo-dia');

    botoes.classList.remove('btn-modo-noturno-ativado');
    botoes.classList.add('btn-modo-noturno-desativado');

    // Altera o src do icone
    icone.setAttribute('src', './icons/modo-claro.svg');
  }
}