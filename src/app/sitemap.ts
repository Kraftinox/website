import type { MetadataRoute } from 'next';

const siteUrl = 'https://kraftinox.com';
const locales = ['ro', 'en'] as const;

const routes = [
    {
        path: '',
        priority: 1,
        changeFrequency: 'weekly' as const
    },
    { 
        path: '/termeni-si-conditii', 
        priority: 0.2, 
        changeFrequency: 'yearly' as const 
    }
];

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];
    const lastModified = new Date().toISOString().split('T')[0];

    routes.forEach((route) => {
        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${siteUrl}/${locale}${route.path}`,
                lastModified, 
                changeFrequency: route.changeFrequency,
                priority: route.path === '' && locale === 'en' ? 0.9 : route.priority,
                alternates: {
                    languages: {
                        ro: `${siteUrl}/ro${route.path}`,
                        en: `${siteUrl}/en${route.path}`,
                    },
                },
            });
        });
    });

    return sitemapEntries;
}