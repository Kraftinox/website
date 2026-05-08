import KraftinoxHeader from '@/layouts/headers/KraftinoxHeader';
import HomeFooter from '@/layouts/footers/HomeFooter';
import BackToTop from '@/components/shared/BackToTop/BackToTop';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <KraftinoxHeader isHomePage={true} />
            <BackToTop />
            {children}
            <HomeFooter />
        </>
    );
}
