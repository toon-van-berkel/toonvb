function getLanguageFromUrl(): SupportedLanguage | null {
    if (!browser) return null;

    const firstPathPart = window.location.pathname
        .replace(base, '')
        .split('/')
        .filter(Boolean)[0]
        ?.toLowerCase();

    return isSupportedLanguage(firstPathPart) ? firstPathPart : null;
}