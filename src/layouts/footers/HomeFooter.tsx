"use client";
import HomeFooterCopyright from './subComponents/HomeFooterCopyright';
import SmoothScrollLink from '@/components/shared/SmoothScrollLink';
import { useDictionary } from '@/provider/DictionaryProvider';
import { ButtonArrowIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const socialLinks = [
    { label: 'Facebook',  href: 'https://www.facebook.com/kraftinox' },
    { label: 'Instagram', href: 'https://www.instagram.com/kraftinox' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/kraftinox' },
];

const HomeFooter = () => {
    const { footer } = useDictionary();

    return (
        <footer style={{ backgroundColor: '#0E0E0E' }}>
            <div className="tp-footer-area pt-100 pb-30">

                {/* ── CTA top strip ── */}
                <div className="ds-footer-top-wrap">
                    <div className="container container-1510">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="ds-footer-heading tp_fade_anim" data-delay=".3">
                                    <h3 className="tp-section-title tl-unbounded">
                                        {footer.ctaHeadingBefore}{' '}
                                        <span className="kf-footer-cta-accent">{footer.ctaHeadingAccent}</span>
                                    </h3>
                                    <p>{footer.ctaDescription}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ds-footer-btn z-index-1 text-lg-end tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                    <SmoothScrollLink href="#contact" className="tp-btn-green tp-btn-anim">
                                        <div className="tp-btn-text">{footer.ctaBtn}</div>
                                        <span><ButtonArrowIcon /></span>
                                    </SmoothScrollLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom: logo + columns ── */}
                <div className="ds-footer-bottom-warp pt-70 pb-45">
                    <div className="container container-1510">
                        <div className="row">

                            {/* Logo + tagline */}
                            <div className="col-xl-4 col-lg-4 col-12">
                                <div className="tp-footer-widget mb-50 tp_fade_anim kf-footer-logo-col" data-delay=".2">
                                    <div className="tp-footer-logo mb-30">
                                        <SmoothScrollLink href="#acasa">
                                            <Image
                                                width={320}
                                                height={86}
                                                src="/assets/img/logo/logo-white.png"
                                                alt="Kraftinox logo"
                                                style={{ objectFit: 'contain', width: '100%', maxWidth: '320px', height: 'auto' }}
                                            />
                                        </SmoothScrollLink>
                                    </div>
                                    <p className="kf-footer-tagline">
                                        {footer.tagline.split('\n').map((line, i, arr) => (
                                            <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                                        ))}
                                    </p>
                                    <div className="kf-footer-social mt-30">
                                        {socialLinks.map((s) => (
                                            <Link
                                                key={s.label}
                                                href={s.href}
                                                className="kf-footer-social-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={s.label}
                                            >
                                                {s.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Navigare */}
                            <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                                <div className="tp-footer-widget mb-50 tp_fade_anim" data-delay=".3">
                                    <h4 className="tp-footer-widget-title ff-unbounded fs-16 fw-500 mb-30">
                                        {footer.navTitle}
                                    </h4>
                                    <div className="tp-footer-widget-menu fs-16">
                                        <ul>
                                            {footer.quickLinks.map((item) => (
                                                <li key={item.label}>
                                                    <SmoothScrollLink href={item.href}>{item.label}</SmoothScrollLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Servicii */}
                            <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                                <div className="tp-footer-widget mb-50 tp_fade_anim" data-delay=".4">
                                    <h4 className="tp-footer-widget-title ff-unbounded fs-16 fw-500 mb-30">
                                        {footer.servicesTitle}
                                    </h4>
                                    <div className="tp-footer-widget-menu fs-16">
                                        <ul>
                                            {footer.serviceItems.map((item) => (
                                                <li key={item.label}>
                                                    <SmoothScrollLink href={item.href}>{item.label}</SmoothScrollLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="col-xl-3 col-lg-3 col-md-4">
                                <div className="tp-footer-widget mb-50 tp_fade_anim" data-delay=".5">
                                    <h4 className="tp-footer-widget-title ff-unbounded fs-16 fw-500 mb-30">
                                        {footer.contactTitle}
                                    </h4>
                                    <div className="tp-footer-widget-info mb-25">
                                        <span><Link href="tel:+40730612266">+40 0730 612 266</Link></span>
                                        <span><Link href="mailto:office@kraftinox.com" aria-label="office@kraftinox.com"><span className="kf-obf-email" data-u="office" data-d="kraftinox.com" aria-hidden="true" /></Link></span>
                                        <span><Link href="mailto:technic@kraftinox.com" aria-label="technic@kraftinox.com"><span className="kf-obf-email" data-u="technic" data-d="kraftinox.com" aria-hidden="true" /></Link></span>
                                    </div>
                                    <div className="tp-footer-widget-info mb-25">
                                        <span className="kf-footer-address">
                                            Str. Budiului, Nr.68<br />
                                            Târgu Mureș, 540390
                                        </span>
                                        <span className="kf-footer-hours">{footer.hours}</span>
                                    </div>
                                    {/* <p className="kf-footer-address-desc">{footer.addressDescription}</p> */}
                                    <div className="kf-footer-legal mt-20">
                                        <span>KRAFTINOX SRL</span>
                                        <span>CUI: RO 48151776</span>
                                        <span>J26/759/2023</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="tp-copyright-area">
                <HomeFooterCopyright />
            </div>
        </footer>
    );
};

export default HomeFooter;
