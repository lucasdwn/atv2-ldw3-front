---
title: next-env.d.ts
description: 'Arquivo de definição de tipos para o Next.js, utilizado para garantir a tipagem correta em projetos TypeScript.'
---

# next-env.d.ts

O arquivo `next-env.d.ts` é um arquivo de definição de tipos que é gerado automaticamente em projetos que utilizam o Next.js com TypeScript. Ele contém referências a tipos globais que são necessários para o funcionamento adequado do Next.js.

## Conteúdo do Arquivo

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />
```

### Descrição das Referências

- `/// <reference types="next" />`: Inclui os tipos globais do Next.js, permitindo que você utilize as funcionalidades do framework com a tipagem correta.
  
- `/// <reference types="next/image-types/global" />`: Adiciona tipos específicos para o componente de imagem do Next.js, garantindo que as imagens sejam tratadas corretamente em termos de tipagem.

- `/// <reference types="next/navigation-types/compat/navigation" />`: Fornece tipos para a navegação compatível do Next.js, permitindo que você utilize as funcionalidades de navegação com segurança em TypeScript.

## Observações

- **Não Edite Este Arquivo**: Este arquivo é gerado automaticamente e não deve ser editado manualmente. Para mais informações sobre como configurar o TypeScript no Next.js, consulte a [documentação oficial](https://nextjs.org/docs/app/building-your-application/configuring/typescript).

Este arquivo é essencial para garantir que seu projeto Next.js funcione corretamente com TypeScript, proporcionando uma experiência de desenvolvimento mais segura e eficiente.