---
title: Toaster
description: 'Componente responsável por exibir notificações de toast na interface do usuário.'
---

# Toaster

O componente `Toaster` é utilizado para gerenciar e exibir notificações do tipo toast na interface do usuário. Ele utiliza o hook `useToast` para acessar a lista de toasts a serem exibidos.

## Estrutura do Componente

O componente é composto pelos seguintes elementos:

- **ToastProvider**: Provedor que encapsula os toasts, permitindo que eles sejam gerenciados de forma centralizada.
- **Toast**: Componente que representa cada notificação individual.
- **ToastTitle**: Título da notificação.
- **ToastDescription**: Descrição adicional da notificação.
- **ToastClose**: Botão para fechar a notificação.
- **ToastViewport**: Área onde os toasts são exibidos.

## Funcionamento

1. O hook `useToast` é chamado para obter a lista de toasts.
2. Para cada toast na lista, um componente `Toast` é renderizado com suas propriedades.
3. O título e a descrição do toast são exibidos, se disponíveis.
4. O componente `ToastClose` permite que o usuário feche a notificação.
5. O `ToastViewport` é renderizado para definir a área onde os toasts aparecerão.

## Exemplo de Uso

```tsx
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div>
      <Toaster />
      {/* Outros componentes */}
    </div>
  );
}
```

## Considerações

- Certifique-se de que o hook `useToast` esteja corretamente implementado para gerenciar a lógica de exibição dos toasts.
- O estilo dos toasts pode ser personalizado através de classes CSS aplicadas aos componentes.