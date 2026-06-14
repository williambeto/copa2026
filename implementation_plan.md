# Plano: Componente de Chaveamento Visual (TournamentBracket)

Proposta para adicionar uma seção interativa mostrando a árvore do mata-mata (Bracket) da Copa do Mundo 2026, projetada a partir das oitavas de final (Round of 16) até a grande final, exibindo os confrontos mais prováveis e os resultados simulados com base nas estatísticas do site.

---

## Proposta de Design e Layout

### 🎨 Visual & UX
1. **Estrutura de Chaveamento (Tree):**
   - Quatro colunas horizontais em telas grandes (Oitavas, Quartas, Semifinal, Final).
   - Conectores visuais (linhas) mostrando a progressão dos vencedores.
   - Responsividade: Em telas móveis, exibirá um seletor de fase (Oitavas / Quartas / Semis / Final) ou scroll horizontal suave com indicação visual para melhor legibilidade.

2. **Cards de Jogos (Match Cards):**
   - Nome das seleções com suas bandeiras dinâmicas (via FlagCDN).
   - Placar projetado (ex: `Espanha 2 · 1 Portugal`).
   - Indicação visual do vencedor (texto em negrito com badge dourado e perdedor com opacidade reduzida).
   - Estatística de probabilidade de vitória impressa diretamente no card do jogo (ex: `Espanha 60% vs 40% Portugal`).

---

## Proposta de Dados (matchups)

Baseado no modelo de probabilidade do site, a chave projetada terá os seguintes confrontos de mata-mata:

```mermaid
graph TD
    %% Oitavas
    EF1[🇪🇸 Espanha 2] --> QF1[🇪🇸 Espanha 2]
    EF2[🇭🇷 Croácia 1] --> QF1
    
    EF3[🇵🇹 Portugal 2] --> QF1
    EF4[🇳🇱 Holanda 1] --> QF1
    
    EF5[🇫🇷 França 3] --> QF2[🇫🇷 França 1]
    EF6[🇳🇴 Noruega 1] --> QF2
    
    EF7[🇦🇷 Argentina 2] --> QF2
    EF8[🇩🇪 Alemanha 1] --> QF2
    
    EF9[🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra 3] --> QF3[🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra 2]
    EF10[🇨🇴 Colômbia 1] --> QF3
    
    EF11[🇧🇷 Brasil 2] --> QF3
    EF12[🇲🇦 Marrocos 1] --> QF3
    
    EF13[🇺🇾 Uruguai 2] --> QF4[🇺🇾 Uruguai 1]
    EF14[🇺🇸 EUA 1] --> QF4
    
    EF15[🇧🇪 Bélgica 1] --> QF4
    EF16[🇲🇽 México 0] --> QF4

    %% Quartas para Semis
    QF1 --> SF1[🇪🇸 Espanha 2]
    QF2 --> SF1
    
    QF3 --> SF2[🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra 1]
    QF4 --> SF2

    %% Semis para Final
    SF1 --> F[🇪🇸 Espanha 2]
    SF2 --> F
    
    F --> W[🏆 Espanha Campeã]
```

---

## Alterações Propostas

### 1. Novo Componente

#### [NEW] [TournamentBracket.vue](./app/components/TournamentBracket.vue)
- Componente que renderiza a estrutura de chaveamento flexível e responsiva.
- Armazenará o JSON com os dados dos jogos (times, placares, probabilidade de vitória, fase).
- Implementará o alternador de abas de fases para visualização móvel.

### 2. Integração

#### [MODIFY] [index.vue](./app/pages/index.vue)
- Importação e inserção do `<TournamentBracket />` entre `<TournamentPath />` e `<RecentFormChart />`.

---

## Plano de Verificação

### Testes Manuais
- Verificar renderização responsiva do chaveamento no Chrome (modo Mobile e Desktop).
- Confirmar que as bandeiras da FlagCDN renderizam sem problemas em todos os confrontos.
- Garantir contraste visual tanto no tema claro quanto no escuro (dark mode).
