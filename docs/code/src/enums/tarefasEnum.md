
---
title: tarefasEnum
description: 'Enumeração que define os status das tarefas no sistema.'
---

# tarefasEnum

A enumeração `StatusEnum` é utilizada para representar os diferentes estados que uma tarefa pode ter no sistema. Os valores definidos nesta enumeração são:

- **Pendente**: Indica que a tarefa ainda não foi iniciada.
- **Concluída**: Indica que a tarefa foi finalizada com sucesso.
- **Atrasada**: Indica que a tarefa não foi concluída dentro do prazo estipulado.

## Exemplo de Uso

```typescript
import { StatusEnum } from 'src/enums/tarefasEnum';

const tarefa = {
    nome: 'Estudar para a prova',
    status: StatusEnum.Pendente
};

if (tarefa.status === StatusEnum.Pendente) {
    console.log('A tarefa está pendente.');
}
```

Esta enumeração facilita a manutenção e a legibilidade do código, garantindo que os status das tarefas sejam utilizados de forma consistente em toda a aplicação.
