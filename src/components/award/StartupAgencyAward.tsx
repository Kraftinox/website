"use client";
import { useDictionary } from '@/provider/DictionaryProvider';
import SetupAgencyAwardItem from './subComponents/SetupAgencyAwardItem';
import Image from 'next/image';

const StartupAgencyAward = () => {
    const { award } = useDictionary();

    return (
        <div className="sa-award-ptb pt-120 pb-120">
            <div className="container container-1510">
                {/* Title */}
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="sa-award-title-box mb-60">
                            <h3
                                className="tp-section-title fs-52 tl-unbounded fw-500 tp-text-revel tp_fade_anim"
                                data-delay=".3"
                            >
                                {award.title}
                            </h3>
                            <p className="tp-text-perspective">{award.body}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sa-award-right-text text-lg-end mb-65 tp_fade_anim" data-delay=".4">
                            <p>{award.since}</p>
                        </div>
                    </div>
                </div>

                {/* Award items */}
                <div className="row align-items-stretch">
                    <div className="col-lg-4">
                        <div className="sa-award-thumb tp_fade_anim" data-delay=".4">
                            <Image
                                fill
                                src="/assets/img/value2.png"
                                alt="Kraftinox atelier"
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="sa-award-item-wrapper tp_fade_anim" data-delay=".5">
                            {award.items.map((item, index) => (
                                <SetupAgencyAwardItem
                                    key={index}
                                    id={index + 1}
                                    image={item.image}
                                    label={item.label}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupAgencyAward;
