---
title: TarefaPage
description: 'Componente responsável pela exibição e manipulação de uma tarefa específica, utilizando o ID da tarefa obtido a partir dos parâmetros da URL.'
---

# TarefaPage

O componente `TarefaPage` é responsável por renderizar a página de uma tarefa específica. Ele utiliza o ID da tarefa, que é extraído dos parâmetros da URL, para carregar e exibir o formulário correspondente à tarefa.

## Estrutura do Componente

```javascript
'use client';

import Loading from "@/components/loading";
import { TaskForm } from "@/components/tarefas/taskForm";
import { useParams } from "next/navigation";

export default function TarefaPage() {
    const { tarefaId } = useParams() as { tarefaId: string };

    if (!tarefaId) return <Loading />;

    return <TaskForm tarefaId={tarefaId}/>;
}
```

### Importações

- **Loading**: Componente que exibe um indicador de carregamento enquanto a tarefa está sendo carregada.
- **TaskForm**: Componente que renderiza o formulário para edição ou visualização da tarefa.
- **useParams**: Hook do Next.js que permite acessar os parâmetros da URL.

### Funcionamento

1. **Extração do ID da Tarefa**: O componente utiliza o hook `useParams` para obter o `tarefaId` da URL.
2. **Verificação do ID**: Se o `tarefaId` não estiver presente, o componente renderiza o componente `Loading`.
3. **Renderização do Formulário**: Se o `tarefaId` estiver disponível, o componente `TaskForm` é renderizado, passando o `tarefaId` como prop.

### Considerações

- Este componente é um exemplo de como gerenciar a navegação e a renderização condicional em uma aplicação Next.js.
- A utilização do componente `Loading` melhora a experiência do usuário ao indicar que a tarefa está sendo carregada.