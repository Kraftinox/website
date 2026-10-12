---
name: Kraftinox i18n Architecture
description: Next.js 16 locale-based i18n setup with proxy.ts, DictionaryProvider, and LanguageSwitcher
type: project
---

Full i18n refactor completed (April 2026). Structure:

- **Locale routing**: `src/app/[locale]/` with `layout.tsx` and `page.tsx`. Locales: `ro` (default), `en`.
- **Proxy**: `src/proxy.ts` (Next.js 16 convention, replaces middleware.ts). Exports `proxy` function (not `middleware`). Detects Accept-Language header, redirects `/` → `/ro` or `/en`.
- **Dictionaries**: `src/dictionaries/ro.ts` and `src/dictionaries/en.ts` — fully typed via `src/dictionaries/types.ts`. All UI strings (nav, hero, funfact, services, portfolio, about, award, certifications, partners, contact, form, footer) in both languages.
- **getDictionary**: `src/i18n/getDictionary.ts` — async server-side dict loader.
- **DictionaryProvider**: `src/provider/DictionaryProvider.tsx` — React Context. `useDictionary()` hook for client components.
- **LanguageSwitcher**: `src/components/shared/LanguageSwitcher.tsx` — "use client", GSAP dropdown animation, RO/EN flag SVGs, reads locale from `usePathname()`, navigates via `useRouter()`.
- **Layout**: `src/app/[locale]/layout.tsx` — server component, fetches dict, wraps with `<DictionaryProvider>`, sets `<html lang={locale}>`, generates metadata per locale.
- **Root layout**: `src/app/layout.tsx` — returns children (html/body in locale layout).

**Why:** Proper URL-based locale switching for SEO (hreflang alternates), maintainable string management via typed dicts.
**How to apply:** When adding new UI text, add to both `ro.ts` and `en.ts`. Use `useDictionary()` in client components. All section components are "use client".
