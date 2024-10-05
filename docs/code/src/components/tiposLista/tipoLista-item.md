---
title: tipoLista-item
description: 'Componente que representa um item de tipo de lista, permitindo visualização e ações de edição e exclusão.'
---

# tipoLista-item

O componente `TipoListaItem` é responsável por renderizar um item de tipo de lista, exibindo suas informações e permitindo ações como edição e exclusão.

## Propriedades

O componente aceita as seguintes propriedades:

- **tipoLista** (`ITipoLista`): Objeto que contém as informações do tipo de lista, incluindo personalização e nome.
- **onDelete** (`(id: string) => void`): Função a ser chamada quando o item for excluído, recebendo o ID do tipo de lista como argumento.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

1. **Renderização do Item**: O componente exibe um ícone e uma cor de fundo, além do nome do tipo de lista.
2. **Ações**: Se o usuário não for um administrador, são exibidos botões para editar e excluir o tipo de lista.
   - O botão de edição redireciona para a página de edição do tipo de lista.
   - O botão de exclusão chama a função `onDelete` com o ID do tipo de lista.

## Exemplo de Uso

```jsx
import TipoListaItem from './src/components/tiposLista/tipoLista-item';
import { ITipoLista } from '@/interfaces/ITipoLista';

const tipoLista: ITipoLista = {
    id: '1',
    nome: 'Lista de Tarefas',
    personalizacao: {
        icone: '📝',
        cor: '#FF5733'
    },
    usuarioId: 'user123'
};

const handleDelete = (id: string) => {
    console.log(`Tipo de lista com ID ${id} foi excluído.`);
};

<TipoListaItem tipoLista={tipoLista} onDelete={handleDelete} />
```

## Estilos

O componente utiliza classes do Tailwind CSS para estilização, garantindo uma aparência responsiva e moderna. As classes aplicadas incluem:

- `flex`, `items-center`, `justify-between`: Para layout flexível.
- `bg-white`, `dark:bg-[#1E1E1E]`: Para definir o fundo do componente.
- `rounded-lg`, `shadow-md`, `border`: Para bordas e sombras.

## Considerações

- O componente deve ser utilizado dentro de um contexto onde o estado do tipo de lista e a função de exclusão estejam disponíveis.
- A personalização do ícone e da cor deve ser fornecida através do objeto `tipoLista`.