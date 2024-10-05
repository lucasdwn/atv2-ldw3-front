---
title: themeProvider
description: 'Um provedor de contexto para gerenciar o tema da aplicação, permitindo alternar entre temas claro e escuro.'
---

# themeProvider

O `ThemeProvider` é um componente que utiliza o contexto do React para gerenciar o tema da aplicação. Ele permite que os componentes filhos acessem e alterem o tema atual (claro ou escuro) de forma eficiente.

## Estrutura do Componente

### Interface `ThemeContextProps`

Define a estrutura do contexto do tema, que inclui:

- `theme`: uma string que representa o tema atual (ex: "light" ou "dark").
- `toggleTheme`: uma função que alterna entre os temas.

### Contexto `ThemeContext`

Um contexto criado para armazenar o estado do tema e a função de alternância.

### Hook `useTheme`

Um hook personalizado que permite que os componentes acessem o contexto do tema. Ele lança um erro se for utilizado fora do `ThemeProvider`.

### Componente `ThemeProvider`

O componente principal que fornece o contexto do tema para seus filhos. Ele possui as seguintes funcionalidades:

- **Estado do Tema**: Inicializa o tema como "light".
- **Efeito Colateral**: Ao montar, verifica se um tema salvo está presente no `localStorage` e aplica-o.
- **Função `toggleTheme`**: Alterna entre os temas "light" e "dark", atualiza o `localStorage` e modifica as classes do elemento `document.documentElement`.

## Uso

Para utilizar o `ThemeProvider`, envolva sua aplicação ou parte dela com este componente. Em seguida, utilize o hook `useTheme` nos componentes que precisam acessar ou modificar o tema.

### Exemplo

```tsx
import { ThemeProvider, useTheme } from './path/to/themeProvider';

const App = () => (
    <ThemeProvider>
        <YourComponent />
    </ThemeProvider>
);

const YourComponent = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
```

## Considerações

- Certifique-se de que o `ThemeProvider` envolva todos os componentes que precisam acessar o tema.
- O tema é salvo no `localStorage`, garantindo que a preferência do usuário persista entre as sessões.