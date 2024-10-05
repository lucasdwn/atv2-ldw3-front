
---
title: emojiPicker
description: 'Componente de seleção de emoji que permite ao usuário escolher emojis e atualiza o tema com base nas preferências do usuário.'
---

# EmojiPickerComponent

O `EmojiPickerComponent` é um componente React que permite ao usuário selecionar emojis. Ele utiliza a biblioteca `emoji-picker-react` e é carregado dinamicamente para otimizar o desempenho. O componente também gerencia o tema (claro ou escuro) com base nas configurações do usuário.

## Props

### `onEmojiSelect`

- **Tipo**: `(emoji: string) => void`
- **Descrição**: Função chamada quando um emoji é selecionado. Recebe o emoji selecionado como argumento.

## Estado

### `pickerTheme`

- **Tipo**: `Theme`
- **Descrição**: Armazena o tema atual do seletor de emojis, que pode ser `Theme.LIGHT` ou `Theme.DARK`.

## Efeitos

O componente utiliza o hook `useEffect` para:

1. Atualizar o tema com base no `localStorage` ou na classe do documento.
2. Adicionar um listener para mudanças no `localStorage` que atualizam o tema.

## Funções

### `updateTheme`

Atualiza o tema do seletor de emojis com base nas preferências do usuário armazenadas no `localStorage`.

### `onEmojiClick`

- **Parâmetros**: `emojiObject: EmojiClickData`
- **Descrição**: Função chamada quando um emoji é clicado. Ela invoca a função `onEmojiSelect` passada como prop, enviando o emoji selecionado.

## Renderização

O componente renderiza o `EmojiPicker` com as seguintes propriedades:

- `onEmojiClick`: Função chamada ao clicar em um emoji.
- `theme`: Tema atual do seletor de emojis.
- `height`: Altura do seletor de emojis (350px).
- `width`: Largura do seletor de emojis (350px).
