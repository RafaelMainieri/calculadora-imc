const listaInputs = document.getElementsByTagName('input')
const botaoCalcular = document.getElementById('botao-calcular')
const inputAltura = document.getElementById('input-altura')
const inputPeso = document.getElementById('input-peso')
const respostaPeso = document.getElementById('respostaPeso')
const respostaAltura = document.getElementById('respostaAltura')
const respostaImc = document.getElementById('respostaImc')
const respostaResultado = document.getElementById('respostaResultado')

botaoCalcular.addEventListener('click', function (event) {
  event.preventDefault();

  if (!isInputPreencheido()) {
    alert('Preencha os dados corretamente!')
  } else {
    calcularImc(inputPeso.value, inputAltura.value)

    inputPeso.value = ''
    inputAltura.value = ''
  }

})

function isInputPreencheido() {
  let resposta = true;

  for (let i = 0; i < listaInputs.length; i++) {
    let input = listaInputs[i];
    let div = input.parentNode;
    let span = div.lastElementChild;
    if (input.value === '' || input.value === null) {
      span.style.display = 'block'
      resposta = false;
    } else {
      span.style.display = 'none'
    }
  }
  return resposta
}

function calcularImc(peso, altura) {
  const imc = peso / (altura * altura)
  respostaPeso.textContent = peso + 'kg'
  respostaAltura.textContent = altura + 'm'
  respostaImc.textContent = imc.toFixed(2)

  switch (true) {
    case (imc < 17):
      respostaResultado.textContent = 'Muito abaixo do peso';
      respostaResultado.style.color = '#4D908E'
      break
    case (imc < 18.49):
      respostaResultado.textContent = 'Abaixo do Peso';
      respostaResultado.style.color = '#43AA8B'
      break
    case (imc < 24.99):
      respostaResultado.textContent = 'Peso Normal'
      respostaResultado.style.color = '#90BE6D'
      break
    case (imc < 29.99):
      respostaResultado.textContent = 'Acima do Peso'
      respostaResultado.style.color = '#F9C74F'
      break
    case (imc < 34.99):
      respostaResultado.textContent = 'Obesidade I'
      respostaResultado.style.color = '#F8961E'
      break
    case (imc < 39.99):
      respostaResultado.textContent = 'Obesidade II (severa)'
      respostaResultado.style.color = '#F3722C'
      break
    case (imc > 40):
      respostaResultado.textContent = 'Obesidade III (mórbida'
      respostaResultado.style.color = '#c42d2f'
      break
    default:
      respostaResultado.textContent = 'Valor não encontrado'
  }
}