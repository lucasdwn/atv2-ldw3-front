---
title: alert-dialog
description: 'Componente de diálogo de alerta utilizando Radix UI para exibir mensagens e ações ao usuário.'
---

# AlertDialog

O componente `AlertDialog` é uma implementação de um diálogo de alerta utilizando a biblioteca Radix UI. Ele permite exibir mensagens e ações ao usuário de forma acessível e estilizada.

## Estrutura do Componente

O componente é composto por várias partes, cada uma com sua própria funcionalidade:

- **AlertDialog**: O componente raiz que controla o estado do diálogo.
- **AlertDialogTrigger**: O elemento que ativa o diálogo quando clicado.
- **AlertDialogPortal**: Um portal que renderiza o diálogo fora da hierarquia DOM do componente pai.
- **AlertDialogOverlay**: A camada de fundo que escurece o conteúdo por trás do diálogo.
- **AlertDialogContent**: O conteúdo principal do diálogo, onde a mensagem e as ações são exibidas.
- **AlertDialogHeader**: O cabeçalho do diálogo, geralmente utilizado para o título.
- **AlertDialogFooter**: A parte inferior do diálogo, onde as ações (botões) são colocadas.
- **AlertDialogTitle**: O título do diálogo.
- **AlertDialogDescription**: A descrição ou mensagem adicional do diálogo.
- **AlertDialogAction**: Um botão de ação dentro do diálogo.
- **AlertDialogCancel**: Um botão para cancelar a ação.

## Uso

Para utilizar o `AlertDialog`, você deve importar os componentes necessários e utilizá-los em sua aplicação. Aqui está um exemplo básico de como implementar o `AlertDialog`:

```jsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';

const MyComponent = () => (
  <AlertDialog>
    <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Alert Title</AlertDialogTitle>
        <AlertDialogDescription>
          This is an alert description.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
```

## Estilização

O componente utiliza a função `cn` para aplicar classes CSS condicionalmente, permitindo uma personalização fácil do estilo. Você pode adicionar suas próprias classes CSS para modificar a aparência do diálogo conforme necessário.

## Considerações Finais

O `AlertDialog` é uma solução robusta para exibir alertas e solicitações de confirmação em sua aplicação. Ele é acessível e pode ser facilmente integrado com outros componentes da sua interface.