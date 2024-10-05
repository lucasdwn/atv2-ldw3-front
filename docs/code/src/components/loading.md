---
title: loading
description: 'Componente de carregamento que exibe um spinner enquanto os dados estão sendo carregados.'
---

# loading

O componente `Loading` é um componente funcional em React que exibe um spinner de carregamento utilizando a biblioteca `react-loader-spinner`. Este componente é útil para indicar ao usuário que uma operação assíncrona está em andamento.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

```tsx
'use client';

import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-black z-50">
            <Rings
                height="100"
                width="100"
                color="#5023b0"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    );
};

export default Loading;
```

## Detalhes do Componente

- **Importações**:
  - `React`: Importa a biblioteca React para criar componentes.
  - `Rings`: Importa o componente de spinner da biblioteca `react-loader-spinner`.

- **Estilo**:
  - O componente é posicionado de forma fixa (`fixed`) para cobrir toda a tela (`inset-0`), centralizando o spinner tanto vertical quanto horizontalmente (`flex items-center justify-center`).
  - O fundo do componente muda de acordo com o tema: `bg-gray-100` para o tema claro e `dark:bg-black` para o tema escuro.

- **Props do Spinner**:
  - `height` e `width`: Definem as dimensões do spinner.
  - `color`: Define a cor do spinner.
  - `radius`: Define o raio das bordas do spinner.
  - `visible`: Controla a visibilidade do spinner (sempre visível neste caso).
  - `ariaLabel`: Fornece uma descrição acessível para o spinner.

## Uso

Para utilizar o componente `Loading`, basta importá-lo e incluí-lo no seu JSX onde for necessário indicar um carregamento:

```tsx
import Loading from './path/to/loading';

// Dentro do seu componente
return (
    <div>
        {isLoading ? <Loading /> : <Content />}
    </div>
);
```

## Conclusão

O componente `Loading` é uma solução simples e eficaz para melhorar a experiência do usuário durante operações que requerem tempo de carregamento.