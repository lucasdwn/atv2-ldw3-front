---
title: authContext
description: 'Contexto de autenticação para gerenciar login, logout e verificação de autenticação.'
---

# authContext

O `authContext` é um contexto React que fornece funcionalidades de autenticação, incluindo login, logout e verificação do estado de autenticação do usuário. Ele utiliza o `localStorage` para armazenar tokens de autenticação e gerenciar o estado de carregamento.

## Estrutura do Contexto

### Interface `AuthContextType`

Define a estrutura do contexto de autenticação:

- `isAuthenticated`: booleano que indica se o usuário está autenticado.
- `loading`: booleano que indica se a verificação de autenticação está em andamento.
- `checkAuthentication`: função que verifica a autenticação do usuário.
- `logout`: função que realiza o logout do usuário.
- `login`: função que realiza o login do usuário, recebendo email e senha.
- `register`: função que registra um novo usuário, recebendo nome, email e senha.

### `AuthProvider`

O `AuthProvider` é um componente que encapsula a lógica de autenticação e fornece o contexto para seus filhos.

#### Props

- `children`: elementos React que serão renderizados dentro do provedor.

#### Estado

- `isAuthenticated`: armazena o estado de autenticação do usuário.
- `loading`: indica se a verificação de autenticação está em andamento.
- `checkCalled`: referência que garante que a verificação de autenticação seja chamada apenas uma vez.

#### Funções

- `refreshAccessToken(refreshToken: string)`: atualiza o token de acesso usando um token de atualização.
- `checkAuthentication()`: verifica se o token de autenticação é válido e atualiza o estado de `isAuthenticated`.
- `logout()`: remove os dados do usuário do `localStorage` e redireciona para a página inicial.
- `login(email: string, password: string)`: realiza o login do usuário e armazena os tokens no `localStorage`.
- `register(nome: string, email: string, password: string)`: registra um novo usuário e armazena os tokens no `localStorage`.

### Hook `useAuth`

O hook `useAuth` permite que os componentes acessem o contexto de autenticação. Ele lança um erro se for usado fora de um `AuthProvider`.

## Uso

Para utilizar o contexto de autenticação, envolva seu componente raiz com o `AuthProvider` e utilize o hook `useAuth` nos componentes que precisam acessar as funcionalidades de autenticação.

```jsx
import { AuthProvider } from './path/to/authContext';

function App() {
    return (
        <AuthProvider>
            <YourComponent />
        </AuthProvider>
    );
}
```

No componente que precisa acessar a autenticação:

```jsx
import { useAuth } from './path/to/authContext';

const YourComponent = () => {
    const { login, logout, isAuthenticated } = useAuth();

    // Lógica de autenticação
};
```

## Considerações Finais

O `authContext` é uma solução robusta para gerenciar a autenticação em aplicações React, permitindo um controle centralizado do estado de autenticação e simplificando a lógica de login e logout.