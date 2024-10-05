---
title: badge
description: 'Componente Badge para exibir informações em destaque com diferentes variantes de estilo.'
---

# Badge

O componente `Badge` é utilizado para exibir informações em destaque, como notificações ou status, com diferentes variantes de estilo. Ele é construído utilizando a biblioteca `class-variance-authority` para gerenciar suas classes CSS de forma eficiente.

## Variantes

O `Badge` suporta as seguintes variantes:

- **default**: Estilo padrão com fundo primário e texto correspondente.
- **secondary**: Estilo secundário com fundo e texto secundários.
- **destructive**: Estilo para indicar ações destrutivas, com fundo e texto em vermelho.
- **outline**: Estilo de contorno, apenas com texto.

## Propriedades

O componente aceita as seguintes propriedades:

- `className` (string): Classes CSS adicionais para personalização.
- `variant` (string): Define a variante do badge. Aceita os valores: `default`, `secondary`, `destructive`, `outline`.
- `...props`: Outras propriedades HTML que podem ser passadas para o elemento `div`.

## Exemplo de Uso

```jsx
import { Badge } from "@/components/ui/badge";

function Example() {
  return (
    <div>
      <Badge variant="default">Default Badge</Badge>
      <Badge variant="secondary">Secondary Badge</Badge>
      <Badge variant="destructive">Destructive Badge</Badge>
      <Badge variant="outline">Outline Badge</Badge>
    </div>
  );
}
```

## Importação

Para utilizar o componente `Badge`, importe-o da seguinte forma:

```jsx
import { Badge } from "@/components/ui/badge";
```

## Conclusão

O componente `Badge` é uma solução flexível e estilizada para exibir informações importantes em sua aplicação, permitindo fácil personalização através de variantes.