export default class Personagem {

  nome;
  percentualVida;

  constructor (nome) {
   this.nome = nome;
   this.percentualVida = 100; 
  }

  sofreuDano(percentualDano){
    this.percentualVida = (this.percentualVida - percentualDano) < 0 ? 0 : this.percentualVida - percentualDano;
  }

  usouKitMedico(){
    this.percentualVida = (this.percentualVida + 10) > 100 ? 100 : this.percentualVida +10;
  }

  
}