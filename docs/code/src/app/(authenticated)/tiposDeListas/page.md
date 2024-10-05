---
title: TiposListas
description: 'Componente para gerenciar e exibir tipos de listas, incluindo funcionalidades de paginação e remoção.'
---

# TiposListas

O componente `TiposListas` é responsável por gerenciar e exibir uma lista de tipos de listas. Ele inclui funcionalidades para paginação, busca e remoção de tipos de listas.

## Estrutura do Componente

### Importações

O componente utiliza várias bibliotecas e componentes, incluindo:

- **React**: Para gerenciamento de estado e renderização.
- **UI Components**: Botões, inputs e diálogos de alerta.
- **Hooks Personalizados**: `useTipoLista` para buscar tipos de listas e `useToast` para exibir mensagens de feedback.
- **Serviços**: `listService` para interações com a API.

### Estado

O componente mantém os seguintes estados:

- `currentPage`: Página atual da lista.
- `isDialogOpen`: Controle do estado do diálogo de confirmação de remoção.
- `tipoListaToDelete`: ID do tipo de lista a ser removido.
- `searchTerm`: Termo de busca para filtrar tipos de listas.

### Funções Principais

- **nextPage**: Avança para a próxima página, se disponível.
- **prevPage**: Retorna para a página anterior, se não estiver na primeira.
- **openDialog**: Abre o diálogo de confirmação para remoção de um tipo de lista.
- **confirmDelete**: Confirma a remoção do tipo de lista selecionado.
- **handleDelete**: Realiza a chamada para remover o tipo de lista e exibe feedback ao usuário.

### Renderização

O componente renderiza:

- Um cabeçalho com o título e um botão para adicionar um novo tipo de lista.
- Um campo de busca para filtrar tipos de listas.
- A lista de tipos de listas, utilizando o componente `TipoListaItem`.
- Controles de paginação para navegar entre as páginas de tipos de listas.
- Um diálogo de confirmação para a remoção de tipos de listas.

### Exemplo de Uso

```jsx
<TiposListas />
```

## Considerações Finais

O componente `TiposListas` é uma parte essencial da interface de gerenciamento de listas, permitindo que os usuários visualizem, filtrem e removam tipos de listas de forma eficiente.