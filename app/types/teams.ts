export interface TeamData {
  id: string
  name: string
  nameEn: string
  flag: string
  probability: number
  eloRank: number | null
  fifaRank: number | null
  avgAge: number | null
  strengthScore: number
  squadScore: number
  formScore: number
  coachScore: number
  pathScore: number
  fitnessScore: number
  knockoutScore: number
  probabilityNote: number
  justification: string
  category: 'favorite' | 'contender' | 'hidden' | 'underdog'
  // Extended profile
  coach?: string
  keyPlayers?: string[]
  strengths?: string[]
  risks?: string[]
  group?: GroupInfo
  recentForm?: RecentFormData
  squadDepth?: SquadDepthData
  injuries?: InjuryInfo[]
}

export interface GroupInfo {
  opponents: string[]
  difficulty: 'Muito favorável' | 'Favorável' | 'Moderado' | 'Difícil' | 'Muito difícil' | 'Perigoso na estreia'
  difficultyLabel: string
  firstPlaceChance: number
  knockoutImpact: string
}

export interface RecentFormData {
  period: string
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  avgOpponentStrength: number
  officialWins: number
  officialDraws: number
  officialLosses: number
  friendlyWins: number
  friendlyDraws: number
  friendlyLosses: number
}

export interface SquadDepthData {
  goalkeepers: number
  fullbacks: number
  centerbacks: number
  midfielders: number
  wingers: number
  strikers: number
  starterQuality: number
  benchQuality: number
  versatility: number
  starDependency: number
  decisivePlayers: number
}

export interface InjuryInfo {
  player: string
  status: 'available' | 'returning' | 'doubt' | 'out' | 'overloaded'
  statusLabel: string
  lastUpdated: string
  teamId: string
}

export interface KnockoutPath {
  scenario: 'favorable' | 'likely' | 'dangerous'
  description: string
  potentialOpponents: string[]
  difficulty: number
}

export interface WeightConfig {
  strengthRankings: number
  squadDepth: number
  recentForm: number
  coachModel: number
  groupPath: number
  fitness: number
  knockoutExp: number
}

export const DEFAULT_WEIGHTS: WeightConfig = {
  strengthRankings: 20,
  squadDepth: 20,
  recentForm: 15,
  coachModel: 10,
  groupPath: 15,
  fitness: 10,
  knockoutExp: 10,
}

export interface ThemeState {
  dark: boolean
}
