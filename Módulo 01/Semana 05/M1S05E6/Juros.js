export default class Juros {
  capitalInicial;
  taxaAplicada;
  tempo;

  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = Number(capitalInicial);
    this.taxaAplicada = Number(taxaAplicada);
    this.tempo = Number(tempo);
  }

  calcularJurosSimples() {
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t= this.tempo;
    return  Math.round((C  *i*  t) + C);
  }

  calcularJurosCompostos(){
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t= this.tempo;
    return Math.round((C * (1 + i) ** t) + C);
  }
} 