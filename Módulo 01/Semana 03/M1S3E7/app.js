const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

const funcao = pessoa =>{
  const {nome, idade, profissao} = pessoa;
 return console.log(`Esta é ${nome}, tem ${idade} anos e é ${profissao}.`)
}
funcao(pessoa);