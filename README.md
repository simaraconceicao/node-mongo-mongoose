# Desafio 5 CRUDS MongoDB em 5 dias 🚀

**Fiz 5 projetos CRUDS MongoDB simples, ao longo de 5 dias com o objetivo de consolidar o aprendizado e compartilho aqui neste repo a evolução, os códigos e as lições aprendidas**

<br>
<br>

# Extra +1 CRUD MongoDB com "relacionamento" em outros 5 dias, rs

**Fiz mais 1 CRUD MongoDB, dessa vez com "relacionamento", ao longo de 5 dias**


## 1. Apresentação

Prazer, Simara Conceição! 
Eu sou desenvolvedora grad na *[ThoughtWorks](https://www.thoughtworks.com/pt-br)*, professora na *[{ reprograma }](https://reprograma.com.br/)* e criadora do *[Podcast Quero Ser Dev](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)*.

 <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Iniciei minha migração para área de tecnologia em 2019, você pode conhecer essa história completa ouvindo o quero ser dev. 

## 2. Motivação para criar esse desafio

Fui convidada para ensinar na Reprograma para mais de 40 mulheres inciantes em backend como criar um CRUD MongoDB usando o mongoose. 

E toda vez que estou me preparando para uma aula eu fico imersa no conteúdo pensando em construir a melhor experiência possível para minhas queridas alunas. 

Eu embarquei nesse desafio, pois acredito que não há nada que a gente saiba tão pouco que não possa compartilhar.

## 3. Quando conheci MongoDB

Eu tenho uma história engraçada sobre como me apaixonei pelo MongoDB, rs. 

Em 2020, antes de entrar na TW eu apliquei pra lá em uma vaga de dev full stack. Lembro que a entrevista foi em inglês e com uma colaboradora baseada em NYC e uma das primeiras perguntas foi: você já usou nossa ferramenta? 

E eu bem garota, faceira, ousada, iniciante mais que tudo respondi que não havia ainda tido a oportunidade de usar, mas que era uma entusiasta.

Tomei pau, óbvio, rs. A verdade é que eu tinha ficado feliz demais só de ter sido considerada para vaga, ao ser convocada para essa primeira entrevista. 

Saí de lá decidida a usar o MongoDB em meus projetinhos de estudo e ganhar mais maturidade em padrão de projeto e melhores práticas de desenvolvimento.

Afinal de contas, eu queria carreira em uma empresa global, que tivesse um programa explicito de diversidade e de desenvolvimento para as pessoas colaboradoras. 

Fico feliz de ter alcançado tudo isso aqui na TW, a gente só consegue conectar os pontos olhando pra traz, já dizia Jobs. <3

## 4. Sobre os projetos

`O que é um CRUD?`
acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados). São as 4 operações principais em um banco de dados.

Resumo de cada CRUD:
- Primeiro: Cadastro de inscritos no canal
- Segundo: Cadastro de episódios de podcast
- Terceiro: Cadastro de filmes
- Quarto: Cadastro de livros
- Quinto: Cadastro de séries
- Sexto: Cadastro de estudios e títulos 


### 4.1 Ferramentas usadas 

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia` | Interface gráfica para realizar os testes|

### 4.2 Como rodar cada projeto

Para usar cada projeto, faça o clone e após isso baixe as dependências usando: 

```
yarn
```

Após baixar as dependências e configurar o .env com a sua string de conexão do banco de dados, rode o projeto usando:

```
yarn devStart
```
### 4.3 Comportamento de cada CRUD 

Endpoint genérico: localhost:3333/recurso/routeParams

| Ferramenta | Descrição |
| --- | --- |
| `create/post/save()` | Deverá criar um documento e persistir no db. |
| `getAll/get/find()` | Deverá listar todos os documntos que estão persistidos no db. |
| `getOne/get/findById()` | Deverá listar um documento a partir do RouteParams Id. |
| `updateOne/patch/findById()/save()` | Deverá encontrar um documento a partir do RouteParams Id. Receber a alteração de um ou mais itens especificos do documento e retornar o documento alterado|
| `deleteOne/delete/remove()/save()` | Deverá encontrar um documento a partir do RouteParams Id. Deletar e persistir a remoção no db. E retornar dum json com a mensagem de confirmação da remoção|

### 4.4 Modelagem dos dados

Apenas um schema contendo tipagem, informações de obrigação e de geração automática. Não modelei o id, pois escolhi usar a geração automática do objectId do mongoDb. A data de criação é automática usando o objeto Date do javascript.

- Primeiro: Cadastro de inscritos no canal

```
name: {
        type: String,
        required: true
    },
