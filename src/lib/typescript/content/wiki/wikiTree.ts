import questionIcon from '$lib/assets/web/favicon/others/question-circle.svg';
import bookIcon from '$lib/assets/web/favicon/others/book.svg';
import worldIcon from '$lib/assets/web/favicon/others/world.svg';
import groupIcon from '$lib/assets/web/favicon/others/group.svg';
import tableIcon from '$lib/assets/web/favicon/others/table.svg';
import commonIcon from '$lib/assets/web/favicon/others/common.svg';
import handshakeIcon from '$lib/assets/web/favicon/others/hand-shake.svg';
import angryIcon from '$lib/assets/web/favicon/others/angry.svg';
import crossedswordsIcon from '$lib/assets/web/favicon/others/crossed-swords.svg';
import fistIcon from '$lib/assets/web/favicon/others/fist.svg';
import strongIcon from '$lib/assets/web/favicon/others/strong.svg';
import explosionRaysIcon from '$lib/assets/web/favicon/others/explosion-rays.svg';
import speedIcon from '$lib/assets/web/favicon/others/speed.svg';
import pvpIcon from '$lib/assets/web/favicon/others/pvp.svg';
import crowdIcon from '$lib/assets/web/favicon/others/crowd.svg';
import dragonIcon from '$lib/assets/web/favicon/others/dragon.svg';
import colosseumIcon from '$lib/assets/web/favicon/others/colosseum.svg';
import skullIcon from '$lib/assets/web/favicon/others/skull.svg';
import instantIcon from '$lib/assets/web/favicon/others/instant.svg';
import graveIcon from '$lib/assets/web/favicon/others/grave.svg';
import eightteenIcon from '$lib/assets/web/favicon/others/18.svg';
import replaceIcon from '$lib/assets/web/favicon/others/replace.svg';
import type { SupportedLanguage } from '$lib/typescript/pref/language';

export interface WikiTreeItem {
	title: string;
	href?: string;
	icon?: string;
	children?: WikiTreeItem[];
}

