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

    const services = isRo
        ? ['Instalații termomecanice', 'Instalații tehnologice', 'Instalații sub presiune', 'Sudură orbitală și TIG', 'Sisteme de protecție la incendiu', 'Termoizolații și înveliri', 'Instalații gaze tehnice', 'Sisteme CIP']
        : ['Thermomechanical installations', 'Technological installations', 'Pressure systems', 'Orbital and TIG welding', 'Fire protection systems', 'Thermal insulation & cladding', 'Technical gas installations', 'CIP systems'];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'ProfessionalService'],
        name: 'Kraftinox SRL',
        legalName: 'Kraftinox SRL',
        image: `${siteUrl}/assets/img/og-image.jpg`,
        logo: `${siteUrl}/assets/img/logo/logo.png`,
        description: isRo
            ? 'Kraftinox execută instalații industriale din inox, sudură orbitală și TIG, sisteme sub presiune ISCIR/TÜV-Süd, instalații food & pharma și gaze tehnice. Târgu Mureș, România — din 2011.'
            : 'Kraftinox delivers stainless steel industrial installations, orbital and TIG welding, ISCIR/TÜV-Süd pressure systems, food & pharma and technical gas installations. Târgu Mureș, Romania — since 2011.',
        url: siteUrl,
        telephone: '+40730612266',
        email: 'office@kraftinox.com',
        foundingDate: '2011',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Str. Budiului 68',
            addressLocality: 'Târgu Mureș',
            postalCode: '540390',
            addressRegion: 'Mureș',
            addressCountry: 'RO',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 46.5403,
            longitude: 24.5581,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Romania',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: isRo ? 'Servicii instalații industriale' : 'Industrial installation services',
            itemListElement: services.map((name) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name },
            })),
        },
        knowsAbout: isRo
            ? ['instalații inox', 'sudură orbitală', 'instalații sub presiune', 'ISCIR', 'TÜV-Süd', 'PED', 'inox food grade', 'sisteme CIP', 'gaze tehnice', 'termoizolații']
            : ['stainless steel installations', 'orbital welding', 'pressure systems', 'ISCIR', 'TÜV-Süd', 'PED', 'food grade stainless', 'CIP systems', 'technical gases', 'thermal insulation'],
        sameAs: [
            'https://www.facebook.com/kraftinox',
            'https://www.instagram.com/kraftinox',
            'https://www.linkedin.com/company/kraftinox',
        ],
    };

    const orgSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Kraftinox SRL',
        legalName: 'Kraftinox SRL',
        url: siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/assets/img/logo/logo.png`,
            width: 200,
            height: 60,
        },
        image: `${siteUrl}/assets/img/og-image.jpg`,
        description: isRo
            ? 'Kraftinox SRL execută instalații industriale din inox, sudură orbitală și TIG, sisteme sub presiune ISCIR/TÜV-Süd. Târgu Mureș, România — din 2011.'
            : 'Kraftinox SRL executes stainless steel industrial installations, orbital and TIG welding, ISCIR/TÜV-Süd pressure systems. Târgu Mureș, Romania — since 2011.',
        foundingDate: '2011',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 20 },
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Str. Budiului 68',
            addressLocality: 'Târgu Mureș',
            postalCode: '540390',
            addressRegion: 'Mureș',
            addressCountry: 'RO',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+40730612266',
            email: 'office@kraftinox.com',
            contactType: 'customer service',
            areaServed: 'RO',
            availableLanguage: ['Romanian', 'English'],
        },
        sameAs: [
            'https://www.facebook.com/kraftinox',
            'https://www.instagram.com/kraftinox',
            'https://www.linkedin.com/company/kraftinox',
        ],
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Kraftinox',
        alternateName: 'Kraftinox SRL',
        url: siteUrl,
        inLanguage: isRo ? 'ro-RO' : 'en-GB',
        publisher: {
            '@type': 'Organization',
            name: 'Kraftinox SRL',
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/assets/img/logo/logo.png`,
                width: 200,
                height: 60,
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+40730612266',
                contactType: 'customer service',
                areaServed: 'RO',
                availableLanguage: ['Romanian', 'English'],
            },
            sameAs: [
                'https://www.facebook.com/kraftinox',
                'https://www.instagram.com/kraftinox',
                'https://www.linkedin.com/company/kraftinox',
            ],
        },
    };

    const navSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: isRo ? 'Navigare Kraftinox' : 'Kraftinox Navigation',
        itemListElement: (isRo
            ? [
                { name: 'Acasă', description: 'Pagina principală Kraftinox', url: `${siteUrl}/ro` },
                { name: 'Servicii', description: 'Instalații industriale, sudură orbitală, sisteme sub presiune', url: `${siteUrl}/ro#servicii` },
                { name: 'Proiecte', description: 'Proiecte industriale realizate', url: `${siteUrl}/ro#proiecte` },
                { name: 'Despre noi', description: 'Despre Kraftinox SRL', url: `${siteUrl}/ro#despre` },
                { name: 'Certificări', description: 'Autorizații ISCIR și TÜV-Süd', url: `${siteUrl}/ro#certificari` },
                { name: 'Contact', description: 'Contactați Kraftinox pentru ofertă', url: `${siteUrl}/ro#contact` },
            ]
            : [
                { name: 'Home', description: 'Kraftinox homepage', url: `${siteUrl}/en` },
                { name: 'Services', description: 'Industrial installations, orbital welding, pressure systems', url: `${siteUrl}/en#servicii` },
                { name: 'Projects', description: 'Completed industrial projects', url: `${siteUrl}/en#proiecte` },
                { name: 'About us', description: 'About Kraftinox SRL', url: `${siteUrl}/en#despre` },
                { name: 'Certifications', description: 'ISCIR and TÜV-Süd authorisations', url: `${siteUrl}/en#certificari` },
                { name: 'Contact', description: 'Contact Kraftinox for a quote', url: `${siteUrl}/en#contact` },
            ]
        ).map((item, i) => ({
            '@type': 'SiteNavigationElement',
            position: i + 1,
            name: item.name,
            description: item.description,
            url: item.url,
        })),
    };

    return (
        <>
            <link rel="preconnect" href="https://cdn.cookie-script.com" />
            <link rel="dns-prefetch" href="https://cdn.cookie-script.com" />
            <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js-ready')` }} />
            <LangUpdater locale={validLocale} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
            />
            <DictionaryProvider dict={dict}>
                <AnimationWrapper>
                    {children}
                </AnimationWrapper>
            </DictionaryProvider>
            <Script
                src="//cdn.cookie-script.com/s/e24e31ccc2852c73a59ca00a43b534f1.js"
                strategy="lazyOnload"
            />
        </>
    );
}