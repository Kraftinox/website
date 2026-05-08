"use client";
import { useDictionary } from '@/provider/DictionaryProvider';
import Image from 'next/image';
import type { PartnerItem } from '@/utils/api';
import { toMediaUrl } from '@/utils/media';

const fallbackLogos = [
    { id: 1, title: 'Knaufinsulation', image: '/assets/img/partner/23.png' },
    { id: 2, title: 'Medex', image: '/assets/img/partner/24.png' },
    { id: 3, title: 'Hochland', image: '/assets/img/partner/25.png' },
    { id: 4, title: 'Evora', image: '/assets/img/partner/26.png' },
    { id: 5, title: 'Sanlacta', image: '/assets/img/partner/27.png' },
    { id: 6, title: 'Sandoz', image: '/assets/img/partner/28.png' },
    { id: 7, title: 'Messer', image: '/assets/img/partner/29.png' },
    { id: 8, title: 'Uniprest', image: '/assets/img/partner/30.png' },
    { id: 9, title: 'Linde', image: '/assets/img/partner/31.png' },
    { id: 10, title: 'Bergenbier', image: '/assets/img/partner/32.png' },
    { id: 11, title: 'Hilton', image: '/assets/img/partner/33.png' },
    { id: 12, title: 'Richter Gedeon', image: '/assets/img/partner/34.png' },
];

interface BrandProps {
    apiPartners?: PartnerItem[] | null;
}

const ModernAgencyBrand = ({ apiPartners }: BrandProps) => {
    const { partners } = useDictionary();

    const brandLogos = apiPartners
        ? apiPartners.map((p) => ({
            id: p.id,
            title: p.title || '',
            image: p.image_path ? toMediaUrl(p.image_path) : '',
            link: p.link || null,
        }))
        : fallbackLogos.map((l) => ({ ...l, link: null }));

    return (
        <section className="ds-brand-area pt-120 pb-90">
            <div className="container container-1510">
                <div className="row">
                    <div className="col-12 mb-60">
                        <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3">
                            <div>
                                <span className="tp-section-subtitle st-dot tp_fade_anim" data-delay=".2">
                                    {partners.subtitle}
                                </span>
                                <h3 className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel">
                                    {partners.title}
                                </h3>
                            </div>
                            <p className="tp_fade_anim" data-delay=".4" style={{ maxWidth: 420 }}>
                                {partners.body}
                            </p>
                        </div>
                    </div>
                    {brandLogos.map(({ id, title, image, link }) => (
                        <div key={id} className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="kf-brand-item d-flex flex-column align-items-center justify-content-center text-center mb-30 tp_fade_anim"
                                data-delay={`${0.1 + (id % 4) * 0.1}`}>
                                {image && (link ? (
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="kf-brand-img">
                                        <Image src={image} alt={title} width={260} height={120} style={{ objectFit: 'contain' }} />
                                    </a>
                                ) : (
                                    <div className="kf-brand-img">
                                        <Image src={image} alt={title} width={260} height={120} style={{ objectFit: 'contain' }} />
                                    </div>
                                ))}
                                <span className="kf-brand-name">{title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModernAgencyBrand;
