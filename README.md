
<h1 align="center">Projeto Store Manager</h1>

## Descrição

Store Manager é uma API RESTful desenvolvida seguindo a arquitetura de software **MSC** (Model-Service-Controller), através de **TDD** (Desenvolvimento orientado a Testes).
Este projeto, conectado a um banco de dados **MySQL**, simula um sistema de gestão de vendas de uma e-commerce. Sendo a criação, leitura, atualização e exclusão (CRUD), tanto de produtos quanto de vendas, possível. 

## Tecnologias e Ferramentas

Este projeto foi desenvolvido em ambiente isolado de desenvolvimento **Docker**. Os endpoits para as requisições HTTP que posibilitam o CRUD desta API foram estruturados com o framework  **Express.js**. A cobertura de testes de todas as camadas da arquitetura MSC, foi feita com **Mocha**, **Chai** e **Sinon**.

## Instalando e executando o aplicativo

```
 git clone git@github.com:alissonrh/store-manager.git
 cd store-manager
 npm install
```

### - Executando com Docker
```
cd store-manager
docker-compose up -d
docker exec -it store_manager bash
npm install
npm run debug
```


<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
