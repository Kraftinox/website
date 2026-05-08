import type { Dictionary } from './types';

const en: Dictionary = {
    nav: {
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        about: 'About us',
        certifications: 'Certifications',
        contact: 'Contact',
        cta: 'Contact us',
        aria: {
            primaryNav: 'Primary navigation',
            openMenu: 'Open menu',
            closeMenu: 'Close menu',
        },
    },
    hero: {
        titleMain: 'Precision in every weld. Pressure in every',
        titleItalic: 'pipe.',
        description:
            'Orbital welding, metal structures and complete piping solutions — from food and pharmaceutical lines to technical gas stations.',
        cta: 'Request a quote',
        imageAlt: 'Kraftinox workshop – stainless steel installations and orbital welding',
    },
    funfact: {
        items: [
            { label: 'years installed' },
            { label: 'workshop' },
            { label: 'specialists' },
            { label: 'max tested' },
        ],
    },
    services: {
        tagline: 'Four disciplines.\nOne standard.',
        description:
            'We provide complete industrial installation services, adhering to the highest standards of quality, safety, and precision. Our team specialises in complex system execution for food, pharmaceutical, and industrial production industries.',
        cta: 'Request a quote',
        items: [
            {
                icon: '/assets/img/icons/1.png',
                title: 'Thermomechanical installations',
                description: 'Design and installation of heating, cooling, and steam systems for industrial applications.',
            },
            {
                icon: '/assets/img/icons/2.png',
                title: 'Technological installations',
                description: 'Process system assembly for food, pharmaceutical, and industrial sectors.',
            },
            {
                icon: '/assets/img/icons/3.png',
                title: 'Pressure systems',
                description: 'Steam, compressed air, gas, and high-pressure water systems.',
            },
            {
                icon: '/assets/img/icons/4.png',
                title: 'Industrial welding',
                description: 'TIG and orbital welding for stainless steel pipes to the highest quality standards.',
            },
            {
                icon: '/assets/img/icons/5.png',
                title: 'Fire protection systems',
                description: 'Hydrant and sprinkler installation in compliance with safety regulations.',
            },
            {
                icon: '/assets/img/icons/6.png',
                title: 'Thermal insulation & cladding',
                description: 'Professional solutions for energy efficiency and installation protection.',
            },
            {
                icon: '/assets/img/icons/7.png',
                title: 'Technical gas installations',
                description: 'Systems for oxygen, hydrogen, argon, CO2, and other industrial gases.',
            },
            {
                icon: '/assets/img/icons/8.png',
                title: 'CIP systems',
                description: 'Industrial cleaning systems for hygienic applications.',
            },
        ],
    },
    portfolio: {
        subtitle: 'Completed works',
        title: 'Industrial projects.\n Verified execution.',
        items: [
            { image: '/assets/img/projects/55.png', title: 'Thermomechanical installations – cold storage station', location: 'Târgu Mureș', year: '2023' },
            { image: '/assets/img/projects/66.png', title: 'Hydrant and sprinkler systems', location: 'Hilton Târgu Mureș', year: '2023' },
            { image: '/assets/img/projects/11.png', title: 'CIP station – food processing', location: 'Bucharest', year: '2024' },
            { image: '/assets/img/projects/44.png', title: 'Industrial water installation', location: 'Târnăveni', year: '2024' },
            { image: '/assets/img/projects/22.png', title: 'High-pressure technical gas installations', location: 'Brașov', year: '2024' },
            { image: '/assets/img/projects/33.png', title: 'CO2 and product water process installations', location: 'Ploiești', year: '2024–2025' },
        ],
    },
    about: {
        subtitle: 'About us',
        title: 'High standards.\n Verified execution.',
        body1: 'We develop and implement industrial installations to the highest quality standards, with a focus on safety, durability, and precise execution. Our experience spans food, pharmaceutical, and industrial production projects.',
        body2: 'Through our specialised team and own infrastructure, we deliver complete solutions for stainless steel systems, process installations, and pressure applications, tailored to every project\'s requirements.',
        cta1: 'Contact us',
        cta2: 'Services',
        items: [
            {
                image: '/assets/img/icons/22.png',
                title: 'Precision in industrial\nexecution',
                description: 'We build installations with strict tolerances, adhering to technical and safety standards.',
            },
            {
                image: '/assets/img/icons/33.png',
                title: 'Expertise in pressure\nsystems',
                description: 'We implement solutions for steam, gas, and high-pressure fluids.',
            },
            {
                image: '/assets/img/icons/44.png',
                title: 'Food & pharma\nindustry solutions',
                description: 'Stainless steel installations for environments where hygiene and quality are essential.',
            },
            {
                image: '/assets/img/icons/11.png',
                title: 'Modern technology\nand equipment',
                description: 'We use orbital welding and professional equipment for top-tier results.',
            },
        ],
    },
    award: {
        title: 'High standards. Verified execution.',
        body: 'We operate according to strict industrial standards, using modern equipment and controlled processes to ensure consistent quality in every project.',
        since: 'Experience built since 2011',
        items: [
            {
                image: '/assets/img/icons/welding.png',
                label: '01',
                title: 'Traceable welding',
                description:
                    'Every joint is numbered on the isometric map. Complete documentation — WPS, material specification, test report — handed over with the project.',
            },
            {
                image: '/assets/img/icons/pressure.png',
                label: '02',
                title: 'ISCIR & TÜV-Süd (PED)',
                description:
                    'We certify our company and personnel through the external TÜV-Süd authority for pressure installations. European PED standards are non-negotiable for us.',
            },
            {
                image: '/assets/img/icons/project.png',
                label: '03',
                title: '13+ years in the industry',
                description:
                    'Operating since 2011 in thermomechanical, technological, and pressure installations. A team of 20 specialists — IWT, certified welders, fitters, insulators — with company-sponsored continuous training.',
            },
            {
                image: '/assets/img/icons/workshop.png',
                label: '04',
                title: 'Own 250 m² workshop',
                description:
                    'Orbital welding system with accessories, Olympus Iplex videoscope, Kemppi Master TIG and Esab equipment. Controlled in-house prefabrication with no external dependency.',
            },
            {
                image: '/assets/img/icons/inox.png',
                label: '05',
                title: 'Clients who demand standards',
                description:
                    'Richter Gedeon, Sandoz, Linde Gas, Bergenbier, Stada, Knauf, Hochland — partners from the pharmaceutical, food, and energy sectors who accept no compromise.',
            },
        ],
    },
    certifications: {
        subtitle: 'Certifications & Authorisations',
        title: 'We work to standards.\nWe prove it with documents.',
        body: 'Every project is backed by complete documentation — from IWT welder qualifications to PED pressure certifications. Full transparency with clients at every handover.',
    },
    partners: {
        subtitle: 'Partners',
        title: 'They trusted us.',
        body: 'We collaborate with companies in the food, pharmaceutical, energy, and construction industries.',
    },
    contact: {
        subtitle:
            'We work with manufacturers and industrial integrators across Romania. Contact us for a free technical assessment.',
        title: "Let's get\nin touch!",
        phone: 'Phone',
        hours: 'Hours: Mon–Fri, 08:00–17:00',
        mapTitle: 'Kraftinox – Location Târgu Mureș',
    },
    form: {
        title: 'How can we help you?',
        name: { label: 'Full name *', placeholder: 'E.g. John Smith', error: 'Name is required' },
        email: {
            label: 'Email address *',
            placeholder: 'E.g. john@company.com',
            errorRequired: 'Email is required',
            errorInvalid: 'Invalid email',
        },
        phone: {
            label: 'Phone *',
            placeholder: 'E.g. +40 7xx xxx xxx',
            errorRequired: 'Phone is required',
            errorShort: 'Number too short',
        },
        company: { label: 'Company', placeholder: 'E.g. Richter Gedeon SRL' },
        installationType: { label: 'Type of installation requested', placeholder: '— Select type —' },
        message: {
            label: 'Project details *',
            placeholder:
                'Briefly describe: installation type, site location, estimated timeline, and any special requirements (pressure, regulations, food environment, etc.)',
            errorRequired: 'Project description is required',
            errorShort: 'Message too short',
        },
        submit: 'Send request',
        success: 'Thank you, {name}! We will contact you as soon as possible.',
        gdpr: {
            text: 'I have read and accept the',
            linkText: 'Terms and Conditions',
            error: 'You must accept the terms to submit the form.',
        },
        types: [
            'Thermomechanical installations (heating / cooling / steam)',
            'Pressure systems',
            'Orbital & TIG welding',
            'Food & pharma stainless steel installations',
            'Thermal insulation and jacketing',
            'Technological / process installations',
            'Other',
        ],
    },
    thankYou: {
        title: 'Thank you!',
        subtitle: 'Your request has been sent successfully.',
        body: 'Our team will contact you shortly to discuss your project details. Talk soon!',
        cta: 'Back to homepage',
    },
    footer: {
        tagline: 'High-precision industrial installations.\nOrbital welding, pressure systems,\nfood & pharma stainless — since 2011.',
        ctaHeadingBefore: "Let's build",
        ctaHeadingAccent: 'together.',
        ctaDescription: 'A well-executed project starts with a technical conversation. Contact us for a free, no-obligation assessment.',
        ctaBtn: 'Get in touch',
        description: 'A well-executed project starts with a technical conversation. Contact us for a free, no-obligation assessment.',
        addressDescription: 'We execute industrial installation projects with complete documentation and traceable execution, for manufacturers and integrators across Romania.',
        navTitle: 'Navigation',
        servicesTitle: 'Services',
        contactTitle: 'Contact',
        hours: 'Mon–Fri: 08:00–17:00',
        quickLinks: [
            { label: 'Home', href: '#acasa' },
            { label: 'Services', href: '#servicii' },
            { label: 'Projects', href: '#proiecte' },
            { label: 'About us', href: '#despre' },
            { label: 'Certifications', href: '#certificari' },
            { label: 'Contact', href: '#contact' },
        ],
        serviceItems: [
            { label: 'Thermomechanical installations', href: '#servicii' },
            { label: 'Pressure systems', href: '#servicii' },
            { label: 'Orbital & TIG welding', href: '#servicii' },
            { label: 'Food & pharma stainless steel', href: '#servicii' },
            { label: 'Thermal insulation & cladding', href: '#servicii' },
        ],
    },
};

export default en;
