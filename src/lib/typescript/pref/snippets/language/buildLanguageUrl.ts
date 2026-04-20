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