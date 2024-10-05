---
title: IPersonalizacao
description: 'Interface que define a estrutura de personalização de um item, incluindo ícone, cor e timestamps de criação e atualização.'
---

# IPersonalizacao

A interface `IPersonalizacao` define a estrutura de um objeto de personalização, que pode ser utilizado em diferentes partes da aplicação para representar características visuais e de identificação de um item.

## Estrutura da Interface

```typescript
export interface IPersonalizacao {
    id?: string;               // Identificador único da personalização (opcional)
    icone: string;            // Ícone associado à personalização
    cor: string;              // Cor da personalização
    criadoEm?: Date;          // Data de criação da personalização (opcional)
    atualizadoEm?: Date;      // Data da última atualização da personalização (opcional)
};
```

## Propriedades

- **id**: (opcional) Uma string que representa o identificador único da personalização.
- **icone**: Uma string que representa o ícone associado à personalização.
- **cor**: Uma string que representa a cor da personalização.
- **criadoEm**: (opcional) Um objeto `Date` que indica quando a personalização foi criada.
- **atualizadoEm**: (opcional) Um objeto `Date` que indica quando a personalização foi atualizada pela última vez.

## Uso

A interface `IPersonalizacao` pode ser utilizada em componentes que necessitam de informações sobre a personalização de itens, como listas, tarefas ou qualquer outro elemento que exija uma representação visual diferenciada.