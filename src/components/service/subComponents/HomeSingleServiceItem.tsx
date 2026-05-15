"use client";
import PhotoProviderWrapper from '@/provider/PhotoProviderWrapper';
import { PhotoView } from 'react-photo-view';
import SmoothScrollLink from '@/components/shared/SmoothScrollLink';
import { ButtonArrowIcon } from '@/svg';
import { ServiceItemDt } from '@/types/custom-dt';
import Image from 'next/image';
import React from 'react';

interface serviceProps {
    service: ServiceItemDt
}

const GalleryIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
    </svg>
);

const HomeSingleServiceItem: React.FC<serviceProps> = ({ service }) => {
    const gallery = service.gallery || [];
    const hasGallery = gallery.length > 0;

    return (
        <div className="tp-service-item mb-30 h-100 w-100 d-flex flex-column">
            <div className="tp-service-item-icon">
                {service.image && (
                    <Image width={120} height={120} src={service.image} alt={service.title} />
                )}
            </div>
            <h4 className="tp-service-item-title">{service.title}</h4>
            <p className="flex-grow-1" dangerouslySetInnerHTML={{ __html: service.description }} />

            {hasGallery ? (
                <PhotoProviderWrapper>
                    {/* Hidden triggers for images 2..N so they appear in the viewer */}
                    {gallery.slice(1).map((src, i) => (
                        <PhotoView key={i + 1} src={src}>
                            <span style={{ display: 'none' }} aria-hidden="true" />
                        </PhotoView>
                    ))}
                    {/* Visible gallery button — triggers first image, navigates through all */}
                    <PhotoView src={gallery[0]}>
                        <div className="tp-hero-btn tp_fade_anim" data-delay=".7" style={{ cursor: 'pointer' }}>
                            <div className="tp-btn-green tp-btn-anim btn-h-60" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <GalleryIcon />
                                <div className="tp-btn-text">Galerie foto</div>
                                <span><ButtonArrowIcon /></span>
                            </div>
                        </div>
                    </PhotoView>
                </PhotoProviderWrapper>
            ) : (
                <div className="tp-hero-btn tp_fade_anim" data-delay=".7">
                    <SmoothScrollLink className="tp-btn-green tp-btn-anim btn-h-60" href="#contact">
                        <div className="tp-btn-text">Cere ofertă</div>
                        <span><ButtonArrowIcon /></span>
                    </SmoothScrollLink>
                </div>
            )}
        </div>
    );
};

export default HomeSingleServiceItem;
