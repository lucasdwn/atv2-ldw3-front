---
title: page.tsx
description: 'Componente para criação de um novo tipo de lista na aplicação.'
---

# page.tsx

Este arquivo contém o componente `NovoTipoDeLista`, que é responsável por renderizar o formulário para a criação de um novo tipo de lista na aplicação.

## Estrutura do Componente

O componente `NovoTipoDeLista` é um componente funcional que utiliza a sintaxe de "client component" do Next.js. Ele importa e utiliza o componente `TipoListaForm` para exibir o formulário.

### Código

```javascript
'use client';

import { TipoListaForm } from '@/components/tiposLista/tipoListaForm';

export default function NovoTipoDeLista() {
    return <TipoListaForm />;
}
```

## Detalhes

- **Importação**: O componente `TipoListaForm` é importado do diretório de componentes, especificamente do módulo `tiposLista`.
- **Exportação**: O componente `NovoTipoDeLista` é exportado como padrão, permitindo que seja utilizado em outras partes da aplicação.
- **Renderização**: O componente renderiza diretamente o `TipoListaForm`, que deve conter a lógica e os elementos necessários para a criação de um novo tipo de lista.

## Considerações

Este componente é parte de uma estrutura maior que lida com a gestão de tipos de listas na aplicação, e deve ser utilizado em um contexto onde a criação de novos tipos de listas é necessária.