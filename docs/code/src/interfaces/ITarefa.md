---
title: ITarefa
description: 'Interface que define a estrutura de uma tarefa e suas sub-tarefas no sistema.'
---

# ITarefa

A interface `ITarefa` define a estrutura de uma tarefa no sistema, incluindo suas propriedades e relacionamentos com outras entidades, como listas, prioridades e anexos.

## Propriedades

- **id**: `string` (opcional)  
  Identificador único da tarefa.

- **listaId**: `string | ILista` (opcional)  
  Identificador da lista à qual a tarefa pertence ou a própria lista.

- **titulo**: `string`  
  Título da tarefa.

- **descricao**: `string`  
  Descrição detalhada da tarefa.

- **ordenacao**: `number` (opcional)  
  Valor que define a ordem da tarefa em relação a outras.

- **prioridadeId**: `string | IPrioridade`  
  Identificador da prioridade da tarefa ou a própria prioridade.

- **status**: `StatusEnum`  
  Status atual da tarefa, representado por um enum.

- **subTarefas**: `ISubTarefa[]` (opcional)  
  Lista de sub-tarefas associadas à tarefa.

- **anexos**: `IAnexo[]` (opcional)  
  Lista de anexos relacionados à tarefa.

- **dataDeVencimento**: `Date`  
  Data em que a tarefa deve ser concluída.

- **realizadoEm**: `Date` (opcional)  
  Data em que a tarefa foi concluída.

- **criadoEm**: `Date` (opcional)  
  Data em que a tarefa foi criada.

- **atualizadoEm**: `Date` (opcional)  
  Data da última atualização da tarefa.

- **isPermitidoEditar**: `boolean` (opcional)  
  Indica se a tarefa pode ser editada.

## ISubTarefa

A interface `ISubTarefa` define a estrutura de uma sub-tarefa.

### Propriedades

- **id**: `string` (opcional)  
  Identificador único da sub-tarefa.

- **titulo**: `string`  
  Título da sub-tarefa.

- **descricao**: `string`  
  Descrição detalhada da sub-tarefa.

- **ordenacao**: `number` (opcional)  
  Valor que define a ordem da sub-tarefa em relação a outras.

- **criadoEm**: `Date` (opcional)  
  Data em que a sub-tarefa foi criada.

- **isFinalizada**: `boolean` (opcional)  
  Indica se a sub-tarefa foi concluída.

## IOrdenacao

A interface `IOrdenacao` define a estrutura para a ordenação de tarefas.

### Propriedades

- **id**: `string`  
  Identificador da tarefa.

- **ordenacao**: `number`  
  Valor que define a ordem da tarefa.

## IRealizadoEm

A interface `IRealizadoEm` define a estrutura para o registro da data de conclusão de uma tarefa.

### Propriedades

- **id**: `string`  
  Identificador da tarefa.

- **realizadoEm**: `Date | null`  
  Data em que a tarefa foi concluída ou `null` se não foi concluída.