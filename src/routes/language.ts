import { availableLanguages } from '$lib/data/availableLanguage';

type Language = 'en-gb' | 'nl-nl';

const validLanguages = availableLanguages.map((language) => language.short);

export function isValidLanguage(language: string | undefined) {
	return language ? validLanguages.includes(language) : false;
}

export function getFirstPathPart(pathname: string) {
	return pathname.split('/').filter(Boolean)[0];
}

export function languageHandler(): Language {
	const saved = localStorage.getItem('language');

	const browserLanguage = navigator.language.toLowerCase().startsWith('nl')
		? 'nl-nl'
		: 'en-gb';

	const language =
		saved === 'nl-nl' || saved === 'en-gb'
			? saved
			: browserLanguage;

	localStorage.setItem('language', language);
	document.documentElement.lang = language;
	document.documentElement.dataset.language = language;

	return language;
}