const somaTudo = (...numeros)=>{
  let soma=0;
numeros.forEach(num =>{
  soma+=num;
});
return soma;
}
const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10
