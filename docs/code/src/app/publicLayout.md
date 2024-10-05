---
title: PublicLayout
description: 'Componente de layout público que redireciona usuários autenticados para suas listas.'
---

# PublicLayout

O componente `PublicLayout` é um layout destinado a páginas públicas da aplicação. Ele verifica se o usuário está autenticado e, caso esteja, redireciona-o para a página de listas. Enquanto a autenticação está sendo verificada, um componente de carregamento é exibido.

## Props

### `PublicLayoutProps`

- **children**: `React.ReactNode`  
  Os elementos filhos que serão renderizados dentro do layout.

## Comportamento

1. **Verificação de Autenticação**: O componente utiliza o hook `useAuth` para obter o estado de autenticação do usuário e se a verificação está em andamento (`loading`).
2. **Redirecionamento**: Se o usuário estiver autenticado e a verificação não estiver em andamento, ele é redirecionado para a página `/listas/minhasListas`.
3. **Carregamento**: Enquanto a autenticação está sendo verificada, o componente `Loading` é exibido.
4. **Renderização Condicional**: Se o usuário não estiver autenticado, os filhos do componente são renderizados.

## Exemplo de Uso

```jsx
import PublicLayout from '@/app/publicLayout';

const MyPage = () => {
    return (
        <PublicLayout>
            <h1>Bem-vindo à página pública!</h1>
        </PublicLayout>
    );
};
```

## Dependências

- `React`
- `next/navigation`
- `@/components/loading`
- `@/context/authContext`