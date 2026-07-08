import { redirectUrls } from '$lib/data/redirectUrls';
import { getFirstPathPart, isValidLanguage, languageHandler } from './language';

function addLanguage(pathname: string, language: string) {
	return `/${language}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}

export function redirectHandler(pathname: string) {
	const firstPathPart = getFirstPathPart(pathname);

	if (isValidLanguage(firstPathPart)) {
		return false;
	}

	const language = languageHandler();
	const oldRedirectTarget = redirectUrls[pathname];

	window.location.replace(
		oldRedirectTarget ? addLanguage(oldRedirectTarget, language) : `/${language}`
	);

	return true;
}