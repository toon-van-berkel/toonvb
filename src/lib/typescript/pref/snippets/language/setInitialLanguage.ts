import { browser } from "$app/environment";
import { goto } from "$app/navigation";

import { getLanguageFromBrowser } from "./getLanguageFromBrowser";
import { setLanguage } from "./setLanguage";
import { prefLanguage } from "./_var";
import { getLanguageFromStorage } from "./";

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