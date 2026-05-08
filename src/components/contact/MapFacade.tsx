"use client";
import { useState } from 'react';

interface MapFacadeProps {
    title: string;
}

const MAP_SRC = "https://maps.google.com/maps?q=Str.+Budiului+Nr.68+Targu+Mures+Romania&output=embed";

export default function MapFacade({ title }: MapFacadeProps) {
    const [loaded, setLoaded] = useState(false);

    if (loaded) {
        return (
            <iframe
                src={MAP_SRC}
                width="600"
                height="450"
                style={{ border: 0, width: '100%', height: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
            />
        );
    }

    return (
        <button
            type="button"
            className="kf-map-facade"
            onClick={() => setLoaded(true)}
            aria-label="Încarcă harta Google Maps"
        >
            <svg className="kf-map-facade-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="kf-map-facade-address">Str. Budiului 68, Târgu Mureș</span>
            <span className="kf-map-facade-cta">Kattints a térkép betöltéséhez</span>
        </button>
    );
}
