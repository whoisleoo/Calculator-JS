
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

