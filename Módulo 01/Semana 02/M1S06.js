var operacao = prompt('Escolha +, -, *, /');
var primeiro = parseInt(prompt('digite o primeiro numero'));
var segundo = parseInt(prompt('segundo numero'));
var calculo = 0;
switch (operacao) {
  case '+':
    calculo = primeiro + segundo;
    break;
  case '-':
    calculo = primeiro - segundo;
    break;
  case '/':
    calculo = primeiro / segundo;
    break;
  case '*':
    calculo = primeiro * segundo;
    break;
  default:
    alert('operação invalida');
    break;
}
alert(calculo);
