---
title: IPrioridade
description: 'Interface que define a estrutura de uma prioridade no sistema.'
---

A interface `IPrioridade` é utilizada para representar uma prioridade dentro do sistema. Ela contém as seguintes propriedades:

- `id?`: (opcional) Identificador único da prioridade.
- `usuarioId?`: (opcional) Identificador do usuário associado à prioridade.
- `nome`: Nome da prioridade, que é um campo obrigatório.
- `criadoEm?`: (opcional) Data de criação da prioridade.
- `atualizadoEm?`: (opcional) Data da última atualização da prioridade.
- `personalizacao`: Um objeto do tipo `IPersonalizacao`, que contém informações de personalização associadas à prioridade.

### Exemplo de uso

```typescript
const prioridade: IPrioridade = {
    nome: "Alta",
    personalizacao: {
        // propriedades de IPersonalizacao
    }
};
```

### Dependências

A interface `IPrioridade` depende da interface `IPersonalizacao`, que deve ser importada do arquivo `IPersonalizacao.ts`.