/**
 * Gets the saved theme from localStorage.
 *
 * Returns:
 * - "dark" if the dark theme was saved
 * - "light" if the light theme was saved
 * - null if no theme was found
 */
function localStorageGetTheme() {
    return localStorage.getItem('theme');
}

/**
 * Saves the selected theme to localStorage.
 *
 * This makes sure the chosen theme stays saved,
 * even after refreshing or reopening the website.
 */
function localStorageSetTheme(theme: string) {
    localStorage.setItem('theme', theme);
}

/**
 * Handles all localStorage actions related to the theme.
 *
 * Usage:
 * localStorageHandler.get();
 * localStorageHandler.set('dark');
 */
export const localStorageHandler = {
    get: localStorageGetTheme,
    set: localStorageSetTheme
};