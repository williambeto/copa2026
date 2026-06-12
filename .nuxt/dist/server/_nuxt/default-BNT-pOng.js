import { ref, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/home/williambeto/Development/cup/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/williambeto/Development/cup/node_modules/hookable/dist/index.mjs";
import "/home/williambeto/Development/cup/node_modules/unctx/dist/index.mjs";
import "/home/williambeto/Development/cup/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/williambeto/Development/cup/node_modules/defu/dist/defu.mjs";
import "/home/williambeto/Development/cup/node_modules/ufo/dist/index.mjs";
const isDark = ref(true);
function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value;
  }
  return { isDark, toggleTheme };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark: isDark2 } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "inline-flex items-center justify-center w-9 h-9 rounded-lg text-lg transition-colors duration-200 hover:bg-marine-800/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 group",
        "aria-label": unref(isDark2) ? "Ativar modo claro" : "Ativar modo escuro",
        title: unref(isDark2) ? "Ativar modo claro" : "Ativar modo escuro"
      }, _attrs))}><span aria-hidden="true" class="transition-transform duration-300 group-hover:scale-110">${ssrInterpolate(unref(isDark2) ? "☀️" : "🌙")}</span></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function useScrollSpy(sectionIds) {
  const activeSection = ref("");
  return { activeSection };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { activeSection } = useScrollSpy();
    const mobileMenuOpen = ref(false);
    const navItems = [
      { id: "resumo", label: "Resumo", href: "#resumo" },
      { id: "comparativo", label: "Comparativo", href: "#comparativo" },
      { id: "ranking", label: "Ranking", href: "#ranking" },
      { id: "analises", label: "Análises", href: "#analises" },
      { id: "surpresas", label: "Surpresas", href: "#surpresas" },
      { id: "metodologia", label: "Metodologia", href: "#metodologia" },
      { id: "fontes", label: "Fontes", href: "#fontes" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThemeToggle = _sfc_main$4;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "fixed top-0 left-0 right-0 z-50 bg-marine-900/95 backdrop-blur-md border-b border-marine-800/60 transition-colors duration-300",
        role: "banner"
      }, _attrs))}><nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal"><div class="flex items-center justify-between h-16 lg:h-18"><a href="#" class="flex-shrink-0 group" aria-label="Ir para o topo da página"><span class="text-lg sm:text-xl font-extrabold font-mono tracking-tight text-gold-500 group-hover:text-gold-400 transition-colors duration-200"> World Cup 2026 Intelligence </span></a><div class="hidden lg:flex lg:items-center lg:gap-1"><ul class="flex items-center gap-1"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([unref(activeSection) === item.id ? "text-gold-500 bg-gold-500/10" : "text-gray-300 hover:text-gold-400 hover:bg-marine-800/50", "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"])}"${ssrRenderAttr("aria-current", unref(activeSection) === item.id ? "true" : void 0)}>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul><div class="h-6 w-px bg-marine-700 mx-2" aria-hidden="true"></div>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`<div class="ml-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marine-800/80 border border-marine-700/50 text-xs text-gray-400 font-mono" aria-label="Data da última atualização dos dados"><span class="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span><span>Dados atualizados em 12 de junho de 2026</span></div></div><div class="flex items-center gap-3 lg:hidden">`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`<button type="button" class="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-gold-400 hover:bg-marine-800/50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"${ssrRenderAttr("aria-expanded", mobileMenuOpen.value)} aria-controls="mobile-menu" aria-label="Abrir menu de navegação">`);
      if (!mobileMenuOpen.value) {
        _push(`<span class="text-2xl leading-none" aria-hidden="true">☰</span>`);
      } else {
        _push(`<span class="text-2xl leading-none" aria-hidden="true">✕</span>`);
      }
      _push(`</button></div></div><div id="mobile-menu" class="${ssrRenderClass([mobileMenuOpen.value ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none", "lg:hidden overflow-hidden transition-all duration-300 ease-in-out"])}"${ssrRenderAttr("aria-hidden", !mobileMenuOpen.value)}><div class="py-3 border-t border-marine-800/60"><ul class="space-y-1 pb-2"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([unref(activeSection) === item.id ? "text-gold-500 bg-gold-500/10" : "text-gray-300 hover:text-gold-400 hover:bg-marine-800/50", "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"])}"${ssrRenderAttr("aria-current", unref(activeSection) === item.id ? "true" : void 0)}>${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul><div class="mx-4 mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-marine-800/80 border border-marine-700/50 text-xs text-gray-400 font-mono"><span class="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span><span>Dados atualizados em 12 de junho de 2026</span></div></div></div></nav></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "border-t border-marine-800/60 bg-marine-950 transition-colors duration-300",
    role: "contentinfo"
  }, _attrs))}><div class="section-container py-12 lg:py-16"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"><div class="space-y-4"><p class="text-lg font-extrabold font-mono text-gold-500"> World Cup 2026 Intelligence </p><p class="text-sm text-gray-400 leading-relaxed"> Análise editorial independente. Dados compilados de fontes públicas. Atualizado em 12 de junho de 2026. </p></div><div class="space-y-4"><h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider"> Navegação </h3><ul class="space-y-2"><li><a href="#metodologia" class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"> Metodologia </a></li><li><a href="#fontes" class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"> Fontes </a></li><li><a href="#ranking" class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"> Ranking completo </a></li><li><a href="#resumo" class="text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"> Início </a></li></ul></div><div class="space-y-4 sm:col-span-2 lg:col-span-1"><h3 class="text-sm font-semibold text-gray-300 uppercase tracking-wider"> Aviso importante </h3><div class="p-4 rounded-lg border border-gold-500/20 bg-marine-900/60"><p class="text-xs text-gray-400 leading-relaxed"> As probabilidades apresentadas são estimativas analíticas e não representam recomendações financeiras ou de aposta. Este é um projeto editorial independente com fins informativos. </p></div></div></div><div class="mt-12 pt-6 border-t border-marine-800/60 flex flex-col sm:flex-row items-center justify-between gap-3"><p class="text-xs text-gray-500"> © 2026 World Cup 2026 Intelligence. Todos os direitos reservados. </p><p class="text-xs text-gray-600 font-mono"> Edição de 12 de junho de 2026 </p></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BackToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-marine-800 border border-gold-500/40 text-gold-500 shadow-lg shadow-marine-950/50 transition-all duration-300 hover:bg-marine-700 hover:border-gold-500 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 motion-reduce:transition-none",
        "aria-label": "Voltar ao topo da página",
        title: "Voltar ao topo"
      }, _attrs, {
        style: visible.value ? null : { display: "none" }
      }))} data-v-6a1973d4><span class="text-xl font-bold leading-none select-none" aria-hidden="true" data-v-6a1973d4>↑</span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a1973d4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark: isDark2 } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = _sfc_main$3;
      const _component_SiteFooter = __nuxt_component_1;
      const _component_BackToTop = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["min-h-screen bg-marine-950 text-gray-200 transition-colors duration-300", { "light": !unref(isDark2) }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, null, null, _parent));
      _push(`<main id="main-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_BackToTop, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BNT-pOng.js.map
