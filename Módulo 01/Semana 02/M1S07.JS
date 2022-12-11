// var cont = 0;
// var primo = 0;
// for (let index = 0; index <= 1000; index++) {
//   for (let i = 0; i <= index; i++) {
//     if (i % index == 0) {
//       cont++;
//     }
//   }
//   if (cont == 2) {
//     primo++;
//     console.log(index);
//     cont = 0;
//   }
// }
// console.log(primo + ' numeros primos');

var quantidade = 0;

for (var i = 2; i <= 1000; i++) {
  var primo = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    quantidade += 1;
    console.log(i);
  }
}

console.log('Quantidade de primos:', quantidade);