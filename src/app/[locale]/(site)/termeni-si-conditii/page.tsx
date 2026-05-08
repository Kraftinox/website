import { locales, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isRo = locale === 'ro';
    return {
        title: isRo
            ? 'Termeni și Condiții | Kraftinox'
            : 'Terms and Conditions | Kraftinox',
        robots: { index: false },
    };
}

const content = {
    ro: {
        title: 'Termeni și Condiții',
        updated: 'Ultima actualizare: mai 2025',
        company: 'KRAFTINOX SRL (CUI: RO 48151776, J26/759/2023)',
        address: 'Str. Budiului nr. 68, Târgu Mureș, România',
        sections: [
            {
                heading: '1. Operatorul de date cu caracter personal',
                body: 'KRAFTINOX SRL este operatorul datelor cu caracter personal colectate prin intermediul formularului de contact de pe site-ul kraftinox.ro. Puteți lua legătura cu noi la adresa de email office@kraftszer.ro sau la sediul social indicat mai sus.',
            },
            {
                heading: '2. Date colectate și scopul prelucrării',
                body: 'Colectăm următoarele date prin formularul de contact: nume și prenume, adresă de email, număr de telefon, denumire companie, tipul instalației solicitate și detalii despre proiect. Aceste date sunt prelucrate exclusiv în scopul evaluării cererii dumneavoastră tehnice și contactării ulterioare pentru ofertare, în baza consimțământului exprimat la trimiterea formularului (Art. 6 alin. 1 lit. a RGPD).',
            },
            {
                heading: '3. Durata stocării',
                body: 'Datele transmise prin formularul de contact sunt stocate pentru maximum 24 de luni de la data transmiterii, după care sunt șterse în mod securizat, cu excepția cazurilor în care legislația în vigoare impune o perioadă mai îndelungată sau în care există un raport contractual activ.',
            },
            {
                heading: '4. Transmiterea datelor către terți',
                body: 'Nu transferăm datele dumneavoastră cu caracter personal către terțe părți fără consimțământul prealabil, cu excepția cazurilor prevăzute de lege (de exemplu, autorități publice în baza unor obligații legale). Putem utiliza servicii de hosting și email business (ex. Google Workspace) care acționează în calitate de împuterniciți și sunt supuse acelorași obligații RGPD.',
            },
            {
                heading: '5. Drepturile dumneavoastră',
                body: 'Conform Regulamentului (UE) 2016/679 (RGPD), aveți dreptul la: acces la datele personale, rectificarea datelor incorecte, ștergerea datelor ("dreptul de a fi uitat"), restricționarea prelucrării, portabilitatea datelor, retragerea consimțământului în orice moment. Pentru exercitarea acestor drepturi, contactați-ne la office@kraftszer.ro. Aveți de asemenea dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) — www.dataprotection.ro.',
            },
            {
                heading: '6. Utilizarea site-ului',
                body: 'Conținutul acestui site (texte, imagini, grafice, logo-uri) este proprietatea KRAFTINOX SRL și este protejat de dreptul de autor. Reproducerea sau utilizarea fără acordul scris al KRAFTINOX SRL este interzisă. Informațiile de pe site au caracter informativ și nu constituie o ofertă contractuală.',
            },
            {
                heading: '7. Cookie-uri',
                body: 'Site-ul poate utiliza cookie-uri tehnice strict necesare pentru funcționare. Nu utilizăm cookie-uri de urmărire sau publicitare fără consimțământul dumneavoastră explicit.',
            },
            {
                heading: '8. Modificări ale prezentelor termeni',
                body: 'KRAFTINOX SRL își rezervă dreptul de a actualiza acești termeni în orice moment. Versiunea actualizată va fi disponibilă pe această pagină cu data revizuirii. Continuarea utilizării site-ului după publicarea modificărilor constituie acceptul acestora.',
            },
            {
                heading: '9. Contact',
                body: 'Pentru orice întrebare legată de prelucrarea datelor sau de acești termeni: office@kraftszer.ro | +40 730 612 266 | Str. Budiului nr. 68, Târgu Mureș.',
            },
        ],
        backLabel: '← Înapoi la site',
    },
    en: {
        title: 'Terms and Conditions',
        updated: 'Last updated: May 2025',
        company: 'KRAFTINOX SRL (VAT: RO 48151776, Reg: J26/759/2023)',
        address: 'Str. Budiului no. 68, Târgu Mureș, Romania',
        sections: [
            {
                heading: '1. Data Controller',
                body: 'KRAFTINOX SRL is the controller of personal data collected through the contact form on kraftinox.ro. You may contact us at office@kraftszer.ro or at the registered address above.',
            },
            {
                heading: '2. Data Collected and Purpose',
                body: 'We collect the following data via the contact form: full name, email address, phone number, company name, type of installation requested, and project details. This data is processed solely for the purpose of evaluating your technical enquiry and subsequent contact for quotation, on the basis of consent given when submitting the form (Art. 6(1)(a) GDPR).',
            },
            {
                heading: '3. Retention Period',
                body: 'Data submitted through the contact form is retained for a maximum of 24 months from the date of submission, after which it is securely deleted, unless applicable law requires a longer period or an active contractual relationship exists.',
            },
            {
                heading: '4. Data Sharing with Third Parties',
                body: "We do not transfer your personal data to third parties without prior consent, except as required by law (e.g. public authorities under legal obligations). We may use hosting and business email services (e.g. Google Workspace) acting as processors and subject to the same GDPR obligations.",
            },
            {
                heading: '5. Your Rights',
                body: 'Under Regulation (EU) 2016/679 (GDPR), you have the right to: access your personal data, rectify inaccurate data, erasure ("right to be forgotten"), restriction of processing, data portability, withdraw consent at any time. To exercise these rights, contact us at office@kraftszer.ro. You also have the right to lodge a complaint with the Romanian National Supervisory Authority (ANSPDCP) — www.dataprotection.ro.',
            },
            {
                heading: '6. Use of the Website',
                body: 'The content of this website (texts, images, graphics, logos) is the property of KRAFTINOX SRL and is protected by copyright. Reproduction or use without the written consent of KRAFTINOX SRL is prohibited. Information on the site is for informational purposes only and does not constitute a contractual offer.',
            },
            {
                heading: '7. Cookies',
                body: 'The site may use strictly necessary technical cookies for operation. We do not use tracking or advertising cookies without your explicit consent.',
            },
            {
                heading: '8. Changes to These Terms',
                body: 'KRAFTINOX SRL reserves the right to update these terms at any time. The updated version will be available on this page with the revision date. Continued use of the site after changes are published constitutes acceptance of those changes.',
            },
            {
                heading: '9. Contact',
                body: 'For any questions regarding data processing or these terms: office@kraftszer.ro | +40 730 612 266 | Str. Budiului no. 68, Târgu Mureș, Romania.',
            },
        ],
        backLabel: '← Back to site',
    },
};

