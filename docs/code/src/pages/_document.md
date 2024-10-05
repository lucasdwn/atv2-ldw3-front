---
title: _document.js
description: 'Configuração do documento principal para a aplicação Next.js, incluindo links para fontes e pré-carregamento de imagens.'
---

# _document.js

O arquivo `_document.js` é responsável por personalizar o documento HTML padrão gerado pelo Next.js. Ele permite a inclusão de elementos que devem estar presentes em todas as páginas da aplicação, como links para fontes e scripts.

## Estrutura do Código

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="preload"
                        href="/_next/static/media/image-home.webp"
                        as="image"
                        type="image/webp"
                    />
                    <link
                        rel="preload"
                        href="/_next/static/media/image-register.webp"
                        as="image"
                        type="image/webp"
                    />
                    <link
                        rel="preload"
                        href="/_next/static/media/image-login.webp"
                        as="image"
                        type="image/webp"
                    />
                </Head>
                <body className="antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
```

## Componentes Principais

- **Html**: Define a estrutura HTML do documento.
- **Head**: Permite a inclusão de elementos no `<head>` do HTML, como links para fontes e pré-carregamento de recursos.
- **Main**: Representa o conteúdo principal da aplicação.
- **NextScript**: Inclui scripts necessários para o funcionamento do Next.js.

## Funcionalidades

- **Pré-conexão**: As tags `<link rel="preconnect">` melhoram a performance ao estabelecer conexões antecipadas com os domínios das fontes.
- **Carregamento de Fontes**: A fonte "Roboto" é carregada para uso na aplicação.
- **Pré-carregamento de Imagens**: As imagens são pré-carregadas para otimizar o tempo de carregamento e melhorar a experiência do usuário.

## Considerações

Este arquivo deve ser utilizado para configurações globais que precisam ser aplicadas a todas as páginas da aplicação. É importante manter a estrutura e as importações corretas para garantir o funcionamento adequado do Next.js.