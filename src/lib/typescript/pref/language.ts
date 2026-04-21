// export { isSupportedLanguage } from './snippets/language/isSupportedLanguage';

import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { base } from '$app/paths';
import { writable } from 'svelte/store';

export const supportedLanguages = ['en-gb', 'nl-nl'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = 'en-gb';

export const languageLabels: Record<SupportedLanguage, string> = {
	'en-gb': 	'English',
	'nl-nl': 	'Nederlands'
};

export const currentLanguage = writable<SupportedLanguage>(defaultLanguage);

let prefLanguage: SupportedLanguage = defaultLanguage;

export function isSupportedLanguage(lang: string | null | undefined): lang is SupportedLanguage {
	return !!lang && supportedLanguages.includes(lang as SupportedLanguage);
}

function getLanguageFromUrl(): SupportedLanguage | null {
	if (!browser) return null;

	const firstPathPart = window.location.pathname
		.replace(base, '')
		.split('/')
		.filter(Boolean)[0]
		?.toLowerCase();

	return isSupportedLanguage(firstPathPart) ? firstPathPart : null;
}

function getLanguageFromStorage(): SupportedLanguage | null {
	if (!browser) return null;

	const storedLanguage = localStorage.getItem('prefLanguage')?.toLowerCase();

	return isSupportedLanguage(storedLanguage) ? storedLanguage : null;
}

function getLanguageFromBrowser(): SupportedLanguage {
	if (!browser) return defaultLanguage;

	const browserLanguages = navigator.languages.map((lang) => lang.toLowerCase());

	const exactMatch = browserLanguages.find(isSupportedLanguage);

	if (exactMatch) {
		return exactMatch;
	}

	const browserBaseLanguages = browserLanguages.map((lang) => lang.split('-')[0]);

	const baseMatch = supportedLanguages.find((supported) => {
		return browserBaseLanguages.includes(supported.split('-')[0]);
	});

	return baseMatch ?? defaultLanguage;
}

function buildLanguageUrl(lang: SupportedLanguage) {
	if (!browser) return `${base}/${lang}`;

	const cleanPath = window.location.pathname.replace(base, '');

	const pathParts = cleanPath
		.split('/')
		.filter(Boolean);

	if (pathParts.length > 0 && isSupportedLanguage(pathParts[0])) {
		pathParts[0] = lang;
	} else {
		pathParts.unshift(lang);
	}

	return `${base}/${pathParts.join('/')}${window.location.search}${window.location.hash}`;
}

export function getPrefLanguage() {
	return prefLanguage;
}

export function setLanguage(lang: SupportedLanguage) {
	prefLanguage = lang;
	currentLanguage.set(lang);

	if (browser) {
		localStorage.setItem('prefLanguage', lang);
	}

	return prefLanguage;
}

export function setInitialLanguage() {
	if (!browser) {
		return prefLanguage;
	}

	const urlLanguage = getLanguageFromUrl();

	if (urlLanguage) {
		return setLanguage(urlLanguage);
	}

	const storedLanguage = getLanguageFromStorage();

	if (storedLanguage) {
		setLanguage(storedLanguage);
		goto(buildLanguageUrl(storedLanguage), { replaceState: true });
		return storedLanguage;
	}

	const browserLanguage = getLanguageFromBrowser();

	setLanguage(browserLanguage);
	goto(buildLanguageUrl(browserLanguage), { replaceState: true });

	return browserLanguage;
}

export function updateLanguage(lang: string) {
	if (!isSupportedLanguage(lang)) {
		return prefLanguage;
	}

	setLanguage(lang);

	if (browser) {
		goto(buildLanguageUrl(lang));
	}

	return lang;
}