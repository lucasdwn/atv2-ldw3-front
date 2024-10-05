---
title: label
description: 'Componente Label para uso em formulários, estilizado com variantes de classe.'
---

# Label

O componente `Label` é um elemento de interface que representa um rótulo para um controle de formulário. Ele é construído utilizando a biblioteca `@radix-ui/react-label` e permite a personalização através de variantes de classe.

## Importação

Para utilizar o componente `Label`, você deve importá-lo da seguinte forma:

```javascript
import { Label } from '@/components/ui/label';
```

## Propriedades

O componente `Label` aceita todas as propriedades do `LabelPrimitive.Root`, além de variantes de classe definidas pelo `class-variance-authority`. As principais propriedades incluem:

- `className`: Permite adicionar classes CSS personalizadas.
- `htmlFor`: Especifica qual controle de formulário o rótulo está associado.

## Variantes

O componente `Label` utiliza variantes de classe para estilização. As classes padrão aplicadas incluem:

- `text-sm`: Define o tamanho do texto como pequeno.
- `font-medium`: Aplica uma espessura de fonte média.
- `leading-none`: Remove o espaçamento entre linhas.
- `peer-disabled:cursor-not-allowed`: Altera o cursor quando o controle associado está desabilitado.
- `peer-disabled:opacity-70`: Aplica uma opacidade reduzida quando o controle associado está desabilitado.

## Exemplo de Uso

Aqui está um exemplo de como utilizar o componente `Label` em um formulário:

```javascript
<Label htmlFor="username" className="text-blue-500">
  Nome de Usuário
</Label>
<input id="username" type="text" className="border p-2" />
```

## Considerações

- O componente `Label` deve ser utilizado em conjunto com controles de formulário para garantir acessibilidade e usabilidade.
- As variantes de classe podem ser personalizadas conforme necessário, utilizando a função `cn` para combinar classes.

## Exportação

O componente é exportado como parte do módulo, permitindo sua reutilização em diferentes partes da aplicação.