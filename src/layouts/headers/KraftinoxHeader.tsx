"use client";
import SmoothScrollLink from '@/components/shared/SmoothScrollLink';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useDictionary } from '@/provider/DictionaryProvider';
import useStickyHeader from '@/hooks/useStickyHeader';
import { ButtonArrowIcon } from '@/svg';
import { useState } from 'react';
import Image from 'next/image';

const KraftinoxHeader = ({ isHomePage = true }: { isHomePage?: boolean }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isSticky = useStickyHeader(20);
    const { nav } = useDictionary();
    const isActiveSticky = !isHomePage || isSticky;

    const navItems = [
        { label: nav.home, href: '#acasa' },
        { label: nav.services, href: '#servicii' },
        { label: nav.projects, href: '#proiecte' },
        { label: nav.about, href: '#despre' },
        { label: nav.certifications, href: '#certificari' },
        { label: nav.contact, href: '#contact' },
    ];

    return (
        <>
            <header
                className={`tp-header-area tp-header-ptb tp-header-blur sticky-white-bg tp-header-border ${isActiveSticky ? 'header-sticky' : 'header-transparent'}`}
            >
                <div className="container container-1510">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-6">
                            <div className="tp-header-logo">
                                <SmoothScrollLink href="#acasa" aria-label="Acasă">
                                    <Image
                                        className="logo-white"
                                        width={300}
                                        height={130}
                                        sizes="200px"
                                        src="/assets/img/logo/logo-white.png"
                                        alt="Kraftinox"
                                        priority
                                        style={{ width: 'auto', height: '52px' }}
                                    />
                                    <Image
                                        className="logo-black"
                                        width={300}
                                        height={130}
                                        sizes="200px"
                                        src="/assets/img/logo/logo-black.png"
                                        alt="Kraftinox"
                                        priority
                                        style={{ width: 'auto', height: '52px' }}
                                    />
                                </SmoothScrollLink>
                            </div>
                        </div>
                        <div className="col-xl-7 d-none d-xl-block">
                            <div className="tp-header-box text-center">
                                <div className="tp-header-menu">
                                    <nav aria-label={nav.aria.primaryNav}>
                                        <ul>
                                            {navItems.map((item) => (
                                                <li key={item.href}>
                                                    <SmoothScrollLink href={item.href}>
                                                        {item.label}
                                                    </SmoothScrollLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-9 col-6">
                            <div className="tp-header-right d-flex align-items-center justify-content-end gap-3 gap-md-4">
                                <div className="d-flex align-items-center">
                                    <LanguageSwitcher />
                                </div>

                                <div className="tp-header-btn-box d-none d-md-block">
                                    <SmoothScrollLink href="#contact" className="tp-btn-green tp-btn-anim">
                                        <div className="tp-btn-text">{nav.cta}</div>
                                        <span><ButtonArrowIcon /></span>
                                    </SmoothScrollLink>
                                </div>
                                <button
                                    className="tp-header-bar tp-offcanvas-open-btn d-xl-none"
                                    aria-label={nav.aria.openMenu}
                                    onClick={() => setMobileOpen(true)}
                                >
                                    <i /><i /><i />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="kf-mobile-wrapper"
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    pointerEvents: mobileOpen ? 'auto' : 'none'
                }}
            >
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(4px)',
                        opacity: mobileOpen ? 1 : 0,
                        visibility: mobileOpen ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '320px',
                        maxWidth: '100%',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '30px',
                        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
                        boxShadow: mobileOpen ? '-5px 0 25px rgba(0,0,0,0.15)' : 'none',
                    }}
                >
                    <div className="d-flex align-items-center justify-content-between mb-40 border-bottom pb-3">
                        <SmoothScrollLink href="#acasa" onClick={() => setMobileOpen(false)}>
                            <Image
                                width={180}
                                height={60}
                                src="/assets/img/logo/logo-black.png"
                                alt="Kraftinox"
                                style={{
                                    width: 'auto',
                                    height: '36px',
                                    minHeight: '36px',
                                    display: 'block'
                                }}
                            />
                        </SmoothScrollLink>

                        <button
                            aria-label={nav.aria.closeMenu}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                fontSize: '26px',
                                cursor: 'pointer',
                                padding: '5px',
                                color: '#000',
                                lineHeight: 1
                            }}
                        >
                            ✕
                        </button>
                    </div>
                    <nav aria-label={nav.aria.primaryNav} style={{ flexGrow: 1 }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {navItems.map((item) => (
                                <li
                                    key={item.href}
                                    className="kf-mobile-nav-item"
                                    style={{ margin: '0 0 0px 0' }}
                                >
                                    <SmoothScrollLink
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <span style={{
                                            fontSize: '18px',
                                            fontWeight: '500',
                                            color: '#000',
                                            textDecoration: 'none',
                                            display: 'block',
                                            padding: '8px 0'
                                        }}>
                                            {item.label}
                                        </span>
                                    </SmoothScrollLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="kf-mobile-nav-item mt-auto pt-4">
                        <SmoothScrollLink
                            href="#contact"
                            className="tp-btn-green tp-btn-anim w-100 text-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            <div className="tp-btn-text">{nav.cta}</div>
                        </SmoothScrollLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KraftinoxHeader;