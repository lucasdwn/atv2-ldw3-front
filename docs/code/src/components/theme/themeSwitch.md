---
title: themeSwitch
description: 'Componente para alternar entre os modos de tema claro e escuro.'
---

# themeSwitch

O componente `ThemeSwitch` é responsável por permitir que os usuários alternem entre os modos de tema claro e escuro em uma aplicação. Ele utiliza o contexto de tema fornecido pelo `themeProvider` para gerenciar o estado do tema atual e a função de alternância.

## Estrutura do Componente

O componente é composto por:

- **Ícones**: Utiliza os ícones `Sun` e `Moon` da biblioteca `lucide-react` para representar visualmente o tema atual.
- **Switch**: Um componente de alternância que permite ao usuário mudar entre os temas.

## Implementação

```javascript
'use client';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '../ui/switch';
import { useTheme } from './themeProvider';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center space-x-2">
            <span>{theme === 'light' ? (<Sun className="h-6 w-6 mr-2  text-[#ffa909]" />) : (<Moon className="h-6 w-6 mr-2  text-[#ffffff]" />)}</span>
            <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Ativar/desativar modo escuro" 
                aria-checked={theme === 'dark'} 
                className="peer inline-flex h-5 w-9 cursor-pointer items-center rounded-full"
            />
        </div>
    );
};

export default ThemeSwitch;
```

## Propriedades

- **theme**: O tema atual, que pode ser 'light' ou 'dark'.
- **toggleTheme**: Função que alterna o tema atual.

## Acessibilidade

O componente inclui atributos ARIA para melhorar a acessibilidade:

- `aria-label`: Descreve a função do switch.
- `aria-checked`: Indica se o tema atual é 'dark'.

## Estilos

O componente utiliza classes do Tailwind CSS para estilização, garantindo uma aparência responsiva e moderna.