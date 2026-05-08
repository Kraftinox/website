import type { ReactNode } from 'react';
import { Bricolage_Grotesque, Poppins, Unbounded } from 'next/font/google';
import './globals.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: 'variable',
    variable: '--font-bricolage-grotesque',
    display: 'swap',
    axes: ['opsz'],
    preload: true,
});

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    preload: true,
});

const unbounded = Unbounded({
    variable: '--font-unbounded',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    preload: false,
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="ro"
            suppressHydrationWarning
            className={`${bricolageGrotesque.variable} ${poppins.variable} ${unbounded.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
