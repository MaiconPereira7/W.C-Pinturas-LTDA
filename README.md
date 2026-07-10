# W.C Pintura LTDA

Site institucional (landing page) para prospecção de clientes de pintura predial e residencial no ABC Paulista e Grande São Paulo. Apresenta os serviços da empresa, portfólio de trabalhos, diferenciais, processo de atendimento e depoimentos, com captação de orçamento via WhatsApp.

## Tecnologias utilizadas

- **HTML5** — estrutura semântica (`header`, `main`, `section`, `article`, `footer`)
- **CSS3** — estilos modulares por seção, variáveis nativas (`:root`), CSS Grid/Flexbox, `image-set()` para WebP com fallback
- **JavaScript (ES Modules)** — interatividade (menu, scroll reveals, cursor customizado, animações)
- **[Vite](https://vitejs.dev/)** — ferramental de build e servidor de desenvolvimento
- **[GSAP](https://gsap.com/)** (`ScrollTrigger`, `ScrollToPlugin`) — animações de entrada, scroll e transições
- **[Prettier](https://prettier.io/)** — padronização automática de formatação

## Estrutura do projeto

```
├── index.html              # Ponto de entrada (Vite)
├── public/
│   └── images/              # Imagens estáticas (logo, hero, portfólio) — .jpg + .webp
├── src/
│   ├── styles/               # CSS modular, um arquivo por seção
│   │   └── main.css          # Agregador (@import de todos os módulos)
│   └── scripts/               # JavaScript modular (ES Modules)
│       └── main.js           # Ponto de entrada — importa CSS e inicializa os módulos
└── vite.config.js
```

## Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Abre o site em `http://localhost:5173` com hot reload.

### Build de produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `dist/`.

### Preview do build de produção

```bash
npm run preview
```

### Formatação de código

```bash
npm run format        # formata todos os arquivos
npm run format:check  # apenas verifica, sem alterar
```

