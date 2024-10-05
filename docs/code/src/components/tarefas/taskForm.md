---
title: TaskForm
description: 'Componente para criação e edição de tarefas, incluindo gerenciamento de subtarefas e anexos.'
---

# TaskForm

O componente `TaskForm` é utilizado para criar e editar tarefas em um sistema de gerenciamento de tarefas. Ele permite a inclusão de subtarefas, anexos e a definição de prioridades e status da tarefa.

## Props

### `tarefaId?`
- **Tipo**: `string`
- **Descrição**: ID da tarefa a ser editada. Se não fornecido, o componente funcionará no modo de criação de nova tarefa.

## Estrutura do Componente

O componente é estruturado em um formulário que contém os seguintes campos:

- **Título**: Campo de entrada para o título da tarefa.
- **Prioridade**: Um seletor para escolher a prioridade da tarefa.
- **Data de Vencimento**: Campo de entrada para a data em que a tarefa deve ser concluída.
- **Realizado Em**: Campo de entrada para a data em que a tarefa foi concluída.
- **Descrição**: Área de texto para descrever a tarefa.
- **Subtarefas**: Seção para adicionar e gerenciar subtarefas, com funcionalidade de arrastar e soltar.
- **Anexos**: Opção para adicionar arquivos relacionados à tarefa.

## Funcionalidades

- **Gerenciamento de Subtarefas**: Permite adicionar, remover e reordenar subtarefas.
- **Upload de Anexos**: Suporta o upload de arquivos, com a possibilidade de visualizar e remover anexos pendentes e salvos.
- **Validação de Campos**: Campos são desabilitados se o usuário não tiver permissão para editar.
- **Feedback ao Usuário**: Utiliza um sistema de toast para fornecer feedback sobre ações realizadas, como sucesso ou erro em operações.

## Hooks Utilizados

- `useEffect`: Para buscar prioridades e carregar dados da tarefa ao editar.
- `useState`: Para gerenciar o estado dos campos do formulário e controle de loading.

## Exemplo de Uso

```jsx
<TaskForm tarefaId="12345" />
```

## Considerações

- O componente depende de serviços externos, como `taskService`, para interagir com a API e gerenciar tarefas.
- A biblioteca `@hello-pangea/dnd` é utilizada para implementar a funcionalidade de arrastar e soltar nas subtarefas.
- O componente é otimizado para uso em aplicações Next.js, utilizando o roteamento do Next para navegação.