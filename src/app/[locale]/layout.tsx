import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import AnimationWrapper from '@/components/shared/animation/AnimationWrapper';
import { DictionaryProvider } from '@/provider/DictionaryProvider';
import { getDictionary } from '@/i18n/getDictionary';
import { locales, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import LangUpdater from '@/components/shared/LangUpdater';

const siteUrl = 'https://kraftinox.com';
export const viewport: Viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isRo = locale === 'ro';

    const title = isRo
        ? 'Kraftinox | Instalații Industriale · Sudură · Târgu Mureș'
        : 'Kraftinox | Industrial Installations & Welding, Romania';
    const description = isRo
        ? 'Kraftinox execută instalații inox, sudură orbitală și sisteme sub presiune pentru industria alimentară, farmaceutică și de producție. Târgu Mureș, România.'
        : 'Kraftinox delivers orbital welding, pressure systems and stainless steel installations for food, pharmaceutical and industrial sectors. Târgu Mureș, Romania.';

    return {
        metadataBase: new URL(siteUrl),
        title: { default: title, template: '%s | Kraftinox' },
        description,
        keywords: isRo
            ? ['instalatii industriale', 'sudura orbitala', 'sisteme sub presiune', 'inox food pharma', 'kraftinox', 'targu mures', 'instalatii inox', 'tubulaturi industriale', 'ISCIR', 'TÜV']
            : ['industrial installations', 'orbital welding', 'pressure systems', 'food pharma stainless steel', 'kraftinox', 'TIG welding', 'ISCIR', 'TÜV-Süd', 'Romania'],
        authors: [{ name: 'Kraftinox' }],
        creator: 'Kraftinox',
        robots: { index: true, follow: true },
        alternates: {
            canonical: `${siteUrl}/${locale}`,
            languages: { ro: `${siteUrl}/ro`, en: `${siteUrl}/en` },
        },
        icons: {
            icon: '/favicon.ico',
            shortcut: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
        openGraph: {
            type: 'website',
            locale: isRo ? 'ro_RO' : 'en_GB',
            url: `${siteUrl}/${locale}`,
            siteName: 'Kraftinox',
            title,
            description,
            images: [{ url: '/assets/img/og-image.jpg', width: 1200, height: 630, alt: 'Kraftinox' }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/assets/img/og-image.jpg'],
        },
    };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const validLocale = locale as Locale;
    const dict = await getDictionary(validLocale);
    const isRo = validLocale === 'ro';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Kraftinox',
        image: `${siteUrl}/assets/img/og-image.jpg`,
        description: isRo 
            ? 'Instalații industriale din inox, sudură orbitală și TIG.' 
            : 'Industrial stainless steel installations, orbital and TIG welding.',
        url: siteUrl,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Târgu Mureș',
            addressCountry: 'RO'
        },
        telephone: "+400730612266",
        email: "office@kraftszer.ro"
    };

    return (
        <>
            <LangUpdater locale={validLocale} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DictionaryProvider dict={dict}>
                <AnimationWrapper>
                    {children}
                </AnimationWrapper>
            </DictionaryProvider>
            <Script
                src="//cdn.cookie-script.com/s/cebff792f9483632258de02eed8dcc3f.js"
                strategy="lazyOnload"
            />
        </>
    );
}