export const wikiTree: WikiTreeItem[] = [
	{ icon: questionIcon, title: 'How to play', href: 'how-to-play' },
	{
		icon: bookIcon,
		title: 'Rules',
		href: 'rules',
		children: [
			{
				icon: commonIcon,
				title: 'Common',
				href: 'rules/common',
				children: [
					{ icon: tableIcon, title: 'Table rules', href: 'rules/common/table-rules' },
					{ icon: handshakeIcon, title: 'General agreements', href: 'rules/common/general-agreements' },
					{ icon: angryIcon, title: 'Metagaming', href: 'rules/common/metagaming' },
					{ icon: crossedswordsIcon, title: 'PvP rules', href: 'rules/common/pvp' }
				]
			},
			{
				icon: fistIcon,
				title: 'Combat',
				href: 'rules/combat',
				children: [
					{ icon: strongIcon, title: 'Basic combat', href: 'rules/combat/basic' },
					{ icon: speedIcon, title: 'Initiative', href: 'rules/combat/initiative' },
					{ icon: explosionRaysIcon, title: 'Critical hits', href: 'rules/combat/critical-hits' },
					{ icon: pvpIcon, title: 'Boss phases', href: 'rules/combat/boss-phases' },
					{ icon: crowdIcon, title: 'Horde combat', href: 'rules/combat/horde-combat' },
					{ icon: dragonIcon, title: 'Dragon combat', href: 'rules/combat/dragon-combat' },
					{ icon: colosseumIcon, title: 'Arena combat', href: 'rules/combat/arena-combat' }
				]
			},
			{
				icon: skullIcon,
				title: 'Death',
				href: 'rules/death',
				children: [
					{ title: 'Death saves', href: 'rules/death/death-saves' },
					{ icon: instantIcon, title: 'Instant death', href: 'rules/death/instant-death' },
					{ icon: graveIcon, title: 'Revival', href: 'rules/death/revival' },
					{ title: 'Permanent injuries', href: 'rules/death/permanent-injuries' },
					{ icon: eightteenIcon, title: 'Brutal finishers', href: 'rules/death/brutal-finishers' },
					{ icon: replaceIcon, title: 'Character replacement', href: 'rules/death/character-replacement' }
				]
			},
			{
				title: 'Physics',
				href: 'rules/physics',
				children: [
					{ title: 'Falling', href: 'rules/physics/falling' },
					{ title: 'Drowning', href: 'rules/physics/drowning' },
					{ title: 'Fire', href: 'rules/physics/fire' },
					{ title: 'Explosions', href: 'rules/physics/explosions' },
					{ title: 'Collapsing buildings', href: 'rules/physics/collapsing-buildings' },
					{ title: 'Throwing creatures', href: 'rules/physics/throwing-creatures' }
				]
			},
			{
				title: 'Firearms',
				href: 'rules/firearms',
				children: [
					{ title: 'Pistols', href: 'rules/firearms/pistols' },
					{ title: 'Rifles', href: 'rules/firearms/rifles' },
					{ title: 'Snipers', href: 'rules/firearms/snipers' },
					{ title: 'Full auto', href: 'rules/firearms/full-auto' },
					{ title: 'Reloading', href: 'rules/firearms/reloading' },
					{ title: 'Misfires', href: 'rules/firearms/misfires' },
					{ title: 'Cyber weapons', href: 'rules/firearms/cyber-weapons' }
				]
			}
		]
	},
	{
		icon: worldIcon,
		title: 'World',
		children: [
			{
				title: 'Continents',
				children: [
					{
						title: 'Aetherbound',
						href: 'world/continents/aetherbound',
						children: [
							{
								title: 'Regions',
								children: [
									{
										title: 'Countries',
										children: [
											{
												title: 'Kingdoms',
												children: [
													{
														title: 'Cities',
														children: [{ title: 'Karpothea', href: 'world/cities/karpothea' }]
													},
													{ title: 'Kingdom laws', href: 'world/kingdoms/laws' }
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				title: 'Cities',
				children: [
					{
						title: 'Karpothea',
						href: 'world/cities/karpothea',
						children: [
							{ title: 'Overview', href: 'world/cities/karpothea/overview' },
							{ title: 'Palace', href: 'world/cities/karpothea/palace' },
							{ title: 'Great Library', href: 'world/cities/karpothea/great-library' },
							{ title: "Grand Heroes' Guild", href: 'world/cities/karpothea/heroes-guild' },
							{ title: 'Temple of Demeter', href: 'world/cities/karpothea/temple-of-demeter' },
							{ title: 'Docks', href: 'world/cities/karpothea/docks' },
							{ title: 'Market District', href: 'world/cities/karpothea/market' },
							{ title: 'Farmlands', href: 'world/cities/karpothea/farmlands' },
							{ title: 'Sewers', href: 'world/cities/karpothea/sewers' },
							{ title: 'Aqueducts', href: 'world/cities/karpothea/aqueducts' },
							{ title: 'Laws', href: 'world/cities/karpothea/laws' },
							{ title: 'Crime', href: 'world/cities/karpothea/crime' }
						]
					}
				]
			}
		]
	},
	{
		icon: groupIcon,
		title: 'Campaigns',
		children: [
			{
				title: 'Lucky Clover',
				children: [
					{ title: 'Overview', href: 'campaigns/lucky-clover' },
					{ title: 'Party members', href: 'campaigns/lucky-clover/party' },
					{ title: 'Current quest', href: 'campaigns/lucky-clover/current-quest' },
					{ title: 'Known NPCs', href: 'campaigns/lucky-clover/npcs' },
					{ title: 'Session recaps', href: 'campaigns/lucky-clover/sessions' }
				]
			},
			{
				title: 'The Happy Dungeon',
				children: [
					{ title: 'Overview', href: 'campaigns/happy-dungeon' },
					{ title: 'Illusion curse', href: 'campaigns/happy-dungeon/illusion-curse' },
					{ title: 'Great Drop', href: 'campaigns/happy-dungeon/great-drop' },
					{ title: 'Baby Dragon Fruit Dragon', href: 'campaigns/happy-dungeon/dragon-fruit-dragon' },
					{ title: 'Final boss', href: 'campaigns/happy-dungeon/final-boss' }
				]
			}
		]
	}
];

export function findWikiTreeItemByHref(href: string, items = wikiTree): WikiTreeItem | undefined {
	for (const item of items) {
		if (item.href === href) {
			return item;
		}

		const childMatch = item.children ? findWikiTreeItemByHref(href, item.children) : undefined;

		if (childMatch) {
			return childMatch;
		}
	}
}

const wikiTitleTranslations: Partial<Record<string, string>> = {
	'how-to-play': 'Hoe te spelen',
	rules: 'Regels',
	'rules/common': 'Algemeen',
	'rules/common/table-rules': 'Tafelregels',
	'rules/common/general-agreements': 'Algemene afspraken',
	'rules/common/metagaming': 'Metagaming',
	'rules/common/pvp': 'PvP-regels',
	'rules/combat': 'Gevechten',
	'rules/combat/basic': 'Basisgevechten',
	'rules/combat/initiative': 'Initiatief',
	'rules/combat/critical-hits': 'Critical hits',
	'rules/combat/boss-phases': 'Boss fases',
	'rules/combat/horde-combat': 'Hordegevechten',
	'rules/combat/dragon-combat': 'Drakengevechten',
	'rules/combat/arena-combat': 'Arenagevechten',
	'rules/death': 'Dood',
	'rules/death/death-saves': 'Death saves',
	'rules/death/instant-death': 'Directe dood',
	'rules/death/revival': 'Terugkeer tot leven',
	'rules/death/permanent-injuries': 'Blijvende verwondingen',
	'rules/death/brutal-finishers': 'Brutale finishers',
	'rules/death/character-replacement': 'Character vervangen',
	'rules/physics': 'Natuurkunde',
	'rules/physics/falling': 'Vallen',
	'rules/physics/drowning': 'Verdrinken',
	'rules/physics/fire': 'Vuur',
	'rules/physics/explosions': 'Explosies',
	'rules/physics/collapsing-buildings': 'Instortende gebouwen',
	'rules/physics/throwing-creatures': 'Creatures gooien',
	'rules/firearms': 'Vuurwapens',
	'rules/firearms/pistols': 'Pistolen',
	'rules/firearms/rifles': 'Geweren',
	'rules/firearms/snipers': 'Snipers',
	'rules/firearms/full-auto': 'Volautomatisch',
	'rules/firearms/reloading': 'Herladen',
	'rules/firearms/misfires': 'Misfires',
	'rules/firearms/cyber-weapons': 'Cyberwapens',
	'world/continents/aetherbound': 'Aetherbound',
	'world/cities/karpothea': 'Karpothea',
	'world/kingdoms/laws': 'Koninkrijkswetten',
	'world/cities/karpothea/overview': 'Overzicht',
	'world/cities/karpothea/palace': 'Paleis',
	'world/cities/karpothea/great-library': 'Grote Bibliotheek',
	'world/cities/karpothea/heroes-guild': "Grand Heroes' Guild",
	'world/cities/karpothea/temple-of-demeter': 'Tempel van Demeter',
	'world/cities/karpothea/docks': 'Haven',
	'world/cities/karpothea/market': 'Marktdistrict',
	'world/cities/karpothea/farmlands': 'Boerderijen',
	'world/cities/karpothea/sewers': 'Riolen',
	'world/cities/karpothea/aqueducts': 'Aquaducten',
	'world/cities/karpothea/laws': 'Wetten',
	'world/cities/karpothea/crime': 'Criminaliteit',
	'campaigns/lucky-clover': 'Lucky Clover',
	'campaigns/lucky-clover/party': 'Partyleden',
	'campaigns/lucky-clover/current-quest': 'Huidige quest',
	'campaigns/lucky-clover/npcs': "Bekende NPC's",
	'campaigns/lucky-clover/sessions': 'Sessie-samenvattingen',
	'campaigns/happy-dungeon': 'The Happy Dungeon',
	'campaigns/happy-dungeon/illusion-curse': 'Illusievloek',
	'campaigns/happy-dungeon/great-drop': 'Great Drop',
	'campaigns/happy-dungeon/dragon-fruit-dragon': 'Baby Dragon Fruit Dragon',
	'campaigns/happy-dungeon/final-boss': 'Eindbaas'
};

export const wikiPageContent: Record<
	SupportedLanguage,
	{
		fallbackTitle: string;
		missingPage: string;
		intro: (title: string) => string;
		details: string;
	}
> = {
	'en-gb': {
		fallbackTitle: 'D&D Wiki',
		missingPage: 'Wiki page not found',
		intro: (title) => `This page will eventually contain the notes, details, and references for ${title}.`,
		details:
			'Use this page later for the final wiki content, such as rules, worldbuilding notes, session context, NPC details, locations, and campaign references.'
	},
	'nl-nl': {
		fallbackTitle: 'D&D Wiki',
		missingPage: 'Wiki-pagina niet gevonden',
		intro: (title) =>
			`Deze pagina bevat later de notities, details en referenties voor ${title}.`,
		details:
			'Gebruik deze pagina later voor de uiteindelijke wiki-content, zoals regels, wereldbouw, sessiecontext, NPC-details, locaties en campagne-informatie.'
	}
};

export function getWikiPageTitle(item: WikiTreeItem, language: SupportedLanguage) {
	if (language === 'nl-nl' && item.href) {
		return wikiTitleTranslations[item.href] ?? item.title;
	}

	return item.title;
}

export function getWikiPageIntro(item: WikiTreeItem, language: SupportedLanguage) {
	const title = getWikiPageTitle(item, language);
	return wikiPageContent[language].intro(title);
}
