---
title: tailwind.config.ts
description: 'Configuração do Tailwind CSS para o projeto, incluindo temas e plugins.'
---

# tailwind.config.ts

Este arquivo contém a configuração do Tailwind CSS para o projeto. Ele define o modo escuro, os caminhos dos arquivos que devem ser analisados pelo Tailwind e as extensões do tema.

## Configuração

### Modo Escuro

O modo escuro é ativado através da classe CSS:

```typescript
darkMode: ["class"],
```

### Conteúdo

Os arquivos que o Tailwind deve considerar para a geração de classes são especificados na propriedade `content`:

```typescript
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
```

### Tema

A configuração do tema é estendida para incluir cores personalizadas e bordas:

```typescript
theme: {
    extend: {
        colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
            },
            // ... outras cores
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
        }
    }
},
```

### Plugins

O arquivo também inclui plugins adicionais, como o `tailwindcss-animate`:

```typescript
plugins: [require("tailwindcss-animate")],
```

## Exportação

A configuração é exportada como padrão:

```typescript
export default config;
``` 

Esta configuração permite personalizar a aparência do projeto de forma flexível e responsiva, utilizando as funcionalidades do Tailwind CSS.