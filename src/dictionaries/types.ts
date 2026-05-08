export interface ServiceDictItem {
    icon: string;
    title: string;
    description: string;
}

export interface ProjectDictItem {
    image: string;
    title: string;
    location: string;
    year: string;
}

export interface AboutDictItem {
    image: string;
    title: string;
    description: string;
}

export interface AwardDictItem {
    image: string;
    label: string;
    title: string;
    description: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface Dictionary {
    nav: {
        home: string;
        services: string;
        projects: string;
        about: string;
        certifications: string;
        contact: string;
        cta: string;
        aria: {
            primaryNav: string;
            openMenu: string;
            closeMenu: string;
        };
    };
    hero: {
        titleMain: string;
        titleItalic: string;
        description: string;
        cta: string;
        imageAlt: string;
    };
    funfact: {
        items: Array<{ label: string }>;
    };
    services: {
        tagline: string;
        description: string;
        cta: string;
        items: ServiceDictItem[];
    };
    portfolio: {
        subtitle: string;
        title: string;
        items: ProjectDictItem[];
    };
    about: {
        subtitle: string;
        title: string;
        body1: string;
        body2: string;
        cta1: string;
        cta2: string;
        items: AboutDictItem[];
    };
    award: {
        title: string;
        body: string;
        since: string;
        items: AwardDictItem[];
    };
    certifications: {
        subtitle: string;
        title: string;
        body: string;
    };
    partners: {
        subtitle: string;
        title: string;
        body: string;
    };
    contact: {
        subtitle: string;
        title: string;
        phone: string;
        hours: string;
        mapTitle: string;
    };
    form: {
        title: string;
        name: { label: string; placeholder: string; error: string };
        email: { label: string; placeholder: string; errorRequired: string; errorInvalid: string };
        phone: { label: string; placeholder: string; errorRequired: string; errorShort: string };
        company: { label: string; placeholder: string };
        installationType: { label: string; placeholder: string };
        message: { label: string; placeholder: string; errorRequired: string; errorShort: string };
        submit: string;
        success: string;
        types: string[];
        gdpr: {
            text: string;
            linkText: string;
            error: string;
        };
    };
    thankYou: {
        title: string;
        subtitle: string;
        body: string;
        cta: string;
    };
    footer: {
        tagline: string;
        ctaHeadingBefore: string;
        ctaHeadingAccent: string;
        ctaDescription: string;
        ctaBtn: string;
        addressDescription: string;
        navTitle: string;
        servicesTitle: string;
        contactTitle: string;
        hours: string;
        quickLinks: NavLink[];
        serviceItems: NavLink[];
        description: string;
    };
}
