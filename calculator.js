// Lembrete: o TIPO no html possui DUAS FUNÇOES, sendo elas a função de: VALOR e de AÇÃO
//Por isso comparamos as duas com os respectivos comandos.
var resultado = document.getElementById('resultado')
let substituir = false
let limitOperator = false


function calcular(tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      resultado.value = '';
      substituir = false;
      limitOperator = false;
    } else if (valor === '=') {
      var resultadoCalc = eval(resultado.value);
      resultado.value = resultadoCalc;

      if (isNaN(resultadoCalc) || !isFinite(resultadoCalc)) {
        resultado.value = '0';
      }

      substituir = true;
      limitOperator = false
    } else {
      //Concatenar calculos
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        if (!limitOperator) {
          resultado.value += valor
          substituir = false
          limitOperator = true
        }
      } else if (valor === '.') {
        if (!resultado.value.includes('.')) {
          resultado.value += valor
          substituir = false
        }
        limitOperator = false
      }
    }
  } else if (tipo === 'valor') {
    if (substituir) {
      resultado.value = valor;
      substituir = false;
    } else {
      resultado.value += valor;
      limitOperator = false
    }
  }
}

function segredo() {
  var secret = document.createElement('img')
  secret.src = 'images.jpg'
  secret.style.right = 830 + 'px'
  secret.style.position = 'absolute'
  document.body.appendChild(secret)
}

/* Pretendo modificar esse código quanto maior meu conhecimento em javascript, e provavelmente no futuro refaze-lo, por enquanto deixarei assim, mas já tenho noção das falhas e erros que o código possui */
/* Modificações feitas:
 1- Verificar se o número é finito e concertar a equação de divisão por 0.
 2 - Substituir o valor do resultado toda vez que um outro valor for pressionado
 3 - Tirar a repetição de operadores de ação.
 */
