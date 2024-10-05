---
title: popover
description: 'Componente Popover para exibir conteúdo flutuante em uma interface de usuário.'
---

# Popover

O componente `Popover` é uma implementação de um popover utilizando a biblioteca `@radix-ui/react-popover`. Ele permite exibir conteúdo flutuante que pode ser utilizado para fornecer informações adicionais ou opções ao usuário.

## Estrutura do Componente

O componente é composto por quatro partes principais:

- **Popover**: O contêiner principal do popover.
- **PopoverTrigger**: O elemento que, ao ser clicado, ativa a exibição do popover.
- **PopoverAnchor**: O ponto de ancoragem do popover, que define onde ele será posicionado em relação ao trigger.
- **PopoverContent**: O conteúdo que será exibido dentro do popover.

## Uso

### Importação

Para utilizar o componente, você deve importá-lo da seguinte forma:

```javascript
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from '@/components/ui/popover';
```

### Exemplo de Implementação

Aqui está um exemplo básico de como implementar o `Popover`:

```javascript
<Popover>
  <PopoverTrigger>
    <button>Mostrar Popover</button>
  </PopoverTrigger>
  <PopoverAnchor />
  <PopoverContent>
    <p>Este é o conteúdo do popover.</p>
  </PopoverContent>
</Popover>
```

## Propriedades do PopoverContent

O componente `PopoverContent` aceita as seguintes propriedades:

- `className`: Permite adicionar classes CSS personalizadas.
- `align`: Define o alinhamento do popover. O valor padrão é `"center"`.
- `sideOffset`: Define a distância entre o popover e o trigger. O valor padrão é `4`.

## Estilização

O `PopoverContent` utiliza classes utilitárias para estilização, permitindo personalizar a aparência do popover. As classes padrão incluem:

- `z-50`: Define a camada do popover.
- `w-72`: Define a largura do popover.
- `rounded-md`: Aplica bordas arredondadas.
- `bg-popover`: Define a cor de fundo do popover.
- `shadow-md`: Aplica uma sombra ao popover.

## Considerações Finais

O componente `Popover` é uma solução flexível e acessível para exibir informações contextuais em sua aplicação. Certifique-se de ajustar as propriedades conforme necessário para atender às suas necessidades de design e usabilidade.