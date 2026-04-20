export function isSupportedLanguage(lang: string | null | undefined): lang is SupportedLanguage {
	return !!lang && supportedLanguages.includes(lang as SupportedLanguage);
}