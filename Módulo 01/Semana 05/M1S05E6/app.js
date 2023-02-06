import Juros from './Juros.js';
 
const jurusSimples = new Juros(10000, 0.07, 24);
console.log(jurusSimples.calcularJurosSimples()); 
 
const jurusComposto = new Juros(10000, 0.15, 10);
console.log(jurusComposto.calcularJurosCompostos()); 
 