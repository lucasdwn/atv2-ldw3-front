---
title: AuthenticatedLayout
description: 'Componente de layout para páginas autenticadas, gerenciando a exibição da barra de navegação e redirecionamento baseado na autenticação do usuário.'
---

# AuthenticatedLayout

O componente `AuthenticatedLayout` é responsável por fornecer um layout para páginas que requerem autenticação. Ele gerencia a exibição da barra de navegação e redireciona o usuário para a página inicial caso não esteja autenticado.

## Props

### `AuthenticatedLayoutProps`

- **children**: `React.ReactNode`  
  Os elementos filhos que serão renderizados dentro do layout.

## Comportamento

- O componente utiliza o hook `useAuth` para verificar se o usuário está autenticado e se a autenticação está em processo de carregamento.
- Se o usuário não estiver autenticado e o carregamento estiver completo, o componente redireciona o usuário para a página inicial (`/`).
- Enquanto a autenticação está sendo verificada, um componente de carregamento (`Loading`) é exibido.
- O estado `isNavbarOpen` controla a visibilidade da barra de navegação, permitindo que o usuário a abra ou feche.

## Estrutura do Componente

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/authContext';
import Navbar from '@/components/sideBar';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading';

interface AuthenticatedLayoutProps {
    children: React.ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, loading, router]);

    const handleNavbarToggle = (isOpen: boolean) => {
        setIsNavbarOpen(isOpen);
    };

    if (!isAuthenticated || loading) {
        return <Loading />;
    }

    return (
        <>
            {!isAuthenticated && null}
            {isAuthenticated &&
                <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-black">
                    <Navbar onNavbarToggle={handleNavbarToggle} />

                    <main className={`flex-1 p-4 lg:p-8 transition-all duration-300 ${isNavbarOpen ? 'lg:ml-64' : 'lg:ml-16'} pt-16 lg:pt-8`}>
                        {children}
                    </main>
                </div>
            }
        </>
    );
}
```

## Considerações

- O layout é responsivo e se adapta a diferentes tamanhos de tela, utilizando classes do Tailwind CSS.
- A barra de navegação é renderizada apenas se o usuário estiver autenticado.
- O componente é projetado para ser utilizado em um contexto onde a autenticação do usuário é necessária.