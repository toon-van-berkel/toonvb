import { writable } from 'svelte/store';

export const supportedLanguages = ['en-gb', 'nl-nl'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
export const defaultLanguage: SupportedLanguage = 'en-gb';
export const languageLabels: Record<SupportedLanguage, string> = {
	'en-gb': 	'English',
	'nl-nl': 	'Nederlands'
};
export const currentLanguage = writable<SupportedLanguage>(defaultLanguage)
export let prefLanguage: SupportedLanguage = defaultLanguage;