export default async function TermsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!locales.includes(locale as Locale)) notFound();

    const c = locale === 'en' ? content.en : content.ro;

    return (
        <main style={{ backgroundColor: '#fafafa', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container" style={{ maxWidth: '760px' }}>
                <Link
                    href={`/${locale}`}
                    style={{
                        display: 'inline-block',
                        marginBottom: '32px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#00A86D',
                        textDecoration: 'none',
                        fontFamily: 'var(--tp-ff-unbounded)',
                    }}
                >
                    {c.backLabel}
                </Link>

                <h1 style={{
                    fontFamily: 'var(--tp-ff-unbounded)',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 5vw, 42px)',
                    letterSpacing: '-0.03em',
                    color: '#010103',
                    marginBottom: '8px',
                }}>
                    {c.title}
                </h1>
                <p style={{ color: '#717171', fontSize: '14px', marginBottom: '12px' }}>{c.updated}</p>
                <p style={{ color: '#010103', fontSize: '14px', marginBottom: '4px' }}><strong>{c.company}</strong></p>
                <p style={{ color: '#717171', fontSize: '14px', marginBottom: '48px' }}>{c.address}</p>

                <hr style={{ borderColor: 'rgba(1,1,3,0.1)', marginBottom: '40px' }} />

                {c.sections.map((section, i) => (
                    <section key={i} style={{ marginBottom: '36px' }}>
                        <h2 style={{
                            fontFamily: 'var(--tp-ff-unbounded)',
                            fontWeight: 600,
                            fontSize: '16px',
                            color: '#010103',
                            marginBottom: '12px',
                            letterSpacing: '-0.02em',
                        }}>
                            {section.heading}
                        </h2>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.75',
                            color: '#444',
                        }}>
                            {section.body}
                        </p>
                    </section>
                ))}

                <hr style={{ borderColor: 'rgba(1,1,3,0.1)', marginTop: '40px', marginBottom: '32px' }} />
                <p style={{ fontSize: '13px', color: '#999', textAlign: 'center' }}>
                    © {new Date().getFullYear()} KRAFTINOX SRL · kraftinox.ro
                </p>
            </div>
        </main>
    );
}
