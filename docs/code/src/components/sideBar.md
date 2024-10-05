---
title: sideBar
description: 'Componente de barra lateral para navegação em um aplicativo React.'
---

# sideBar

O componente `sideBar` é uma barra lateral responsiva que permite a navegação em um aplicativo React. Ele utiliza o contexto de autenticação e gerencia o estado de abertura e fechamento da barra.

## Estrutura do Componente

O componente é composto por:

- **Botão de Toggle**: Permite abrir e fechar a barra lateral.
- **Navegação**: Links para diferentes seções do aplicativo, como perfil, listas e prioridades.
- **Tema**: Um switch para alternar entre temas claro e escuro.
- **Logout**: Um botão para sair da conta do usuário.

## Props

### `onNavbarToggle`

- **Tipo**: `(isOpen: boolean) => void`
- **Descrição**: Função chamada quando o estado da barra lateral é alterado.

## Estado

O componente utiliza o estado `isOpen` para controlar se a barra lateral está visível ou não. O estado é persistido no `localStorage` para manter a preferência do usuário entre as sessões.

## Hooks Utilizados

- `useEffect`: Para recuperar o estado da barra lateral do `localStorage` ao montar o componente.
- `useState`: Para gerenciar o estado de abertura da barra lateral.
- `useAuth`: Para acessar a função de logout do contexto de autenticação.
- `useRouter`: Para navegar entre as páginas do aplicativo.

## Estilos

O componente utiliza classes do Tailwind CSS para estilização, garantindo uma aparência responsiva e moderna.

## Exemplo de Uso

```jsx
<Navbar onNavbarToggle={(isOpen) => console.log('Navbar is now', isOpen ? 'open' : 'closed')} />
```

## Considerações Finais

O componente `sideBar` é uma parte essencial da interface do usuário, proporcionando uma navegação intuitiva e acessível em dispositivos móveis e desktops.