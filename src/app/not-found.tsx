import { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import { DictionaryProvider } from '@/provider/DictionaryProvider';
import AnimationWrapper from '@/components/shared/animation/AnimationWrapper';
import KraftinoxHeader from '@/layouts/headers/KraftinoxHeader';
import HomeFooter from '@/layouts/footers/HomeFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { headers } from 'next/headers';
import type { Locale } from '@/i18n/config';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "404 | Kraftinox",
};

const copy = {
    ro: {
        label: 'Eroare 404',
        title: 'Pagina nu există',
        body: 'Ne pare rău, pagina pe care o căutați nu a fost găsită. Verificați adresa URL sau reveniți la pagina principală.',
        cta: '← Înapoi la pagina principală',
    },
    en: {
        label: 'Error 404',
        title: 'Page not found',
        body: 'Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage.',
        cta: '← Back to homepage',
    },
};

export default async function NotFound() {
    const headersList = await headers();
    const pathname =
        headersList.get('x-pathname') ||
        headersList.get('x-invoke-path') ||
        headersList.get('referer') ||
        '/ro';
    const locale: Locale = pathname.includes('/en') ? 'en' : 'ro';
    const dict = await getDictionary(locale);
    const c = copy[locale];

    return (
        <DictionaryProvider dict={dict}>
            <AnimationWrapper>
            <KraftinoxHeader isHomePage={false} />
            <BackToTop />
            <main style={{ backgroundColor: '#fafafa', minHeight: '60vh', paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
                    <p style={{
                        fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
                        textTransform: 'uppercase', color: '#00A86D',
                        fontFamily: 'var(--tp-ff-unbounded)', marginBottom: '16px',
                    }}>
                        {c.label}
                    </p>

                    <h1 style={{
                        fontFamily: 'var(--tp-ff-unbounded)',
                        fontWeight: 700,
                        fontSize: 'clamp(80px, 18vw, 140px)',
                        letterSpacing: '-0.05em',
                        color: '#010103',
                        lineHeight: 1,
                        marginBottom: '24px',
                    }}>
                        404
                    </h1>

                    <h2 style={{
                        fontFamily: 'var(--tp-ff-unbounded)',
                        fontWeight: 600,
                        fontSize: 'clamp(18px, 3.5vw, 26px)',
                        color: '#010103',
                        marginBottom: '16px',
                    }}>
                        {c.title}
                    </h2>

                    <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#717171', marginBottom: '48px' }}>
                        {c.body}
                    </p>

                    <hr style={{ borderColor: 'rgba(1,1,3,0.1)', marginBottom: '40px' }} />

                    <Link
                        href={`/${locale}`}
                        style={{
                            display: 'inline-block', fontSize: '14px',
                            fontWeight: 600, color: '#00A86D',
                            textDecoration: 'none',
                            fontFamily: 'var(--tp-ff-unbounded)',
                        }}
                    >
                        {c.cta}
                    </Link>
                </div>
            </main>
            <HomeFooter />
            </AnimationWrapper>
        </DictionaryProvider>
    );
}