subscribedToChannel: {
        type: String,
        required: true
    },
subscribeDate: {
        type: Date,
        required: true,
        default: Date.now

    }
```
- Segundo: Cadastro de episódios de podcast
```
nome: {
        type: String,
        required: true
    },
descricao: {
        type: String,
        required: true
    },
convidada: {
        type: String,
        required: true
    },
link: {
        type: String,
        required: true
    },
criadoEm:{
        type: Date,
        required: true,
        default: Date.now
    }
```
- Terceiro: Cadastro de filmes
```
title: {
        type: String,
        required: true
    },
description: {
        type: String,
        required: true
    },
created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
```
- Quarto: Cadastro de livros
```
title : {
        type: String,
        required: true
    },
author: {
        type: String,
        required: true
    },
pages: {
        type: String,
        required: true
    },
genre: {
        type: String,
        required: true
    },
created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
```
- Quinto: Cadastro de séries
```
title: {
        type: String,
        required: true
    },
seasons: {
        type: Number,
        required: true
    },
availableOn: {
        type: String,
        required: true
    },
createdAt: {
        type: Date,
        required: true,
        default: new Date
    }
```
- Sexto: Cadastro de estudios e títulos
```
Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório
```

### 4.5 Arquitetura

`- Projetos 1  e 2 `

#### Server.js
> Subiu servidor nodejs, usou as rotas, converteu os dados para Json e fez conexao com o db.

#### .env
> Gerenciou a variavel de ambiente de configuração do MongoDb

#### 📂Routes
>  Criou as rotas com toda a lógica acoplada.

#### 📂Model
> Modelou o esquema de dados para o banco.

<br>
<br>

`- Projetos 3, 4 e 5`
#### Server.js
> Subiu servidor nodejs, usou as rotas, converteu os dados para Json e fez conexao com a importação da config do db.

#### .env
> Gerenciou a variavel de ambiente de configuração do MongoDb

#### 📂SRC

#### 📂Routes
>  Criou as rotas apenas com a responsabilidade dos metodos HTTP
#### 📂Controllers
> Criou a lógica e salvou as informações do db.
#### 📂Models
> Modelou o esquema de dados para o banco.
#### 📂Data
> Criou a configuração de conexão com o banco.

`- Projetos 6`

```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

## 5. Lições aprendidas

### 5.1 - Procurando direitinho tem muito conteúdo incrível no youtube 

A ideia original desses projetinhos foram retiradas desse tutorial do canal Web Dev Simplified. Obrigada Kyle! haha

*[Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/watch?v=fgTGADljAeg)*

Já a parte de relacionamento, eu me inspirei nesse vídeo aqui da Rocketseat. Valeuu, Diego!rs

