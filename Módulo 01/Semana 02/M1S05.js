var numero = parseInt(prompt('Digite um numero'));
var par = 0;
var impar = 0;
for (let index = 0; index <= numero; index++) {
if (index % 2 == 0) {par++;}
else{ impar++;}
}
alert("Entre o numero 0 a "+numero +" existem "+ par +" pares e "+impar+" impares");