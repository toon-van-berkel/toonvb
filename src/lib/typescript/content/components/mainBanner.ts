import type { SupportedLanguage } from '$lib/typescript/pref/language';

type MainBanner = {
	title: string;
	subtitle: string;
	description: string;
};

export const content: Record<SupportedLanguage, MainBanner> = {
	'en-gb': {
		title: 'Toon van Berkel - Creative Software Developer',
		subtitle: 'Web development, front-end design, automation and creative digital tools',
		description:
			'This portfolio collects projects, experiments and ideas that Toon van Berkel has built over time. It covers front-end design, animations, complete web apps and practical tools with a focus on creativity, clean execution and useful results.'
	},
	'nl-nl': {
		title: 'Toon van Berkel - Creative Software Developer',
		subtitle: 'Webdevelopment, front-end design, automation en creatieve digitale tools',
		description:
			'Dit portfolio verzamelt projecten, experimenten en ideeën die Toon van Berkel door de tijd heen heeft gebouwd. Het gaat over front-end design, animaties, complete webapplicaties en praktische tools met focus op creativiteit, nette uitvoering en nuttige resultaten.'
	}
};
