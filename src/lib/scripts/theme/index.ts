/**
 * File: index.ts
 * Location: C:\Users\toonv\Development\toonvb\src\lib\scripts\theme\index.ts
 *
 * Description:
 * Handles the website theme state.
 *
 * This function checks if a theme is saved in localStorage first.
 * If a localStorage theme exists, it becomes the leading source and is copied
 * into internal storage.
 *
 * If no localStorage theme exists, it checks internal storage.
 * If an internal theme exists, it is copied back into localStorage.
 *
 * If no theme exists anywhere, the function falls back to the default theme.
 *
 * Development messages are sent to the custom dev console through `dev.runIfDev.message`.
 */

import * as dev from '../dev';
import { localStorageHandler } from './handlers/localStorage';
import { internalStorage } from '../store';

export async function handleTheme() {
    // Start the theme handler.
    dev.runIfDev.message('running', 'Starting theme handler.');

    try {
        // First, check localStorage because this should normally be the saved user preference.
        dev.runIfDev.message('running', 'Searching for saved theme in local storage.');
        const localTheme = localStorageHandler.get();

        // If a theme was found in localStorage, use that as the main theme source.
        if (localTheme) {
            dev.runIfDev.message('success', `Theme found in local storage: ${localTheme}.`);
            dev.runIfDev.message('running', 'Checking local storage theme value.');

            switch (localTheme) {
                case 'dark':
                    // A valid dark theme was found in localStorage.
                    dev.runIfDev.message('success', 'Dark theme found in local storage.');
                    dev.runIfDev.message('running', 'Setting dark theme into internal storage.');

                    internalStorage.theme.set('dark');

                    dev.runIfDev.message('success', 'Internal storage set to dark theme.');
                    dev.runIfDev.message('info', 'Local storage was leading. No more actions needed.');
                    dev.runIfDev.message('running', 'Closing theme handler.');
                    dev.runIfDev.message('success', 'Theme handler closed.');
                    break;

                case 'light':
                    // A valid light theme was found in localStorage.
                    dev.runIfDev.message('success', 'Light theme found in local storage.');
                    dev.runIfDev.message('running', 'Setting light theme into internal storage.');

                    internalStorage.theme.set('light');

                    dev.runIfDev.message('success', 'Internal storage set to light theme.');
                    dev.runIfDev.message('info', 'Local storage was leading. No more actions needed.');
                    dev.runIfDev.message('running', 'Closing theme handler.');
                    dev.runIfDev.message('success', 'Theme handler closed.');
                    break;

                default:
                    // A theme exists, but it is not a valid known theme.
                    dev.runIfDev.message('failed', `Unknown theme found in local storage: ${localTheme}.`);
                    dev.runIfDev.message('info', 'Falling back to default dark theme.');

                    dev.runIfDev.message('running', 'Setting default theme in local storage.');
                    localStorageHandler.set('dark');
                    dev.runIfDev.message('success', 'Local storage set to dark theme.');

                    dev.runIfDev.message('running', 'Setting default theme in internal storage.');
                    internalStorage.theme.set('dark');
                    dev.runIfDev.message('success', 'Internal storage set to dark theme.');

                    dev.runIfDev.message('running', 'Closing theme handler.');
                    dev.runIfDev.message('success', 'Theme handler closed.');
                    break;
            }

            // Stop here because localStorage already handled the theme.
            return;
        }

        // No theme was found in localStorage, so check internal storage.
        dev.runIfDev.message('failed', 'No theme found in local storage.');
        dev.runIfDev.message('running', 'Searching for theme in internal storage.');

        const internalTheme = internalStorage.theme.get();

        // If a theme exists internally, restore it back into localStorage.
        if (internalTheme) {
            dev.runIfDev.message('success', `Theme found in internal storage: ${internalTheme}.`);
            dev.runIfDev.message('running', 'Checking internal storage theme value.');

            switch (internalTheme) {
                case 'dark':
                    // A valid dark theme was found in internal storage.
                    dev.runIfDev.message('success', 'Dark theme found in internal storage.');
                    dev.runIfDev.message('running', 'Setting dark theme into local storage.');

                    localStorageHandler.set('dark');

                    dev.runIfDev.message('success', 'Local storage set to dark theme.');
                    dev.runIfDev.message('info', 'Internal storage was leading. No more actions needed.');
                    dev.runIfDev.message('running', 'Closing theme handler.');
                    dev.runIfDev.message('success', 'Theme handler closed.');
                    break;

                case 'light':
                    // A valid light theme was found in internal storage.
                    dev.runIfDev.message('success', 'Light theme found in internal storage.');
                    dev.runIfDev.message('running', 'Setting light theme into local storage.');

                    localStorageHandler.set('light');

                    dev.runIfDev.message('success', 'Local storage set to light theme.');
                    dev.runIfDev.message('info', 'Internal storage was leading. No more actions needed.');
                    dev.runIfDev.message('running', 'Closing theme handler.');
                    dev.runIfDev.message('success', 'Theme handler closed.');
                    break;

                default:
                    // A theme exists internally, but it is not valid.
                    dev.runIfDev.message('failed', `Unknown theme found in internal storage: ${internalTheme}.`);
                    dev.runIfDev.message('info', 'Falling back to default dark theme.');

                    dev.runIfDev.message('running', 'Setting default theme in local storage.');
                    localStorageHandler.set('dark');
                    dev.runIfDev.message('success', 'Local storage set to dark theme.');

                    dev.runIfDev.message('running', 'Setting default theme in internal storage.');
                    internalStorage.theme.set('dark');
                    dev.runIfDev.message('success', 'Internal storage set to dark theme.');

                    dev.runIfDev.message('running', 'Closing theme handler.');
                    dev.runIfDev.message('success', 'Theme handler closed.');
                    break;
            }

            // Stop here because internal storage already handled the theme.
            return;
        }

        // No theme was found anywhere, so create a default theme.
        dev.runIfDev.message('failed', 'No theme found in local storage or internal storage.');
        dev.runIfDev.message('info', 'Setting a new theme to default.');

        dev.runIfDev.message('running', 'Setting default dark theme in local storage.');
        localStorageHandler.set('dark');
        dev.runIfDev.message('success', 'Local storage set to dark theme.');

        dev.runIfDev.message('running', 'Setting default dark theme in internal storage.');
        internalStorage.theme.set('dark');
        dev.runIfDev.message('success', 'Internal storage set to dark theme.');

        dev.runIfDev.message('running', 'Closing theme handler.');
        dev.runIfDev.message('success', 'Theme handler closed.');
    } catch (error) {
        // Catch unexpected crashes, log them to the dev console, and rethrow the error.
        dev.runIfDev.message('failed', 'Theme handler crashed.');

        if (error instanceof Error) {
            dev.runIfDev.message('failed', error.message);
        }

        throw error;
    }
}