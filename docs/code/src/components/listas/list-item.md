---
title: list-item
description: 'Componente que representa um item de lista, permitindo a visualização e ações como edição e exclusão.'
---

# ListItem

O componente `ListItem` é responsável por renderizar um item de lista, exibindo informações relevantes e permitindo ações como edição e exclusão. Ele utiliza ícones e cores personalizadas para melhorar a experiência do usuário.

## Props

O componente aceita as seguintes propriedades:

- **lista** (`ILista`): Objeto que contém as informações da lista, incluindo personalização e nome.
- **tipoLista** (`ITipoLista | string`): Tipo da lista, que pode ser um objeto ou uma string.
- **IsShared** (`boolean`): Indica se a lista é compartilhada.
- **onDelete** (`(id: string) => void`): Função chamada ao solicitar a exclusão da lista.

## Comportamento

- Ao clicar no item da lista, o usuário é redirecionado para a página de detalhes da lista correspondente.
- O componente exibe um ícone e uma cor associados à lista, além de um botão para editar e, se a lista não for compartilhada, um botão para excluir.

## Exemplo de Uso

```tsx
<ListItem 
    lista={listaExemplo} 
    tipoLista={tipoListaExemplo} 
    IsShared={false} 
    onDelete={handleDelete} 
/>
```

## Estilos

O componente utiliza classes do Tailwind CSS para estilização, garantindo uma aparência responsiva e moderna. As classes aplicadas incluem:

- `flex`, `items-center`, `justify-between`: Para layout flexível.
- `bg-white`, `dark:bg-[#1E1E1E]`: Para cores de fundo que mudam com o tema.
- `rounded-lg`, `shadow-md`: Para bordas arredondadas e sombra.

## Dependências

- `lucide-react`: Para ícones.
- `@/components/ui/button`: Para o componente de botão.
- `next/navigation`: Para navegação entre páginas.

Este componente é uma parte essencial da interface de gerenciamento de listas, proporcionando uma interação intuitiva e visualmente agradável.