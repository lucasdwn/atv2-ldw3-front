---
title: next.config.mjs
description: 'Configuração do Next.js para gerenciamento de imagens remotas.'
---

# next.config.mjs

Este arquivo contém a configuração do Next.js, especificamente para o gerenciamento de imagens remotas.

## Configuração

A configuração é exportada como um objeto que define as opções para o Next.js. Neste caso, estamos configurando o suporte a imagens remotas.

### Propriedades

- **images**: Um objeto que contém as configurações relacionadas a imagens.
  - **remotePatterns**: Um array de padrões que define quais imagens remotas podem ser carregadas.
    - **protocol**: O protocolo a ser utilizado (neste caso, 'https').
    - **hostname**: O nome do host permitido para o carregamento de imagens (neste caso, 'imgur.com').

## Exemplo de Uso

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgur.com',
            },
        ],
    },
};

export default nextConfig;
```

Esta configuração permite que o Next.js carregue imagens hospedadas no domínio `imgur.com` utilizando o protocolo HTTPS.