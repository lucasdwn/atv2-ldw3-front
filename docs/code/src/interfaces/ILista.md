---
title: ILista
description: 'Interface que define a estrutura de uma lista, incluindo propriedades como id, nome, tipo e personalização.'
---

## ILista

A interface `ILista` representa a estrutura de uma lista em um sistema. Ela contém diversas propriedades que definem as características e permissões associadas a uma lista.

### Propriedades

- **id**: `string` (opcional)  
  Identificador único da lista.

- **usuarioId**: `string` (opcional)  
  Identificador do usuário que criou a lista.

- **tipoListaId**: `string | ITipoLista`  
  Identificador do tipo de lista, que pode ser uma string ou uma instância da interface `ITipoLista`.

- **nome**: `string`  
  Nome da lista.

- **usuariosPermitidos**: `IUsuarioPermitido[]` (opcional)  
  Lista de usuários que têm permissão para acessar a lista.

- **criadoEm**: `Date` (opcional)  
  Data em que a lista foi criada.

- **atualizadoEm**: `Date` (opcional)  
  Data da última atualização da lista.

- **personalizacao**: `IPersonalizacao`  
  Objeto que contém as configurações de personalização da lista.

- **isEditUsuarios**: `boolean` (opcional)  
  Indica se a edição de usuários permitidos está habilitada.

- **isPermitidoEditar**: `boolean` (opcional)  
  Indica se a lista pode ser editada.

### Exemplo de Uso

```typescript
const minhaLista: ILista = {
    id: "1",
    usuarioId: "123",
    tipoListaId: "tipo1",
    nome: "Minha Lista",
    usuariosPermitidos: [],
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    personalizacao: {
        // propriedades de personalização
    },
    isEditUsuarios: true,
    isPermitidoEditar: false,
};
```

Esta interface é fundamental para a gestão de listas dentro do sistema, permitindo a definição clara de suas propriedades e comportamentos.