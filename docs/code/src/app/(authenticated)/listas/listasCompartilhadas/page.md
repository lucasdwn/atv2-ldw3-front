---
title: ListasCompartilhadasPage
description: 'Componente da página que exibe listas compartilhadas com o usuário.'
---

# ListasCompartilhadasPage

O componente `ListasCompartilhadasPage` é uma página React que exibe listas que foram compartilhadas com o usuário. Ele utiliza o componente `Listagem` para renderizar a interface.

## Estrutura do Componente

```tsx
import Listagem from "../../../../components/listas/listagem";

const ListasCompartilhadasPage: React.FC = () => {
    return <Listagem title="Listas Compartilhadas Comigo" fetchUrl="getListsSharedWithMe" IsShared={true} />;
};

export default ListasCompartilhadasPage;
```

### Props do Componente `Listagem`

- **title**: Define o título da seção, neste caso, "Listas Compartilhadas Comigo".
- **fetchUrl**: URL utilizada para buscar as listas compartilhadas, que neste caso é `"getListsSharedWithMe"`.
- **IsShared**: Um booleano que indica que as listas exibidas são compartilhadas, definido como `true`.

## Funcionamento

Ao renderizar `ListasCompartilhadasPage`, o componente `Listagem` é chamado com as props especificadas, permitindo que o usuário visualize as listas que foram compartilhadas com ele.