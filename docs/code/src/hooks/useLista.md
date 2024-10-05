
---
title: useLista
description: 'Um hook customizado para gerenciar listas, incluindo busca e paginação.'
---

# useLista

O `useLista` é um hook customizado que facilita a manipulação de listas em uma aplicação React. Ele permite buscar listas de um endpoint específico, gerenciar o estado de carregamento e tratar erros de forma eficiente.

## Estrutura

```typescript
const useLista = (page: number, limit: number, fetchUrl: string, search: string, tipoListaId: string) => { ... }
```

### Parâmetros

- `page` (number): O número da página a ser carregada.
- `limit` (number): O número máximo de itens a serem retornados por página.
- `fetchUrl` (string): A URL base para a requisição de listas.
- `search` (string): Um termo de busca para filtrar as listas.
- `tipoListaId` (string): O ID do tipo de lista a ser filtrado.

### Retorno

O hook retorna um objeto contendo:

- `listas` (ILista[]): A lista de itens retornados pela API.
- `total` (number): O total de itens disponíveis.
- `loading` (boolean): Um indicador de carregamento.
- `error` (string | null): Mensagem de erro, se houver.
- `refetch` (function): Uma função para refazer a requisição.

## Exemplo de Uso

```javascript
const { listas, total, loading, error, refetch } = useLista(1, 10, 'minhasListas', 'termo', 'tipoId');
```

## Considerações

- O hook utiliza o `useEffect` para realizar a busca sempre que os parâmetros `page`, `limit`, `search` ou `tipoListaId` mudam.
- Em caso de erro durante a requisição, uma notificação é exibida utilizando o hook `useToast`.
