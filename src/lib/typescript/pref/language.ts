import { goto } from "$app/navigation";

let prefLanguage:string = '';
const supportedLanguages = [
	'en-gb'
];

export function getPrefLanguage() {
    console.log(navigator.language.toLocaleLowerCase());
}

export function updateLanguage(lang:string) {
    return lang;
}

export function setInitialLanguage() {
	const browserLanguages = navigator.languages.map((lang) => lang.toLowerCase());

	let matchedLanguage = browserLanguages.find((lang) => supportedLanguages.includes(lang)) ?? null;

	if (!matchedLanguage) {
		const browserBaseLanguages = browserLanguages.map((lang) => lang.split('-')[0]);

		matchedLanguage = supportedLanguages.find((supported) => browserBaseLanguages.includes(supported.split('-')[0])) ?? 'en-gb';
	}

	prefLanguage = matchedLanguage;
	goto(`/${matchedLanguage}`);

	return matchedLanguage;
}