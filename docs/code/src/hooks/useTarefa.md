---
title: useTarefa
description: 'Um hook personalizado para gerenciar tarefas em uma lista, incluindo busca e carregamento de dados.'
---

# useTarefa

O `useTarefa` é um hook personalizado que facilita a manipulação de tarefas associadas a uma lista específica. Ele permite buscar tarefas com base em um ID de lista, um termo de busca e um ID de prioridade.

## Estrutura

```typescript
const useTarefa = (listaId: string, search: string, prioridadeId: string) => { ... }
```

### Parâmetros

- `listaId` (string): O ID da lista cujas tarefas devem ser recuperadas.
- `search` (string): Um termo de busca para filtrar as tarefas.
- `prioridadeId` (string): O ID da prioridade para filtrar as tarefas.

### Retorno

O hook retorna um objeto contendo:

- `tarefas` (ITarefa[]): Um array de tarefas recuperadas.
- `loading` (boolean): Um indicador de carregamento que informa se os dados estão sendo buscados.
- `refetch` (function): Uma função que pode ser chamada para refazer a busca das tarefas.

## Funcionamento

1. **Estado Inicial**: O hook utiliza `useState` para gerenciar o estado das tarefas e o estado de carregamento.
2. **Função fetchTarefas**: Esta função é responsável por fazer a requisição à API para buscar as tarefas. Ela utiliza o `apiService` para realizar a chamada GET e atualiza o estado das tarefas com a resposta.
3. **Tratamento de Erros**: Em caso de erro durante a requisição, um toast é exibido com a mensagem de erro.
4. **Efeito Colateral**: O `useEffect` é utilizado para chamar `fetchTarefas` sempre que `search` ou `prioridadeId` mudarem, garantindo que as tarefas sejam atualizadas conforme necessário.

## Exemplo de Uso

```typescript
const { tarefas, loading, refetch } = useTarefa('listaIdExemplo', 'termoDeBusca', 'prioridadeIdExemplo');
```

Este hook é útil para aplicações que necessitam de uma interface dinâmica para gerenciar e visualizar tarefas, permitindo uma experiência de usuário mais fluida e responsiva.