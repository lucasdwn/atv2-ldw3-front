---
title: NovaPrioridade
description: 'Componente responsável por renderizar o formulário para criação de uma nova prioridade.'
---

# NovaPrioridade

O componente `NovaPrioridade` é um componente React que utiliza a abordagem de "client component" do Next.js. Ele é responsável por renderizar o formulário para a criação de uma nova prioridade.

## Importações

O componente importa o `PrioridadeForm` do diretório de componentes, que contém a lógica e a interface para o formulário de prioridade.

```javascript
import { PrioridadeForm } from '@/components/prioridades/prioridadeForm';
```

## Estrutura do Componente

O componente `NovaPrioridade` é uma função que retorna o componente `PrioridadeForm`. Não possui lógica adicional ou estado interno.

```javascript
export default function NovaPrioridade() {
    return <PrioridadeForm />;
}
```

## Uso

Para utilizar o componente `NovaPrioridade`, basta importá-lo em uma página ou componente pai e incluí-lo na renderização. Ele não requer props, pois toda a lógica de manipulação de dados é gerenciada dentro do `PrioridadeForm`.

```javascript
import NovaPrioridade from './caminho/para/NovaPrioridade';

// Dentro do componente pai
<NovaPrioridade />
```

## Considerações

- Certifique-se de que o componente `PrioridadeForm` esteja corretamente implementado e exportado.
- Este componente é parte de uma estrutura maior que lida com prioridades, portanto, sua funcionalidade pode depender de outros componentes e contextos.