import { error } from '@sveltejs/kit';
import { availableLanguages } from '$lib/data/availableLanguage';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const language = params.lang.toLowerCase();

	const languageData = availableLanguages.find(({ short }) => short === language);

	if (!languageData) {
		error(404, 'Language not found');
	}

	return {
		language: languageData.short,
		languageName: languageData.long
	};
};