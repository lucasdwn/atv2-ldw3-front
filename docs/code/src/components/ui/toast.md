---
title: toast
description: 'Componente de Toast para exibir mensagens temporárias na interface do usuário.'
---

# Componente Toast

O componente `Toast` é utilizado para exibir mensagens temporárias na interface do usuário. Ele é construído utilizando a biblioteca Radix UI e permite personalização através de variantes.

## Estrutura do Componente

O componente é composto por várias partes:

- **ToastProvider**: Provedor que encapsula o contexto do Toast.
- **ToastViewport**: Área onde os Toasts são exibidos.
- **Toast**: Componente principal que representa um Toast individual.
- **ToastAction**: Botão de ação dentro do Toast.
- **ToastClose**: Botão para fechar o Toast.
- **ToastTitle**: Título do Toast.
- **ToastDescription**: Descrição do Toast.

## Uso

### Importação

Para utilizar o componente, importe-o da seguinte forma:

```javascript
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from './path/to/toast';
```

### Exemplo de Implementação

```javascript
<ToastProvider>
  <ToastViewport />
  <Toast>
    <ToastTitle>Título do Toast</ToastTitle>
    <ToastDescription>Descrição do Toast.</ToastDescription>
    <ToastAction>Action</ToastAction>
    <ToastClose />
  </Toast>
</ToastProvider>
```

## Variantes

O componente `Toast` suporta variantes que podem ser definidas através da propriedade `variant`. As variantes disponíveis são:

- `default`: Estilo padrão do Toast.
- `destructive`: Estilo para Toasts que indicam uma ação destrutiva.

### Exemplo de Uso de Variantes

```javascript
<Toast variant="destructive">
  <ToastTitle>Atenção!</ToastTitle>
  <ToastDescription>Esta ação não pode ser desfeita.</ToastDescription>
  <ToastClose />
</Toast>
```

## Estilização

A estilização do componente é feita utilizando a biblioteca `class-variance-authority` (cva) e permite a personalização através de classes CSS.

## Conclusão

O componente `Toast` é uma solução flexível e personalizável para exibir mensagens temporárias na interface do usuário, melhorando a experiência do usuário em aplicações React.