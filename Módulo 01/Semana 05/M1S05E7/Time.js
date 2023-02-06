export default class Time {
  sigla;
  vitorias = 0; 
  derrotas = 0; 
  empates = 0;
  golsMarcados =0;
  golsSofridos = 0;
 
 
  constructor(sigla) {
    this.sigla = sigla;
  }
 
  get numeroDeJogos(){
return this.vitorias + this.derrotas + this.empates;
  }
  get numeroDePontos(){
    return this.vitorias * 3 + this.derrotas * 0 + this.empates ; 
  }


  computarPartida(partida){
    const { siglaTimeA, golsTimeA, siglaTimeB,  golsTimeB } = partida;
    let golsDesteTime = 0;
    let golsAdversario = 0;

    if (this.sigla === siglaTimeA) {
      golsDesteTime = golsTimeA;
      golsAdversario = golsTimeB;
    } else if (this.sigla === siglaTimeB) {
      golsDesteTime = golsTimeB;
      golsAdversario = golsTimeA;
    } else {
      return; // sai da funcao
    }

    this.golsMarcados += golsDesteTime;
    this.golsSofridos += golsAdversario;

    if (golsDesteTime > golsAdversario) {
      this.vitorias++;
    } else if (golsDesteTime < golsAdversario) {
      this.derrotas++;
    } else {
      this.empates++;
    }
  }
  exibirSituacao() {
    const pontos = this.vitorias * 3 + this.empates;
    console.log(this);
    console.log(`Pontos: ${pontos}`);
  }
}