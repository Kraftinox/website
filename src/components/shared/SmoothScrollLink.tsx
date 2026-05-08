"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const SmoothScrollLink = ({ href, children, className, onClick }: Props) => {
    const pathname = usePathname();
    const isHomePage = /^\/(ro|en)?\/?$/.test(pathname ?? '');
    const locale = pathname?.match(/^\/(ro|en)/)?.[1] ?? 'ro';

    const isHash = href.startsWith('#');
    const targetHref = isHash
        ? (isHomePage ? href : `/${locale}${href}`)
        : href;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHash && isHomePage) {
            e.preventDefault();
            const target = document.getElementById(href.slice(1));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        onClick?.();
    };

    return (
        <Link href={targetHref} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default SmoothScrollLink;