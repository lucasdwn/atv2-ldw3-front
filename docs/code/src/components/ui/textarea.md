---
title: textarea
description: 'Componente de Textarea personalizável para uso em formulários.'
---

# Textarea

O componente `Textarea` é um campo de entrada de texto que permite a inserção de múltiplas linhas de texto. Ele é construído utilizando o React e é projetado para ser facilmente personalizável através de propriedades.

## Propriedades

O `Textarea` estende as propriedades padrão de um elemento HTML `<textarea>`, permitindo que você utilize todas as propriedades nativas, como `placeholder`, `disabled`, `onChange`, entre outras.

### TextareaProps

```typescript
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
```

## Uso

Para utilizar o componente `Textarea`, você pode importá-lo e usá-lo em seu código da seguinte forma:

```javascript
import { Textarea } from 'caminho/para/o/componente';

const MeuComponente = () => {
  return (
    <Textarea
      placeholder="Digite seu texto aqui..."
      className="min-h-[100px]"
    />
  );
};
```

## Estilização

O componente `Textarea` utiliza a função `cn` para combinar classes CSS, permitindo que você adicione classes personalizadas através da propriedade `className`. O estilo padrão inclui:

- `flex`
- `min-h-[60px]`
- `w-full`
- `rounded-md`
- `border`
- `bg-transparent`
- `px-3`
- `py-2`
- `text-sm`
- `shadow-sm`
- `placeholder:text-muted-foreground`
- `focus-visible:outline-none`
- `focus-visible:ring-1`
- `focus-visible:ring-ring`
- `disabled:cursor-not-allowed`
- `disabled:opacity-50`

## Referências

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [HTML Textarea Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)