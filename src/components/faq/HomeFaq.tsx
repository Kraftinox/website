'use client';
import { useRef, useState, useCallback } from 'react';
import { useDictionary } from '@/provider/DictionaryProvider';

export default function HomeFaq() {
    const { faq } = useDictionary();
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    };

    const toggle = useCallback((i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    }, []);

    return (
        <section className="kf-faq-area">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container container-1510">
                <div className="row align-items-start">

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

                                        <div
                                            className="kf-faq-answer-wrap"
                                            ref={(el) => { wrapRefs.current[i] = el; }}
                                            aria-hidden={!isOpen}
                                        >
                                            <div className="kf-faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
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
