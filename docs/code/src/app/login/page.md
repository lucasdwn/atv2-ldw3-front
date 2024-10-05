---
title: LoginPage
description: 'Componente de página de login que permite aos usuários se autenticarem no sistema.'
---

# LoginPage

A `LoginPage` é um componente React que fornece uma interface para os usuários se autenticarem no sistema. Ele utiliza o contexto de autenticação e exibe mensagens de feedback ao usuário durante o processo de login.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Estado Local**:
  - `email`: Armazena o e-mail do usuário.
  - `password`: Armazena a senha do usuário.
  - `showPassword`: Controla a visibilidade da senha.
  - `error`: Armazena mensagens de erro.
  - `isSubmit`: Indica se o formulário está sendo enviado.

- **Hooks Utilizados**:
  - `useState`: Para gerenciar o estado local.
  - `useRouter`: Para navegação entre páginas.
  - `useAuth`: Para acessar funções de autenticação.
  - `useToast`: Para exibir mensagens de feedback.

## Funções Principais

### `togglePasswordVisibility`

Alterna a visibilidade da senha entre texto e senha.

### `handleLogin`

Função assíncrona que lida com o envio do formulário de login. Ela:
1. Previne o comportamento padrão do formulário.
2. Define `isSubmit` como `true` para indicar que o envio está em andamento.
3. Tenta realizar o login utilizando as credenciais fornecidas.
4. Exibe uma mensagem de sucesso ou erro utilizando o `toast`.
5. Redireciona o usuário para a página de listas após um login bem-sucedido.
6. Restaura `isSubmit` para `false` após a tentativa de login.

## Renderização

O componente renderiza um layout público que inclui:

- Um cabeçalho de boas-vindas.
- Um formulário com campos para e-mail e senha.
- Um botão de envio que exibe um texto diferente enquanto o formulário está sendo enviado.
- Um link para a página de registro, caso o usuário ainda não tenha uma conta.
- Uma imagem de fundo que é exibida em telas grandes.

## Exemplo de Uso

```jsx
<LoginPage />
```

## Dependências

- `next/navigation`: Para navegação entre páginas.
- `lucide-react`: Para ícones.
- `next/image`: Para otimização de imagens.
- Componentes personalizados de UI como `Input` e `Button`.
- Contextos de autenticação e toast para feedback ao usuário.