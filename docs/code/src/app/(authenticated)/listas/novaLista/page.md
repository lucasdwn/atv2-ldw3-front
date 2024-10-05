---
title: page.tsx
description: 'Componente responsável pela criação de uma nova lista utilizando o formulário de lista.'
---

# page.tsx

O arquivo `page.tsx` é um componente React que serve como a página de criação de uma nova lista. Ele utiliza o componente `ListaForm` para renderizar o formulário necessário para a criação da lista.

## Estrutura do Componente

```javascript
import { ListaForm } from "@/components/listas/listaForm";

export default function CriacaoLista() {
    return <ListaForm />;
}
```

### Importações

- `ListaForm`: Componente importado de `@/components/listas/listaForm`, que contém a lógica e a interface para a criação de uma nova lista.

### Função `CriacaoLista`

- **Descrição**: Esta função é o componente padrão exportado que renderiza o formulário de criação de lista.
- **Retorno**: O componente retorna o `ListaForm`, que é responsável por coletar as informações necessárias para a nova lista.

## Uso

Este componente deve ser utilizado em rotas que requerem a criação de uma nova lista, permitindo que os usuários insiram os detalhes da lista que desejam criar.