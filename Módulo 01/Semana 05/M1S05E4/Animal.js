export default class Animal {
  nome;
  idade;
  som;

  constructor(nome, idade, som) {
    this.idade = idade;
    this.nome = nome;
    this.som = som;
  }
}

export class Cachorro extends Animal {
  nome;
  idade;

  constructor(nome, idade) {
    super(nome, idade, 'latido');
     
  }
}

export class Gato extends Animal {
  nome;
  idade;
  constructor(nome, idade) {
    super(nome, idade, 'miado');
     
  }
}
