var numero = parseInt(prompt('Digite um numero:'));
var raiz = parseInt(prompt('Digite a raiz:'));
var resultado='';
var soma=(numero + raiz);
for (let index = 0; index < 10; index++) {
  resultado+= ',' +soma;
  soma+=raiz;
}
console.log(resultado);