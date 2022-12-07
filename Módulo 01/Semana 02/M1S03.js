numero = prompt('Digite um numero');
var element='';
for (let index = 0; index <= 10; index++) {
   element +=  numero + ' x '+ index +' = ' +numero*index +'\n';
}
alert(element);