'use client';
import { useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { useDictionary } from '@/provider/DictionaryProvider';

export default function HomeFaq() {
    const { faq } = useDictionary();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const closingRef = useRef(false);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    };

    useEffect(() => {
        if (openIndex === null || closingRef.current) return;
        const el = answerRefs.current[openIndex];
        if (!el) return;
        gsap.set(el, { height: 'auto', overflow: 'hidden' });
        const h = el.offsetHeight;
        gsap.fromTo(el,
            { height: 0, opacity: 0 },
            { height: h, opacity: 1, duration: 0.44, ease: 'power3.out' }
        );
    }, [openIndex]);

    const toggle = useCallback((i: number) => {
        if (openIndex === i) {
            const el = answerRefs.current[i];
            if (!el) return;
            closingRef.current = true;
            gsap.to(el, {
                height: 0, opacity: 0, duration: 0.3, ease: 'power3.in',
                onComplete: () => { closingRef.current = false; setOpenIndex(null); },
            });
        } else if (openIndex !== null) {
            const prev = answerRefs.current[openIndex];
            if (!prev) { setOpenIndex(i); return; }
            closingRef.current = true;
            gsap.to(prev, {
                height: 0, opacity: 0, duration: 0.24, ease: 'power3.in',
                onComplete: () => { closingRef.current = false; setOpenIndex(i); },
            });
        } else {
            setOpenIndex(i);
        }
    }, [openIndex]);

    return (
        <section className="kf-faq-area">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container container-1510">
                <div className="row align-items-start">

                    {/* Bal oldal: cím */}
                    <div className="col-lg-4 mb-50">
                        <span className="tp-section-subtitle kf-faq-subtitle tp_fade_anim" data-delay=".2">
                            {faq.subtitle}
                        </span>
                        <h2 className="tp-section-title kf-faq-title tp-text-revel">
                            {faq.title.split('\n').map((line, i) => (
                                <span key={i}>{line}{i === 0 && <br />}</span>
                            ))}
                        </h2>
                    </div>

                    {/* Jobb oldal: accordion */}
                    <div className="col-lg-8">
                        <div className="kf-faq-list tp_fade_anim" data-delay=".3">
                            {faq.items.map((item, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div key={i} className={`kf-faq-item${isOpen ? ' kf-faq-item--open' : ''}`}>
                                        <button
                                            className="kf-faq-question"
                                            onClick={() => toggle(i)}
                                            aria-expanded={isOpen}
                                        >
                                            <span className="kf-faq-num">{String(i + 1).padStart(2, '0')}</span>
                                            <span className="kf-faq-q-text">{item.question}</span>
                                            <span className="kf-faq-icon" aria-hidden="true">
                                                <span className="kf-faq-icon-line kf-faq-icon-h" />
                                                <span className="kf-faq-icon-line kf-faq-icon-v" />
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div
                                                className="kf-faq-answer"
                                                ref={(el) => { answerRefs.current[i] = el; }}
                                            >
                                                <p>{item.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
