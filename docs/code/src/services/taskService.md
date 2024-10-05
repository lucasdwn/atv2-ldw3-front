---
title: taskService
description: 'Serviço responsável pela manipulação de tarefas e prioridades, incluindo operações de criação, atualização e exclusão.'
---

# taskService

O `taskService` é um módulo que fornece uma interface para interagir com a API relacionada a tarefas e prioridades. Ele inclui métodos para criar, atualizar, buscar e deletar tarefas e prioridades, além de manipular a ordenação e o upload de documentos.

## Métodos

### `atualizarOrdenacao(listaId: string, ordenacao: IOrdenacao[]): Promise<ITarefa>`

Atualiza a ordenação das tarefas em uma lista específica.

- **Parâmetros:**
  - `listaId`: ID da lista cujas tarefas serão ordenadas.
  - `ordenacao`: Array de objetos que define a nova ordenação das tarefas.

- **Retorno:** Uma promessa que resolve para a tarefa atualizada.

### `atualizarRealizadoEm(listaId: string, realizadoEm: IRealizadoEm): Promise<ITarefa>`

Atualiza a data de conclusão de uma tarefa em uma lista.

- **Parâmetros:**
  - `listaId`: ID da lista que contém a tarefa.
  - `realizadoEm`: Objeto que contém a nova data de conclusão.

- **Retorno:** Uma promessa que resolve para a tarefa atualizada.

### `deleteTarefa(listaId: string, tarefaId: string): Promise<ITarefa>`

Deleta uma tarefa específica de uma lista.

- **Parâmetros:**
  - `listaId`: ID da lista que contém a tarefa.
  - `tarefaId`: ID da tarefa a ser deletada.

- **Retorno:** Uma promessa que resolve para a tarefa deletada.

### `getPrioridades(tarefaId: string, search?: string, limit?: number): Promise<IPrioridade[]>`

Busca as prioridades associadas a uma tarefa.

- **Parâmetros:**
  - `tarefaId`: ID da tarefa para a qual as prioridades serão buscadas.
  - `search`: (opcional) Termo de busca para filtrar as prioridades.
  - `limit`: (opcional) Limite de resultados a serem retornados.

- **Retorno:** Uma promessa que resolve para um array de prioridades.

### `createTarefa(listaId: string, tarefa: ITarefa): Promise<ITarefa>`

Cria uma nova tarefa em uma lista específica.

- **Parâmetros:**
  - `listaId`: ID da lista onde a tarefa será criada.
  - `tarefa`: Objeto que representa a nova tarefa.

- **Retorno:** Uma promessa que resolve para a tarefa criada.

### `buscarTarefa(listaId: string, tarefaId: string): Promise<ITarefa>`

Busca uma tarefa específica em uma lista.

- **Parâmetros:**
  - `listaId`: ID da lista que contém a tarefa.
  - `tarefaId`: ID da tarefa a ser buscada.

- **Retorno:** Uma promessa que resolve para a tarefa encontrada.

### `updateTarefa(listaId: string, tarefaId: string, tarefa: ITarefa): Promise<ITarefa>`

Atualiza uma tarefa existente em uma lista.

- **Parâmetros:**
  - `listaId`: ID da lista que contém a tarefa.
  - `tarefaId`: ID da tarefa a ser atualizada.
  - `tarefa`: Objeto que contém os novos dados da tarefa.

- **Retorno:** Uma promessa que resolve para a tarefa atualizada.

### `uploadDocumentos(uploads: File[], tarefaId?: string): Promise<IResponseAnexo>`

Faz o upload de documentos associados a uma tarefa.

- **Parâmetros:**
  - `uploads`: Array de arquivos a serem enviados.
  - `tarefaId`: (opcional) ID da tarefa à qual os documentos estão associados.

- **Retorno:** Uma promessa que resolve para a resposta do upload.

### `buscarPrioridade(prioridadeId: string): Promise<IPrioridade>`

Busca uma prioridade específica pelo seu ID.

- **Parâmetros:**
  - `prioridadeId`: ID da prioridade a ser buscada.

- **Retorno:** Uma promessa que resolve para a prioridade encontrada.

### `createPrioridade(prioridade: IPrioridade): Promise<IPrioridade>`

Cria uma nova prioridade.

- **Parâmetros:**
  - `prioridade`: Objeto que representa a nova prioridade.

- **Retorno:** Uma promessa que resolve para a prioridade criada.

### `updatePrioridade(prioridadeId: string, prioridade: IPrioridade): Promise<IPrioridade>`

Atualiza uma prioridade existente.

- **Parâmetros:**
  - `prioridadeId`: ID da prioridade a ser atualizada.
  - `prioridade`: Objeto que contém os novos dados da prioridade.

- **Retorno:** Uma promessa que resolve para a prioridade atualizada.

### `deletePrioridade(prioridadeId: string): Promise<IPrioridade>`

Deleta uma prioridade específica.

- **Parâmetros:**
  - `prioridadeId`: ID da prioridade a ser deletada.

- **Retorno:** Uma promessa que resolve para a prioridade deletada.