<img src="https://github.com/Maurelima/steam-background/blob/master/public/img/capa.jpg" />

## Site de busca ao background do perfil Steam

Aplicação criada com o intuíto de complementar a API Steam, disponibilizada pela [Valve Corporation](https://www.valvesoftware.com/pt-br/),
com uma busca pela imagem de plano de fundo do usuário pesquisado.

## Passos iniciais

Clone o repositório.

```sh
gh repo clone https://github.com/Maurelima/steam-background.git
```

`cd` no diretório.

```sh
cd steam-background
```

Instale as dependências do projeto:

```sh
yarn install
```

Inicie o servidor de desenvolvimento:

```sh
yarn dev
```

## Parametrização

Primeiramente crie uma Steam Web API Key em [Criar chave da Web API do Steam](https://steamcommunity.com/dev/apikey).
Com a chave da api em mãos, altere o nome do arquivo `.env.example` para `.env` e insira sua API key.

Link para a API Steam

```sh
https://developer.valvesoftware.com/wiki/Steam_Web_API
```

Finalmente, vá para [localhost: 3000](http://localhost:3000) no navegador de sua escolha e você está pronto para ir 🚀.

## Ferramentas 🧰

- [x] Next.js
- [x] Typescript
- [x] Framer-Motion
- [x] API Steam
## Estrutura do Projeto 🏗

Na pasta src, temos:

- `styles`: Estilos globais da aplicação
- `pages` :  pasta com as rotas das nossa aplicação
- `components` :  pasta contendo os componentes compartilhados

## Dev

| [<img src="https://avatars.githubusercontent.com/u/59918400?s=400&u=3554ebcf0f75263637516867945ebd371e68da71&v=4" width="75px;"/>](https://github.com/Maurelima) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Marco Lima](https://github.com/Maurelima)                                                          |

## Licença

Projetado com ♥ por [Marco Lima](https://github.com/Maurelima). Licenciado sob a [Licença MIT](licença).
