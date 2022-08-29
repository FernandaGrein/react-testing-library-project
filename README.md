Este repositório possui a cópia do projeto de React Testing Library realizado
no módulo de front-end da Trybe.

Para acessar o projeto, clone o presente repositório, entre na pasta,
instale as dependências necessárias com o npm instal e rode a aplicação com o comando star
 - git clone git@github.com:FernandaGrein/react-testing-library-project.git
 - cd react-testing-library-project
 - npm install
 - npm start

 Neste projeto os requisitos eram todos para a realização de testes usando a biblioteca RTL
 A aplicação pokedex já havia sido utilizada em exercícios da trybe, nos quais nós haviamos 
 criado parte dos codigos da aplicação.

 O primeiro requisito foi a criação dos testes do componente App.js.
  Foi testado se havia um conjunto de links de navegação, e se era possível redirecionar 
  a página de acordo com cada link existente.

 O segundo requisito testava o componente About.js, verificando se as informações da pokedex
 estavam na página, se há um cabeçalho, os parágrafos corretos e a imagem da pokedex.

 O terceiro requisito testava o componente Favorite.js, testando a existência dos card de 
 pokemons favoritos, e a messagem de "not found" quando necessária

 Depois foi testado o componente Not Found.js, e se este possui um cabeçalho e uma imagem 
 ambos informando que a página não foi encontrada

 O quinto requisito testou o componente Pokedex, verificando se existe um título, se é exibido 
 os pokemons e é possível passar para o próximo pokemon, se é exibido apenas um pokemon por vez, 
 bem como, se é possível filtrar por categorias ou resetar os filtros

 Na sequencia foram feitos os testes do compomente Pokemon, verificando se o card que aparece na 
 tela possui as informações corretas, se a url possui o id do pokemon. Foi testado a possibilidade de redirecionar a aplicação para a página de detalhes da aplicação e se existe 
 um icone de estrela nos pokemons favoritados.

 Por fim, foi realizado os testes da página de detalhes dos pokemons, verificando se as informações detalhadas dos pokemons aparecem na tela, se aparecem os mapas com a localização dos
 pokemons e se é possível favoritar um pokemon pela página de detalhes.

O último requisito, não era avaliativo, mas era complementar ao projeto, no qual foram adicionados últimos testes até completar 100% da cobertura.
