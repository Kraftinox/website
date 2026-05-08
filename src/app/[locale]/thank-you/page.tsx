import { locales, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mulțumim | Thank you — Kraftinox',
    robots: { index: false, follow: false },
};

const content = {
    ro: {
        label: 'Cerere trimisă',
        title: 'Mulțumim!',
        subtitle: 'Cererea dumneavoastră a fost trimisă cu succes.',
        body: 'Echipa noastră vă va contacta în cel mai scurt timp pentru a discuta detaliile proiectului.',
        cta: '← Înapoi la pagina principală',
    },
    en: {
        label: 'Request sent',
        title: 'Thank you!',
        subtitle: 'Your request has been sent successfully.',
        body: 'Our team will contact you shortly to discuss your project details.',
        cta: '← Back to homepage',
    },
};

export default async function ThankYouPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!locales.includes(locale as Locale)) notFound();

    const c = locale === 'en' ? content.en : content.ro;

    return (
        <main style={{ backgroundColor: '#fafafa', minHeight: '60vh', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>

                <div style={{ marginBottom: '40px' }}>
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
                        <circle cx="36" cy="36" r="36" fill="rgba(0,168,109,0.08)" />
                        <circle cx="36" cy="36" r="27" fill="rgba(0,168,109,0.14)" />
                        <circle cx="36" cy="36" r="20" fill="#00A86D" />
                        <path d="M25 37l8 8 14-16" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

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
                    fontSize: 'clamp(32px, 6vw, 52px)',
                    letterSpacing: '-0.03em',
                    color: '#010103',
                    marginBottom: '16px',
                }}>
                    {c.title}
                </h1>

                <p style={{ fontSize: '18px', fontWeight: 500, color: '#010103', marginBottom: '12px' }}>
                    {c.subtitle}
                </p>

                <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#717171', marginBottom: '48px' }}>
                    {c.body}
                </p>

                <hr style={{ borderColor: 'rgba(1,1,3,0.1)', marginBottom: '40px' }} />

                <Link
                    href={`/${locale}`}
                    style={{
                        display: 'inline-block',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#00A86D',
                        textDecoration: 'none',
                        fontFamily: 'var(--tp-ff-unbounded)',
                    }}
                >
                    {c.cta}
                </Link>
            </div>
        </main>
    );
}
