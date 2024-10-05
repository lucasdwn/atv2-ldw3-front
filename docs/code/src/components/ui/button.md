---
title: button
description: 'Componente de botão reutilizável com variantes de estilo e tamanhos.'
---

# Button

O componente `Button` é um botão reutilizável que suporta diferentes variantes de estilo e tamanhos. Ele é construído utilizando a biblioteca `class-variance-authority` para gerenciar as classes CSS de forma eficiente.

## Variantes

O componente `Button` possui as seguintes variantes:

- **variant**:
  - `default`: Botão padrão com fundo primário.
  - `destructive`: Botão com estilo destrutivo.
  - `outline`: Botão com borda e fundo transparente.
  - `secondary`: Botão secundário.
  - `ghost`: Botão com estilo "fantasma".
  - `link`: Botão estilizado como um link.

- **size**:
  - `default`: Tamanho padrão.
  - `sm`: Tamanho pequeno.
  - `lg`: Tamanho grande.
  - `icon`: Tamanho para ícones.

## Props

O componente aceita as seguintes propriedades:

- `className`: Classes CSS adicionais para personalização.
- `variant`: Define a variante do botão (default, destructive, outline, secondary, ghost, link).
- `size`: Define o tamanho do botão (default, sm, lg, icon).
- `asChild`: Se verdadeiro, renderiza o botão como um componente filho (usando `Slot` do Radix UI).
- `...props`: Outras propriedades HTML padrão para um elemento `<button>`.

## Exemplo de Uso

```jsx
import { Button } from './path/to/button';

const App = () => (
  <div>
    <Button variant="default" size="lg">Botão Padrão</Button>
    <Button variant="destructive">Botão Destrutivo</Button>
    <Button variant="outline" size="sm">Botão Outline</Button>
  </div>
);
```

## Considerações

- O componente utiliza a função `cn` para combinar classes CSS de forma condicional.
- O `Button` é otimizado para acessibilidade e pode ser utilizado em diferentes contextos dentro da aplicação.