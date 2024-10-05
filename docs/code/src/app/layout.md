---
title: layout
description: 'Componente de layout raiz para a aplicação, gerenciando temas, autenticação e exibição de notificações.'
---

# layout.tsx

O arquivo `layout.tsx` define o componente de layout raiz da aplicação. Ele é responsável por envolver todos os componentes filhos com provedores de contexto que gerenciam temas, autenticação e exibição de notificações.

## Estrutura do Componente

O componente `RootLayout` recebe um único prop, `children`, que representa os componentes filhos a serem renderizados dentro do layout.

### Importações

- **Metadata**: Importa o tipo `Metadata` do Next.js para definir metadados da página.
- **globals.css**: Importa o arquivo de estilos globais.
- **ThemeProvider**: Provedor de tema que permite a aplicação de temas personalizados.
- **TooltipProvider**: Provedor para gerenciar tooltips na aplicação.
- **AuthProvider**: Provedor que gerencia o estado de autenticação do usuário.
- **Toaster**: Componente para exibir notificações.

### Metadados

Os metadados da página são definidos como:

```typescript
export const metadata: Metadata = {
  title: "Tarefas",
  description: "Gerir tarefas",
};
```

### Renderização

O componente retorna a estrutura HTML básica, incluindo:

- A tag `<html>` com o atributo `lang` definido como "pt-BR".
- A tag `<body>` com a classe "antialiased" para melhorar a legibilidade do texto.
- Os provedores de contexto (`ThemeProvider`, `AuthProvider`, `TooltipProvider`) que envolvem o componente `Toaster` e os `children`.

## Exemplo de Uso

Este layout é utilizado como base para todas as páginas da aplicação, garantindo que todos os componentes tenham acesso aos contextos necessários para funcionar corretamente.