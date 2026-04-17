import type { SupportedLanguage } from '$lib/typescript/pref/language';

type Error = {
    title:          string;
    description1:   string;
    description2:   string;
    link1:          string;
    link2:          string;
};

export const content: Record<SupportedLanguage, Error> = {
    'en-gb': {
        'title':            'Page not found',
        'description1':     'The page ',
        'description2':     ' was not found. Want to report a bug email to: ',
        'link1':            'Homepage',
        'link2':            'Report'
    },
    'nl-nl': {
        'title':            'Pagina niet gevonden',
        'description1':     'De pagina ',
        'description2':     ' was niet gevonden. Wil je een probleem melden mail naar: ',
        'link1':            'Home pagina',
        'link2':            'Melden'
    }
}