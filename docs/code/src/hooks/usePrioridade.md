---
title: usePrioridade
description: 'Um hook personalizado para gerenciar prioridades, incluindo busca, carregamento e tratamento de erros.'
---

# usePrioridade

O `usePrioridade` é um hook personalizado que facilita a gestão de prioridades em uma aplicação React. Ele permite buscar, armazenar e manipular dados de prioridades, além de gerenciar estados de carregamento e erro.

## Estrutura

```typescript
const usePrioridade = (page: number, limit: number, search: string) => {
    // ... implementação
};
```

### Parâmetros

- `page` (number): O número da página a ser carregada.
- `limit` (number): O número máximo de prioridades a serem retornadas por página.
- `search` (string): Um termo de busca para filtrar as prioridades.

### Retorno

O hook retorna um objeto contendo:

- `prioridades` (IPrioridade[]): Uma lista de prioridades carregadas.
- `total` (number): O total de prioridades disponíveis.
- `loading` (boolean): Um indicador de carregamento.
- `error` (string | null): Uma mensagem de erro, se houver.
- `refetch` (function): Uma função para reexecutar a busca de prioridades.

## Funcionamento

1. **Estado Inicial**: O hook inicializa estados para armazenar as prioridades, o estado de carregamento, erros e o total de prioridades.
2. **Função de Busca**: A função `fetchPrioridades` é responsável por fazer a requisição à API para buscar as prioridades. Ela utiliza o `apiService` para realizar a chamada GET e atualiza os estados conforme a resposta.
3. **Tratamento de Erros**: Em caso de erro durante a requisição, um toast é exibido com a mensagem de erro.
4. **Efeito Colateral**: O hook utiliza `useEffect` para chamar `fetchPrioridades` sempre que `page`, `limit` ou `search` mudarem.

## Exemplo de Uso

```javascript
const { prioridades, total, loading, error, refetch } = usePrioridade(1, 10, 'exemplo');
```

Este hook é útil para aplicações que necessitam de uma interface dinâmica para gerenciar e exibir listas de prioridades, proporcionando uma experiência de usuário fluida e responsiva.