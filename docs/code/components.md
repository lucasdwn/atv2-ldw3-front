---
title: components.json
description: 'Configuração de componentes e estilos para o projeto utilizando ShadCN.'
---

# components.json

O arquivo `components.json` contém a configuração necessária para a estrutura de componentes e estilos do projeto, utilizando a biblioteca ShadCN. Abaixo estão os detalhes das propriedades definidas neste arquivo.

## Estrutura do Arquivo

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## Propriedades

- **$schema**: URL do esquema que define a estrutura do arquivo.
- **style**: Define o estilo a ser utilizado, neste caso, "new-york".
- **rsc**: Indica se o projeto utiliza React Server Components (true).
- **tsx**: Indica se o projeto utiliza arquivos TypeScript JSX (true).
- **tailwind**: Configurações específicas para o Tailwind CSS.
  - **config**: Caminho para o arquivo de configuração do Tailwind.
  - **css**: Caminho para o arquivo CSS global do projeto.
  - **baseColor**: Cor base utilizada no projeto, definida como "neutral".
  - **cssVariables**: Indica se as variáveis CSS estão habilitadas (true).
  - **prefix**: Prefixo a ser utilizado para as classes CSS (vazio neste caso).
- **aliases**: Mapeamento de aliases para facilitar a importação de módulos.
  - **components**: Alias para o diretório de componentes.
  - **utils**: Alias para o diretório de utilitários.
  - **ui**: Alias para o diretório de componentes de interface do usuário.
  - **lib**: Alias para o diretório de bibliotecas.
  - **hooks**: Alias para o diretório de hooks personalizados.