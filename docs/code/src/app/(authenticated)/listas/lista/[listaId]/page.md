---
title: VisualizarLista
description: 'Componente para visualizar e gerenciar uma lista de tarefas, permitindo a edição, exclusão e reordenação das tarefas.'
---

# VisualizarLista

O componente `VisualizarLista` é responsável por exibir uma lista de tarefas, permitindo ao usuário gerenciar as tarefas associadas a uma lista específica. Este componente utiliza a biblioteca de drag-and-drop `@hello-pangea/dnd` para permitir a reordenação das tarefas.

## Estrutura do Componente

### Importações

O componente importa diversos módulos e componentes, incluindo:

- **Bibliotecas de Drag-and-Drop**: `DragDropContext`, `Droppable`, `Draggable` do `@hello-pangea/dnd`.
- **Componentes de UI**: `Tarefa`, `Button`, `Loading`, `AlertDialog`, `Label`, `Select`, `Input`.
- **Hooks e Serviços**: `useToast`, `useTarefa`, `listService`, `taskService`, `dateService`.
- **Enums e Interfaces**: `ITipoLista`, `ITarefa`, `IPrioridade`, `StatusEnum`.

### Estado do Componente

O componente utiliza o hook `useState` para gerenciar os seguintes estados:

- `nome`: Nome da lista.
- `personalizacao`: Personalização da lista (ícone e cor).
- `tipoLista`: Tipo da lista.
- `tarefas`: Lista de tarefas.
- `isPermitidoEditar`: Permissão para editar a lista.
- `isDialogOpen`: Controle do diálogo de confirmação de exclusão.
- `taskToDelete`: ID da tarefa a ser excluída.
- `searchTerm`: Termo de busca para filtrar tarefas.
- `searchTermPrioridade`: Termo de busca para filtrar prioridades.
- `prioridadeId`: ID da prioridade selecionada.
- `prioridades`: Lista de prioridades disponíveis.

### Efeitos Colaterais

O componente utiliza `useEffect` para:

- Buscar a lista e suas tarefas ao ser montado.
- Atualizar a lista de prioridades com base no termo de busca.

### Funções Principais

- **onDragEnd**: Manipula a reordenação das tarefas após um evento de drag-and-drop.
- **retornarStatus**: Retorna o status da tarefa com base na data de vencimento.
- **handleToggleComplete**: Atualiza o status de conclusão de uma tarefa.
- **handleExcluir**: Exclui uma tarefa da lista.
- **confirmDelete**: Confirma a exclusão de uma tarefa.
- **openDialog**: Abre o diálogo de confirmação de exclusão.
- **fetchLista**: Busca os detalhes da lista a ser visualizada.

### Renderização

O componente renderiza:

- Um cabeçalho com o nome e personalização da lista.
- Botões para voltar e editar a lista, além de adicionar novas tarefas se a edição for permitida.
- Campos de filtro para buscar tarefas e selecionar prioridades.
- A lista de tarefas, que pode ser reordenada.
- Um diálogo de confirmação para a exclusão de tarefas.

## Uso

Para utilizar o componente `VisualizarLista`, ele deve ser importado e utilizado dentro de uma página ou outro componente React, garantindo que as dependências necessárias estejam instaladas e configuradas corretamente.