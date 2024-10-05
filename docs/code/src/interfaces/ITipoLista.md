---
title: ITipoLista
description: 'Interface que define a estrutura de um tipo de lista, incluindo propriedades como id, nome e personalização.'
---

# ITipoLista

A interface `ITipoLista` define a estrutura de um tipo de lista no sistema. Ela inclui as seguintes propriedades:

- `id?`: (opcional) Identificador único do tipo de lista.
- `usuarioId?`: (opcional) Identificador do usuário associado ao tipo de lista.
- `nome`: Nome do tipo de lista.
- `criadoEm?`: (opcional) Data de criação do tipo de lista.
- `atualizadoEm?`: (opcional) Data da última atualização do tipo de lista.
- `personalizacao`: Objeto que contém as personalizações associadas ao tipo de lista, implementado pela interface `IPersonalizacao`.

## Exemplo de Uso

```typescript
const tipoListaExemplo: ITipoLista = {
    id: "1",
    usuarioId: "123",
    nome: "Lista de Tarefas",
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    personalizacao: {
        // propriedades de personalização
    }
};
```

Esta interface é fundamental para a manipulação e gerenciamento de tipos de listas dentro da aplicação.