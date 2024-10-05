---
title: utils
description: 'Funções utilitárias para manipulação de classes CSS.'
---

# utils.ts

Este arquivo contém funções utilitárias para manipulação de classes CSS, utilizando as bibliotecas `clsx` e `tailwind-merge`.

## Funções

### cn

```typescript
export function cn(...inputs: ClassValue[]): string
```

A função `cn` combina classes CSS de forma eficiente. Ela aceita um número variável de argumentos do tipo `ClassValue` e retorna uma string que representa as classes CSS combinadas.

#### Parâmetros

- `inputs`: Um ou mais valores que representam classes CSS. Pode incluir strings, objetos ou arrays.

#### Retorno

- Retorna uma string que contém as classes CSS resultantes da combinação dos valores fornecidos, utilizando a lógica de mesclagem da biblioteca `tailwind-merge`.

### Dependências

- `clsx`: Uma biblioteca para condicionalmente construir strings de classes CSS.
- `tailwind-merge`: Uma biblioteca que mescla classes do Tailwind CSS, garantindo que as classes conflitantes sejam resolvidas corretamente.