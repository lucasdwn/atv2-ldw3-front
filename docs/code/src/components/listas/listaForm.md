---
title: listaForm
description: 'Componente para criação e edição de listas, permitindo a personalização e gerenciamento de usuários permitidos.'
---

# ListaForm

O componente `ListaForm` é utilizado para criar e editar listas em uma aplicação. Ele permite que o usuário defina o nome da lista, selecione um tipo de lista, personalize a aparência e adicione usuários permitidos com diferentes permissões.

## Props

### `listaId?`
- **Tipo**: `string`
- **Descrição**: ID da lista a ser editada. Se fornecido, o componente entra no modo de edição.

## Estado Interno

- `nome`: Armazena o nome da lista.
- `tipoListaId`: Armazena o ID do tipo de lista selecionado.
- `personalizacao`: Objeto que contém o ícone e a cor da lista.
- `tipoListas`: Array de tipos de lista disponíveis.
- `searchTerm`: Termo de busca para filtrar tipos de lista.
- `isEditing`: Indica se o componente está em modo de edição.
- `usuariosPermitidos`: Lista de usuários que têm permissão para acessar a lista.
- `email`: Armazena o e-mail do usuário a ser adicionado.
- `podeEditar`: Indica se o usuário pode editar a lista.
- `isFetching`: Indica se os dados estão sendo carregados.
- `isSubmit`: Indica se o formulário está sendo submetido.

## Efeitos Colaterais

- **Busca de Tipos de Lista**: Ao montar o componente ou ao alterar o `searchTerm`, uma chamada é feita para buscar os tipos de lista disponíveis.
- **Busca de Lista**: Se o componente estiver em modo de edição, ele busca os dados da lista correspondente ao `listaId` fornecido.

## Funções

### `handleAddUsuario`
Adiciona um usuário à lista de usuários permitidos, verificando se o e-mail já está presente.

### `handleRemoveUsuario`
Remove um usuário da lista de usuários permitidos.

### `handleSubmit`
Submete o formulário, criando ou atualizando a lista conforme o modo (edição ou criação).

## Renderização

O componente renderiza um formulário que inclui:

- Campo para o nome da lista.
- Seleção do tipo de lista com um campo de busca.
- Personalização da lista com um seletor de emoji e um seletor de cor.
- Seção para adicionar usuários permitidos, com a opção de definir se eles podem editar a lista.
- Lista de usuários permitidos com a opção de removê-los.

## Exemplo de Uso

```tsx
<ListaForm listaId="12345" />
```

Este exemplo renderiza o formulário de lista em modo de edição para a lista com ID "12345".