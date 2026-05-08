"use client";
import SmoothScrollLink from '@/components/shared/SmoothScrollLink';
import { useDictionary } from '@/provider/DictionaryProvider';
import { ButtonArrowIcon } from '@/svg';
import Image from 'next/image';

const HomeHero = () => {
    const { hero } = useDictionary();

    return (
        <div className="tp-hero-area tp-hero-ptb p-relative fix z-index-1" style={{ backgroundColor: '#010103' }}>
            <div className="container container-1510">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="tp-hero-content-box-wrap p-relative">
                            <div className="tp-hero-header-wrap z-index-1">
                                <h1 className="tp-hero-title">
                                    {hero.titleMain} <i>{hero.titleItalic}</i>
                                </h1>
                            </div>
                            <div className="tp-hero-content-box">
                                <div className="tp_fade_anim" data-delay=".5">
                                    <p>{hero.description}</p>
                                </div>
                                <div className="tp-hero-btn tp_fade_anim" data-delay=".7">
                                    <SmoothScrollLink
                                        className="tp-btn-green btn-white-bg tp-btn-anim btn-h-60"
                                        href="#contact"
                                    >
                                        <div className="tp-btn-text">{hero.cta}</div>
                                        <span><ButtonArrowIcon /></span>
                                    </SmoothScrollLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-hero-thumb-wrapper">
                            <div
                                className="tp-hero-thumb-inner tp_fade_anim"
                                data-delay=".7"
                                data-ease="bounce"
                                data-fade-from="top"
                                data-duration="1.2"
                            >
                                <div className="tp-hero-thumb-1">
                                    <Image
                                        width={560}
                                        height={575}
                                        src="/assets/img/digital-agency/hero/1.png"
                                        alt={hero.imageAlt}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="tp-hero-thumb-2 p-relative">
                                <Image
                                    fill
                                    priority
                                    fetchPriority="high"
                                    src="/assets/img/digital-agency/hero/2.png"
                                    alt={hero.imageAlt}
                                    style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                                    sizes="(max-width: 768px) 100vw, 580px"
                                    quality={80}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
