
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  BackToTop: typeof import("../../app/components/BackToTop.vue")['default']
  ConclusionSection: typeof import("../../app/components/ConclusionSection.vue")['default']
  ExecutiveSummary: typeof import("../../app/components/ExecutiveSummary.vue")['default']
  GeographicFactor: typeof import("../../app/components/GeographicFactor.vue")['default']
  GroupDifficulty: typeof import("../../app/components/GroupDifficulty.vue")['default']
  HeroSection: typeof import("../../app/components/HeroSection.vue")['default']
  HiddenContenders: typeof import("../../app/components/HiddenContenders.vue")['default']
  InjuryTracker: typeof import("../../app/components/InjuryTracker.vue")['default']
  KeyPlayersSection: typeof import("../../app/components/KeyPlayersSection.vue")['default']
  MethodologySection: typeof import("../../app/components/MethodologySection.vue")['default']
  ProbabilityRanking: typeof import("../../app/components/ProbabilityRanking.vue")['default']
  RankingExplanation: typeof import("../../app/components/RankingExplanation.vue")['default']
  RationalTopThree: typeof import("../../app/components/RationalTopThree.vue")['default']
  RecentFormChart: typeof import("../../app/components/RecentFormChart.vue")['default']
  SiteFooter: typeof import("../../app/components/SiteFooter.vue")['default']
  SiteHeader: typeof import("../../app/components/SiteHeader.vue")['default']
  SourcesSection: typeof import("../../app/components/SourcesSection.vue")['default']
  SpainSpotlight: typeof import("../../app/components/SpainSpotlight.vue")['default']
  SquadDepth: typeof import("../../app/components/SquadDepth.vue")['default']
  TeamsComparisonTable: typeof import("../../app/components/TeamsComparisonTable.vue")['default']
  ThemeToggle: typeof import("../../app/components/ThemeToggle.vue")['default']
  TournamentPath: typeof import("../../app/components/TournamentPath.vue")['default']
  UpsetRisk: typeof import("../../app/components/UpsetRisk.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyBackToTop: LazyComponent<typeof import("../../app/components/BackToTop.vue")['default']>
  LazyConclusionSection: LazyComponent<typeof import("../../app/components/ConclusionSection.vue")['default']>
  LazyExecutiveSummary: LazyComponent<typeof import("../../app/components/ExecutiveSummary.vue")['default']>
  LazyGeographicFactor: LazyComponent<typeof import("../../app/components/GeographicFactor.vue")['default']>
  LazyGroupDifficulty: LazyComponent<typeof import("../../app/components/GroupDifficulty.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../app/components/HeroSection.vue")['default']>
  LazyHiddenContenders: LazyComponent<typeof import("../../app/components/HiddenContenders.vue")['default']>
  LazyInjuryTracker: LazyComponent<typeof import("../../app/components/InjuryTracker.vue")['default']>
  LazyKeyPlayersSection: LazyComponent<typeof import("../../app/components/KeyPlayersSection.vue")['default']>
  LazyMethodologySection: LazyComponent<typeof import("../../app/components/MethodologySection.vue")['default']>
  LazyProbabilityRanking: LazyComponent<typeof import("../../app/components/ProbabilityRanking.vue")['default']>
  LazyRankingExplanation: LazyComponent<typeof import("../../app/components/RankingExplanation.vue")['default']>
  LazyRationalTopThree: LazyComponent<typeof import("../../app/components/RationalTopThree.vue")['default']>
  LazyRecentFormChart: LazyComponent<typeof import("../../app/components/RecentFormChart.vue")['default']>
  LazySiteFooter: LazyComponent<typeof import("../../app/components/SiteFooter.vue")['default']>
  LazySiteHeader: LazyComponent<typeof import("../../app/components/SiteHeader.vue")['default']>
  LazySourcesSection: LazyComponent<typeof import("../../app/components/SourcesSection.vue")['default']>
  LazySpainSpotlight: LazyComponent<typeof import("../../app/components/SpainSpotlight.vue")['default']>
  LazySquadDepth: LazyComponent<typeof import("../../app/components/SquadDepth.vue")['default']>
  LazyTeamsComparisonTable: LazyComponent<typeof import("../../app/components/TeamsComparisonTable.vue")['default']>
  LazyThemeToggle: LazyComponent<typeof import("../../app/components/ThemeToggle.vue")['default']>
  LazyTournamentPath: LazyComponent<typeof import("../../app/components/TournamentPath.vue")['default']>
  LazyUpsetRisk: LazyComponent<typeof import("../../app/components/UpsetRisk.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
