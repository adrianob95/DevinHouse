'use strict';
const procuraMinMax = (array) => {
  if (Array.isArray(array)) {
    let min;
    let max;
    if (!array.length) {
      console.warn('Não é possível encontrar');
    } else {
      array.forEach((valor, index) => {
        if (index == 0) {
          min = valor;
          max = valor;
        }
        if (valor < min) {
          min = valor;
        }
         if (valor > max) {
          max = valor;
        }
         
       
      });
  
      console.log('Menor: '+min  +' Maior: '+max);
    }
  } else console.error('Variavel não é array');
 
};

procuraMinMax([-2,-2,-2,-2]);
