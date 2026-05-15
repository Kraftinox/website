import ModernAgencyFunfact from '@/components/funfact/ModernAgencyFunfact';
import DesignStudioPortfolio from '@/components/portfolio/DesignStudioPortfolio';
import BusinessConsultingAbout from '@/components/about/BusinessConsultingAbout';
import StartupAgencyAward from '@/components/award/StartupAgencyAward';
import CorporateAInstagram from '@/components/instagram/CorporateAInstagram';
import ModernAgencyBrand from '@/components/brand/ModernAgencyBrand';
import ContactUsTopArea from '@/components/contact/ContactUsTopArea';
import ContactForm from '@/components/form/ContactForm';
import HomeService from '@/components/service/HomeService';
import HomeHero from '@/components/hero/HomeHero';
import FormTitle from '@/components/contact/FormTitle';
import HomeFaq from '@/components/faq/HomeFaq';
import { getServices, getProjects, getCertificates, getPartners } from '@/utils/api';
import { locales } from '@/i18n/config';

export const revalidate = 300;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function LocalePage({ params }: PageProps) {
    const { locale } = await params;

    // Fetch all data in parallel from CMS
    const [services, projects, certificates, partners] = await Promise.all([
        getServices(locale).catch(() => null),
        getProjects(locale).catch(() => null),
        getCertificates().catch(() => null),
        getPartners(locale).catch(() => null),
    ]);

    return (
        <main>
            <div id="acasa">
                <HomeHero />
            </div>
            <ModernAgencyFunfact />
            <div id="servicii">
                <HomeService apiServices={services} />
            </div>
            {/* <div id="proiecte">
                <DesignStudioPortfolio apiProjects={projects} />
            </div> */}
            <div id="despre">
                <BusinessConsultingAbout />
            </div>
            <StartupAgencyAward />
            <div id="certificari">
                <CorporateAInstagram apiCertificates={certificates} />
            </div>
            <ModernAgencyBrand apiPartners={partners} />
            <HomeFaq />
            <div id="contact">
                <ContactUsTopArea />
                <div className="tp-contact-us-form-ptb pb-120">
                    <div className="container container-1480">
                        <div className="tp-contact-us-form-border">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tp-contact-us-form-wrapper">
                                        <div className="tp-contact-us-form-heading text-center mb-50">
                                            <FormTitle />
                                        </div>
                                        <div className="tp-contact-us-form-wrap">
                                            <ContactForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
