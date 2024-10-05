---
title: BodyButtons
description: 'Componente que renderiza botões para cadastro e assistir a um vídeo.'
---

## BodyButtons

O componente `BodyButtons` é responsável por renderizar dois botões: um para redirecionar o usuário para a página de cadastro e outro para abrir um vídeo em uma nova aba.

### Importações

O componente utiliza os seguintes módulos:

- `Button` do componente UI.
- `useRouter` do Next.js para manipulação de rotas.
- `Play` do pacote `lucide-react` para o ícone de reprodução.

### Estrutura do Componente

```javascript
export function BodyButtons() {
    const router = useRouter();

    const handleWatchClick = () => {
        window.open("https://youtu.be/CLVGwIY8FI8?si=hObgmrQO4bhFrUWx", "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex space-x-4 mt-4">
            <Button
                className="bg-violet-purple hover:bg-violet-purple-hover dark:text-gray-100"
                onClick={() => router.push('/register')}
            >
                Cadastrar-se
            </Button>
            <Button
                variant="outline"
                className="flex items-center"
                onClick={handleWatchClick}
            >
                Assistir <Play className="ml-2 h-4 w-4" />
            </Button>
        </div>
    );
}
```

### Funcionalidade

- **Botão "Cadastrar-se"**: Ao ser clicado, redireciona o usuário para a página de registro (`/register`).
- **Botão "Assistir"**: Ao ser clicado, abre um vídeo do YouTube em uma nova aba.

### Estilização

Os botões são estilizados utilizando classes do Tailwind CSS, proporcionando uma aparência responsiva e moderna. O botão de cadastro possui um fundo roxo que muda ao passar o mouse, enquanto o botão de assistir é um botão contornado que contém um ícone de reprodução.