*[API NodeJS + Express + Mongo - CRUD e relacionamentos com MongoDB|Diego Fernandes](https://www.youtube.com/watch?v=GAZdUyIV3ms)*


Eu fiz o projeto 1 acompanhando o tutorial do Kyle e a partir do projeto 2 fui implementando e modificando conforme meu repertório ia deixando, rs.

Para ter embasamento teórico assisti aulas de de data driven, aulas de conceitos, mapa mental sobre tipos de bancos de dados. Aqui está um comparativo entre SQL e NoSQL:

| NoSQL | SQL |
| --- | --- |
| `Surgiu no final dos anos 90 e como uma alternativa de natureza não relacional` | RDBMS ou Sistema de Gerenciamento de Banco de Dados Relacional, armazenam dados em um formato estruturado, usando linhas, colunas e tabelas |
| `Possuem alta escalabilidade e desempenho` | Geralmente demanda distribuição vertical de servidores, o que gera mais custo, pois quanto mais dados, mais memória e mais disco um servidor precisa. |
| `Alguns tipos de bancos de dados não relacional: armazenamento de chave-valor, armazenamento column family, orientado a grafos e orientado a documentos` | Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.|

<br>
<br>
Aqui está um comparativo dos termos MongoDb e SQL:

| MongoDB | SQL |
| --- | --- |
| `database` | database|
| `collection` | table|
| `document` | row|
| `field` | column|
| `lookup` | table joins|

[Referência](https://docs.mongodb.com/manual/reference/sql-comparison/)

### 5.1 - Repetição é importante demais

A cada dia, ficava mais fluído entender a responsabilidade de cada arquivo, a lógica de cada função do CRUD, percebia os comportamentos e conseguia lidar melhor com os erros também. 

Mas Simara, faz sentido criar basicamente o mesmo projeto 5 vezes? Faz muito sentido! De tanto repetir, eu comecei a não precisar consultar o tutorial ou algum projeto meu anterior. 

O último então fluiu que só. Consegui desenhar toda a estratégia de como compartilhar o conhecimento com as meninas, comparando com o que elas já viram antes conectando pontos para o entendimento fluir melhor. 


### 5.2 Começando com o MongoDb
Os dados são armazenados no formato que se parece muito com JSON, o que é uma grande facilidade para quem já programa com Javascript.

Podemos usar o Mongo pelo serviço de nuvem(cloud) ou localmente fazendo o download para nossa máquina (eu usei essa opção) e ainda é possível integrar as 2 formas.

Além disso, o Mongo possui seu driver com suas próprias queries(comandos para interação com o banco que se assemelham muito com javascript com orientação a objeto), podemos também usar uma interface gráfica(usei o MongoDb Compass) e ainda podemos usar um ODM, ferramenta que mapeia entre nosso objeto e a db(usei o mongoose).

### 5.3 - Teste, teste e teste
Eu não criei uma estratégia de testes, mas fiz testes manuais com Insomnia e tratei os possíveis erros para retornar status e mensagens coerentes.

Não usei o driver do MongoDB, usei a nterface gráfica MongoCompass para verificar se meus dados estavam salvando direitinho.

### 5.4 - Mongoose faz um meio de campo lindão entre nosso projeto e o MongoDb

Sabe quando a gente inventa de editar uma foto no photoshop, mesmo sabendo que existem filtros prontos que fazem um ótimo trabalho? Então usar o mongoose é apelar para templates prontos, lindos e rápidos.

- Mas muita atenção, pois a comunicação dele com o MongoDB é feita com Assincronicidade.
- Passando nossa string de conexão e informações default é possível fazer a Criação da conexão com a db e também tratar os erros.
- Mas o melhor de todos os pontos, é que ele cria nosso model, informando exatamente como nossos documentos e collections serão. <3


### 5.5 - Separar as responsabilidades faz sentido demais 

A partir do terceiro projeto fui percebendo o quanto os arquivos de server e de routes estava ficando denso e estranho com tantas informações, dessa forma modularizei melhor e separei a minha lógica. Você pode perceber a diferença do primeiro para o último.

### 5.6 -  Compartilhar conhecimento/vivência é disparada a melhor forma de aprender de forma eficiente

Repito: não há nada que a gente saiba tão pouco que não possa compartilhar. 

Estou em constante aprendizado, nessa minha rotina de transição, mas eu só tenho segurança pra dizer que entendi algo de verdade depois que eu compartilho esse conhecimento.

Além disso, compartilhar é uma troca linda e eu sempre aprendo muito com essas vivências. <3

## 6. Próximos passos

- Quero me aventurar com infra e fazer o deploy de algum CRUD, permitindo de forma pública as integrações.

- Implementar uma estratégia de testes para o CRUD

---
## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com/blog)

> Me enviem feedbacks sobre esse repositorio e sobre essa minha forma de estudar em contato@simaraconceicao.com. Vou amar trocar ideias com vocês. É isso, pessu! Até a próxima!