---
title: headerButtons
description: 'Componente HeaderButtons que renderiza botões para navegação entre as páginas de login e registro.'
---

# HeaderButtons

O componente `HeaderButtons` é responsável por renderizar botões que permitem a navegação para as páginas de login e registro. Ele utiliza o componente `Button` da biblioteca de UI e o hook `useRouter` do Next.js para gerenciar a navegação.

## Estrutura do Componente

```tsx
'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeaderButtons() {
    const router = useRouter();

    return (
        <div className="space-x-4">
            <Button variant="outline" onClick={() => router.push('/login')}>Entrar</Button>
            <Button className="bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100" onClick={() => router.push('/register')}>Cadastrar-se</Button>
        </div>
    );
}
```

## Funcionamento

- **Importações**: O componente importa o `Button` da biblioteca de UI e o `useRouter` do Next.js.
- **Navegação**: Utiliza o hook `useRouter` para acessar a função `push`, que permite redirecionar o usuário para as páginas de login e registro ao clicar nos botões.
- **Renderização**: Os botões são renderizados dentro de um `div` com uma classe que aplica espaçamento horizontal entre eles.

## Propriedades

- **Botão Entrar**: 
  - Variável: `variant="outline"`
  - Ação: Redireciona para a página de login (`/login`).

- **Botão Cadastrar-se**: 
  - Classe: `bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100`
  - Ação: Redireciona para a página de registro (`/register`). 

## Estilos

Os botões possuem estilos específicos que garantem uma boa aparência e interatividade, como mudança de cor ao passar o mouse.

## Uso

Para utilizar o componente `HeaderButtons`, basta importá-lo e incluí-lo na estrutura do seu componente ou página:

```tsx
import { HeaderButtons } from "@/components/home/headerButtons";

// Dentro do seu componente
<HeaderButtons />
```