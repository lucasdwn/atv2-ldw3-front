---
title: page
description: 'Componente principal da página inicial do aplicativo de gerenciamento de tarefas.'
---

# page

Este arquivo contém o componente principal da página inicial do aplicativo de gerenciamento de tarefas. Ele utiliza diversos componentes para estruturar a interface do usuário, incluindo cabeçalho, corpo e layout público.

## Estrutura do Componente

O componente `Home` é exportado como padrão e renderiza a seguinte estrutura:

- **PublicLayout**: Envolve todo o conteúdo da página, fornecendo um layout consistente.
- **Header**: Contém o título do aplicativo e um botão para alternar o tema.
- **Main**: Apresenta uma introdução ao aplicativo e três seções que destacam suas principais funcionalidades.

### Detalhes do Código

1. **Importações**:
   - Importa ícones da biblioteca `lucide-react`.
   - Importa uma imagem para ser exibida na página.
   - Importa componentes de tema e botões.

2. **Renderização**:
   - O cabeçalho inclui o nome do aplicativo e um botão para alternar entre temas claro e escuro.
   - O corpo da página apresenta um título, uma descrição e botões de ação.
   - A seção principal é dividida em duas partes: uma para texto e outra para a imagem.

3. **Funcionalidades**:
   - **Criação de Listas**: Permite ao usuário organizar suas tarefas.
   - **Personalização**: Oferece opções para definir prioridades e categorias.
   - **Colaboração**: Facilita o compartilhamento de listas com outros usuários.

### Estilos

O componente utiliza classes do Tailwind CSS para estilização, garantindo uma aparência responsiva e moderna. As classes são aplicadas para ajustar o layout em diferentes tamanhos de tela.

### Conclusão

O componente `Home` serve como a porta de entrada para o aplicativo, oferecendo uma interface amigável e intuitiva para os usuários gerenciarem suas tarefas de forma eficiente.