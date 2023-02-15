// Vamos criar uma listagem com alguns personagens de Rick and Morty, a
// documentação completa da api que vamos utilizar pode ser encontrada aqui.
// Obtenha os dados utilizando: https://rickandmortyapi.com/api/character
// Dicas:
// a) Repare que o retorno desta API encapsula os dados dentro de 'results'.
// b) Use as propriedades 'name' e 'image' do retorno para montagem da listagem de personagens
// c) Fique a vontade para adicionar mais informações à listagem.
// d) A api retorna apenas 20 personagens por vez, então iremos listar apenas eles.
//  (fica a seu critétio como recurso extra implementar paginação)


const lista = document.getElementById('lista');
const url = 'https://rickandmortyapi.com/api/character';

const consultarAPI = async (url) =>{
try{
        const resultado = await fetch(url);
        const dados = await resultado.json();
        return dados;
}

catch(err){console.error(err);}
}


const resultado = await consultarAPI(url);


resultado.results.forEach(element => {
  console.log(element);

  
const item = document.createElement('div');
 item.classList.add('item');
const imagem = document.createElement('img');
imagem.src = element.image;
const titulo = document.createElement('h3');
const especie = document.createElement('p');
especie.innerText = element.species;
titulo.innerText = element.name;
lista.appendChild(item);
item.appendChild(imagem);
item.appendChild(titulo);
item.appendChild(especie);

});
