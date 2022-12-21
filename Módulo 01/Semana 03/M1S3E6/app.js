const verificaPalindromo = (nome) => {
  let metade = nome.length / 2;
  let total = nome.length - 1;
  for (let index = 0; index < metade; index++) {
    if (nome[index] !== nome[total - index]) {
      return console.error('false');
    }
  }
  return console.log('true');
};

const teste1 = verificaPalindromo('ana');
// true

const teste2 = verificaPalindromo('julia');
// false
