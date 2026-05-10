# TriZ. — Landing Page

> Minha landing page como tatuadora e artista visual.  
> Projeto desenvolvido para a disciplina de Design com IA (A2), utilizando o [Stitch](https://stitch.withgoogle.com) como ferramenta de design orientado por IA, com refinamento e implementação no Claude.ai.

---

## 🎨 Sobre o Projeto

Sou a **TriZ.** — tatuadora, ilustradora, alma livre. Meu universo visual transita entre o blackwork em nanquim, a arte digital vibrante, o horror pop e referências de cultura alternativa.

Este projeto é minha **landing page**, uma página única que apresenta minha identidade artística, portfólio e canal de contato. A estética é dark, quente e autoral — inspirada em zines de tattoo underground, cartazes de show indie e sketchbooks de artistas alternativos.

---

## 🛠️ Etapas do Projeto

### Etapa 1 — Design com Stitch (Google)

Utilizei a plataforma [Stitch](https://stitch.withgoogle.com) para gerar o design inicial da landing page com base em um prompt estruturado contendo:

- Paleta de cores, tipografia e tema visual
- Estrutura de seções e navegação
- Diretrizes de acessibilidade e daltonismo

**Screenshots do Stitch:**  
> *(inserir prints das telas geradas no Stitch)*

**Prompt utilizado:**

```
Landing page para a tatuadora e artista visual TriZ.

Direção de arte geral:
Imagine um zine de tattoo underground impresso em papel offset envelhecido, mas renderizado como uma página web dark e imersiva. A estética deve lembrar capas de disco de doom metal ou post-punk combinadas com cadernos de esboço de artistas alternativos dos anos 90. Nada de "clean", nada de "moderno minimalista", nada de template de portfólio genérico. Cada elemento deve parecer que foi desenhado à mão e depois digitalizado.

Cores:
- Fundo dominante: preto com leve subtom esverdeado escuro #080c0a
- Seções alternadas: cinza carvão #1a1a1a e cinza médio #2e2e2e
- Destaque principal: dourado âmbar queimado #f2c230
- Acento pontual: vinho escuro #6b0f1a
- Texto corrido: bege envelhecido #e8e0d0
- Proibido: branco puro, azul, gradientes coloridos, pastéis

Tipografia:
- H1: Cormorant Garamond Italic Bold, grande e dramático, cor dourada
- H2: Playfair Display, maiúsculas, espaçamento largo, cor bege
- Corpo: DM Sans Regular, 17px mínimo, line-height 1.8
- Efeito de textura granulada sutil sobre textos principais

Estrutura (single page, scroll suave):
1. Hero — Logo TriZ. centralizada, textura de papel/ruído, tagline poética, fade-in lento
2. Sobre — duas colunas, borda esquerda dourada, traço decorativo à mão
3. Portfólio — grid assimétrico, hover com overlay dourado, cantos retos
4. Contato — CTA "Me chama no Instagram", botão com borda dourada

Navegação:
- Header fixo, logo à esquerda, links âncora à direita
- Mobile: hamburger menu com overlay full screen
- Scroll suave entre seções

Detalhes:
- Cursor customizado: traço de caneta ou ponto dourado
- Separadores: linha fina dourada com textura de traço à mão
- Grain/noise sutil em overlay em toda a página (5–8% opacidade)
- Ícones de redes sociais monocromáticos dourados

Acessibilidade:
- Contraste WCAG AA garantido
- Nunca usar cor como único diferenciador
- Fonte mínima 16px no mobile
- Alt text em todas as imagens do portfólio
- Teste de daltonismo: protanopia e deuteranopia
```

---

### Etapa 2 — Refinamento no Claude.ai

O design gerado pelo Stitch foi importado para o **Claude.ai**, onde apliquei as seguintes correções:

- **2.1** — Correção de links quebrados e navegação incompleta deixada pelo Stitch
- **2.2** — Geração da estrutura de pastas com ponto de entrada no `index.html`

**Estrutura de arquivos gerada:**

```
triz-landscape/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo-triz.png
│       └── portfolio/
└── README.md
```

---

### Etapa 3 — Submissão no GitHub

Repositório: [github.com/Trizmedeiros-sketch/triz-landscape](https://github.com/Trizmedeiros-sketch/triz-landscape)

---

### Etapa 4 — Deploy na Vercel

> Link do deploy: *(inserir link após publicação)*

---

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| Cor de fundo | `#080c0a` — preto esverdeado |
| Destaque principal | `#f2c230` — dourado âmbar |
| Cinza de apoio | `#2e2e2e` / `#1a1a1a` |
| Acento | `#6b0f1a` — vinho escuro |
| Texto | `#e8e0d0` — bege envelhecido |
| Fonte display | Cormorant Garamond Italic |
| Fonte corpo | DM Sans Regular |

---

## 🔗 Links

- [Meu portfólio no Behance](https://www.behance.net/beatrizmoraes17)
- [Stitch — Google](https://stitch.withgoogle.com)
- [Deploy na Vercel](#) *(em breve)*

---

*Feito com arte e caffeine ☕🖋️*
