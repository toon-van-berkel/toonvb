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
	brandName: string;
	heading: string;
	desc: string;
	copy: string;
	groups: FooterLinkGroup[];
};

export const content: Partial<Record<SupportedLanguage, FooterContent>> = {
	'en-gb': {
		brandName: 'Toon van Berkel',
		heading: 'About this portfolio',
		desc: 'Creative Software Developer focused on modern websites, interactive applications and digital experiences.',
		copy: 'All rights reserved',
		groups: [
			{
				title: 'Portfolio sections',
				links: [
					{ label: 'Return to Toonvb.com homepage', href: '/' },
					{ label: 'Read more about Toon van Berkel', href: '/Aboutme' },
					{ label: "View Toon's web development projects", href: '/Projects' },
					{ label: 'Contact Toon van Berkel', href: '/Contact' }
				]
			},
			{
				title: 'Creative work',
				links: [
					{ label: "Explore Toon's photography notes", href: '/Photography' },
					{ label: "View Toon's travel pages", href: '/Travel' },
					{ label: "Open Toon's music interests", href: '/Music' },
					{ label: "See Toon's game interests", href: '/Games' }
				]
			},
			{
				title: 'Extra pages',
				links: [
					{ label: "Browse Toon's anime watchlist", href: '/Anime' },
					{ label: 'Read updates from Toon', href: '/News' }
				]
			}
		]
	},

	'nl-nl': {
		brandName: 'Toon van Berkel',
		heading: 'Over dit portfolio',
		desc: 'Creative Software Developer gericht op moderne websites, interactieve applicaties en digitale ervaringen.',
		copy: 'Alle rechten voorbehouden',
		groups: [
			{
				title: 'Portfolio onderdelen',
				links: [
					{ label: 'Terug naar de Toonvb.com homepage', href: '/' },
					{ label: 'Lees meer over Toon van Berkel', href: '/Aboutme' },
					{ label: 'Bekijk Toons webdevelopment projecten', href: '/Projects' },
					{ label: 'Neem contact op met Toon van Berkel', href: '/Contact' }
				]
			},
			{
				title: 'Creatief werk',
				links: [
					{ label: 'Bekijk Toons fotografienotities', href: '/Photography' },
					{ label: 'Bekijk Toons reispagina’s', href: '/Travel' },
					{ label: 'Open Toons muziekin interesses', href: '/Music' },
					{ label: 'Bekijk Toons game-interesses', href: '/Games' }
				]
			},
			{
				title: 'Extra pagina’s',
				links: [
					{ label: 'Bekijk Toons anime kijklijst', href: '/Anime' },
					{ label: 'Lees updates van Toon', href: '/News' }
				]
			}
		]
	}
};
