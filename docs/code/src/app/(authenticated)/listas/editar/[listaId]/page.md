---
title: page.tsx
description: 'Componente responsável pela edição de uma lista, utilizando o formulário de lista e gerenciando o estado de carregamento.'
---

# EdicaoLista

O componente `EdicaoLista` é responsável por gerenciar a edição de uma lista específica. Ele utiliza o `ListaForm` para renderizar o formulário de edição e o componente `Loading` para indicar o estado de carregamento enquanto a lista está sendo carregada.

## Importações

- `ListaForm`: Componente que renderiza o formulário para edição de uma lista.
- `Loading`: Componente que exibe um indicador de carregamento.
- `useParams`: Hook do Next.js que permite acessar os parâmetros da URL.

## Funcionamento

1. **Obtenção do ID da Lista**: O componente utiliza o hook `useParams` para extrair o `listaId` da URL.
2. **Verificação do ID**: Se o `listaId` não estiver presente, o componente renderiza o componente `Loading`.
3. **Renderização do Formulário**: Se o `listaId` estiver disponível, o componente renderiza o `ListaForm`, passando o `listaId` como prop.

## Exemplo de Uso

```tsx
import EdicaoLista from 'caminho/para/EdicaoLista';

// Uso do componente em uma página
<EdicaoLista />
```

## Considerações

- Certifique-se de que o `listaId` esteja sempre presente na URL ao acessar este componente, pois a ausência dele resultará na exibição do componente de carregamento.
- O `ListaForm` deve estar preparado para lidar com a edição de uma lista existente, utilizando o `listaId` fornecido.