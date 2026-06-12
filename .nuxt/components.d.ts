
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


export const BackToTop: typeof import("../app/components/BackToTop.vue")['default']
export const ConclusionSection: typeof import("../app/components/ConclusionSection.vue")['default']
export const ExecutiveSummary: typeof import("../app/components/ExecutiveSummary.vue")['default']
export const GeographicFactor: typeof import("../app/components/GeographicFactor.vue")['default']
export const GroupDifficulty: typeof import("../app/components/GroupDifficulty.vue")['default']
export const HeroSection: typeof import("../app/components/HeroSection.vue")['default']
export const HiddenContenders: typeof import("../app/components/HiddenContenders.vue")['default']
export const InjuryTracker: typeof import("../app/components/InjuryTracker.vue")['default']
export const KeyPlayersSection: typeof import("../app/components/KeyPlayersSection.vue")['default']
export const MethodologySection: typeof import("../app/components/MethodologySection.vue")['default']
export const ProbabilityRanking: typeof import("../app/components/ProbabilityRanking.vue")['default']
export const RankingExplanation: typeof import("../app/components/RankingExplanation.vue")['default']
export const RationalTopThree: typeof import("../app/components/RationalTopThree.vue")['default']
export const RecentFormChart: typeof import("../app/components/RecentFormChart.vue")['default']
export const SiteFooter: typeof import("../app/components/SiteFooter.vue")['default']
export const SiteHeader: typeof import("../app/components/SiteHeader.vue")['default']
export const SourcesSection: typeof import("../app/components/SourcesSection.vue")['default']
export const SpainSpotlight: typeof import("../app/components/SpainSpotlight.vue")['default']
export const SquadDepth: typeof import("../app/components/SquadDepth.vue")['default']
export const TeamsComparisonTable: typeof import("../app/components/TeamsComparisonTable.vue")['default']
export const ThemeToggle: typeof import("../app/components/ThemeToggle.vue")['default']
export const TournamentPath: typeof import("../app/components/TournamentPath.vue")['default']
export const UpsetRisk: typeof import("../app/components/UpsetRisk.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyBackToTop: LazyComponent<typeof import("../app/components/BackToTop.vue")['default']>
export const LazyConclusionSection: LazyComponent<typeof import("../app/components/ConclusionSection.vue")['default']>
export const LazyExecutiveSummary: LazyComponent<typeof import("../app/components/ExecutiveSummary.vue")['default']>
export const LazyGeographicFactor: LazyComponent<typeof import("../app/components/GeographicFactor.vue")['default']>
export const LazyGroupDifficulty: LazyComponent<typeof import("../app/components/GroupDifficulty.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../app/components/HeroSection.vue")['default']>
export const LazyHiddenContenders: LazyComponent<typeof import("../app/components/HiddenContenders.vue")['default']>
export const LazyInjuryTracker: LazyComponent<typeof import("../app/components/InjuryTracker.vue")['default']>
export const LazyKeyPlayersSection: LazyComponent<typeof import("../app/components/KeyPlayersSection.vue")['default']>
export const LazyMethodologySection: LazyComponent<typeof import("../app/components/MethodologySection.vue")['default']>
export const LazyProbabilityRanking: LazyComponent<typeof import("../app/components/ProbabilityRanking.vue")['default']>
export const LazyRankingExplanation: LazyComponent<typeof import("../app/components/RankingExplanation.vue")['default']>
export const LazyRationalTopThree: LazyComponent<typeof import("../app/components/RationalTopThree.vue")['default']>
export const LazyRecentFormChart: LazyComponent<typeof import("../app/components/RecentFormChart.vue")['default']>
export const LazySiteFooter: LazyComponent<typeof import("../app/components/SiteFooter.vue")['default']>
export const LazySiteHeader: LazyComponent<typeof import("../app/components/SiteHeader.vue")['default']>
export const LazySourcesSection: LazyComponent<typeof import("../app/components/SourcesSection.vue")['default']>
export const LazySpainSpotlight: LazyComponent<typeof import("../app/components/SpainSpotlight.vue")['default']>
export const LazySquadDepth: LazyComponent<typeof import("../app/components/SquadDepth.vue")['default']>
export const LazyTeamsComparisonTable: LazyComponent<typeof import("../app/components/TeamsComparisonTable.vue")['default']>
export const LazyThemeToggle: LazyComponent<typeof import("../app/components/ThemeToggle.vue")['default']>
export const LazyTournamentPath: LazyComponent<typeof import("../app/components/TournamentPath.vue")['default']>
export const LazyUpsetRisk: LazyComponent<typeof import("../app/components/UpsetRisk.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
