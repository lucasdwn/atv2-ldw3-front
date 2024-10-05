---
title: Input
description: 'Componente de entrada reutilizável que permite a personalização de atributos de input HTML.'
---

# Input

O componente `Input` é um componente de entrada reutilizável que estende as propriedades padrão de um elemento `<input>` HTML. Ele permite a personalização através de classes CSS e aceita todos os atributos de um input HTML.

## Propriedades

### `InputProps`

O componente aceita as seguintes propriedades:

- **className**: `string` (opcional) - Classes CSS adicionais para estilização.
- **type**: `string` (opcional) - O tipo do input (ex: "text", "password", etc.).
- **...props**: `React.InputHTMLAttributes<HTMLInputElement>` - Todas as outras propriedades padrão de um input HTML.

## Uso

Para utilizar o componente `Input`, você pode importá-lo e usá-lo em seu JSX da seguinte forma:

```jsx
import { Input } from '@/components/ui/input';

const MyComponent = () => {
  return (
    <Input
      type="text"
      className="custom-class"
      placeholder="Digite algo..."
    />
  );
};
```

## Estilização

O componente utiliza a função `cn` para combinar classes CSS, permitindo que você adicione suas próprias classes de estilo. O estilo padrão inclui:

- `flex`
- `h-9`
- `w-full`
- `rounded-md`
- `border`
- `bg-transparent`
- `px-3`
- `py-1`
- `text-sm`
- `shadow-sm`
- `transition-colors`

Essas classes podem ser modificadas ou estendidas através da propriedade `className`.

## Referências

- [React.forwardRef](https://reactjs.org/docs/forwarding-refs.html) - Para entender como o `forwardRef` funciona.
- [React.InputHTMLAttributes](https://reactjs.org/docs/dom-elements.html#all-attributes) - Para uma lista completa de atributos que podem ser passados para o input.