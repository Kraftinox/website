"use client";
import { Fragment } from 'react';
import { useDictionary } from '@/provider/DictionaryProvider';
import SmoothScrollLink from '@/components/shared/SmoothScrollLink';
import { ArrowIconFive } from '@/svg/ArrowIcon';
import Image from 'next/image';

const BusinessConsultingAbout = () => {
    const { about } = useDictionary();

    return (
        <div
            className="bnc-about-ptb p-relative pt-120 pb-120"
            style={{ backgroundColor: '#ECF8F8' }}
        >
            <div className="container container-1510">
                {/* Top Section */}
                <div className="bnc-about-top-wrap pb-90">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bnc-about-title-box">
                                <span className="tp-section-subtitle fs-16 st-dot">{about.subtitle}</span>
                                <h3 className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel">
                                    {about.title.split('\n').map((line, i, arr) => (
                                        <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                                    ))}
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="bnc-about-right text-lg-end" data-speed="1.1">
                                <Image width={290} height={248} src="/assets/img/about2.png" alt="about thumb" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bnc-about-bottom-wrap pb-90">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="bnc-about-thumb-wrap tp-clip-anim mb-30">
                                <Image
                                    className="tp-anim-img"
                                    data-animate="true"
                                    src="/assets/img/about.png"
                                    width={865}
                                    height={498}
                                    alt="about thumb"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bnc-about-content">
                                <div className="bnc-about-content-text">
                                    <p className="tp-text-perspective">{about.body1}</p>
                                    <p className="tp-text-perspective">{about.body2}</p>
                                </div>
                                <div className="bnc-about-content-btn-box d-flex">
                                    <AboutButton label={about.cta1} href="#contact" delay=".3" variant="filled" />
                                    <AboutButton label={about.cta2} href="#servicii" delay=".5" variant="outline" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Items */}
                <div className="bnc-about-item-box">
                    <div className="row g-3 g-lg-4">
                        {about.items.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-6">
                                <div
                                    className="bnc-about-item mb-30 tp_fade_anim"
                                    data-delay={String(0.3 + index * 0.2)}
                                >
                                    <div className="bnc-about-item-icon mb-25">
                                        <Image width={90} height={90} src={item.image} alt={item.title.replace(/\n/g, ' ')} />
                                    </div>
                                    <div className="bnc-about-item-content">
                                        <h4 className="bnc-about-item-title">
                                            {item.title.split('\n').map((line, i, arr) => (
                                                <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                                            ))}
                                        </h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutButton = ({
    label,
    href,
    delay,
    variant = 'filled',
}: {
    label: string;
    href: string;
    delay?: string;
    variant?: 'filled' | 'outline';
}) => (
    <div
        className="bnc-about-content-btn tp_fade_anim"
        data-delay={delay}
        data-fade-from="top"
        data-ease="bounce"
    >
        <SmoothScrollLink
            href={href}
            className={`tp-btn-green bdr-5 fw-700 ff-bricolage tp-btn-anim ${variant === 'outline' ? 'bg-none-style' : ''}`}
        >
            <div className="tp-btn-text">{label}</div>
            <span><ArrowIconFive /></span>
        </SmoothScrollLink>
    </div>
);

export default BusinessConsultingAbout;
