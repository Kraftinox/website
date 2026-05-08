"use client";
import AnimatedCounter from '../shared/Counter/AnimatedCounter';
import { useDictionary } from '@/provider/DictionaryProvider';

const funfactBase = [
    { id: 1, count: 15, suffix: '+' },
    { id: 2, count: 250, suffix: 'm²', delay: '.2' },
    { id: 3, count: 20, delay: '.4' },
    { id: 4, count: 4350, suffix: 'psi', delay: '.6' },
];

const ModernAgencyFunfact = () => {
    const { funfact } = useDictionary();

    return (
        <section className="ma-funfact-ptb pt-120 pb-120">
            <div className="container container-1510">
                <div className="row">
                    {funfactBase.map(({ id, count, suffix, delay }, i) => (
                        <div key={id} className="col-xl-3 col-md-6 col-6">
                            <div
                                className="ma-funfact-item d-flex align-items-start mb-30 tp_fade_anim"
                                data-delay={delay ?? '0'}
                            >
                                <span className="ma-funfact-subtitle">
                                    {String(id).padStart(2, '0')}
                                </span>
                                <div className="ma-funfact-content">
                                    <h4>
                                        <AnimatedCounter min={0} max={count} />
                                        {suffix}
                                    </h4>
                                    <p>{funfact.items[i]?.label ?? ''}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModernAgencyFunfact;
