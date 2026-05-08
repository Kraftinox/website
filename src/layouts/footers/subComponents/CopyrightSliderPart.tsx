"use client"
import { text_swiper_params } from '@/constants/swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StarIconFour } from '@/svg';

const slides = [
    "KRAFTINOX",
    "SUDURĂ ORBITALĂ",
    "SISTEME SUB PRESIUNE",
    "INOX FOOD & PHARMA",
    "TERMOIZOLAȚII",
    "INSTALAȚII INDUSTRIALE",
];

const CopyrightSliderPart = () => {
    return (
        <div className="tp-copyright-slider-wrap">
            <Swiper
                className='tp-text-slider-active slide-transtion'
                {...text_swiper_params}
            >
                {slides.map((text, i) => (
                    <SwiperSlide key={i}>
                        <div className="tp-copyright-slider-item d-flex align-items-center">
                            <p>{text}</p>
                            <span><StarIconFour /></span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CopyrightSliderPart;
