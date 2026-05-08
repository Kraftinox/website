"use client";
import { useRef, useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import type { Locale } from '@/i18n/config';

// ── Flag SVGs ─────────────────────────────────────────────────────────────────

const RoFlag = () => (
    <svg width="22" height="15" viewBox="0 0 33 22" fill="none" aria-hidden="true">
        <rect width="11" height="22" fill="#002B7F" />
        <rect x="11" width="11" height="22" fill="#FCD116" />
        <rect x="22" width="11" height="22" fill="#CE1126" />
    </svg>
);

const EnFlag = () => (
    <svg width="22" height="15" viewBox="0 0 60 40" fill="none" aria-hidden="true">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0L60 40M60 0L0 40" stroke="white" strokeWidth="9" />
        <path d="M30 0V40M0 20H60" stroke="white" strokeWidth="15" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="6" />
        <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="9" />
    </svg>
);

const flagMap: Record<Locale, React.ReactNode> = { ro: <RoFlag />, en: <EnFlag /> };
const codeMap: Record<Locale, string> = { ro: 'RO', en: 'EN' };

function getCurrentLocale(pathname: string): Locale {
    if (pathname.startsWith('/en')) return 'en';
    return 'ro';
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const chevronRef = useRef<SVGSVGElement>(null);

    const currentLocale = getCurrentLocale(pathname);
    const otherLocale: Locale = currentLocale === 'ro' ? 'en' : 'ro';

    const closeDropdown = useCallback((then?: () => void) => {
        gsap.to(chevronRef.current, { rotation: 0, duration: 0.18, ease: 'power2.inOut' });
        if (dropdownRef.current) {
            gsap.to(dropdownRef.current, {
                opacity: 0,
                y: -6,
                scaleY: 0.9,
                duration: 0.15,
                ease: 'power2.in',
                onComplete: () => {
                    setOpen(false);
                    then?.();
                },
            });
        } else {
            setOpen(false);
            then?.();
        }
    }, []);

    const openDropdown = useCallback(() => {
        setOpen(true);
        gsap.to(chevronRef.current, { rotation: 180, duration: 0.22, ease: 'power2.inOut' });
    }, []);

    // Animate in when dropdown mounts
    useEffect(() => {
        if (open && dropdownRef.current) {
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, y: -8, scaleY: 0.88, transformOrigin: 'top center' },
                { opacity: 1, y: 0, scaleY: 1, duration: 0.22, ease: 'power2.out' }
            );
        }
    }, [open]);

    const toggle = () => (open ? closeDropdown() : openDropdown());

    const switchLocale = (target: Locale) => {
        closeDropdown(() => {
            const segments = pathname.split('/');
            segments[1] = target;
            router.push(segments.join('/') || `/${target}`);
        });
    };

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (
                triggerRef.current?.contains(e.target as Node) ||
                dropdownRef.current?.contains(e.target as Node)
            )
                return;
            closeDropdown();
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open, closeDropdown]);

    return (
        <div className="kf-ls">
            <button
                ref={triggerRef}
                onClick={toggle}
                className="kf-ls__btn"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Switch language"
            >
                <span className="kf-ls__flag">{flagMap[currentLocale]}</span>
                <span className="kf-ls__code">{codeMap[currentLocale]}</span>
                <svg
                    ref={chevronRef}
                    className="kf-ls__chevron"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                >
                    <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {open && (
                <div ref={dropdownRef} className="kf-ls__dropdown" role="listbox">
                    <button
                        className="kf-ls__option"
                        onClick={() => switchLocale(otherLocale)}
                        role="option"
                    >
                        <span className="kf-ls__flag">{flagMap[otherLocale]}</span>
                        <span className="kf-ls__option-code">{codeMap[otherLocale]}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
