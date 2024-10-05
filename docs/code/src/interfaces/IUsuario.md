---
title: IUsuario
description: 'Interface que define a estrutura de um usuário e suas permissões no sistema.'
---

# IUsuario

A interface `IUsuario` define a estrutura de um usuário no sistema, incluindo informações básicas e metadados sobre sua conta.

## Estrutura da Interface

```typescript
export interface IUsuario {
    id?: string;                  // Identificador único do usuário (opcional)
    nome: string;                // Nome completo do usuário
    email: string;               // Endereço de e-mail do usuário
    senha?: string;              // Senha do usuário (opcional)
    profileImage?: string;       // URL da imagem de perfil do usuário (opcional)
    criadoEm?: Date;             // Data de criação da conta (opcional)
    atualizadoEm?: Date;         // Data da última atualização da conta (opcional)
}
```

## IUsuarioPermitido

A interface `IUsuarioPermitido` define as permissões de um usuário, incluindo se ele pode editar informações.

```typescript
export interface IUsuarioPermitido {
    email: string;               // Endereço de e-mail do usuário
    podeEditar: boolean;         // Indica se o usuário tem permissão para editar
    criadoEm?: Date;             // Data de criação do registro de permissão (opcional)
    atualizadoEm?: Date;         // Data da última atualização do registro de permissão (opcional)
}
```

## Considerações

- Os campos marcados como opcionais (`?`) podem não estar presentes em todas as instâncias da interface.
- As datas devem ser manipuladas como objetos `Date` do JavaScript, permitindo fácil formatação e comparação.