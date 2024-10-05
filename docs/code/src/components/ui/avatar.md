---
title: avatar
description: 'Componente Avatar para exibição de imagens de perfil com suporte a fallback.'
---

# Avatar

O componente `Avatar` é utilizado para exibir imagens de perfil, com suporte a uma imagem de fallback caso a imagem principal não esteja disponível. Este componente é construído utilizando a biblioteca `@radix-ui/react-avatar`.

## Estrutura do Componente

O componente é composto por três partes principais:

1. **Avatar**: O contêiner principal que envolve a imagem do avatar.
2. **AvatarImage**: O componente que renderiza a imagem do avatar.
3. **AvatarFallback**: O componente que é exibido caso a imagem do avatar não esteja disponível.

## Uso

### Importação

Para utilizar o componente, você deve importá-lo da seguinte forma:

```javascript
import { Avatar, AvatarImage, AvatarFallback } from './path/to/avatar';
```

### Exemplo de Implementação

```javascript
<Avatar>
  <AvatarImage src="url-da-imagem.jpg" alt="Descrição da imagem" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

### Props

#### Avatar

- `className` (string): Classes CSS adicionais para estilização.

#### AvatarImage

- `className` (string): Classes CSS adicionais para estilização.
- `src` (string): URL da imagem do avatar.
- `alt` (string): Texto alternativo para a imagem.

#### AvatarFallback

- `className` (string): Classes CSS adicionais para estilização.

## Estilização

O componente utiliza a função `cn` para combinar classes CSS, permitindo a adição de classes personalizadas através da prop `className`.

### Classes CSS Padrão

- **Avatar**: 
  - `relative`
  - `flex`
  - `h-10`
  - `w-10`
  - `shrink-0`
  - `overflow-hidden`
  - `rounded-full`

- **AvatarImage**: 
  - `aspect-square`
  - `h-full`
  - `w-full`

- **AvatarFallback**: 
  - `flex`
  - `h-full`
  - `w-full`
  - `items-center`
  - `justify-center`
  - `rounded-full`
  - `bg-muted`

## Considerações Finais

O componente `Avatar` é altamente personalizável e pode ser utilizado em diversas partes da aplicação onde a exibição de imagens de perfil é necessária. A implementação do fallback garante uma melhor experiência do usuário, mesmo quando a imagem não está disponível.