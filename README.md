# products-selling
Este é um projeto de crud de 3 entidades, sendo elas o cliente, produto e carrinho onde cliente e produto são relacionados, utlizei um banco nosql o firebase para realizar a persistência dos dados.

## Disclaimer 
as variaveis de ambiente estão mockadas para facilitar o avaliador, assim que obtiver um retorno irei remover o projeto do firebase e criarei outro para hospedar de forma correta e segura.

## Instalação das dependências

Primeiro precisamos instalar um versão do nodeJs compatível, para este projeto temos duas versões que podemos usar sem problemas

[Nodejs 17.0.0](https://nodejs.org/en/blog/release/v17.0.0)
[Nodejs 16.13.0](https://nodejs.org/en/blog/release/v16.13.0)

Finalizada a instalação do Node.js podemos prosseguir com a instalação das dependências do projeto execute o comando npm ou yarn caso tenha instalado, senão realize a instalação do yarn através do link

[Instalação Yarn windows ](https://classic.yarnpkg.com/en/docs/install#windows-stable)


Para realizar o setup local do projeto siga os passos **1** e **2** e o projeto aparecerá disponivel na url [localhost:8080](http://localhost:8080) caso esta porta esteja disponível
### 1- Instalação das dependências
```
npm install
```
**OU**
```
yarn install
```
### 2- Compilar e subir o servidor local
```
npm run serve
```
**OU**
```
yarn serve
```

### Build da aplicação
Ao realizar o build da aplicação podemos fazer o deploy em alguma plataforma apenas copiando a pasta /dist, ou crie um fork do projeto e faça as alterações desejadas 
```
npm run build
```
**OU**

```
yarn build
```

### Executar testes unitários
Foram feitos testes unitários apenas para atestar conhecimento, e não máxima cobertura do código

```
npm run test:unit
```
**ou**
```
yarn test:unit
```

### Lints do código para formatar e corrigir pequenos erros

```
npm run lint
```
**ou**

```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
