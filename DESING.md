# DESING.md — Entulho Fácil

## 1. Visão geral

**Projeto:** Landing Page — Entulho Fácil  
**Objetivo principal:** gerar pedidos de locação de tambor para entulho, com foco em conversão via WhatsApp.  
**Estratégia:** comunicação direta, visual amigável, forte contraste e navegação simples.  
**Abordagem:** mobile first, responsiva, rápida e com hierarquia visual clara.

---

## 2. Conceito visual

A identidade do site combina:

- construção civil;
- praticidade;
- limpeza;
- rapidez;
- sustentabilidade;
- atendimento simples.

O design utiliza o tambor verde como principal ativo visual e transforma a linguagem da campanha em uma interface mais limpa e profissional.

### Sensação desejada

- confiável;
- direta;
- acessível;
- organizada;
- moderna;
- popular sem parecer amadora;
- visualmente marcante.

---

## 3. Paleta de cores

```css
:root {
  --green-950: #063818;
  --green-900: #08471F;
  --green-800: #0B5A28;
  --green-700: #147134;

  --lime-500: #69B718;
  --lime-400: #7FC91D;
  --lime-300: #9EDB4A;

  --black: #111111;
  --graphite: #252525;

  --cream-100: #F3EEE5;
  --cream-50: #FAF7F1;
  --white: #FFFFFF;

  --sand-300: #D4C0A6;
  --sand-500: #A18767;

  --success: #2B8A3E;
}
```

### Aplicação

- **Verde escuro:** fundos institucionais, footer, CTA de alto contraste.
- **Verde principal:** botões, elementos da marca, ícones.
- **Verde-limão:** destaque visual, badges, palavras importantes e CTA.
- **Off-white / bege:** fundo principal da landing page.
- **Preto:** títulos e textos fortes.
- **Branco:** textos sobre fundo verde e áreas de respiro.

---

## 4. Tipografia

### Títulos

Sugestões:

- **Barlow Condensed**
- **Oswald**
- **Archivo Narrow**

Uso:
- H1;
- H2;
- chamadas promocionais;
- números;
- pequenas frases de impacto.

### Interface e textos

Sugestões:

- **Inter**
- **Manrope**
- **Plus Jakarta Sans**

Uso:
- menus;
- parágrafos;
- botões;
- formulários;
- FAQ;
- microcopy.

---

## 5. Escala tipográfica

### Desktop

```text
H1: 64px / 700 / 0.95
H2: 44px / 700 / 1.05
H3: 28px / 700 / 1.10
Body XL: 20px / 500 / 1.50
Body: 17px / 400 / 1.60
Small: 14px / 400 / 1.50
Button: 16px / 700
```

### Mobile

```text
H1: 42px
H2: 32px
H3: 24px
Body: 16px
Small: 14px
Button: 16px
```

---

## 6. Grid

### Container

```css
.container {
  width: min(100% - 32px, 1180px);
  margin-inline: auto;
}
```

### Desktop

- 12 colunas;
- gutter: 24px;
- largura máxima: 1180px.

### Tablet

- 8 colunas;
- gutter: 20px.

### Mobile

- 4 colunas;
- margem lateral: 16px;
- gutter: 16px.

---

## 7. Breakpoints

```css
@media (min-width: 640px) { /* tablet */ }
@media (min-width: 900px) { /* desktop */ }
@media (min-width: 1200px) { /* wide */ }
```

Referência:

```text
Mobile: 0–639px
Tablet: 640–899px
Desktop: 900–1199px
Wide: 1200px+
```

---

## 8. Sistema de espaçamento

Base: **8px**

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

### Uso recomendado

- entre label e campo: 8px;
- entre elementos de card: 16px;
- entre cards: 24px;
- entre blocos internos: 32px;
- seção mobile: 64px;
- seção desktop: 96px a 128px.

---

## 9. Bordas

```text
Buttons: 12px
Inputs: 12px
Cards: 20px
Hero image: 28px
Badges: 999px
```

---

## 10. Sombras

```css
--shadow-sm: 0 8px 24px rgba(0,0,0,.08);
--shadow-md: 0 16px 48px rgba(0,0,0,.12);
--shadow-cta: 0 12px 28px rgba(105,183,24,.24);
```

---

# 11. Estrutura da Landing Page

## 11.1 Header

### Desktop

Elementos:

- logo Entulho Fácil;
- Como funciona;
- Atendimento;
- Dúvidas;
- WhatsApp;
- CTA: `Pedir tambor`.

### Mobile

Elementos:

- logo;
- CTA compacto;
- menu hamburguer.

### Comportamento

```text
position: sticky;
top: 0;
z-index: 100;
```

Usar fundo off-white com leve transparência e blur.

---

# 12. Hero

## Conteúdo

### Eyebrow

