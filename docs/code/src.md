
---
title: src
description: 'Pasta principal do projeto que contém todos os componentes, hooks, interfaces e serviços utilizados na aplicação.'
---

# src

A pasta `src` é a estrutura principal do projeto, onde estão organizados todos os arquivos e diretórios que compõem a aplicação. Abaixo estão os principais diretórios e suas respectivas funções:

- **context**: Contém os contextos utilizados para gerenciar o estado da aplicação, como o `authContext.tsx` para autenticação.
  
- **enums**: Define enums utilizados em toda a aplicação, como o `tarefasEnum.ts` que categoriza as tarefas.

- **hooks**: Contém hooks personalizados que encapsulam lógica reutilizável, como `use-toast.ts` para exibir notificações e `useTarefa.ts` para manipulação de tarefas.

- **interfaces**: Define as interfaces TypeScript que descrevem a forma dos dados utilizados na aplicação, como `ITarefa.ts` e `ILista.ts`.

- **lib**: Contém bibliotecas e utilitários, como `utils.ts` que pode incluir funções auxiliares.

- **services**: Contém serviços que realizam chamadas de API e manipulação de dados, como `apiService.ts` e `taskService.ts`.

- **utils**: Contém funções utilitárias, como `dateService.ts` para manipulação de datas.

- **pages**: Contém as páginas da aplicação, organizadas de acordo com a estrutura do Next.js.

- **components**: Contém todos os componentes reutilizáveis da aplicação, organizados em subpastas por funcionalidade, como `ui` para componentes de interface do usuário e `listas` para componentes relacionados a listas.

Esta estrutura modularizada permite uma melhor organização e manutenção do código, facilitando a escalabilidade e a colaboração em equipe.
