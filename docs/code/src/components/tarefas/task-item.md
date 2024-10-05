---
title: task-item
description: 'Componente que representa uma tarefa, exibindo suas informações e permitindo interações como marcar como concluída e excluir.'
---

# Componente Tarefa

O componente `Tarefa` é responsável por exibir as informações de uma tarefa, incluindo seu título, data de vencimento, status e prioridade. Ele também permite interações como marcar a tarefa como concluída e excluí-la, dependendo das permissões do usuário.

## Props

O componente aceita as seguintes propriedades:

- **tarefa** (`ITarefa`): Objeto que contém as informações da tarefa.
- **prioridade** (`IPrioridade | string`): Objeto ou string que representa a prioridade da tarefa.
- **isPermitidoEditar** (`boolean`): Indica se o usuário tem permissão para editar a tarefa.
- **onExcluir** (`() => void`): Função chamada ao excluir a tarefa.
- **onToggleComplete** (`(id: string, isCompleted: boolean) => void`): Função chamada ao alternar o status de conclusão da tarefa.
- **onClick** (`() => void`): Função chamada ao clicar no componente.

## Comportamento

- O componente verifica se a tarefa está atrasada ou pendente com base na data de vencimento e atualiza o status da tarefa conforme necessário.
- O status da tarefa é exibido com um estilo visual que varia de acordo com seu estado (pendente, concluída ou atrasada).
- A prioridade da tarefa é exibida com um ícone e uma cor personalizada, se disponível.

## Exemplo de Uso

```tsx
<Tarefa
    tarefa={tarefa}
    prioridade={prioridade}
    isPermitidoEditar={true}
    onExcluir={() => console.log('Excluir tarefa')}
    onToggleComplete={(id, isCompleted) => console.log(`Tarefa ${id} concluída: ${isCompleted}`)}
    onClick={() => console.log('Tarefa clicada')}
/>
```

## Estilos

O componente utiliza classes do Tailwind CSS para estilização, garantindo uma aparência responsiva e moderna. As cores e estilos são ajustados com base no tema (claro ou escuro) e no estado da tarefa.