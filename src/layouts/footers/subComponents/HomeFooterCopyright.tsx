'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const HomeFooterCopyright = () => {
    const params = useParams<{ locale: string }>();
    const locale = params?.locale ?? 'ro';
    return (
        <div className="container container-1510">
            <div className="tp-copyright-wrap">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="tp-copyright-text kf-copyright-mobile-center">
                            <p>Copyright © {new Date().getFullYear()} Kraftinox SRL</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <div className="kf-copyright-mobile-center" style={{ paddingTop: '6px', paddingBottom: '6px' }}>
                            <Link
                                href={`/${locale}/termeni-si-conditii`}
                                style={{ color: 'rgba(245,247,245,0.5)', fontSize: '13px' }}
                                className="tp-hover-line-white"
                            >
                                {locale === 'en' ? 'Terms & Conditions' : 'Termeni și Condiții'}
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-copyright-menu text-lg-end kf-copyright-mobile-center">
                            <span style={{ color: 'rgba(245,247,245,0.5)', fontSize: '13px' }}>
                                Designed &amp; Developed |{' '}
                                <Link
                                    className="tp-hover-line-white"
                                    href="https://prismasolutions.ro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Prisma Solutions
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFooterCopyright;
