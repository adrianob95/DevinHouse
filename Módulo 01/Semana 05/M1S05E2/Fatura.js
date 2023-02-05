export default class Fabrica {
id;
descricao;
quantia;
preco;


constructor (id, descricao, quantia, preco) {
  this.descricao = descricao;
  this.id = this.id;

  this.quantia = quantia < 0 ? 0 : quantia ;
  this.preco = preco < 0 ? 0 : preco;


  
}

obterValorTotal(){
return this.quantia * this.preco;
}

get valorTotal(){
  return this.obterValorTotal();
}
}