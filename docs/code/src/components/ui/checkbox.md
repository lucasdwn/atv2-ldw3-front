---
title: checkbox
description: 'Componente Checkbox personalizado utilizando Radix UI.'
---

# Checkbox

O componente `Checkbox` é uma implementação personalizada de um checkbox utilizando a biblioteca Radix UI. Ele é projetado para ser acessível e estilizado de acordo com as necessidades do projeto.

## Importação

Para utilizar o componente, você deve importá-lo da seguinte forma:

```javascript
import { Checkbox } from 'caminho/para/o/componente/checkbox';
```

## Propriedades

O componente `Checkbox` aceita todas as propriedades do `CheckboxPrimitive.Root`, além de uma propriedade adicional `className` para personalização de estilos.

### Props

- `className` (string): Classes CSS adicionais para estilização do componente.
- `...props`: Todas as outras propriedades suportadas pelo `CheckboxPrimitive.Root`.

## Exemplo de Uso

Aqui está um exemplo de como utilizar o componente `Checkbox`:

```javascript
<Checkbox
  className="custom-class"
  checked={isChecked}
  onCheckedChange={setIsChecked}
/>
```

## Estilos

O componente aplica as seguintes classes CSS por padrão:

- `h-4 w-4`: Define a altura e largura do checkbox.
- `rounded-sm`: Aplica bordas arredondadas.
- `border border-primary`: Define a borda do checkbox.
- `shadow`: Adiciona uma sombra ao checkbox.
- `focus-visible:outline-none`: Remove o contorno padrão ao focar.
- `focus-visible:ring-1 focus-visible:ring-ring`: Adiciona um anel de foco.
- `disabled:cursor-not-allowed disabled:opacity-50`: Estiliza o checkbox quando desabilitado.
- `data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`: Estiliza o checkbox quando marcado.

## Acessibilidade

O componente é acessível e utiliza o `CheckboxPrimitive.Indicator` para mostrar o estado do checkbox. O ícone de verificação é fornecido pelo `CheckIcon` da biblioteca Radix UI.

## Conclusão

O componente `Checkbox` é uma solução flexível e acessível para implementar checkboxes em sua aplicação, permitindo fácil personalização e integração com o Radix UI.