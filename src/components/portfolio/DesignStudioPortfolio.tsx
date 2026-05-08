"use client";
import { useDictionary } from '@/provider/DictionaryProvider';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { ProjectItem } from '@/utils/api';
import { toMediaUrl } from '@/utils/media';

const ArrowLeft = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);
const ArrowRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

interface PortfolioProps {
    apiProjects?: ProjectItem[] | null;
}

const DesignStudioPortfolio = ({ apiProjects }: PortfolioProps) => {
    const { portfolio } = useDictionary();
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    // Use API data if available, fallback to dictionary
    const items = apiProjects
        ? apiProjects.map((p) => ({
            image: p.image_path ? toMediaUrl(p.image_path) : '/assets/img/projects/placeholder.png',
            title: p.title || '',
            location: p.location || p.city || '',
            year: p.date || '',
        }))
        : portfolio.items;

    return (
        <div className="ds-portfolio-area">

            {/* Section header */}
            <div className="container container-1510 pb-120">
                <div className="row align-items-end">
                    <div className="col-md-8 col-9">
                        <span
                            className="tp-section-subtitle st-dot tp_fade_anim"
                            data-delay=".2"
                        >
                            {portfolio.subtitle}
                        </span>
                        <h3 className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel mb-0">
                            {portfolio.title.split('\n').map((line, i, arr) => (
                                <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                            ))}
                        </h3>
                    </div>
                    <div className="col-md-4 col-3">
                        <div className="kf-portfolio-nav d-flex align-items-center justify-content-end gap-2">
                            <button
                                className="kf-portfolio-nav-btn"
                                aria-label="Proiect anterior"
                                onClick={() => swiper?.slidePrev()}
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                className="kf-portfolio-nav-btn"
                                aria-label="Proiect următor"
                                onClick={() => swiper?.slideNext()}
                            >
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <Swiper
                onSwiper={setSwiper}
                loop
                speed={600}
                spaceBetween={3}
                slidesPerView={1.15}
                breakpoints={{
                    576:  { slidesPerView: 1.5,  spaceBetween: 3 },
                    768:  { slidesPerView: 2,    spaceBetween: 3 },
                    992:  { slidesPerView: 2.4,  spaceBetween: 3 },
                    1200: { slidesPerView: 3,    spaceBetween: 3 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="ds-portfolio-item kf-portfolio-item">
                            <div className="ds-portfolio-item-thumb">
                                <div className="tp-clip-anim">
                                    <Image
                                        width={635}
                                        height={712}
                                        className="tp-anim-img"
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </div>
                            <div className="ds-portfolio-item-content">
                                <div className="ds-portfolio-item-content-hide">
                                    <span>{item.year} · {item.location}</span>
                                    <div className="ds-portfolio-item-title">
                                        <h3 className="tp-line-black">{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default DesignStudioPortfolio;
