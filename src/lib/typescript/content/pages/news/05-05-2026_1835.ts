import type { SupportedLanguage } from '$lib/typescript/pref/language';

type NewsArticlePage = {
	pageTitle: string;
	description: string;

	heading1: string;
	text1: string;

	heading2: string;
	text2: string;

	heading3: string;
	text3: string;

	heading4: string;
	text4: string;

	linkText: string;
	linkUrl: string;
};

export const content: Record<SupportedLanguage, NewsArticlePage> = {
	'en-gb': {
		pageTitle: 'Remembrance Day 2026',
		description:
			'A personal reflection by Toon van Berkel about attending Remembrance Day 2026 with Scouting Hartelgroep.',

		heading1: 'Why Remembrance Day matters',
		text1:
			'I believe Remembrance Day is very important to attend. Taking a moment to remember is the least we can do for the soldiers and people who fought for our freedom. They deserve respect, gratitude and recognition for what they have done.',

		heading2: 'Standing still and looking back',
		text2:
			'This year I noticed that fewer people were present, which I thought was a shame. It gave me the feeling that not everyone fully realizes how important it is to reflect on the past. When you look back at history, you can learn from the mistakes that were made and hopefully avoid repeating them in the future.',

		heading3: 'Together with Scouting Hartelgroep',
		text3:
			'This year I attended the commemoration again with Scouting Hartelgroep. Being there together made the moment feel even more meaningful, because remembrance is something you do not only for yourself, but also as a community.',

		heading4: 'A valuable moment',
		text4:
			'I also appreciated that the mayor came by to shake everyone’s hand. It was a small gesture, but one that felt respectful and meaningful.',

		linkText: 'Visit the website of Scouting Hartelgroep',
		linkUrl: 'https://www.hartelgroep.nl/'
	},

	'nl-nl': {
		pageTitle: 'Dodenherdenking 2026',
		description:
			'Een persoonlijke terugblik van Toon van Berkel op de Dodenherdenking 2026 samen met Scouting Hartelgroep.',

		heading1: 'Waarom Dodenherdenking belangrijk is',
		text1:
			'Ik vind het heel belangrijk om bij de Dodenherdenking aanwezig te zijn. Even stilstaan bij wat er is gebeurd, is naar mijn mening het minste wat we kunnen doen voor de soldaten en mensen die voor onze vrijheid hebben gevochten. Zij verdienen respect, waardering en erkenning voor wat zij hebben gedaan.',

		heading2: 'Stilstaan bij het verleden',
		text2:
			'Dit jaar merkte ik dat er minder mensen aanwezig waren dan ik had verwacht. Dat vond ik jammer. Het gaf mij het gevoel dat niet iedereen goed beseft hoe belangrijk het is om stil te staan bij het verleden. Door naar het verleden te kijken, kun je leren van fouten die eerder zijn gemaakt en hopelijk voorkomen dat dezelfde problemen opnieuw ontstaan.',

		heading3: 'Samen met Scouting Hartelgroep',
		text3:
			'Ik was dit jaar opnieuw aanwezig met Scouting Hartelgroep. Samen bij zo’n moment aanwezig zijn, maakt de herdenking extra waardevol. Herdenken doe je niet alleen voor jezelf, maar ook samen als gemeenschap.',

		heading4: 'Een mooi gebaar',
		text4:
			'Ik vond het ook mooi dat de burgemeester langskwam om iedereen een hand te geven. Het was een klein gebaar, maar ik kon dat zeker waarderen. Het voelde respectvol en passend bij het moment.',

		linkText: 'Bekijk de website van Scouting Hartelgroep',
		linkUrl: 'https://www.hartelgroep.nl/'
	}
};