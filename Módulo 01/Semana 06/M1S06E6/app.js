// Existe uma API pública que retorna a idade média das pessoas que
// possuem o nome passado como parâmetro.
// Para o cálculo, é usada uma base de dados interna deles,
// que pode ser subdividida pelo país passado também como parâmetro.

// Faça uma chamada para esta API e descubra
// a idade média das pessoas com seu nome aqui no Brasil, conforme exemplo abaixo.
// Imprima o nome e a idade média retornados.
// A idade está representada na propriedade 'age' do retorno da API:

// https://api.agify.io/?country_id=BR&name=thais

// Obs.: Se seu nome não constar na base deles (age == null), usar outro nome para os testes.

 
const api = async (nome) => {
 
  const url = `https://api.agify.io/?country_id=BR&name=${nome}`;
try{
  const resposta = await fetch(url);
const dados = await resposta.json();
return dados;
}
catch(err){console.error(err);}
  
}

const botao = document.getElementById('btnConsultar');
const resultado = document.getElementById('resultado');
const nome = document.getElementById('nome');


botao.addEventListener('click', async (evento)=>{ 
  resultado.innerText = 'processando...';
  const dadosobtidos = await api( nome.value);
 resultado.innerText = dadosobtidos.age;
})
 