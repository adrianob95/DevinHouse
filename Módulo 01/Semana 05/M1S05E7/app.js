import Time from './Time.js';
import Partida from './Partida.js';
 
const time = new Time("Vitoria");
const partida = new Partida("Vitoria", 0, "Bahia", 1);

time.computarPartida(partida);
time.exibirSituacao(); 