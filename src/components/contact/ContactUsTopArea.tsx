"use client";
import { Fragment } from 'react';
import { useDictionary } from '@/provider/DictionaryProvider';
import Link from 'next/link';
import { PhoneIconFive } from '@/svg/PhoneIcons';
import {
    ChatIcon,
    EmailIconTwo,
    FacebookIconThree,
    InstragramIconThree,
    LinkdinIcon,
    TwitorIconThree,
} from '@/svg/SocialIcons';
import MapFacade from './MapFacade';

const SOCIAL = [
    { id: 1, icon: <FacebookIconThree />,                   href: 'https://www.facebook.com/kraftinox',                   label: 'Facebook' },
    { id: 2, icon: <TwitorIconThree width="12" height="11"/>, href: 'https://x.com/kraftinox',                             label: 'X (Twitter)' },
    { id: 3, icon: <InstragramIconThree width="12" height="11"/>, href: 'https://www.instagram.com/kraftinox',             label: 'Instagram' },
    { id: 4, icon: <LinkdinIcon />,                          href: 'https://www.linkedin.com/company/kraftinox',           label: 'LinkedIn' },
];

const ContactUsTopArea = () => {
    const { contact } = useDictionary();

    const contactItems = [
        { id: 1, icon: <PhoneIconFive />, label: contact.phone, value: '+40 0730 612 266', href: 'tel:+40730612266', obf: null },
        { id: 2, icon: <EmailIconTwo />,  label: 'Email',       value: null, href: 'mailto:office@kraftszer.ro',  obf: { u: 'office',  d: 'kraftszer.ro' } },
        { id: 3, icon: <ChatIcon />,      label: '',            value: null, href: 'mailto:technic@kraftszer.ro', obf: { u: 'technic', d: 'kraftszer.ro' } },
    ];

    return (
        <section className="tp-contact-us-top-ptb pt-120 pb-120" style={{ overflow: 'visible' }}>
            <div className="container container-1480">

                {/* Title row */}
                <div className="row mb-60">
                    <div className="col-lg-6">
                        <p className="tp-contact-us-subtitle tp_fade_anim" data-delay=".2">
                            {contact.subtitle}
                        </p>
                    </div>
                    <div className="col-lg-6 d-flex align-items-end justify-content-lg-end">
                        <h3 className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel">
                            {contact.title.split('\n').map((line, i, arr) => (
                                <Fragment key={i}>{line}{i < arr.length - 1 && <br />}</Fragment>
                            ))}
                        </h3>
                    </div>
                </div>

                {/* Map + info card */}
                <div className="tp-contact-us-top-wrapper p-relative">
                    <div className="tp-contact-us-map">
                        <MapFacade title={contact.mapTitle} />
                    </div>

                    <div className="tp-contact-us-info">
                        <div
                            className="ar-about-funfact-wrap z-index-1 p-relative tp_fade_anim"
                            data-delay=".5"
                            style={{ backgroundColor: '#00A86D', position: 'relative' }}
                        >
                            <div className="ar-about-funfact-content">
                                <h4 style={{ fontFamily: 'var(--tp-ff-unbounded)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                                    Str. Budiului 68<br />Târgu Mureș
                                </h4>
                            </div>

                            <div className="ar-about-funfact-item-box mb-35">
                                {contactItems.map((item) => (
                                    <div key={item.id} className="ar-about-funfact-item d-flex align-items-center">
                                        <div className="ar-about-funfact-item-icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <div className="ar-about-funfact-item-content">
                                            {item.label && <p>{item.label}</p>}
                                            <Link className="tp-line-white" href={item.href} aria-label={item.obf ? `${item.obf.u}@${item.obf.d}` : undefined}>
                                                {item.obf
                                                    ? <span className="kf-obf-email" data-u={item.obf.u} data-d={item.obf.d} aria-hidden="true" />
                                                    : item.value}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="ar-about-funfact-item-bottom">
                                <p>{contact.hours}</p>
                            </div>

                            <div className="ar-about-funfact-item-social">
                                {SOCIAL.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        aria-label={item.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span aria-hidden="true">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactUsTopArea;
