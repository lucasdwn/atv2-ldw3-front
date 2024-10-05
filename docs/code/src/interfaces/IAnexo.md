```
---
title: IAnexo
description: 'Interface que define a estrutura de um anexo e a resposta associada.'
---

# IAnexo

A interface `IAnexo` define a estrutura de um anexo em um sistema de gerenciamento de tarefas. Ela inclui informações sobre o anexo, como seu identificador, o usuário associado, a tarefa relacionada, a URL do arquivo, o nome original do arquivo e as datas de criação e atualização.

## Estrutura da Interface

```typescript
export interface IAnexo {
    id?: string;                // Identificador único do anexo (opcional)
    usuarioId?: string;        // Identificador do usuário que fez o upload (opcional)
    tarefaId?: string;         // Identificador da tarefa associada (opcional)
    url: string;               // URL do anexo
    originalFilename: string;   // Nome original do arquivo
    criadoEm: Date;            // Data de criação do anexo
    atualizadoEm?: Date;       // Data da última atualização do anexo (opcional)
    file?: File;               // Objeto File do anexo (opcional)
};
```

## IResponseAnexo

A interface `IResponseAnexo` define a estrutura da resposta que contém uma mensagem e uma lista de anexos.

```typescript
export interface IResponseAnexo {
    message: string;           // Mensagem de resposta
    anexos: IAnexo[];         // Lista de anexos
}
```

## Uso

Essas interfaces são úteis para garantir que os dados relacionados a anexos sejam consistentes e bem estruturados ao serem manipulados em um sistema de gerenciamento de tarefas.