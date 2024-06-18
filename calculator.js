// Lembrete: o TIPO no html possui DUAS FUNÇOES, sendo elas a função de: VALOR e de AÇÃO
//Por isso comparamos as duas com os respectivos comandos.
var resultado = document.getElementById('resultado')

function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      resultado.value = ''
    }

    //Concatenar calculos
    if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
      resultado.value += valor
    }

    //Lógica do calculo.

    if (valor === '=') {
      var resultadoCalc = eval(resultado.value)
      resultado.value = resultadoCalc

      if (isNaN(resultadoCalc) || !isFinite(resultadoCalc)) {
        resultado.value = 'vai se fuder seu merda'
      } else {
        resultado.value = resultadoCalc
      }
    }

    //concatenar os valores
  } else if (tipo === 'valor') {
    resultado.value += valor

  }



  //Segredo.
}
function segredo() {
  var secret = document.createElement('img')
  secret.src = 'images.jpg'
  secret.style.right = 830 + 'px'
  secret.style.position = 'absolute'
  document.body.appendChild(secret)

}

/* Pretendo modificar esse código quanto maior meu conhecimento em javascript, e provavelmente no futuro refaze-lo, por enquanto deixarei assim, mas já tenho noção das falhas e erros que o código possui */