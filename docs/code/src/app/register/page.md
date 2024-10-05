---
title: RegisterPage
description: 'Componente de página de registro para novos usuários, incluindo validação de senha e feedback visual.'
---

# RegisterPage

O componente `RegisterPage` é responsável pela interface de registro de novos usuários. Ele permite que os usuários insiram suas informações, como nome, e-mail e senha, e fornece feedback visual durante o processo de registro.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Estado Local**: Utiliza o hook `useState` para gerenciar os estados dos campos de entrada e mensagens de erro.
- **Funções**:
  - `togglePasswordVisibility`: Alterna a visibilidade das senhas.
  - `handleRegister`: Lida com a lógica de registro, incluindo validação de senhas e chamadas para o contexto de autenticação.

## Renderização

O componente renderiza um formulário que inclui:

- **Campos de Entrada**:
  - Nome
  - E-mail
  - Senha
  - Confirmar Senha
- **Botão de Submissão**: Um botão que, ao ser clicado, aciona a função `handleRegister`.

## Funcionalidades

- **Validação de Senha**: Verifica se as senhas inseridas correspondem antes de enviar os dados.
- **Feedback Visual**: Utiliza o hook `useToast` para mostrar mensagens de sucesso ou erro durante o registro.
- **Navegação**: Após um registro bem-sucedido, redireciona o usuário para a página de listas.

## Dependências

O componente depende de várias bibliotecas e componentes, incluindo:

- `lucide-react` para ícones.
- `next/image` para imagens otimizadas.
- Componentes personalizados de UI, como `Input` e `Button`.
- Contextos de autenticação e toast para gerenciamento de estado e feedback.

## Exemplo de Uso

```jsx
import RegisterPage from './path/to/RegisterPage';

function App() {
    return (
        <div>
            <RegisterPage />
        </div>
    );
}
```

## Considerações Finais

O `RegisterPage` é um componente essencial para a experiência do usuário em aplicações que requerem registro. Ele deve ser integrado com um sistema de autenticação robusto para garantir a segurança e a funcionalidade adequada.