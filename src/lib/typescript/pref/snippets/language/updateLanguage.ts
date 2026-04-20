import { browser } from "$app/environment";
import { goto } from "$app/navigation";

import { isSupportedLanguage } from "./isSupportedLanguage";
import { setLanguage } from "./setLanguage";
import { prefLanguage } from "./_var";

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