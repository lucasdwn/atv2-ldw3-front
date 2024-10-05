
---
title: favicon.ico
description: 'Arquivo de ícone para a aplicação, utilizado na exibição do favicon no navegador.'
---

# favicon.ico

O arquivo `favicon.ico` é um ícone que representa a aplicação em navegadores web. Este ícone é exibido na aba do navegador, nos favoritos e em outros locais onde a aplicação é referenciada.

## Estrutura do Arquivo

O arquivo é um PNG que contém a imagem do favicon. Abaixo estão algumas informações sobre o formato e a utilização do favicon:

- **Formato**: O favicon pode ser em formato `.ico`, `.png`, ou outros formatos de imagem suportados pelos navegadores.
- **Tamanho**: O tamanho padrão para um favicon é 16x16 pixels, mas tamanhos maiores, como 32x32 pixels ou 48x48 pixels, também podem ser utilizados.
- **Localização**: O favicon deve ser referenciado no HTML da aplicação, geralmente no `<head>` do documento, utilizando a seguinte tag:

```html
<link rel="icon" href="/path/to/favicon.ico" type="image/x-icon">
```

## Considerações

- É importante garantir que o favicon esteja acessível no caminho especificado para que os navegadores possam carregá-lo corretamente.
- O uso de um favicon ajuda a melhorar a identidade visual da aplicação e a experiência do usuário.
