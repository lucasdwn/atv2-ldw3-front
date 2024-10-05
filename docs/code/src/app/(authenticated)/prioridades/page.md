---
title: Prioridades
description: 'Componente para gerenciar e exibir prioridades em uma lista, incluindo funcionalidades de paginação e remoção.'
---

# Prioridades

O componente `Prioridades` é responsável por gerenciar e exibir uma lista de prioridades. Ele permite a adição, remoção e filtragem de prioridades, além de implementar a funcionalidade de paginação.

## Estrutura do Componente

### Importações

O componente utiliza diversas bibliotecas e componentes, incluindo:

- **React**: Para a criação do componente.
- **useToast**: Para exibir mensagens de feedback ao usuário.
- **useRouter**: Para navegação entre páginas.
- **usePrioridade**: Hook personalizado para gerenciar o estado das prioridades.
- **Loading**: Componente de carregamento.
- **PrioridadeItem**: Componente para exibir cada prioridade individualmente.
- **AlertDialog**: Componente para confirmação de ações críticas, como a remoção de uma prioridade.

### Estado do Componente

O componente mantém os seguintes estados:

- `currentPage`: Página atual da lista de prioridades.
- `isDialogOpen`: Controle da exibição do diálogo de confirmação.
- `prioridadeToDelete`: ID da prioridade que está prestes a ser removida.
- `searchTerm`: Termo de busca para filtrar as prioridades.

### Funcionalidades

- **Paginação**: O componente permite navegar entre as páginas de prioridades, com botões para avançar e retroceder.
- **Filtro de Busca**: Um campo de entrada permite que o usuário busque prioridades específicas.
- **Remoção de Prioridades**: Ao clicar em um item, um diálogo de confirmação é exibido para confirmar a remoção da prioridade selecionada.

### Renderização

O componente renderiza:

1. Um cabeçalho com o título "Tipos de lista" e um botão para adicionar uma nova prioridade.
2. Um campo de entrada para filtrar as prioridades.
3. A lista de prioridades, que é exibida através do componente `PrioridadeItem`.
4. Controles de paginação para navegar entre as páginas de prioridades.
5. Um diálogo de confirmação para a remoção de prioridades.

### Exemplo de Uso

```tsx
import Prioridades from './src/app/(authenticated)/prioridades/page';

const App = () => {
    return (
        <div>
            <Prioridades />
        </div>
    );
};

export default App;
```

## Conclusão

O componente `Prioridades` é uma parte essencial da interface de gerenciamento de prioridades, oferecendo uma experiência de usuário fluida e intuitiva para a manipulação de dados de prioridades.