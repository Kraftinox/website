'use client';
import { use } from 'react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/i18n/getDictionary';
import { DictionaryProvider } from '@/provider/DictionaryProvider';
import KraftinoxHeader from '@/layouts/headers/KraftinoxHeader';
import HomeFooter from '@/layouts/footers/HomeFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/dictionaries/types';

const dictCache: Partial<Record<Locale, Promise<Dictionary>>> = {};

function getDictCached(locale: Locale): Promise<Dictionary> {
    if (!dictCache[locale]) dictCache[locale] = getDictionary(locale);
    return dictCache[locale]!;
}

const copy = {
    ro: {
        label: 'A apărut o eroare',
        title: 'Ceva nu a funcționat',
        body: 'A apărut o eroare neașteptată. Puteți încerca din nou sau reveni la pagina principală.',
        retry: 'Încearcă din nou',
        cta: '← Pagina principală',
    },
    en: {
        label: 'Something went wrong',
        title: 'An error occurred',
        body: 'An unexpected error occurred. You can try again or go back to the homepage.',
        retry: 'Try again',
        cta: '← Homepage',
    },
};

function ErrorContent({ locale, reset }: { locale: Locale; reset: () => void }) {
    const dict = use(getDictCached(locale));
    const c = copy[locale];

    return (
        <DictionaryProvider dict={dict}>
            <KraftinoxHeader isHomePage={false} />
            <BackToTop />
            <main style={{ backgroundColor: '#fafafa', minHeight: '60vh', paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>

                    <div style={{ marginBottom: '32px' }}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                            <circle cx="32" cy="32" r="32" fill="rgba(239,68,68,0.08)" />
                            <circle cx="32" cy="32" r="24" fill="rgba(239,68,68,0.12)" />
                            <circle cx="32" cy="32" r="18" stroke="#ef4444" strokeWidth="2" fill="none" />
                            <path d="M32 20v14" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                            <circle cx="32" cy="40" r="1.5" fill="#ef4444" />
                        </svg>
                    </div>

                    <p style={{
                        fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
                        textTransform: 'uppercase', color: '#ef4444',
                        fontFamily: 'var(--tp-ff-unbounded)', marginBottom: '16px',
                    }}>
                        {c.label}
                    </p>

                    <h1 style={{
                        fontFamily: 'var(--tp-ff-unbounded)', fontWeight: 700,
                        fontSize: 'clamp(22px, 4vw, 32px)', letterSpacing: '-0.03em',
                        color: '#010103', marginBottom: '16px',
                    }}>
                        {c.title}
                    </h1>

                    <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#717171', marginBottom: '48px' }}>
                        {c.body}
                    </p>

                    <hr style={{ borderColor: 'rgba(1,1,3,0.1)', marginBottom: '40px' }} />

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={reset} style={{
                            fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                            color: '#010103', background: 'transparent',
                            border: '1.5px solid rgba(1,1,3,0.2)',
                            padding: '12px 28px', borderRadius: '4px',
                            fontFamily: 'var(--tp-ff-unbounded)',
                        }}>
                            {c.retry}
                        </button>
                        <Link href={`/${locale}`} style={{
                            display: 'inline-block', fontSize: '14px',
                            fontWeight: 600, color: '#00A86D', textDecoration: 'none',
                            fontFamily: 'var(--tp-ff-unbounded)', padding: '12px 28px',
                        }}>
                            {c.cta}
                        </Link>
                    </div>
                </div>
            </main>
            <HomeFooter />
        </DictionaryProvider>
    );
}

export default function LocaleError({ reset }: { error: Error; reset: () => void }) {
    const pathname = usePathname();
    const locale: Locale = pathname?.startsWith('/en') ? 'en' : 'ro';

    return <ErrorContent locale={locale} reset={reset} />;
}
