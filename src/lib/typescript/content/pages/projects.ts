import type { SupportedLanguage } from '$lib/typescript/pref/language';

type ProjectsPage = {
	pageTitle: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;
};

export const content: Record<SupportedLanguage, ProjectsPage> = {
	'en-gb': {
		pageTitle: 'Projects',

		heading1: 'Creative and technical projects',
		text1:
			'This page will soon contain a selection of projects created by Toon van Berkel. The projects will show a combination of web development, design, technical experiments and personal concepts.',

		heading2: 'More coming soon',
		text2:
			'The project page is currently being prepared. More detailed project information, visuals and links will be added later.'
	},

	'nl-nl': {
		pageTitle: 'Projecten',

		heading1: 'Creatieve en technische projecten',
		text1:
			'Deze pagina bevat binnenkort een selectie van projecten die door Toon van Berkel zijn gemaakt. De projecten laten een combinatie zien van webdevelopment, design, technische experimenten en persoonlijke concepten.',

		heading2: 'Binnenkort meer',
		text2:
			'De projectenpagina wordt op dit moment voorbereid. Later worden hier meer projectinformatie, beelden en links aan toegevoegd.'
	}
};