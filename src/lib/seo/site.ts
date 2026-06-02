import type { SupportedLanguage } from '$lib/typescript/pref/language';

export const siteUrl = 'https://toonvb.com';
export const siteName = 'Toonvb.com';
export const defaultOgImage = `${siteUrl}/mainBanner.jpg`;

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export type SeoData = {
	title: string;
	description: string;
	path: string;
	lang?: SupportedLanguage;
	type?: 'website' | 'article' | 'profile';
	image?: string;
	robots?: string;
	jsonLd?: JsonLd;
};

export function canonicalUrl(path: string) {
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	return `${siteUrl}${cleanPath}`;
}

export function localizedPath(path: string, lang: SupportedLanguage) {
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	const parts = cleanPath.split('/').filter(Boolean);

	if (parts[0] === 'en-gb' || parts[0] === 'nl-nl') {
		parts[0] = lang;
		return `/${parts.join('/')}`;
	}

	return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}

export function languageName(lang: SupportedLanguage) {
	return lang === 'nl-nl' ? 'nl_NL' : 'en_GB';
}

export function personSchema(sameAs: string[] = []) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Toon van Berkel',
		url: siteUrl,
		jobTitle: 'Creative Media Software Developer',
		description:
			'Toon van Berkel is a creative software developer focused on SvelteKit, web development, front-end design, creative coding, automation and practical digital tools.',
		sameAs
	};
}

export function websiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: siteName,
		url: siteUrl,
		author: {
			'@type': 'Person',
			name: 'Toon van Berkel',
			url: siteUrl
		},
		inLanguage: ['en-GB', 'nl-NL']
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: canonicalUrl(item.path)
		}))
	};
}
