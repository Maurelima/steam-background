<img src="https://mauregithub.s3.us-east-1.amazonaws.com/screencapture-localhost-3000-2021-07-21-16_30_36.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIGSZUfqzw%2B7tNPxifZ2cgyhmaSPx2o4lCXjIJa6MXcs2AiEAq3rJR4kVqw%2BFxeymuRjLlJL5ds9e6M3xnetahiMi4qoqgwMIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMTI0NzY4NTI2NTgiDC2pLF3GMJi%2BkE3WryrXAmLWkINUdYZRIjjTF%2BsOvsSmgoo6S4BrbIywZTG9yTetH7SIw0DWKx%2FVMj8V6pj4jXn%2BtD2guSeutgGtVol1dWJN4PdAVnhvUyX%2BFMEftetdEV6Cu8SzQ2WhBiWgEiuRM7Sb%2F7RgQhiMc2aSQxui%2BJQ8K2XlhVPtwomPGQtIj2DZGrFOj7%2BJIXxlhQgJxMLSr6abCFBPN7hTXZ3v59sdSEmvyG3QYKs5y3Rz7du6bqJ7zVrALp%2BagY8Xe18FeFdNzQ9Y%2Bn2e5mU%2B7PsnRymxuGrtQgDjm0kXVSoRzIyrTSexRIfNq%2FfepoQJ7oeKOhBCAhRWtnWC5RMiWxF4Mxr4Lw5OdIsj3GxHbv1qunt1UHuQUdzCtfAwt%2F8pT6TqpsC6aZfSCigF8pR%2BG6d38E28poqR9OU9keCPriHdQ6wjKmbruyd4QerWCV6%2FKIeAUbr%2FRxfoZUCjXo4w9fDhhwY6swJyoxFFiiOOfW0sTU%2BsbnVmQj9zCloplhib8Y8yYP3lpveq84bRcuvEKCMnRr3AFoaGbrGF%2ByxVEaTpdgfKUw%2BntPtNhWx9qbGKFbQEo%2FSWXlL3fMN9qN1jMn%2BAQmV3xG0r0qSAgnZFI8bLGotEPn3iPuJdDu1n3VMnIELlwwLXy4Q6hl3TNFwmR3OGDiG3FEz%2Fc9oA1JgUyDG0omT9Q29MG7K6iAF56sZVb%2BB63NUKezAiekn0%2BQNqhxnwL0UxBfeEMpUKh1eGYbEYrsO2VI5%2FTkbBDMdGwR0WBjyFxlH5n79gFinlmqwHyljYOSeONbSfyg74sPaUDYeYQbbcYKJPjsXdAg2f3YWoH4PU8l6Mho7MybFbiwFFaZN0BmZNvDYPEKu%2B3jfIZg8M%2BvmNeQsgmcEG&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210721T194805Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATC6E3PGZPQPCXW4W%2F20210721%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a257b664fc17f6c85c1f0e5ec26a86e57cbc75b761f9f735684c7741d8d7c628" />

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
