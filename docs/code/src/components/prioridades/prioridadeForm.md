---
title: prioridadeForm
description: 'Componente para criação e edição de prioridades, permitindo personalização de ícone e cor.'
---

# PrioridadeForm

O componente `PrioridadeForm` é utilizado para criar ou editar prioridades em uma aplicação. Ele permite que o usuário insira um nome para a prioridade e personalize sua aparência com um ícone e uma cor.

## Props

- `prioridadeId` (opcional): ID da prioridade a ser editada. Se fornecido, o componente irá buscar os dados da prioridade existente.

## Estado

O componente gerencia os seguintes estados:

- `nome`: Armazena o nome da prioridade.
- `personalizacao`: Objeto que contém o ícone e a cor da prioridade.
- `isEditing`: Indica se o componente está em modo de edição.
- `isFetching`: Indica se os dados da prioridade estão sendo buscados.
- `isSubmit`: Indica se o formulário está em processo de submissão.

## Efeitos

- O componente utiliza o `useEffect` para buscar os dados da prioridade quando está em modo de edição e um `prioridadeId` é fornecido.

## Funções

### handleSubmit

Função responsável por lidar com a submissão do formulário. Ela verifica se o componente está em modo de edição e chama o serviço apropriado para criar ou atualizar a prioridade. Em caso de sucesso, exibe uma notificação de sucesso e retorna à página anterior.

## Renderização

O componente renderiza um formulário que inclui:

- Um campo de entrada para o nome da prioridade.
- Um seletor de emoji para personalizar o ícone da prioridade.
- Um seletor de cor para personalizar a cor da prioridade.
- Botões para voltar e salvar as alterações.

## Exemplo de Uso

```jsx
<PrioridadeForm prioridadeId="123" />
```

Este exemplo renderiza o formulário em modo de edição para a prioridade com ID "123".