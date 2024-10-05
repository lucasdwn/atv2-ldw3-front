---
title: useTipoLista
description: 'Um hook personalizado para gerenciar e buscar tipos de lista a partir de uma API.'
---

# useTipoLista

O `useTipoLista` é um hook personalizado que facilita a busca e o gerenciamento de tipos de lista em uma aplicação React. Ele utiliza a API para obter dados e fornece estados de carregamento, erro e total de itens.

## Estrutura

```typescript
const useTipoLista = (page: number, limit: number, search: string) => {
    // ... implementação
};
```

### Parâmetros

- `page` (number): O número da página a ser buscada.
- `limit` (number): O número máximo de itens a serem retornados por página.
- `search` (string): Um termo de busca para filtrar os tipos de lista.

### Retorno

O hook retorna um objeto contendo:

- `tiposLista` (ITipoLista[]): A lista de tipos de lista obtida da API.
- `total` (number): O total de tipos de lista disponíveis.
- `loading` (boolean): Um indicador de carregamento, que é `true` enquanto a requisição está em andamento.
- `error` (string | null): Uma mensagem de erro, caso ocorra durante a requisição.
- `refetch` (function): Uma função para reexecutar a busca dos tipos de lista.

## Exemplo de Uso

```javascript
const { tiposLista, total, loading, error, refetch } = useTipoLista(1, 10, 'exemplo');
```

## Funcionamento Interno

1. **Estado Inicial**: O hook inicializa os estados `tiposLista`, `loading`, `error` e `total`.
2. **Função de Busca**: A função `fetchTiposLista` é responsável por fazer a requisição à API e atualizar os estados conforme a resposta.
3. **Efeito Colateral**: O hook utiliza `useEffect` para chamar `fetchTiposLista` sempre que `page`, `limit` ou `search` mudam.
4. **Tratamento de Erros**: Em caso de erro na requisição, uma notificação é exibida utilizando o hook `useToast`.

## Considerações

- Certifique-se de que a API esteja acessível e que os endpoints estejam corretos.
- O hook deve ser utilizado dentro de um componente funcional do React.