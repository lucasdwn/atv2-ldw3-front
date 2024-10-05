---
title: select
description: 'Componente Select personalizável utilizando Radix UI para seleção de opções.'
---

# Componente Select

O componente `Select` é uma implementação personalizada de um seletor de opções, utilizando a biblioteca Radix UI. Ele oferece uma interface acessível e estilizada para seleção de itens em uma lista.

## Estrutura do Componente

O componente é composto por várias partes, cada uma com sua própria funcionalidade:

- **Select**: O contêiner principal do seletor.
- **SelectGroup**: Agrupa itens relacionados dentro do seletor.
- **SelectValue**: Exibe o valor selecionado.
- **SelectTrigger**: O botão que ativa o seletor.
- **SelectContent**: O conteúdo que aparece quando o seletor é ativado.
- **SelectLabel**: Rótulo para os itens do seletor.
- **SelectItem**: Um item individual dentro do seletor.
- **SelectSeparator**: Um separador visual entre itens.
- **SelectScrollUpButton**: Botão para rolar para cima na lista de opções.
- **SelectScrollDownButton**: Botão para rolar para baixo na lista de opções.

## Uso

Para utilizar o componente `Select`, você deve importar os elementos necessários e compô-los conforme a necessidade. Aqui está um exemplo básico de uso:

```jsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel } from './select';

const MySelect = () => (
  <Select>
    <SelectTrigger>
      Selecione uma opção
    </SelectTrigger>
    <SelectContent>
      <SelectLabel>Opções</SelectLabel>
      <SelectItem value="opcao1">Opção 1</SelectItem>
      <SelectItem value="opcao2">Opção 2</SelectItem>
      <SelectItem value="opcao3">Opção 3</SelectItem>
    </SelectContent>
  </Select>
);
```

## Estilização

O componente utiliza a função `cn` para aplicar classes CSS condicionalmente, permitindo uma personalização fácil e flexível. As classes padrão garantem uma boa aparência e responsividade.

## Acessibilidade

O componente é construído com acessibilidade em mente, utilizando elementos semânticos e práticas recomendadas para garantir que todos os usuários possam interagir com o seletor de forma eficaz.

## Exportação

Os componentes são exportados da seguinte forma:

```javascript
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
```

Isso permite que você importe apenas os componentes que precisa em seu projeto.