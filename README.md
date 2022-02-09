# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Informações úteis

Usando a API de filmes gratuita themoviedb foi criado uma listagem dos filmes mais populares do dia, consultando o endpoint GET /movie/popular para realizar a listagem. 
Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido é exibida. 
A seguir alguns dos requitios funcionais:
- O usuário deve ter acesso a uma listagem dos filmes mais populares do dia
- O usuário deve conseguir paginar a lista para encontrar novos filmes
- O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem
- O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

Você pode voltar a pagina inicial clicando na logo no canto esquerdo da barra superior.

## Libs utilizadas

- react-router-dom que é uma lib para controle de rotas 
- sass para deixar o uso do css mais fácil
- dotenv para esconder as variaveis pessoais que não fazem sentido ser compartilhadas 
- axios para fazer as requisições HTTP para API

Para controle de estados compartilhados entre os componentes fiz uso do Context API e useContext que é uma alternativa mais simples e que atendeu as necessidades deste projeto.
Para conseguir fazer as requisições vocÊ precisará de uma API KEY que você pode ver como conseguir uma neste link https://developers.themoviedb.org/3/getting-started/introduction.
Em posse da API KEY, é só criar um arquivo com o nome .env.local na raiz do projeto e criar a variavel REACT_APP_API_KEY='SUA_CHAVE'
Obs. Ao criar a variavel depois do simbolo de = a chave deve ser inserida sem aspas simples ou duplas.

Você pode executar fácilmente na sua maquina, clonando o projeto ou baixando o ZIP.
Na pasta do projeto você vai precisar apenas de 2(dois) comandos para subir aplicação
- npm install
- npm start

Você deverá acessar http://localhost:3000](http://localhost:3000) para ver a aplicação no seu browser.
