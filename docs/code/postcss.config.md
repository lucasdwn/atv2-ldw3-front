---
title: postcss.config.mjs
description: 'Configuração do PostCSS para integração com Tailwind CSS.'
---

# postcss.config.mjs

Este arquivo contém a configuração do PostCSS, que é uma ferramenta utilizada para transformar CSS com JavaScript. Neste caso, a configuração é voltada para a integração com o Tailwind CSS.

## Estrutura do Arquivo

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### Descrição dos Componentes

- **@type {import('postcss-load-config').Config}**: Esta linha é uma anotação de tipo que informa ao TypeScript sobre a estrutura esperada da configuração do PostCSS.
  
- **const config**: Define a constante `config`, que armazena a configuração do PostCSS.

- **plugins**: Um objeto que contém os plugins que serão utilizados pelo PostCSS. Neste caso, está sendo utilizado o plugin `tailwindcss`.

- **tailwindcss: {}**: A configuração do plugin Tailwind CSS. Neste exemplo, não há opções adicionais sendo passadas, o que significa que o Tailwind CSS usará suas configurações padrão.

### Exportação

- **export default config**: Exporta a configuração para que possa ser utilizada em outros arquivos do projeto.