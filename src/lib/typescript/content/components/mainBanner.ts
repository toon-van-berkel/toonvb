import type { SupportedLanguage } from '$lib/typescript/pref/language';

type MainBanner = {
    title:          string;
    subtitle:       string;
    description:    string;
};

export const content: Record<SupportedLanguage, MainBanner> = {
    'en-gb': {
        title: 'Toon van Berkel',
        subtitle: 'Creative Software Developer',
        description: `This portfolio is a collection of projects, experiments, and ideas 
            that Toon van Berkel has built over the years. From front-end design and 
            animations to complete web apps—everything with a focus on creativity, clean 
            execution, and the joy of building.`
    },
    'nl-nl': {
        title: 'Toon van Berkel',
        subtitle: 'Creative Software Developer',
        description: `Dit portfolio is een verzameling van projecten, experimenten en 
            ideeën die Toon van Berkel door de jaren heen heeft gebouwd. Van front-end 
            design en animaties tot complete webapplicaties — alles met een focus op 
            creativiteit, nette uitvoering en het plezier van creëren.`
    }
};