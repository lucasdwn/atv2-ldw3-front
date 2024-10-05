---
title: package.json
description: 'Configuração do projeto, incluindo dependências e scripts.'
---

# package.json

O arquivo `package.json` é um componente essencial de qualquer projeto Node.js, servindo como um manifesto que contém metadados relevantes sobre o projeto, incluindo suas dependências, scripts e configurações.

## Estrutura do arquivo

### Campos principais

- **name**: Nome do projeto.
- **version**: Versão atual do projeto.
- **private**: Indica se o projeto é privado (não deve ser publicado no npm).
- **scripts**: Scripts que podem ser executados usando o comando `npm run <script-name>`.
- **dependencies**: Lista de dependências necessárias para o funcionamento do projeto.
- **devDependencies**: Lista de dependências necessárias apenas para o desenvolvimento.

### Exemplo de conteúdo

```json
{
  "name": "atv2-ldw3-front",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -H 0.0.0.0",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hello-pangea/dnd": "^17.0.0",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    ...
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    ...
  }
}
```

## Scripts

Os scripts definidos no `package.json` permitem automatizar tarefas comuns:

- **dev**: Inicia o servidor de desenvolvimento.
- **build**: Compila o projeto para produção.
- **start**: Inicia o servidor em modo de produção.
- **lint**: Executa o linter para verificar a qualidade do código.

## Dependências

As dependências são divididas em duas categorias:

- **dependencies**: Pacotes necessários para a execução do aplicativo em produção.
- **devDependencies**: Pacotes necessários apenas durante o desenvolvimento, como ferramentas de linting e tipos TypeScript.

## Conclusão

O arquivo `package.json` é fundamental para a gestão de um projeto Node.js, permitindo a configuração de scripts e a definição de dependências necessárias para o desenvolvimento e execução do aplicativo.