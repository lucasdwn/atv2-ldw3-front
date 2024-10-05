---
title: Listagem
description: 'Componente responsável pela exibição e gerenciamento de listas, incluindo funcionalidades de paginação, filtro e remoção.'
---

# Listagem

O componente `Listagem` é responsável por exibir uma lista de itens, permitindo ao usuário gerenciar suas listas de forma interativa. Este componente inclui funcionalidades como paginação, filtragem e remoção de listas.

## Props

### ListagemProps

- **title**: `string` - Título a ser exibido no cabeçalho da lista.
- **fetchUrl**: `string` - URL utilizada para buscar os dados das listas.
- **IsShared**: `boolean` - Indica se a lista é compartilhada.

## Estado Interno

O componente utiliza os seguintes estados internos:

- `currentPage`: Número da página atual.
- `isDialogOpen`: Estado que controla a abertura do diálogo de confirmação de remoção.
- `listToDelete`: ID da lista que será removida.
- `searchTerm`: Termo de busca para filtrar listas.
- `searchTermTipoLista`: Termo de busca para filtrar tipos de lista.
- `tipoListaId`: ID do tipo de lista selecionado.
- `tipoListas`: Array de tipos de lista disponíveis.

## Efeitos

O componente utiliza o hook `useEffect` para buscar os tipos de lista disponíveis sempre que o `searchTermTipoLista` é alterado.

## Funções

- **nextPage**: Avança para a próxima página, se disponível.
- **prevPage**: Retorna para a página anterior, se não estiver na primeira página.
- **novaLista**: Redireciona o usuário para a página de criação de uma nova lista.
- **handleDelete**: Remove uma lista com base no ID fornecido e exibe um toast de sucesso ou erro.
- **openDialog**: Abre o diálogo de confirmação de remoção, definindo a lista a ser deletada.
- **confirmDelete**: Confirma a remoção da lista selecionada.

## Renderização

O componente renderiza:

- Um cabeçalho com o título e um botão para criar uma nova lista (se não for compartilhada).
- Um campo de entrada para filtrar listas.
- Um seletor para escolher o tipo de lista.
- A lista de itens, que são renderizados através do componente `ListItem`.
- Controles de paginação para navegar entre as páginas de listas.
- Um diálogo de confirmação para a remoção de listas.

## Exemplo de Uso

```jsx
<Listagem fetchUrl="/api/listas" title="Minhas Listas" IsShared={false} />
```

Este componente é uma parte fundamental da interface de gerenciamento de listas, proporcionando uma experiência de usuário fluida e interativa.