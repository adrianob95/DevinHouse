// Existe a API 'Random User Generator', que gera usuários
// fakes para fins de testes e protótipos.
// Vamos usá-la para praticar e consumir APIs.

// A URL da API é esta abaixo, onde o argumento 'results'
//  representa a quantidade de resultados que queremos retornar:
// https://randomuser.me/api/?results=4

// Verifique a documentação e exemplo de retorno em:
// https://randomuser.me/documentation#howto, ou
// faça uma chamada para a API (no navegador ou console)
// para verificar um exemplo de resultado.

// Com base no json de retorno, monte uma página web,
// contendo os dados de usuários de sistema com foto, título,
//  nome, sobrenome, e-mail e endereço completo.
// O layout (css) é livre, desde que apresente as informações solicitadas.

// Dicas:
// a) Perceba que os resultados ficam dentro do campo 'results' do json de retorno;
// b) Para a foto, use a versão grande do campo 'picture': 'large' (grande);
// c) Para o nome, use os campos de 'name': 'title' (título), 'first' (nome), 'last' (sobrenome);
// d) Para o endereço, use os campos de 'location': 'street' (rua), 'city' (cidade), 'state' (estado), 'country' (país);
// e) Como é uma chamada remota para o serviço, o resultado pode demorar alguns segundos para retornar.

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
const qtd = document.getElementById('qtd');
const buscar = document.getElementById('buscar');

buscar.addEventListener('click', async () => {
  const url = `https://randomuser.me/api/?results=${qtd.value}`;

  const resultado = await consultarAPI(url);

  resultado.results.forEach((element) => {
    const item = document.createElement('div');
    item.classList.add('item');
    const imagem = document.createElement('img');
    imagem.src = element.picture.large;
    const titulo = document.createElement('h3');
    const especie = document.createElement('p');

    // titulo.innerText = `${element.name.title} ${element.name.first} ${element.name.last}` ;
    titulo.innerText = Object.values(element.name).join(' '); //testar qual dos dois eh mais eficiente

    especie.innerHTML = `Cidade: ${element.location.city} <br>Endereco: ${element.location.street.name}, Nº 
     ${element.location.street.number} <br>Estado: ${element.location.state} País: ${element.location.country} `; //testar qual dos dois eh mais eficiente

    lista.appendChild(item);
    item.appendChild(imagem);
    item.appendChild(titulo);
    item.appendChild(especie);
  });
});

const consultarAPI = async (url) => {
  try {
    const resultado = await fetch(url);
    const dados = await resultado.json();
    return dados;
  } catch (err) {
    console.error(err);
  }
};
