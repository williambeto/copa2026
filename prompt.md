# Blueprint / Prompt para Geração Completa do Site: World Cup 2026 Intelligence

Este documento contém a especificação técnica e funcional detalhada para recriar o site **World Cup 2026 Intelligence** do zero usando um assistente de IA.

---

## 🚀 Arquitetura e Tech Stack

* **Framework:** Nuxt 3 (Vue 3, TypeScript, SSR habilitado).
* **Estilização:** Tailwind CSS com sistema de tokens semânticos para Dark Mode.
* **Componentes Gráficos:** Chart.js + `vue-chartjs` + `chartjs-plugin-datalabels` (para gráficos de forma recente).
* **Bandeiras:** Integração dinâmica com a **FlagCDN** (usando imagens vetorizadas PNG/SVG ao invés de emojis brutos, garantindo compatibilidade cross-platform no Windows).
* **Banco de Dados Estático:** JSONs estruturados contendo dados de elencos, probabilidades de vitória, fatores geográficos e dados históricos.
* **Testes:** Vitest (testes de integridade de dados).

---

## 📁 Estrutura de Diretórios Proposta

```text
├── app/
│   ├── components/
│   │   ├── BackToTop.vue          # Botão flutuante para voltar ao topo com animação
│   │   ├── ConclusionSection.vue  # Seção final com conclusões editoriais
│   │   ├── ExecutiveSummary.vue   # Resumo executivo dos insights da IA
│   │   ├── GeographicFactor.vue   # Mapa interativo (Leaflet/OSM) e foto do estádio
│   │   ├── GroupDifficulty.vue    # Gráfico/Tabela de dificuldade dos grupos
│   │   ├── HeroSection.vue        # Banner principal de impacto
│   │   ├── HiddenContenders.vue   # Seção de zebras e surpresas
│   │   ├── InjuryTracker.vue      # Painel de monitoramento de lesões de atletas
│   │   ├── KeyPlayersSection.vue  # Elencos detalhados em formato de cards premium
│   │   ├── MethodologySection.vue # Detalhes do modelo matemático e pesos das variáveis
│   │   ├── ProbabilityRanking.vue # Ranking interativo das seleções favoritas
│   │   ├── RankingExplanation.vue # Detalhe do porquê de cada classificação
│   │   ├── RationalTopThree.vue   # Análise profunda do Top 3 favorito
│   │   ├── RecentFormChart.vue    # Gráfico de barras de forma recente das equipes
│   │   ├── SiteFooter.vue         # Rodapé com links, disclaimer e créditos
│   │   ├── SiteHeader.vue         # Menu flutuante, alternador de tema e link do GitHub
│   │   ├── SourcesSection.vue     # Fontes de dados oficiais utilizadas
│   │   ├── SpainSpotlight.vue     # Análise especial e caminho projetado da Espanha
│   │   ├── SquadDepth.vue         # Profundidade e flexibilidade tática do elenco
│   │   ├── TeamsComparisonTable.vue # Tabela comparativa detalhada de estatísticas
│   │   ├── ThemeToggle.vue        # Componente atômico para troca de tema claro/escuro
│   │   ├── TournamentBracket.vue  # Árvore do mata-mata responsiva (oitavas à final)
│   │   └── TournamentPath.vue     # Simulação do caminho de cada seleção no torneio
│   ├── composables/
│   │   ├── useTheme.ts            # Gerenciamento de tema (Dark/Light) prevent-flash
│   │   └── useScrollSpy.ts        # Rastreamento de seção ativa na navegação
│   ├── layouts/
│   │   └── default.vue            # Layout base com Header, Footer e BackToTop
│   ├── pages/
│   │   └── index.vue              # Página principal (Single Page Application)
│   ├── public/
│   │   └── images/
│   │       ├── captain_card.png   # Imagem gerada do capitão
│   │       ├── decisive_card.png  # Imagem gerada do jogador decisivo
│   │       ├── star_card.png      # Imagem gerada do craque do time
│   │       ├── reserve_card.png   # Imagem gerada do jogador reserva
│   │       ├── spain_spotlight.png # Imagem do holofote da Espanha
│   │       └── sofi_stadium.png    # Imagem aérea do SoFi Stadium
│   ├── tests/
│   │   └── data-integrity.test.ts # Testes unitários com Vitest
│   └── utils/
│       └── helpers.ts             # Funções de mapeamento de bandeiras e scores
├── nuxt.config.ts                 # Configurações do Nuxt 3 e cabeçalho de SEO/scripts
├── tailwind.config.ts             # Configuração estendida de cores semânticas e fontes
└── package.json                   # Dependências e scripts npm
```

---

## 🎨 Sistema de Design e Cores (Tailwind CSS)

Configure o Tailwind estendendo as cores para utilizar variáveis CSS nativas (mapeadas no arquivo global `main.css`). Isso garante transições suaves de Dark Mode.

### Tokens de Cores Semânticas
* `semantic-background`: Cor de fundo da aplicação (Claro: `#F8FAFC`, Escuro: `#0B0F19`).
* `semantic-surface`: Fundo de cartões/cards (Claro: `#FFFFFF`, Escuro: `#161F30` com bordas semitransparentes).
* `semantic-text-primary`: Texto principal (Claro: `#0F172A`, Escuro: `#F8FAFC`).
* `semantic-text-secondary`: Texto secundário (Claro: `#475569`, Escuro: `#94A3B8`).
* `semantic-border`: Cor de divisórias/bordas (Claro: `#E2E8F0`, Escuro: `#1E293B`).
* `semantic-accent`: Cor de destaque do torneio (Claro/Escuro: `#EAB308` dourado ou verde-grama `#22C55E`).

