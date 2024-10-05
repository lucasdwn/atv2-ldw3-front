---
title: app
description: 'Pasta que contém a estrutura principal da aplicação, incluindo layouts e páginas.'
---

# app

A pasta `app` é responsável por conter a estrutura principal da aplicação, incluindo layouts e páginas. Esta estrutura é fundamental para a organização e o funcionamento do aplicativo, permitindo a separação de diferentes partes da interface do usuário e a gestão de rotas.

## Estrutura

Abaixo estão os principais componentes e subpastas encontrados dentro da pasta `app`:

- **layout.tsx**: Define o layout global da aplicação, que pode ser utilizado por todas as páginas.
- **page.tsx**: Representa a página principal da aplicação.
- **favicon.ico**: Ícone que aparece na aba do navegador.
- **globals.css**: Arquivo de estilos globais que aplica estilos a toda a aplicação.
- **publicLayout.tsx**: Layout utilizado para páginas públicas, como login e registro.
- **login**: Pasta que contém a página de login da aplicação.
- **register**: Pasta que contém a página de registro da aplicação.
- **(authenticated)**: Pasta que contém as rotas e páginas acessíveis apenas para usuários autenticados, incluindo:
  - **perfil**: Página de perfil do usuário.
  - **prioridades**: Gerenciamento de prioridades.
  - **tiposDeListas**: Gerenciamento de tipos de listas.
  - **listas**: Gerenciamento de listas, incluindo criação, edição e visualização de listas.

## Considerações

A organização da pasta `app` é crucial para a escalabilidade e manutenção do projeto. Cada subpasta e arquivo deve ser utilizado de forma a garantir que a aplicação permaneça modular e fácil de entender.