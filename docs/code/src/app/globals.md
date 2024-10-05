---
title: globals.css
description: 'Arquivo de estilo global que define as configurações de tema e estilo da aplicação.'
---

# globals.css

O arquivo `globals.css` é responsável por definir os estilos globais da aplicação, utilizando o framework Tailwind CSS. Ele inclui configurações de tema, tipografia e utilitários personalizados.

## Estrutura do Arquivo

### Importações do Tailwind

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Essas diretivas importam as classes base, componentes e utilitários do Tailwind CSS, permitindo o uso de suas funcionalidades em todo o projeto.

### Estilos do Corpo

```css
body {
  font-family: Roboto, sans-serif;
}
```

Define a fonte padrão da aplicação como Roboto, com uma alternativa sans-serif.

### Camadas de Estilo

#### Utilitários Personalizados

```css
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

Adiciona uma classe utilitária chamada `.text-balance` que aplica o estilo `text-wrap: balance;`.

#### Estilos Base

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    ...
  }
}
```

Define variáveis CSS para cores e outros estilos que podem ser utilizados em toda a aplicação. As variáveis são organizadas para temas claros e escuros.

### Estilos para o Tema Escuro

```css
.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  ...
}
```

Configura as variáveis de estilo para o tema escuro, garantindo que a aplicação tenha uma aparência adequada em diferentes modos.

### Aplicação de Estilos Globais

```css
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

Aplica estilos globais, como bordas e cores de fundo e texto, utilizando as variáveis definidas anteriormente.

## Considerações Finais

O `globals.css` é um componente essencial para a personalização e a consistência visual da aplicação, permitindo que os desenvolvedores mantenham um estilo uniforme em todos os componentes.