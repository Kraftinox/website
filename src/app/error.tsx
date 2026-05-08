'use client'

import { useEffect, useMemo } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DictionaryProvider } from '@/provider/DictionaryProvider';
import AnimationWrapper from '@/components/shared/animation/AnimationWrapper';
import KraftinoxHeader from '@/layouts/headers/KraftinoxHeader';
import HomeFooter from '@/layouts/footers/HomeFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import roDict from '@/dictionaries/ro';
import enDict from '@/dictionaries/en';

const copy = {
    ro: {
        label: 'Eroare',
        title: 'Ceva nu a mers bine',
        body: 'A apărut o eroare neașteptată. Te rugăm să încerci din nou sau revino la pagina principală.',
        retry: 'Încearcă din nou',
        home: '← Pagina principală',
    },
    en: {
        label: 'Error',
        title: 'Something went wrong',
        body: 'An unexpected error occurred. Please try again or return to the homepage.',
        retry: 'Try again',
        home: '← Homepage',
    },
};

//global boundary error
export default function Error({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    const pathname = usePathname();
    const locale = pathname?.includes('/en') ? 'en' : 'ro';
    const dict = useMemo(() => locale === 'en' ? enDict : roDict, [locale]);
    const c = copy[locale];

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <DictionaryProvider dict={dict}>
            <AnimationWrapper>
            <KraftinoxHeader isHomePage={false} />
            <BackToTop />
            <main style={{ backgroundColor: '#fafafa', minHeight: '60vh', paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
                    <p style={{
                        fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
                        textTransform: 'uppercase', color: '#d32f2f',
                        fontFamily: 'var(--tp-ff-unbounded)', marginBottom: '16px',
                    }}>
                        {c.label}
                    </p>

                    <h1 style={{
                        fontFamily: 'var(--tp-ff-unbounded)',
                        fontWeight: 700,
                        fontSize: 'clamp(28px, 5vw, 42px)',
                        color: '#010103',
                        lineHeight: 1.2,
                        marginBottom: '16px',
                    }}>
                        {c.title}
                    </h1>

                    <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#717171', marginBottom: '48px' }}>
                        {c.body}
                    </p>

                    <hr style={{ borderColor: 'rgba(1,1,3,0.1)', marginBottom: '40px' }} />

                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <button
                            onClick={() => reset()}
                            style={{
                                display: 'inline-block', fontSize: '14px',
                                fontWeight: 600, color: '#00A86D',
                                textDecoration: 'none', background: 'none',
                                border: '2px solid #00A86D', borderRadius: '30px',
                                padding: '12px 28px', cursor: 'pointer',
                                fontFamily: 'var(--tp-ff-unbounded)',
                            }}
                        >
                            {c.retry}
                        </button>
                        <Link
                            href={`/${locale}`}
                            style={{
                                display: 'inline-block', fontSize: '14px',
                                fontWeight: 600, color: '#fff',
                                textDecoration: 'none', background: '#00A86D',
                                border: '2px solid #00A86D', borderRadius: '30px',
                                padding: '12px 28px',
                                fontFamily: 'var(--tp-ff-unbounded)',
                            }}
                        >
                            {c.home}
                        </Link>
                    </div>
                </div>
            </main>
            <HomeFooter />
            </AnimationWrapper>
        </DictionaryProvider>
    );
}  