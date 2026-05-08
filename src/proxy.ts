import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/assets') ||
        /\.(.+)$/.test(pathname)
    ) {
        return;
    }

    const hasLocale = locales.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    );

    if (hasLocale) return;

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!_next|api|favicon\\.ico|assets|.*\\..+).*)'],
};
