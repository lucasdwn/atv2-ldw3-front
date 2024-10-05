---
title: card
description: 'Componente Card para exibição de conteúdo com cabeçalho, título, descrição, conteúdo e rodapé.'
---

# Card

O componente `Card` é uma estrutura de layout que permite a exibição de informações de forma organizada e estilizada. Ele é composto por várias subcomponentes que facilitam a personalização e a organização do conteúdo.

## Componentes

### Card

```tsx
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
));
```

- **Descrição**: O componente principal que encapsula o conteúdo do card.
- **Props**:
  - `className`: Classes CSS adicionais para estilização.

### CardHeader

```tsx
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
```

- **Descrição**: Seção do card destinada ao cabeçalho.
- **Props**:
  - `className`: Classes CSS adicionais para estilização.

### CardTitle

```tsx
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
));
```

- **Descrição**: Título do card.
- **Props**:
  - `className`: Classes CSS adicionais para estilização.

### CardDescription

```tsx
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
```

- **Descrição**: Descrição do card.
- **Props**:
  - `className`: Classes CSS adicionais para estilização.

### CardContent

```tsx
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
```

- **Descrição**: Área principal do card onde o conteúdo é exibido.
- **Props**:
  - `className`: Classes CSS adicionais para estilização.

### CardFooter

```tsx
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
```

- **Descrição**: Rodapé do card, geralmente utilizado para ações ou informações adicionais.
- **Props**:
  - `className`: Classes CSS adicionais para estilização.

## Exportação

Os componentes são exportados para uso em outras partes da aplicação:

```tsx
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
``` 

Utilize esses componentes para criar cards personalizados e responsivos em sua aplicação.