---
title: ProfilePage
description: 'Componente de página para exibir e editar informações do perfil do usuário.'
---

# ProfilePage

O componente `ProfilePage` é responsável por exibir e permitir a edição das informações do perfil do usuário. Ele utiliza hooks do React para gerenciar o estado e interagir com a API para buscar e atualizar os dados do usuário.

## Estrutura do Componente

### Estado

O componente utiliza os seguintes estados:

- `isEditing`: Indica se o formulário está em modo de edição.
- `userData`: Armazena os dados do usuário.
- `originalUserData`: Armazena os dados originais do usuário para restaurar em caso de cancelamento.
- `password` e `confirmPassword`: Armazenam as senhas para edição.
- `error`: Armazena mensagens de erro.
- `showPassword`: Controla a visibilidade da senha.
- `profileImage`: Armazena a imagem de perfil selecionada.
- `isFetching`: Indica se os dados do usuário estão sendo buscados.
- `isSaving`: Indica se os dados do usuário estão sendo salvos.

### Funções Principais

- `togglePasswordVisibility`: Alterna a visibilidade da senha.
- `handleEdit`: Ativa o modo de edição.
- `handleCancel`: Cancela a edição e restaura os dados originais.
- `handleSave`: Salva as alterações feitas no perfil do usuário.
- `fetchUserData`: Busca os dados do usuário da API.
- `getInitials`: Retorna as iniciais do nome do usuário.
- `handleImageChange`: Atualiza a imagem de perfil quando um novo arquivo é selecionado.

### Efeitos

O componente utiliza o hook `useEffect` para buscar os dados do usuário assim que o componente é montado.

### Renderização Condicional

O componente renderiza um carregador enquanto os dados do usuário estão sendo buscados. Após a busca, ele exibe um formulário com os dados do usuário, permitindo a edição se `isEditing` for verdadeiro.

### Estrutura do JSX

O JSX do componente é estruturado da seguinte forma:

- Um cabeçalho com o título "Perfil".
- Um cartão (`Card`) que contém:
  - Um cabeçalho com a imagem de perfil e a opção de upload.
  - Um conteúdo com um formulário para editar as informações do usuário.
  - Um rodapé com botões para cancelar ou salvar as alterações.

## Dependências

O componente utiliza os seguintes componentes e serviços:

- `Button`, `Input`, `Label`, `Card`, `CardContent`, `CardFooter`, `CardHeader` do módulo de UI.
- `Avatar`, `AvatarFallback`, `AvatarImage` para exibir a imagem de perfil.
- `apiService` para interagir com a API.
- `useToast` para exibir mensagens de feedback ao usuário.

## Considerações Finais

O `ProfilePage` é um componente essencial para a gestão do perfil do usuário, permitindo uma experiência interativa e responsiva ao editar informações pessoais.