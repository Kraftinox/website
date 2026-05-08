"use client";
import { Fragment } from 'react';
import { useDictionary } from '@/provider/DictionaryProvider';
import PhotoProviderWrapper from '@/provider/PhotoProviderWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PhotoView } from 'react-photo-view';
import Image from 'next/image';
import type { CertificateItem } from '@/utils/api';
import { toMediaUrl } from '@/utils/media';

const fallbackCertificates = [
    '/assets/img/certificates/1.png',
    '/assets/img/certificates/2.png',
    '/assets/img/certificates/3.png',
    '/assets/img/certificates/4.png',
    '/assets/img/certificates/5.png',
];

const certSwiperParams = {
    spaceBetween: 16,
    slidesPerView: 5,
    loop: true,
    speed: 600,
    breakpoints: {
        1200: { slidesPerView: 5 },
        992:  { slidesPerView: 3 },
        576:  { slidesPerView: 2 },
        0:    { slidesPerView: 1.2 },
    },
};

interface CertificatesProps {
    apiCertificates?: CertificateItem[] | null;
}

const CorporateAInstagram = ({ apiCertificates }: CertificatesProps) => {
    const { certifications } = useDictionary();

    // Use API data if available, fallback to hardcoded paths
    const certificates = apiCertificates
        ? apiCertificates.map((c) => toMediaUrl(c.image_path))
        : fallbackCertificates;

    return (
        <section className="kf-cert-section pt-120 pb-120">
            <div className="container container-1510">
                <div className="row align-items-end mb-65">
                    <div className="col-lg-7">
                        <div className="kf-cert-title-box">
                            <span className="tp-section-subtitle st-dot tp_fade_anim" data-delay=".2">
                                {certifications.subtitle}
                            </span>
                            <h3 className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel">
                                {certifications.title.split('\n').map((line, i, arr) => (
                                    <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                                ))}
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <p className="kf-cert-lead tp_fade_anim" data-delay=".4">
                            {certifications.body}
                        </p>
                    </div>
                </div>

                <div className="kf-cert-slider-wrap tp_fade_anim" data-delay=".5">
                    <PhotoProviderWrapper>
                        <Swiper className="kf-cert-active" {...certSwiperParams}>
                            {certificates.map((src, i) => (
                                <SwiperSlide key={i} className="kf-cert-slide">
                                    <PhotoView src={src}>
                                        <div className="kf-cert-item">
                                            <div className="kf-cert-img">
                                                <Image
                                                    fill
                                                    src={src}
                                                    alt={`certificat-${i + 1}`}
                                                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                                    sizes="(max-width: 576px) 90vw, (max-width: 992px) 33vw, 20vw"
                                                />
                                            </div>
                                            <div className="kf-cert-overlay">
                                                <span className="kf-cert-zoom">
                                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </PhotoView>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </PhotoProviderWrapper>
                </div>
            </div>
        </section>
    );
};

export default CorporateAInstagram;
