import type { SupportedLanguage } from '$lib/typescript/pref/language';

type FooterLink = {
    label: string;
    href: string;
};

type FooterLinkGroup = {
    title: string;
    links: FooterLink[];
};

type FooterContent = {
    title: string;
    desc: string;
    copy: string;
    groups: FooterLinkGroup[];
};

export const content: Partial<Record<SupportedLanguage, FooterContent>> = {
    'en-gb': {
        title: 'Toon van Berkel',
        desc: 'Creative Software Developer focused on modern websites, interactive applications and digital experiences.',
        copy: 'All rights reserved',
        groups: [
            {
                title: 'Main',
                links: [
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/Aboutme' },
                    { label: 'Projects', href: '/Projects' },
                    { label: 'Contact', href: '/Contact' }
                ]
            },
            {
                title: 'Creative Work',
                links: [
                    { label: 'Photography', href: '/Photography' },
                    { label: 'Travel', href: '/Travel' },
                    { label: 'Music', href: '/Music' },
                    { label: 'Games', href: '/Games' }
                ]
            },
            {
                title: 'Extra Pages',
                links: [
                    { label: 'Anime', href: '/Anime' },
                    { label: 'News', href: '/News' }
                ]
            }
        ]
    },

    'nl-nl': {
        title: 'Toon van Berkel',
        desc: 'Creative Software Developer gericht op moderne websites, interactieve applicaties en digitale ervaringen.',
        copy: 'Alle rechten voorbehouden',
        groups: [
            {
                title: 'Hoofdmenu',
                links: [
                    { label: 'Home', href: '/' },
                    { label: 'Over mij', href: '/Aboutme' },
                    { label: 'Projecten', href: '/Projects' },
                    { label: 'Contact', href: '/Contact' }
                ]
            },
            {
                title: 'Creatief werk',
                links: [
                    { label: 'Fotografie', href: '/Photography' },
                    { label: 'Reizen', href: '/Travel' },
                    { label: 'Muziek', href: '/Music' },
                    { label: 'Games', href: '/Games' }
                ]
            },
            {
                title: 'Extra pagina’s',
                links: [
                    { label: 'Anime', href: '/Anime' },
                    { label: 'Nieuws', href: '/News' }
                ]
            }
        ]
    }
};