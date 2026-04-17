import type { SupportedLanguage } from '$lib/typescript/pref/language';

type TopBar = {
    label1: string;
};

export const content: Record<SupportedLanguage, TopBar> = {
    'en-gb': {
        label1: 'Language'
    },
    'nl-nl': {
        label1: 'Talen'
    }
};