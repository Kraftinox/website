"use client";
import { useRef, Fragment } from 'react';
import { useDictionary } from '@/provider/DictionaryProvider';
import HomeSingleServiceItem from './subComponents/HomeSingleServiceItem';
import useServiceGsap from '@/hooks/useServiceGsap';
import SmoothScrollLink from '../shared/SmoothScrollLink';
import { ButtonArrowIcon } from '@/svg';
import type { ServiceItem } from '@/utils/api';
import { toMediaUrl } from '@/utils/media';

interface HomeServiceProps {
    apiServices?: ServiceItem[] | null;
}

const HomeService = ({ apiServices }: HomeServiceProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useServiceGsap(sectionRef as React.RefObject<HTMLElement | null>);
    const { services } = useDictionary();

    // Use API data if available, fallback to dictionary
    const items = apiServices
        ? apiServices.map((s) => ({
            id: s.id,
            image: s.image_path ? toMediaUrl(s.image_path) : '',
            title: s.title || '',
            description: s.description || '',
            gallery: (s.gallery || []).map(toMediaUrl).filter(Boolean),
        }))
        : services.items.map((item, i) => ({ id: i + 1, ...item, image: item.icon, gallery: [] as string[] }));

    return (
        <div
            ref={sectionRef}
            className="tp-service-area tp-fixed-title-wrap pb-120"
        >
            <div className="container container-1510">
                <div className="row">
                    <div className="col-lg-4">
                        <div
                            className="tp-service-heading mb-30 tp-fixed-title"
                            style={{ top: '100px', position: 'sticky' }}
                        >
                            <h3 className="tp-section-title fs-52 tl-unbounded fw-500 mb-20 tp-text-revel">
                                {services.tagline.split('\n').map((line, i, arr) => (
                                    <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                                ))}
                            </h3>
                            <p className="tp-service-desc mb-40 tp_fade_anim" data-delay=".5">
                                {services.description}
                            </p>
                            <div className="tp-hero-btn tp_fade_anim" data-delay=".7">
                                <SmoothScrollLink className="tp-btn-green tp-btn-anim btn-h-60" href="#contact">
                                    <div className="tp-btn-text">{services.cta}</div>
                                    <span><ButtonArrowIcon /></span>
                                </SmoothScrollLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="tp-service-item-box">
                            <div className="row g-2 g-md-4">
                                {items.map((service) => (
                                    <div key={service.id} className="col-lg-6 col-6 d-flex align-items-stretch">
                                        <HomeSingleServiceItem
                                            service={service}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;
