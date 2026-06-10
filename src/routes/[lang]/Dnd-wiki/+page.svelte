<script lang="ts">
	import { page } from '$app/state';
	import { currentLanguage, isSupportedLanguage } from '$lib/typescript/pref/language';

	const activeLanguage = $derived(
		isSupportedLanguage(page.params.lang) ? page.params.lang : $currentLanguage
	);

	const content = $derived(
		activeLanguage === 'nl-nl'
			? {
					title: 'D&D Wiki',
					intro:
						'Hier komt de centrale plek voor alle D&D-regels, wereldinformatie, campagnes en sessienotities.',
					usage:
						'Bovenaan staat de normale website-navigatie. In deze wiki-route staat daarnaast de wiki-navigatie waarmee je snel door regels, wereldbouw en campagnes kunt bladeren.'
				}
			: {
					title: 'D&D Wiki',
					intro:
						'This will be the central place for all D&D rules, world information, campaigns, and session notes.',
					usage:
						'The normal website navigation stays at the top. Inside this wiki route, the wiki navigation helps you move quickly through rules, worldbuilding, and campaigns.'
				}
	);
</script>

<section>
	<h1>{content.title}</h1>
	<p>{content.intro}</p>
	<p>{content.usage}</p>
</section>
