import type { SupportedLanguage } from '$lib/typescript/pref/language';

type Gallery = {
    title: string;
};

export const content: Record<SupportedLanguage, Gallery> = {
    'en-gb': {
        'title': 'Gallery'
    },
    'nl-nl': {
        'title': 'Galerij'
    }
}