---

## 📝 Instruções de Criação dos Componentes Chave

### 1. Sistema Anti-Flash de Tema (`useTheme.ts`)
Para evitar que o tema pisque na renderização SSR (Flash de luz no carregamento inicial):
* **Fórmula:** Adicionar um script em linha na tag `<head>` no `nuxt.config.ts` que lê o `localStorage.getItem('theme')` e injeta a classe `.dark` diretamente no `document.documentElement` antes de carregar o HTML do corpo.
* **Composável:** Gerencia o estado de reatividade (`isDark`) e aplica/remove a classe `.dark`.

### 2. Utilitário de Bandeiras Sem Emojis (`helpers.ts`)
* **Problema:** Emojis de bandeiras do Windows aparecem como siglas de duas letras (ex: BR, ES).
* **Solução:** Função `getCountryFlagUrl(countryCode: string)` que converte o código ISO de 2 letras da seleção (ex: "br", "es", "us") para o link da FlagCDN: `https://flagcdn.com/w40/${code.toLowerCase()}.png`.
* **Utilização:** Exibir as bandeiras usando `<img :src="getCountryFlagUrl(team.code)" :alt="team.name" class="w-5 h-3.5 object-cover rounded-sm inline-block shrink-0" />`.

### 3. Cabeçalho Dinâmico (`SiteHeader.vue`)
* Menu horizontal flutuante com blur no fundo (`backdrop-blur-md`).
* Indicador de scroll de leitura (barra de progresso horizontal que preenche à medida que o usuário desce a página).
* Alternador de tema (`ThemeToggle.vue`) com ícones do Sol/Lua animados em SVG (rotação 360° em hover).
* Link com ícone oficial SVG do GitHub levando ao repositório público.
* Responsividade completa: Menu móvel em slide-down e botões de controle integrados à barra principal.

### 4. Árvore do Mata-Mata (`TournamentBracket.vue`)
* **Interface:** Árvore de confrontos das Oitavas de Final, Quartas de Final, Semifinal e Final.
* **Desktop:** Visualização horizontal em colunas estruturadas por conectores visuais (linhas).
* **Mobile:** Sistema de abas para alternar entre as fases sem quebrar a largura do dispositivo.
* **Layout:** Altura fixa nas colunas grandes (`md:h-[1050px]`) e uso de `overflow-y-hidden` para travar barras de rolagem internas, tornando a navegação do site limpa.
* **Dados:**
  * Oitavas (16 seleções) -> Quartas (8 seleções) -> Semifinais (4 seleções) -> Final (2 seleções) -> Campeão.
  * Cada card exibe: bandeiras, nomes das seleções, scores simulados e probabilidade de vitória calculada (ex. Espanha 60% vs 40% Portugal).

### 5. Gráfico de Forma Recente (`RecentFormChart.vue`)
* Gráfico de barras usando `Chart.js` renderizando a pontuação de forma recente das top 10 seleções.
* As barras devem trocar de cor dinamicamente com base no tema (claro ou escuro) para contraste perfeito.
* Utiliza o plugin `chartjs-plugin-datalabels` para exibir os valores absolutos sobre as barras de forma elegante.

### 6. Seção de Elencos Premium (`KeyPlayersSection.vue`)
* Lista interativa de seleções e seus principais atletas.
* Exibição em grid de cartões de jogador premium:
  * Efeito de hover de zoom em escala 3D (`hover:scale-105 transition-transform duration-500`).
  * Utiliza as imagens locais `/images/captain_card.png`, `/images/star_card.png`, `/images/decisive_card.png`, `/images/reserve_card.png`.
  * Informações de idade, clube, valor de mercado simulado e impacto estatístico no modelo.

---

## 🔬 Validação e Integridade de Dados (`data-integrity.test.ts`)

Escreva testes automatizados usando Vitest para validar:
1. Se a probabilidade total de todas as seleções não ultrapassa os limites lógicos.
2. Se a soma das porcentagens do chaveamento do mata-mata é consistente.
3. Se todas as chaves de dados das seleções possuem o mapeamento ISO de bandeira necessário para evitar quebras em tempo de execução.

---

## 🛠️ Prompt de Execução Prático para a IA

Transmita a seguinte diretiva para a IA geradora de código:

> "Construa um site em Nuxt 3 + Tailwind CSS para análise preditiva da Copa do Mundo de 2026. O site deve ser uma página única de alto impacto (Single Page Application) com design editorial premium, utilizando efeito de vidro (glassmorphism), transições suaves em Dark Mode e tipografia moderna. Implemente os componentes chave descritos no blueprint (especialmente a árvore responsiva do mata-mata e o suporte a bandeiras via FlagCDN de forma assíncrona). Separe os dados de entrada em arquivos de utilitários isolados para facilitar testes unitários com Vitest. O design deve se adaptar a dispositivos móveis sem barras de rolagem indesejadas e respeitar os tokens semânticos de cores estendidos no Tailwind."
