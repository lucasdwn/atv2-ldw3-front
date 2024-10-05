---
title: switch
description: 'Componente Switch personalizável utilizando Radix UI para alternar estados.'
---

# Switch

O componente `Switch` é uma implementação de um interruptor (switch) que permite alternar entre dois estados (ligado/desligado). Este componente é construído utilizando a biblioteca Radix UI, que fornece uma base acessível e personalizável para componentes de interface do usuário.

## Importação

Para utilizar o componente `Switch`, você deve importá-lo da seguinte forma:

```javascript
import { Switch } from 'caminho/para/o/componente/switch';
```

## Propriedades

O componente `Switch` aceita as seguintes propriedades:

- `className` (opcional): Permite adicionar classes CSS personalizadas ao componente.
- `...props`: Qualquer outra propriedade que o componente `SwitchPrimitives.Root` aceita.

## Exemplo de Uso

Aqui está um exemplo básico de como usar o componente `Switch`:

```javascript
import { Switch } from './path/to/switch';

function App() {
  return (
    <div>
      <Switch />
    </div>
  );
}
```

## Estilização

O `Switch` utiliza classes utilitárias para estilização, permitindo que você customize a aparência do componente. As classes padrão incluem:

- `peer inline-flex h-5 w-9`: Define o tamanho e o layout do switch.
- `rounded-full`: Aplica bordas arredondadas.
- `border-2 border-transparent`: Define a borda do switch.
- `transition-colors`: Adiciona transições suaves nas mudanças de estado.

## Acessibilidade

O componente é projetado para ser acessível, utilizando as práticas recomendadas para componentes interativos. Ele inclui suporte para foco visível e estados de desabilitação.

## Exportação

O componente `Switch` é exportado como um componente React padrão, permitindo que você o utilize em qualquer parte da sua aplicação.

```javascript
export { Switch };
```