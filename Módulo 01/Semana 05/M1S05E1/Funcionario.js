export default class Funcionario {
  cpf
  nomeCompleto
  salario;

  constructor(cpf, nome, salario) {
    this.cpf = cpf;
    this.nome = nome;
    this.salario = salario;
  }
 

 promover(percentual) {
this.salario += (this.salario * percentual/100);

  }
}

