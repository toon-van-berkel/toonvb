export function getLanguageFromBrowser(): SupportedLanguage {
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