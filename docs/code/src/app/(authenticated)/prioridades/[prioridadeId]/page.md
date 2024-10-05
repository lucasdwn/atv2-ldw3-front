---
title: page.tsx
description: 'Componente responsável pela edição de prioridades, utilizando o formulário de prioridade e gerenciando o estado de carregamento.'
---

# EdicaoPrioridade

O componente `EdicaoPrioridade` é responsável por gerenciar a edição de uma prioridade específica. Ele utiliza o hook `useParams` do Next.js para obter o ID da prioridade a ser editada e renderiza um formulário de edição.

## Estrutura do Componente

```tsx
'use client';

import Loading from '@/components/loading';
import { PrioridadeForm } from '@/components/prioridades/prioridadeForm';
import { useParams } from 'next/navigation';

export default function EdicaoPrioridade() {
    const { prioridadeId } = useParams() as { prioridadeId: string };

    if (!prioridadeId) return <Loading />;

    return <PrioridadeForm prioridadeId={prioridadeId} />;
}
```

## Funcionamento

1. **Importações**:
   - O componente importa `Loading`, que é exibido enquanto a prioridade está sendo carregada.
   - Importa também `PrioridadeForm`, que é o formulário utilizado para editar a prioridade.

2. **Uso do `useParams`**:
   - O hook `useParams` é utilizado para extrair o `prioridadeId` da URL. Este ID é necessário para carregar os dados da prioridade a ser editada.

3. **Renderização Condicional**:
   - Se `prioridadeId` não estiver disponível, o componente renderiza o componente `Loading`.
   - Caso contrário, renderiza o `PrioridadeForm`, passando o `prioridadeId` como prop.

## Considerações

- Este componente deve ser utilizado dentro de uma rota que forneça um `prioridadeId` válido.
- O estado de carregamento é gerenciado de forma a melhorar a experiência do usuário, evitando que um formulário vazio seja exibido enquanto os dados estão sendo carregados.