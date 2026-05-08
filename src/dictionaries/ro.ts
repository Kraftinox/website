import type { Dictionary } from './types';

const ro: Dictionary = {
    nav: {
        home: 'Acasă',
        services: 'Servicii',
        projects: 'Proiecte',
        about: 'Despre noi',
        certifications: 'Certificări',
        contact: 'Contact',
        cta: 'Contactați-ne',
        aria: {
            primaryNav: 'Navigare principală',
            openMenu: 'Deschide meniu',
            closeMenu: 'Închide meniu',
        },
    },
    hero: {
        titleMain: 'Precizie în fiecare sudură. Presiune în fiecare',
        titleItalic: 'țeavă.',
        description:
            'Sudură orbitală, structuri metalice și soluții complete de tubulatură de la linii alimentare și farmaceutice până la stații de gaze tehnice.',
        cta: 'Cere o ofertă',
        imageAlt: 'Atelier Kraftinox – instalații inox și sudură orbitală, Târgu Mureș',
    },
    funfact: {
        items: [
            { label: 'ani experiență' },
            { label: 'atelier propriu' },
            { label: 'specialiști' },
            { label: 'maxim testat' },
        ],
    },
    services: {
        tagline: 'Patru discipline.\nUn singur standard.',
        description:
            'Oferim servicii complete în domeniul instalațiilor industriale, respectând cele mai înalte standarde de calitate, siguranță și precizie. Echipa noastră este specializată în execuția sistemelor complexe pentru industrii precum alimentară, farmaceutică și producție industrială.',
        cta: 'Cere o ofertă',
        items: [
            {
                icon: '/assets/img/icons/1.png',
                title: 'Instalații termomecanice',
                description: 'Execuția sistemelor de încălzire, răcire și abur pentru aplicații industriale.',
            },
            {
                icon: '/assets/img/icons/2.png',
                title: 'Instalații tehnologice',
                description:
                    'Montajul sistemelor de proces pentru industria alimentară, farmaceutică și industrială.',
            },
            {
                icon: '/assets/img/icons/3.png',
                title: 'Instalații sub presiune',
                description: 'Sisteme de abur, aer comprimat, gaze și apă la presiuni ridicate.',
            },
            {
                icon: '/assets/img/icons/4.png',
                title: 'Sudură industrială',
                description: 'Sudură TIG și orbitală pentru țevi din inox, la standarde înalte de calitate.',
            },
            {
                icon: '/assets/img/icons/5.png',
                title: 'Sisteme de protecție la incendiu',
                description: 'Instalare hidranți și sprinklere conform normelor de siguranță.',
            },
            {
                icon: '/assets/img/icons/6.png',
                title: 'Termoizolații și înveliri',
                description: 'Soluții profesionale pentru eficiență energetică și protecția instalațiilor.',
            },
            {
                icon: '/assets/img/icons/7.png',
                title: 'Instalații gaze tehnice',
                description: 'Sisteme pentru oxigen, hidrogen, argon, CO2 și alte gaze industriale.',
            },
            {
                icon: '/assets/img/icons/8.png',
                title: 'Sisteme CIP',
                description: 'Sisteme de curățare industrială pentru aplicații igienice.',
            },
        ],
    },
    portfolio: {
        subtitle: 'Lucrări realizate',
        title: 'Proiecte industriale.\nExecuție verificată.',
        items: [
            { image: '/assets/img/projects/55.png', title: 'Instalații termomecanice – stație de frig', location: 'Târgu Mureș', year: '2023' },
            { image: '/assets/img/projects/66.png', title: 'Sisteme hidranți și sprinklere', location: 'Hilton Târgu Mureș', year: '2023' },
            { image: '/assets/img/projects/11.png', title: 'Stație CIP – procesare alimente', location: 'București', year: '2024' },
            { image: '/assets/img/projects/44.png', title: 'Instalație apă industrială', location: 'Târnăveni', year: '2024' },
            { image: '/assets/img/projects/22.png', title: 'Instalații gaze tehnice înaltă presiune', location: 'Brașov', year: '2024' },
            { image: '/assets/img/projects/33.png', title: 'Instalații proces CO2 și apă de produs', location: 'Ploiești', year: '2024–2025' },
        ],
    },
    about: {
        subtitle: 'Despre noi',
        title: 'Standarde înalte.\nExecuție verificată.',
        body1: 'Dezvoltăm și implementăm instalații industriale la standarde înalte de calitate, cu accent pe siguranță, durabilitate și execuție precisă. Experiența noastră acoperă proiecte din industria alimentară, farmaceutică și producție industrială.',
        body2: 'Prin echipa noastră specializată și infrastructura proprie, livrăm soluții complete pentru sisteme din inox, instalații de proces și aplicații sub presiune, adaptate cerințelor fiecărui proiect.',
        cta1: 'Contactați-ne',
        cta2: 'Servicii',
        items: [
            {
                image: '/assets/img/icons/22.png',
                title: 'Precizie în execuție\nindustrială',
                description: 'Realizăm instalații cu toleranțe stricte, respectând standardele tehnice și de siguranță.',
            },
            {
                image: '/assets/img/icons/33.png',
                title: 'Expertiză în sisteme\nsub presiune',
                description: 'Implementăm soluții pentru abur, gaze și fluide la presiuni ridicate.',
            },
            {
                image: '/assets/img/icons/44.png',
                title: 'Soluții pentru industrie\nalimentară & pharma',
                description: 'Instalații din inox pentru medii unde igiena și calitatea sunt esențiale.',
            },
            {
                image: '/assets/img/icons/11.png',
                title: 'Tehnologie modernă\nși echipamente',
                description: 'Utilizăm sudură orbitală și echipamente profesionale pentru rezultate de top.',
            },
        ],
    },
    award: {
        title: 'Standarde înalte. Execuție verificată.',
        body: 'Lucrăm conform standardelor industriale stricte, utilizând echipamente moderne și procese controlate pentru a asigura calitate constantă în fiecare proiect.',
        since: 'Experiență acumulată din 2011',
        items: [
            {
                image: '/assets/img/icons/welding.png',
                label: '01',
                title: 'Sudură trasabilă',
                description:
                    'Fiecare îmbinare este numerotată pe harta izometrică. Documentație completă — WPS, specificație de material, raport de testare — predată odată cu lucrarea.',
            },
            {
                image: '/assets/img/icons/pressure.png',
                label: '02',
                title: 'ISCIR & TÜV-Süd (PED)',
                description:
                    'Certificăm compania și angajații prin autoritate externă TÜV-Süd pentru instalații sub presiune. Standardele europene PED nu sunt opționale pentru noi.',
            },
            {
                image: '/assets/img/icons/project.png',
                label: '03',
                title: '13+ ani în industrie',
                description:
                    'Din 2011 în instalații termomecanice, tehnologice și sub presiune. Echipă de 20 de specialiști — IWT, sudori calificați, montatori, termoizolatori — cu formare continuă sponsorizată de companie.',
            },
            {
                image: '/assets/img/icons/workshop.png',
                label: '04',
                title: 'Atelier propriu 250 m²',
                description:
                    'Sistem de sudat orbital cu accesorii, videoscop Olympus Iplex, aparatură Kemppi Master TIG și Esab. Prefabricare controlată în atelier propriu, fără dependență externă.',
            },
            {
                image: '/assets/img/icons/inox.png',
                label: '05',
                title: 'Clienți care impun standarde',
                description:
                    'Richter Gedeon, Sandoz, Linde Gaz, Bergenbier, Stada, Knauf, Hochland — parteneri din industria farmaceutică, alimentară și energetică ce nu acceptă compromisuri.',
            },
        ],
    },
    certifications: {
        subtitle: 'Certificări & Autorizări',
        title: 'Lucrăm cu standarde.\nDovedim cu documente.',
        body: 'Fiecare proiect este susținut de documentație completă — de la calificările sudorilor IWT până la certificările de presiune PED. Transparență totală față de client, la fiecare predare.',
    },
    partners: {
        subtitle: 'Parteneri',
        title: 'Au avut încredere în noi.',
        body: 'Colaborăm cu companii din industria alimentară, farmaceutică, energetică și construcții.',
    },
    contact: {
        subtitle:
            'Lucrăm cu producători și integratori industriali din toată România. Contactați-ne pentru o evaluare tehnică fără costuri.',
        title: 'Să luăm\nlegătura!',
        phone: 'Telefon',
        hours: 'Program: Lun–Vin, 08:00–17:00',
        mapTitle: 'Kraftinox – Locație Târgu Mureș',
    },
    form: {
        title: 'Cum vă putem ajuta?',
        name: { label: 'Nume și prenume *', placeholder: 'Ex. Ion Popescu', error: 'Numele este obligatoriu' },
        email: {
            label: 'Adresă email *',
            placeholder: 'Ex. ion@companie.ro',
            errorRequired: 'Emailul este obligatoriu',
            errorInvalid: 'Email invalid',
        },
        phone: {
            label: 'Telefon *',
            placeholder: 'Ex. +40 7xx xxx xxx',
            errorRequired: 'Telefonul este obligatoriu',
            errorShort: 'Număr prea scurt',
        },
        company: { label: 'Companie / Firmă', placeholder: 'Ex. Richter Gedeon SRL' },
        installationType: { label: 'Tipul instalației solicitate', placeholder: '— Selectați tipul —' },
        message: {
            label: 'Detalii proiect *',
            placeholder:
                'Descrieți pe scurt: tipul instalației, locația șantierului, termenul estimat și orice cerință specială (presiune, normative, mediu alimentar etc.)',
            errorRequired: 'Descrierea proiectului este obligatorie',
            errorShort: 'Mesajul este prea scurt',
        },
        submit: 'Trimite cererea',
        success: 'Mulțumim, {name}! Vă vom contacta în cel mai scurt timp.',
        gdpr: {
            text: 'Am citit și accept',
            linkText: 'Termenii și Condițiile',
            error: 'Trebuie să accepți termenii pentru a trimite formularul.',
        },
        types: [
            'Instalații termomecanice (încălzire / răcire / abur)',
            'Instalații sub presiune',
            'Sudură orbitală & TIG',
            'Instalații inox food & pharma',
            'Termoizolații și jacketing',
            'Instalații tehnologice / procesare',
            'Altele',
        ],
    },
    faq: {
        subtitle: 'Întrebări frecvente',
        title: 'Răspunsuri clare.\nFără ambiguitate.',
        items: [
            {
                question: 'Ce servicii de instalații industriale oferă Kraftinox?',
                answer: 'Kraftinox execută 8 categorii de instalații industriale: termomecanice (încălzire, răcire, abur), tehnologice (sisteme de proces food & pharma), sub presiune (abur, gaze, aer comprimat până la 4350 psi), sudură orbitală și TIG, sisteme de protecție la incendiu (hidranți, sprinklere), termoizolații și jacketing, instalații gaze tehnice (oxigen, hidrogen, argon, CO2) și sisteme CIP pentru igienizare industrială.',
            },
            {
                question: 'Este Kraftinox autorizat ISCIR și certificat TÜV-Süd (PED)?',
                answer: 'Da. Kraftinox SRL deține autorizații ISCIR și certificare TÜV-Süd conform Directivei Europene PED (Pressure Equipment Directive) pentru instalații sub presiune. Sudorii sunt calificați IWT, iar fiecare lucrare este documentată complet: WPS, specificație de materiale, harta izometrică și rapoarte de testare.',
            },
            {
                question: 'Kraftinox execută instalații inox pentru industria alimentară și farmaceutică?',
                answer: 'Da. Suntem specializați în instalații inox food grade și pharma grade: tubulatură sanitară de proces, stații CIP, sisteme de utilități și instalații de distribuție fluide în condiții igienice stricte. Printre clienții noștri: Richter Gedeon, Sandoz, Hochland, Bergenbier și Stada.',
            },
            {
                question: 'Unde activează Kraftinox? Executați proiecte în afara Târgu Mureșului?',
                answer: 'Kraftinox are sediul în Târgu Mureș (Str. Budiului 68, jud. Mureș), dar execută proiecte industriale la nivel național. Am finalizat lucrări în București, Brașov, Ploiești, Târnăveni și alte localități. Contactați-ne pentru o evaluare tehnică fără costuri.',
            },
            {
                question: 'Ce este sudura orbitală și când este necesară?',
                answer: 'Sudura orbitală este un proces automatizat de sudare TIG în condiții controlate, utilizat pentru îmbinarea țevilor din inox cu precizie maximă. Este necesară în aplicații unde standardele de igienă și calitate sunt stricte: linii alimentare, farmaceutice și stații de gaze tehnice de înaltă puritate. Kraftinox deține echipament orbital propriu (Kemppi Master TIG, Esab) și sudori calificați.',
            },
            {
                question: 'Ce documentație tehnică predă Kraftinox la finalizarea unui proiect?',
                answer: 'La predarea fiecărei lucrări furnizăm documentație completă: harta izometrică cu numerotarea îmbinărilor, WPS (Welding Procedure Specification), rapoarte de testare și inspecție vizuală, certificate de calitate ale materialelor și, acolo unde este aplicabil, documentele de conformitate PED emise de TÜV-Süd.',
            },
        ],
    },
    thankYou: {
        title: 'Mulțumim!',
        subtitle: 'Cererea dumneavoastră a fost trimisă cu succes.',
        body: 'Echipa noastră vă va contacta în cel mai scurt timp pentru a discuta detaliile proiectului. Ne vedem curând!',
        cta: 'Înapoi la pagina principală',
    },
    footer: {
        tagline: 'Instalații industriale de înaltă precizie.\nSudură orbitală, sisteme sub presiune,\ninox food & pharma — din 2011.',
        ctaHeadingBefore: 'Hai să construim',
        ctaHeadingAccent: 'împreună.',
        ctaDescription: 'Un proiect bine executat începe cu o discuție tehnică. Contactați-ne pentru o evaluare fără costuri și fără obligații.',
        ctaBtn: 'Ia legătura',
        description: 'Un proiect bine executat începe cu o discuție tehnică. Contactați-ne pentru o evaluare fără costuri și fără obligații.',
        addressDescription: 'Executăm proiecte de instalații industriale cu documentație completă și execuție trasabilă, pentru producători și integratori din toată România.',
        navTitle: 'Navigare',
        servicesTitle: 'Servicii',
        contactTitle: 'Contact',
        hours: 'Lun–Vin: 08:00–17:00',
        quickLinks: [
            { label: 'Acasă', href: '#acasa' },
            { label: 'Servicii', href: '#servicii' },
            { label: 'Proiecte', href: '#proiecte' },
            { label: 'Despre noi', href: '#despre' },
            { label: 'Certificări', href: '#certificari' },
            { label: 'Contact', href: '#contact' },
        ],
        serviceItems: [
            { label: 'Instalații termomecanice', href: '#servicii' },
            { label: 'Instalații sub presiune', href: '#servicii' },
            { label: 'Sudură orbitală & TIG', href: '#servicii' },
            { label: 'Inox food & pharma', href: '#servicii' },
            { label: 'Termoizolații & jacketing', href: '#servicii' },
        ],
    },
};

export default ro;
