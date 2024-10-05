---
title: useToast
description: 'Um hook personalizado para gerenciar notificações de toast em uma aplicação React.'
---

# useToast

O `useToast` é um hook personalizado que permite gerenciar notificações de toast em uma aplicação React. Ele é inspirado na biblioteca `react-hot-toast` e fornece uma interface simples para adicionar, atualizar e remover toasts.

## Estrutura do Código

### Tipos e Constantes

- **ToasterToast**: Define a estrutura de um toast, incluindo propriedades como `id`, `title`, `description` e `action`.
- **actionTypes**: Um objeto que contém os tipos de ações disponíveis para o gerenciamento de toasts.
- **TOAST_LIMIT**: Limite máximo de toasts que podem ser exibidos simultaneamente.
- **TOAST_REMOVE_DELAY**: Tempo em milissegundos antes que um toast seja removido automaticamente.

### Funções Principais

- **genId**: Gera um ID único para cada toast.
- **addToRemoveQueue**: Adiciona um toast à fila de remoção, programando sua remoção após um atraso definido.

### Reducer

A função `reducer` gerencia o estado dos toasts com base nas ações despachadas. As ações suportadas incluem:

- `ADD_TOAST`: Adiciona um novo toast ao estado.
- `UPDATE_TOAST`: Atualiza um toast existente.
- `DISMISS_TOAST`: Dismiss um ou todos os toasts.
- `REMOVE_TOAST`: Remove um toast do estado.

### Dispatch

A função `dispatch` é responsável por atualizar o estado global dos toasts e notificar todos os ouvintes sobre as mudanças.

### Função `toast`

A função `toast` é a interface principal para criar um novo toast. Ela aceita propriedades para personalizar o toast e retorna um objeto com métodos para atualizar e dismissar o toast.

### Hook `useToast`

O hook `useToast` fornece acesso ao estado atual dos toasts e métodos para interagir com eles. Ele mantém o estado sincronizado com o estado global e permite que os componentes se inscrevam para atualizações.

## Exemplo de Uso

```javascript
import { useToast } from 'caminho/para/use-toast';

function MeuComponente() {
  const { toast } = useToast();

  const mostrarToast = () => {
    toast({
      title: 'Título do Toast',
      description: 'Descrição do Toast',
    });
  };

  return <button onClick={mostrarToast}>Mostrar Toast</button>;
}
```

## Considerações Finais

O `useToast` é uma solução eficiente para gerenciar notificações de toast em aplicações React, permitindo uma experiência de usuário mais interativa e responsiva.