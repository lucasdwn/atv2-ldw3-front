---
title: TarefaPage
description: 'Componente de página para criação de novas tarefas.'
---

# TarefaPage

O componente `TarefaPage` é responsável por renderizar o formulário de criação de novas tarefas. Ele utiliza o componente `TaskForm` para permitir que os usuários insiram os detalhes da nova tarefa.

## Estrutura do Componente

```javascript
import { TaskForm } from "@/components/tarefas/taskForm";

export default function TarefaPage() {
    return <TaskForm />
}
```

### Importações

- **TaskForm**: Componente que fornece a interface para o usuário preencher os dados da nova tarefa.

### Renderização

O componente `TarefaPage` não possui lógica adicional e simplesmente retorna o componente `TaskForm`. Isso permite que a página seja utilizada diretamente para a criação de novas tarefas, mantendo a simplicidade e a clareza na estrutura do código.