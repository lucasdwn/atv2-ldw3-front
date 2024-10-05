---
title: tooltip
description: 'Componente de Tooltip para exibir informações adicionais ao passar o mouse sobre um elemento.'
---

# Tooltip

O componente `Tooltip` é utilizado para exibir informações adicionais quando o usuário passa o mouse sobre um elemento. Ele é construído utilizando a biblioteca `@radix-ui/react-tooltip` e oferece uma interface simples para integração em aplicações React.

## Estrutura do Componente

O componente é composto por quatro partes principais:

- **TooltipProvider**: Provedor que encapsula o contexto do Tooltip.
- **Tooltip**: Componente raiz que representa o Tooltip.
- **TooltipTrigger**: Componente que define o elemento que, ao ser interagido, ativa o Tooltip.
- **TooltipContent**: Componente que contém o conteúdo do Tooltip.

## Implementação

### Importação

Para utilizar o Tooltip, você deve importá-lo da seguinte forma:

```javascript
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
```

### Exemplo de Uso

Aqui está um exemplo básico de como implementar o Tooltip em um componente:

```javascript
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <button>Passar o mouse aqui</button>
    </TooltipTrigger>
    <TooltipContent>
      Informações adicionais sobre o botão.
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Props do TooltipContent

O componente `TooltipContent` aceita as seguintes propriedades:

- `className`: Classe CSS adicional para estilização.
- `sideOffset`: Deslocamento do Tooltip em relação ao elemento disparador (padrão é 4).

## Estilização

O Tooltip utiliza classes do Tailwind CSS para estilização. Você pode personalizar a aparência do Tooltip modificando as classes CSS passadas na propriedade `className`.

## Conclusão

O componente `Tooltip` é uma solução eficiente para fornecer informações contextuais aos usuários de forma intuitiva. Sua implementação é simples e pode ser facilmente adaptada às necessidades de estilização da sua aplicação.