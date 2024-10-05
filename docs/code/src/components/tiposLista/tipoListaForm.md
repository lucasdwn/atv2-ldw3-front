---
title: tipoListaForm
description: 'Componente para criação e edição de tipos de lista, permitindo personalização de ícone e cor.'
---

# tipoListaForm

O componente `TipoListaForm` é utilizado para criar ou editar tipos de lista em uma aplicação. Ele permite que o usuário defina um nome para o tipo de lista e personalize sua aparência através de um ícone e uma cor.

## Props

### `tipoListaId?`
- **Tipo**: `string`
- **Descrição**: ID do tipo de lista a ser editado. Se fornecido, o componente entra no modo de edição e carrega os dados correspondentes.

## Estado

O componente gerencia os seguintes estados:

- `nome`: Armazena o nome do tipo de lista.
- `personalizacao`: Objeto que contém o ícone e a cor do tipo de lista.
- `isEditing`: Indica se o componente está no modo de edição.
- `isFetching`: Indica se os dados estão sendo carregados.
- `isSubmit`: Indica se o formulário está sendo submetido.

## Efeitos

- O componente utiliza o `useEffect` para buscar os dados do tipo de lista quando está no modo de edição. Os dados são carregados através do serviço `listService`.

## Funções

### `handleSubmit`
Função responsável por lidar com a submissão do formulário. Dependendo do estado `isEditing`, ela chama o serviço apropriado para criar ou atualizar o tipo de lista. Em caso de sucesso, exibe uma notificação de sucesso e retorna à página anterior.

## Renderização

O componente renderiza um formulário que inclui:

- Um campo de entrada para o nome do tipo de lista.
- Um seletor de emoji para personalizar o ícone.
- Um seletor de cor para personalizar a cor do tipo de lista.
- Botões para voltar e salvar as alterações.

## Exemplo de Uso

```jsx
<TipoListaForm tipoListaId="123" />
```

Este exemplo renderiza o formulário no modo de edição para o tipo de lista com ID "123".