```text
LOCAÇÃO DE TAMBOR PARA ENTULHO
```

### H1

```text
Sua obra sem bagunça.
```

### Destaque

```text
Encheu? A gente retira.
```

### Texto

```text
Locação de tambor para entulho de forma rápida,
prática e sustentável. Ideal para obras, reformas,
condomínios e comércios.
```

### CTA principal

```text
Pedir pelo WhatsApp
```

### CTA secundário

```text
Conheça como funciona
```

---

## Visual do Hero

Elemento principal:

- tambor verde;
- entulho de obra;
- ambiente de construção;
- personagem amigável;
- composição realista;
- fundo com textura de parede e materiais.

### Micro-benefícios

- prático;
- rápido;
- sem bagunça;
- sustentável.

---

# 13. Trust Bar

Fundo verde escuro.

### Itens

```text
Descarte responsável pelo meio ambiente
Retiramos rápido
Ideal para obras de todos os tamanhos
```

### Estilo

- ícones redondos;
- verde-limão;
- texto branco;
- divisórias finas;
- bordas com textura de pincel.

---

# 14. Seção — Como funciona

## Título

```text
Como funciona?
```

## Subtítulo

```text
Simples assim. Sem complicação.
```

## Passos

### Passo 1

```text
Você pede

Entre em contato pelo WhatsApp e faça seu pedido.
```

### Passo 2

```text
Você enche

Deixe o tambor no local e encha com o seu entulho.
```

### Passo 3

```text
A gente retira

Quando estiver cheio, é só nos avisar.
```

### Layout

Desktop:
- 3 cards lado a lado.

Mobile:
- cards empilhados;
- fluxo vertical.

---

# 15. Benefícios

## Título

```text
Mais vantagens para a sua obra
```

## Cards

```text
Obra mais organizada
Sem bagunça
Atendimento rápido
Sustentável e consciente
```

### Estrutura

Cada card deve conter:

- ícone;
- título curto;
- descrição com no máximo 2 linhas;
- fundo branco;
- sombra suave;
- radius de 20px.

---

# 16. Para quem é

## Título

```text
Ideal para quem precisa de praticidade
```

## Categorias

```text
Reformas residenciais
Obras
Condomínios
Comércios
```

Cada categoria pode utilizar:

- foto;
- label;
- texto curto.

### Layout

Desktop:
- grid 4 colunas.

Mobile:
- carrossel horizontal ou 1 coluna.

---

# 17. CTA intermediário

## Fundo

```text
green-950
```

## Texto

```text
Solicite seu tambor agora!
```

## Subtexto

```text
Atendimento rápido e sem complicação.
Fale com a nossa equipe pelo WhatsApp.
```

## CTA

```text
Quero meu tambor agora
```

### Apoios

```text
Entrega ágil
Atendemos sua região
Serviço confiável
```

---

# 18. FAQ

## Título

```text
Dúvidas frequentes
```

## Perguntas

```text
O que posso colocar no tambor?
Qual o tamanho do tambor?
Quanto tempo posso ficar com o tambor?
Vocês atendem minha região?
Como solicito a retirada?
```

### Comportamento

- accordion;
- uma pergunta aberta por vez;
- transição curta;
- clique em toda a linha;
- ícone de chevron.

---

# 19. CTA final

## Título

```text
Ainda tem dúvidas?
```

## Texto

```text
Fale com a nossa equipe.
```

## CTA

```text
Conversar pelo WhatsApp
```

### Apoio

Exibir:

- telefone;
- horário;
- mascote / tambor;
- frase visual curta.

---

# 20. Footer

## Conteúdo

- logo;
- mensagem institucional;
- Como funciona;
- Atendimento;
- Dúvidas;
- Instagram;
- Facebook;
- WhatsApp;
- copyright;
- política de privacidade.

### Fundo

```text
green-950
```

---

# 21. Componentes

## Botão primário

```css
.btn-primary {
  min-height: 52px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  border-radius: 12px;
  background: var(--lime-500);
  color: var(--green-950);
  font-weight: 800;
  cursor: pointer;
  transition: .2s ease;
}
```

### Hover

```css
.btn-primary:hover {
  transform: translateY(-2px);
  background: var(--lime-400);
  box-shadow: var(--shadow-cta);
}
```

---

## Botão secundário

```css
.btn-secondary {
  min-height: 52px;
  padding: 0 24px;
  border-radius: 12px;
  border: 1px solid var(--green-900);
  background: transparent;
  color: var(--green-900);
  font-weight: 700;
}
```

---

## Cards

```css
.card {
  padding: 28px;
  background: var(--white);
  border: 1px solid rgba(6,56,24,.08);
  border-radius: 20px;
  box-shadow: var(--shadow-sm);
}
```

---

## Inputs

