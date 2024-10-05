---
title: dialog
description: 'Componente de diálogo reutilizável utilizando Radix UI para criar modais acessíveis e estilizados.'
---

# Dialog

O componente `Dialog` é uma implementação de um modal acessível, utilizando a biblioteca Radix UI. Ele permite a criação de diálogos que podem ser utilizados para exibir informações, formulários ou qualquer outro conteúdo que necessite de interação do usuário.

## Estrutura do Componente

O componente é composto por várias partes, cada uma com sua própria funcionalidade:

- **Dialog**: O componente raiz que controla o estado do diálogo.
- **DialogTrigger**: Um botão ou elemento que, ao ser clicado, abre o diálogo.
- **DialogPortal**: Um portal que renderiza o conteúdo do diálogo fora da hierarquia DOM do componente pai.
- **DialogClose**: Um botão que fecha o diálogo.
- **DialogOverlay**: Um fundo semi-transparente que cobre o restante da tela quando o diálogo está aberto.
- **DialogContent**: O conteúdo principal do diálogo, onde você pode colocar qualquer elemento React.
- **DialogHeader**: Um cabeçalho opcional para o diálogo.
- **DialogFooter**: Um rodapé opcional para o diálogo, geralmente usado para botões de ação.
- **DialogTitle**: Um título para o diálogo.
- **DialogDescription**: Uma descrição opcional que pode ser usada para fornecer mais contexto.

## Exemplo de Uso

```jsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from './dialog';

function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a description of the dialog.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Estilização

O componente utiliza a função `cn` para aplicar classes CSS condicionalmente, permitindo uma personalização fácil e flexível. As classes padrão fornecem uma aparência consistente e responsiva, mas podem ser sobrescritas conforme necessário.

## Acessibilidade

Todos os componentes do diálogo são projetados para serem acessíveis, utilizando práticas recomendadas para garantir que usuários de tecnologias assistivas possam interagir com o diálogo de forma eficaz.