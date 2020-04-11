# Dia 03 Back-End com Nodejs

Data: Apr 10, 2020
Hora de início: 09:20
Hora de término: 14:00
Status: Finalizado

Hoje vou continuar vendo as aulas desse módulo

Aulas

- [x] Criando projeto `Node`.
- [x] Configurando `Nodemon`.
- [x] Métodos `HTTP`.
- [x] Utilizando o `Insomnia`.
- [x] Tipos de `parâmetro`.
- [x] Aplicação `Funcional`.
- [x] `Middlewares`.

# Criando projeto Node

- Crie uma pasta

        mkdir backend

- Inicialize o projeto Node dentro da pasta que foi criada

        yarn init -y

- Agora instale a dependência `Express`.

        yarn add express

- Crie uma pasta com o nome `src`, dentro dessa pasta cria um arquivo com o nome `index.js`.

        mkdir src && touch index.js

- Agora edite esse arquivo `src/index.js`, e deixe-o da seguinte forma:

        const express = require('express');

        const app = express();

        app.get('/', (req, res)=> {
        	return res.send('Hello world');
        });

        app.listen(3000);

- Execute a aplicação

        node src/index.js

- Se você acessar a rota [http://localhost:3000/](http://localhost:3000) ele ira te retornar a a frase `Hello World`.

# Métodos HTTP

GET: Buscar informações

POST: Criar um registro

PUT/PATCH: Altera uma informação

PUT: Atualizar várias informações

PATCH: Atualizar uma informação especifica

DELETE: Deletar informação

# Tipos de parâmetros

Query Params: Filtros & paginação

Route Params: Identificar recursos (Atualizar/Deletar).

Request Body: Conteúdo passado quando queremos criar ou atualizar um recurso. (JSON)

# Aplicação Funcional

Na criação de um recurso na aplicação, quando for retornar, sempre retorno o recurso que foi criado, nunca a lista de todos os recursos.

# Middlewares

Middleware é um interceptador de requisições, pode interromper totalmente uma requisição, pode alterar dados da requisição.

O middleware é uma função, e recebe 3 parâmetros, `req`, `res`, `next`.

Podemos tratar a requisição, para deixamos prosseguir, executamos a função `next`, que recebemos como terceiro parâmetro.

É possível executar ações após o `next`, desde que ele não seja retornado pela keyword `return`.

Um middleware geralmente é utilizado para validações do `request.body`.

> Aqui está o [link](https://github.com/DanPHP7/01-aula-conceitos-nodejs) para o repositório desta plicação