```css
.input {
  width: 100%;
  min-height: 52px;
  padding: 0 16px;
  border: 1px solid rgba(6,56,24,.18);
  border-radius: 12px;
  background: #fff;
}
```

### Focus

```css
.input:focus {
  outline: 3px solid rgba(105,183,24,.20);
  border-color: var(--lime-500);
}
```

---

# 22. Sticky WhatsApp Mobile

No mobile, usar CTA fixo inferior.

```css
.mobile-whatsapp {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 90;
}
```

Texto:

```text
Pedir meu tambor
```

Considerar:

```css
padding-bottom: env(safe-area-inset-bottom);
```

---

# 23. Ícones

Estilo:

- outline simples;
- espessura consistente;
- cantos arredondados;
- verde ou verde-limão.

Ícones principais:

- WhatsApp;
- leaf;
- timer;
- truck;
- construction helmet;
- broom;
- map pin;
- shield;
- plus / minus;
- chevron.

---

# 24. Elementos gráficos

Usar com moderação:

- pinceladas;
- textura de parede;
- pequenos respingos;
- fragmentos de obra;
- brush underline;
- selos circulares;
- stickers.

Não usar textura atrás de:

- parágrafos;
- FAQ;
- formulários;
- textos pequenos.

---

# 25. Imagens

## Hero

Formato ideal:

```text
Desktop: 4:5 ou 1:1
Mobile: 4:5
```

### Requisitos

- boa iluminação;
- tambor em destaque;
- fundo realista;
- entulho visível;
- composição limpa;
- sem excesso de objetos.

---

# 26. Mobile First

## Hero mobile

Ordem:

```text
Logo/Header
Eyebrow
H1
Texto
CTA principal
CTA secundário
Imagem
Trust items
```

## Regras

- texto mínimo 16px;
- botão mínimo 52px de altura;
- touch target mínimo 44px;
- não depender de hover;
- reduzir texturas;
- evitar cards com textos longos;
- CTA deve aparecer antes da primeira dobra quando possível.

---

# 27. Acessibilidade

- contraste WCAG AA;
- labels reais;
- foco visível;
- navegação por teclado;
- `alt` em todas as imagens;
- não usar cor como único indicador;
- respeitar `prefers-reduced-motion`.

---

# 28. Performance

Prioridades:

- imagens WebP / AVIF;
- SVG para ícones;
- hero otimizado;
- lazy load;
- preload apenas do essencial;
- evitar vídeo automático;
- evitar bibliotecas pesadas.

## Metas

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

---

# 29. SEO

## Title

```text
Locação de Tambor para Entulho | Entulho Fácil
```

## Description

```text
Aluguel de tambor para entulho com entrega,
retirada rápida e descarte responsável.
Consulte atendimento na sua região.
```

## H1

```text
Locação de tambor para entulho sem complicação
```

---

# 30. SEO Local

Preparar arquitetura para páginas futuras:

```text
/locacao-tambor-sao-paulo
/locacao-tambor-taubate
/locacao-tambor-pindamonhangaba
/aluguel-tambor-entulho-[cidade]
```

Adicionar:

- cidades atendidas;
- bairros;
- telefone;
- horário;
- dados estruturados `LocalBusiness`.

---

# 31. Tracking

Eventos recomendados:

```text
click_whatsapp_header
click_whatsapp_hero
click_whatsapp_mobile_sticky
click_whatsapp_middle_cta
click_whatsapp_final_cta
faq_open
scroll_50
scroll_75
scroll_90
form_submit
```

Ferramentas:

- Google Analytics 4;
- Meta Pixel;
- Google Ads Conversion Tracking.

---

# 32. Arquitetura final

```text
HEADER
↓
HERO
↓
TRUST BAR
↓
COMO FUNCIONA
↓
BENEFÍCIOS
↓
PARA QUEM É
↓
CTA INTERMEDIÁRIO
↓
FAQ
↓
CTA FINAL
↓
FOOTER
```

---

# 33. Direção final

A landing page deve manter o reconhecimento da comunicação atual da Entulho Fácil, porém com uma apresentação mais profissional.

## Prioridades

1. CTA visível.
2. Conversão rápida via WhatsApp.
3. Explicação simples do serviço.
4. Imagem do tambor como principal ativo visual.
5. Hierarquia forte.
6. Navegação curta.
7. Experiência mobile impecável.
8. Visual de construção sem poluição excessiva.

---

# 34. Copy principal

## Hero

```text
SUA OBRA SEM BAGUNÇA.

ENCHEU?
A GENTE RETIRA.

Locação de tambor para entulho de forma rápida,
prática e sustentável.
```

## CTA

```text
PEDIR PELO WHATSAPP
```

## Frase de apoio

```text
Alugou. Encheu. Chamou. Retiramos.
```
