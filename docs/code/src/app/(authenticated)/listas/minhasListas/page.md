---
title: page.tsx
description: 'Componente da página que exibe as listas do usuário.'
---

# page.tsx

Este arquivo contém o componente `MinhasListasPage`, que é responsável por renderizar a visualização das listas pertencentes ao usuário.

## Estrutura do Componente

O componente `MinhasListasPage` utiliza o componente `Listagem` para exibir as listas. Abaixo estão os detalhes da implementação:

```tsx
import Listagem from "../../../../components/listas/listagem";

const MinhasListasPage: React.FC = () => {
    return <Listagem title="Minhas Listas" fetchUrl="getListsUser" IsShared={false} />;
};

export default MinhasListasPage;
```

### Props do Componente `Listagem`

- **title**: Define o título da seção como "Minhas Listas".
- **fetchUrl**: URL utilizada para buscar as listas do usuário, neste caso, `getListsUser`.
- **IsShared**: Um booleano que indica se as listas são compartilhadas ou não. Neste caso, está definido como `false`, indicando que apenas as listas do usuário serão exibidas.

## Considerações

Este componente é parte da estrutura de páginas autenticadas da aplicação, permitindo que usuários visualizem suas listas pessoais. A integração com o componente `Listagem` facilita a reutilização de lógica e apresentação de dados.