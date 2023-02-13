// O sistema de uma empresa, após efetuar a venda, chama
// funções remotas de duas empresas de entrega dos pedidos,
// e aquela que responder mais rápido nossa requisição fica responsável pela entrega.

// O retorno das chamadas foram adicionados nas constantes abaixo: 'retornoEmpresa1' e 'retornoEmpresa2'.

// Usando 'Promise.race()', recupere o valor da promise da empresa vencedora e imprima o resultado.

const fakeTime = () => parseInt(Math.random() * 10000);

const retornoEmpresa1 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 1'));

const retornoEmpresa2 = new Promise((resolve) => setTimeout(resolve, fakeTime(), 'Empresa 2'));

Promise.race([retornoEmpresa1, retornoEmpresa2]).then((ganhadora) =>{console.log(ganhadora)}
).catch((err) => {
  console.log(err);
});

// ... continue daqui ....
