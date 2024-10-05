---
title: PrioridadeItem
description: 'Componente que exibe um item de prioridade com opções de edição e exclusão.'
---

# PrioridadeItem

O componente `PrioridadeItem` é responsável por renderizar um item de prioridade, exibindo seu ícone, cor e nome. Ele também fornece botões para editar e excluir a prioridade, dependendo do usuário.

## Props

### `PrioridadeItemProps`

- **prioridade** (`IPrioridade`): Objeto que contém as informações da prioridade, incluindo personalização e nome.
- **onDelete** (`(id: string) => void`): Função chamada ao solicitar a exclusão da prioridade, recebendo o ID da prioridade como argumento.

## Comportamento

- O componente utiliza o hook `useRouter` do Next.js para navegar para a página de edição da prioridade.
- Se o `usuarioId` da prioridade não for 'admin', os botões de edição e exclusão são exibidos.
- O botão de edição redireciona para a página de edição da prioridade.
- O botão de exclusão chama a função `onDelete` passando o ID da prioridade.

## Estilo

O componente é estilizado com classes do Tailwind CSS, proporcionando um layout responsivo e visualmente agradável. Ele utiliza um fundo branco ou escuro, dependendo do tema, e inclui sombras e bordas para um efeito de profundidade.

## Exemplo de Uso

```jsx
<PrioridadeItem 
    prioridade={prioridade} 
    onDelete={handleDelete} 
/>
```

Neste exemplo, `prioridade` é um objeto que implementa a interface `IPrioridade` e `handleDelete` é uma função que lida com a exclusão da prioridade.