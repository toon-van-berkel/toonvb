/**
 * Stores the current theme inside the running application.
 *
 * This is internal memory only.
 * It does not survive a page refresh unless the theme is also saved
 * somewhere persistent, like localStorage.
 */
let theme: string = "";

/**
 * Gets the current theme from internal storage.
 *
 * Returns:
 * - "dark" if the internal theme is dark
 * - "light" if the internal theme is light
 * - "" if no internal theme has been set yet
 */
function getThemeFromInternalStorage() {
    return theme;
}

/**
 * Sets the current theme in internal storage.
 *
 * This only updates the theme value while the app is running.
 * It does not automatically save the theme to localStorage.
 */
function setThemeFromInternalStorage(receivedTheme: string) {
    theme = receivedTheme;

    return theme;
}

/**
 * Handles temporary internal storage for the app.
 *
 * Usage:
 * internalStorage.theme.get();
 * internalStorage.theme.set("dark");
 */
export const internalStorage = {
    theme: {
        get: getThemeFromInternalStorage,
        set: setThemeFromInternalStorage
    }
};