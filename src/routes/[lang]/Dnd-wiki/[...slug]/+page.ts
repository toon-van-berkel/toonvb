import { error } from '@sveltejs/kit';
import {
	findWikiTreeItemByHref,
	getWikiPageIntro,
	getWikiPageTitle,
	wikiPageContent
} from '$lib/typescript/content/wiki/wikiTree';
import {
	defaultLanguage,
	isSupportedLanguage
} from '$lib/typescript/pref/language';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const activeLanguage = isSupportedLanguage(params.lang) ? params.lang : defaultLanguage;
	const item = findWikiTreeItemByHref(params.slug);

	if (!item) {
		error(404, wikiPageContent[activeLanguage].missingPage);
	}

	return {
		title: getWikiPageTitle(item, activeLanguage),
		intro: getWikiPageIntro(item, activeLanguage),
		details: wikiPageContent[activeLanguage].details
	};
};
