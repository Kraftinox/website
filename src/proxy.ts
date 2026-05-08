import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, type Locale } from '@/i18n/config';

function detectLocale(acceptLang: string | null): Locale {
    if (!acceptLang) return defaultLocale;
    const lower = acceptLang.toLowerCase();
    if (lower.startsWith('ro') || lower.includes('ro-ro') || lower.includes('ro,')) return 'ro';
    return 'en';
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip static files and Next.js internals
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/assets') ||
        /\.(.+)$/.test(pathname)
    ) {
        return;
    }

    // Already has a valid locale prefix → pass through
    const hasLocale = locales.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    );
    if (hasLocale) return;

    // Detect preferred locale and redirect
    const locale = detectLocale(request.headers.get('accept-language'));
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!_next|api|favicon\\.ico|assets|.*\\..+).*)'],
};
