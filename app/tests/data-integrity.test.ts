import { describe, it, expect } from 'vitest'
import { TEAMS, PROBABILITY_RANKING, EXECUTIVE_CARDS, GROUPS, KNOCKOUT_PATHS, RECENT_FORM, SQUAD_DEPTH, INJURIES, UPSET_RISK, GEOGRAPHIC_ADVANTAGE, METHODOLOGY_WEIGHTS } from '~/data/teams'
import { DEFAULT_WEIGHTS } from '~/types/teams'

describe('Dados das seleções', () => {
  it('deve conter 13 seleções na tabela comparativa', () => {
    expect(TEAMS).toHaveLength(13)
  })

  it('todas as seleções devem ter id, name, flag e probability definidos', () => {
    for (const team of TEAMS) {
      expect(team.id).toBeTruthy()
      expect(team.name).toBeTruthy()
      expect(team.flag).toBeTruthy()
      expect(typeof team.probability).toBe('number')
    }
  })

  it('todas as notas devem estar entre 0 e 10', () => {
    for (const team of TEAMS) {
      expect(team.strengthScore).toBeGreaterThanOrEqual(0)
      expect(team.strengthScore).toBeLessThanOrEqual(10)
      expect(team.squadScore).toBeGreaterThanOrEqual(0)
      expect(team.squadScore).toBeLessThanOrEqual(10)
      expect(team.formScore).toBeGreaterThanOrEqual(0)
      expect(team.formScore).toBeLessThanOrEqual(10)
      expect(team.coachScore).toBeGreaterThanOrEqual(0)
      expect(team.coachScore).toBeLessThanOrEqual(10)
      expect(team.pathScore).toBeGreaterThanOrEqual(0)
      expect(team.pathScore).toBeLessThanOrEqual(10)
      expect(team.fitnessScore).toBeGreaterThanOrEqual(0)
      expect(team.fitnessScore).toBeLessThanOrEqual(10)
      expect(team.knockoutScore).toBeGreaterThanOrEqual(0)
      expect(team.knockoutScore).toBeLessThanOrEqual(10)
      expect(team.probabilityNote).toBeGreaterThanOrEqual(0)
      expect(team.probabilityNote).toBeLessThanOrEqual(10)
    }
  })

  it('Espanha deve ser a favorita com maior probabilidade', () => {
    const spain = TEAMS.find(t => t.id === 'espanha')
    expect(spain).toBeDefined()
    expect(spain!.probability).toBe(16.5)
    expect(spain!.category).toBe('favorite')
  })

  it('a soma das probabilidades do ranking deve ser 100%', () => {
    const sum = PROBABILITY_RANKING.reduce((acc, item) => acc + item.probability, 0)
    expect(sum).toBeCloseTo(100, 0)
  })

  it('nenhuma seleção no top 10 deve ter probabilidade acima de 20%', () => {
    for (const item of PROBABILITY_RANKING) {
      if (item.team !== 'Outras seleções') {
        expect(item.probability).toBeLessThanOrEqual(20)
      }
    }
  })
})

describe('Resumo executivo', () => {
  it('deve ter 6 cards', () => {
    expect(EXECUTIVE_CARDS).toHaveLength(6)
  })

  it('cada card deve ter label, team e flag', () => {
    for (const card of EXECUTIVE_CARDS) {
      expect(card.label).toBeTruthy()
      expect(card.team).toBeTruthy()
      expect(card.flag).toBeTruthy()
    }
  })
})

describe('Grupos', () => {
  it('deve conter dados para as 6 seleções principais', () => {
    const expectedTeams = ['espanha', 'franca', 'argentina', 'inglaterra', 'portugal', 'brasil']
    for (const id of expectedTeams) {
      expect(GROUPS[id]).toBeDefined()
    }
  })

  it('cada grupo deve ter 3 adversários', () => {
    for (const group of Object.values(GROUPS)) {
      expect(group.opponents).toHaveLength(3)
    }
  })
})

describe('Caminhos no mata-mata', () => {
  it('deve conter 3 cenários para Espanha e França', () => {
    expect(KNOCKOUT_PATHS.espanha).toHaveLength(3)
    expect(KNOCKOUT_PATHS.franca).toHaveLength(3)
    expect(KNOCKOUT_PATHS.argentina).toHaveLength(3)
    expect(KNOCKOUT_PATHS.inglaterra).toHaveLength(3)
  })

  it('cada cenário deve ter favorável, provável e perigoso', () => {
    const scenarios = KNOCKOUT_PATHS.espanha.map(s => s.scenario)
    expect(scenarios).toContain('favorable')
    expect(scenarios).toContain('likely')
    expect(scenarios).toContain('dangerous')
  })
})

describe('Forma recente', () => {
  it('deve conter dados para as 6 principais seleções', () => {
    for (const id of ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil']) {
      expect(RECENT_FORM[id]).toBeDefined()
    }
  })
})

describe('Profundidade do elenco', () => {
  it('deve conter dados para as 6 principais seleções', () => {
    for (const id of ['espanha', 'franca', 'inglaterra', 'argentina', 'portugal', 'brasil']) {
      expect(SQUAD_DEPTH[id]).toBeDefined()
    }
  })
})

describe('Lesões', () => {
  it('deve ter pelo menos 10 registros de jogadores', () => {
    expect(INJURIES.length).toBeGreaterThanOrEqual(10)
  })

  it('cada lesão deve ter status válido', () => {
    const validStatuses = ['available', 'returning', 'doubt', 'out', 'overloaded']
    for (const injury of INJURIES) {
      expect(validStatuses).toContain(injury.status)
      expect(injury.player).toBeTruthy()
      expect(injury.teamId).toBeTruthy()
    }
  })
})

describe('Risco de zebra', () => {
  it('favoritesAtRisk deve ter ao menos 4 seleções', () => {
    expect(UPSET_RISK.favoritesAtRisk.length).toBeGreaterThanOrEqual(4)
  })

  it('giantKillers deve ter ao menos 6 seleções', () => {
    expect(UPSET_RISK.giantKillers.length).toBeGreaterThanOrEqual(6)
  })
})

describe('Metodologia', () => {
  it('deve ter 7 critérios de peso', () => {
    expect(METHODOLOGY_WEIGHTS).toHaveLength(7)
  })

  it('a soma dos pesos padrão deve ser 100', () => {
    const sum = Object.values(DEFAULT_WEIGHTS).reduce((a, b) => a + b, 0)
    expect(sum).toBe(100)
  })
})

describe('Vantagem geográfica', () => {
  it('deve ter 7 seleções listadas', () => {
    expect(GEOGRAPHIC_ADVANTAGE).toHaveLength(7)
  })
})
