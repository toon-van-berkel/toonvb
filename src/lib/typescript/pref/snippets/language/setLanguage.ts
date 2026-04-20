export function setLanguage(lang: SupportedLanguage) {
    prefLanguage = lang;
    currentLanguage.set(lang);

    if (browser) {
        localStorage.setItem('prefLanguage', lang);
    }

    return prefLanguage;
}